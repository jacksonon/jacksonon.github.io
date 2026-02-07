(() => {
  const THEME_STORAGE_KEY = "rightai-theme";

  const CANNED_COMMAND_RESPONSES = [
    {
      keywords: ["quick input", "quick-input", "quick"],
      response: "Quick Input enabled. Press Ctrl + R to open the launcher instantly.",
    },
    {
      keywords: ["multi model", "multi-model", "multimodel", "models"],
      response: "Multi-model routing is on. RightAI can switch models per task automatically.",
    },
    {
      keywords: ["webpage", "page", "browser"],
      response: "Webpage context attached. Ask a follow-up and RightAI will use the current page.",
    },
    {
      keywords: ["dark mode", "dark", "theme"],
      response: "Dark mode preference saved. Your theme will stay consistent next visit.",
    },
    {
      keywords: ["default"],
      response: "Command queued. RightAI is ready for the next instruction.",
    },
  ];

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_error) {
      // Ignore storage failures (private mode, sandbox restrictions).
    }
  }

  function isCoarsePointer() {
    if (typeof window.matchMedia !== "function") {
      return false;
    }

    return (
      window.matchMedia("(pointer: coarse)").matches
      || window.matchMedia("(hover: none)").matches
    );
  }

  function prefersReducedMotion() {
    if (typeof window.matchMedia !== "function") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function setupThemeToggle() {
    const themeToggle = document.querySelector("#theme-toggle");
    const themeLabel = themeToggle?.querySelector("[data-theme-label]") || null;
    const body = document.body;

    if (!body) {
      return;
    }

    const storedTheme = readStorage(THEME_STORAGE_KEY);
    const hasValidStoredTheme = storedTheme === "light" || storedTheme === "dark";
    const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = hasValidStoredTheme ? storedTheme : systemTheme;

    const applyTheme = (theme) => {
      body.setAttribute("data-theme", theme);

      if (!themeToggle) {
        return;
      }

      const isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );

      if (themeLabel) {
        themeLabel.textContent = isDark ? "切到浅色" : "切到深色";
      }
    };

    applyTheme(initialTheme);

    if (!themeToggle) {
      return;
    }

    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      writeStorage(THEME_STORAGE_KEY, nextTheme);
    });
  }

  function setupScrollProgress() {
    const progressBar = document.querySelector("#scroll-progress");

    if (!progressBar) {
      return;
    }

    let rafId = null;

    const updateProgress = () => {
      rafId = null;

      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const scrollableHeight = Math.max(doc.scrollHeight - window.innerHeight, 0);
      const ratio = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
      const percent = Math.min(Math.max(ratio * 100, 0), 100);

      progressBar.style.width = `${percent}%`;
    };

    const requestUpdate = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
  }

  function setupCursorGlow() {
    const cursorGlow = document.querySelector(".cursor-glow");

    if (!cursorGlow) {
      return;
    }

    if (isCoarsePointer()) {
      cursorGlow.style.display = "none";
      return;
    }

    const handlePointerMove = (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
      cursorGlow.classList.add("is-visible");
    };

    const handlePointerLeave = () => {
      cursorGlow.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
  }

  function setupRevealOnScroll() {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (revealItems.length === 0) {
      return;
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function easeOutCubic(progress) {
    return 1 - (1 - progress) ** 3;
  }

  function parseCounterTarget(rawTarget) {
    const targetText = String(rawTarget || "").trim();

    if (!targetText) {
      return null;
    }

    const match = targetText.match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
    if (!match) {
      return null;
    }

    const [, prefix, numericPart, suffix] = match;
    const targetNumber = Number(numericPart.replace(/,/g, ""));

    if (!Number.isFinite(targetNumber)) {
      return null;
    }

    const decimalPart = numericPart.split(".")[1] || "";

    return {
      prefix,
      suffix,
      targetNumber,
      decimals: decimalPart.length,
    };
  }

  function formatCounterValue(value, decimals) {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function setupAnimatedCounters() {
    const counters = Array.from(document.querySelectorAll(".stat-value[data-target]"));

    if (counters.length === 0) {
      return;
    }

    const animateCounter = (counter) => {
      if (!counter || counter.dataset.animated === "true") {
        return;
      }

      const parsed = parseCounterTarget(counter.dataset.target);
      if (!parsed) {
        counter.dataset.animated = "true";
        return;
      }

      const { prefix, suffix, targetNumber, decimals } = parsed;
      const duration = 1400;

      if (prefersReducedMotion()) {
        counter.textContent = `${prefix}${formatCounterValue(targetNumber, decimals)}${suffix}`;
        counter.dataset.animated = "true";
        return;
      }

      counter.dataset.animated = "true";

      const startedAt = performance.now();

      const tick = (now) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = easeOutCubic(elapsed);
        const currentValue = targetNumber * eased;

        counter.textContent = `${prefix}${formatCounterValue(currentValue, decimals)}${suffix}`;

        if (elapsed < 1) {
          window.requestAnimationFrame(tick);
          return;
        }

        counter.textContent = `${prefix}${formatCounterValue(targetNumber, decimals)}${suffix}`;
      };

      window.requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      counters.forEach(animateCounter);
      return;
    }

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
      }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function setupFeatureTabs() {
    const tabs = Array.from(document.querySelectorAll(".feature-tab[data-tab]"));
    const panels = Array.from(document.querySelectorAll(".feature-panel[data-panel]"));

    if (tabs.length === 0 || panels.length === 0) {
      return;
    }

    const activateTab = (tabName) => {
      if (!tabName) {
        return;
      }

      tabs.forEach((tab) => {
        const isActive = tab.dataset.tab === tabName;

        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === tabName;

        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activateTab(tab.dataset.tab);
      });
    });

    const initialTab = tabs.find(
      (tab) => tab.classList.contains("is-active") || tab.getAttribute("aria-selected") === "true"
    ) || tabs[0];

    activateTab(initialTab?.dataset.tab);
  }

  function setupCommandPlayground() {
    const commandInput = document.querySelector("#command-input");
    const runButton = document.querySelector("#run-command");
    const shellOutput = document.querySelector("#shell-output");
    const chips = Array.from(document.querySelectorAll(".prompt-chip[data-prompt]"));

    if (!commandInput && !runButton && !shellOutput && chips.length === 0) {
      return;
    }

    const appendShellLine = (text, type) => {
      if (!shellOutput) {
        return;
      }

      const line = document.createElement("div");
      line.className = `shell-line ${type === "command" ? "is-command" : "is-response"}`;
      line.textContent = text;

      shellOutput.appendChild(line);
      shellOutput.scrollTop = shellOutput.scrollHeight;
    };

    const pickResponse = (commandText) => {
      const normalized = commandText.toLowerCase();

      for (const entry of CANNED_COMMAND_RESPONSES) {
        if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
          return entry.response;
        }
      }

      return CANNED_COMMAND_RESPONSES[CANNED_COMMAND_RESPONSES.length - 1].response;
    };

    const runCommand = () => {
      if (!commandInput || !shellOutput) {
        return;
      }

      const commandText = commandInput.value.trim();
      if (!commandText) {
        return;
      }

      appendShellLine(`$ ${commandText}`, "command");

      const response = pickResponse(commandText);
      window.setTimeout(() => {
        appendShellLine(response, "response");
      }, 120);

      commandInput.value = "";
      commandInput.focus();
    };

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        if (!commandInput) {
          return;
        }

        commandInput.value = chip.dataset.prompt || "";
        commandInput.focus();
      });
    });

    if (runButton) {
      runButton.addEventListener("click", runCommand);
    }

    if (commandInput) {
      commandInput.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") {
          return;
        }

        event.preventDefault();
        runCommand();
      });
    }
  }

  function setupTiltCards() {
    const cards = Array.from(document.querySelectorAll(".tilt-card"));

    if (cards.length === 0) {
      return;
    }

    if (isCoarsePointer() || prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.transform = "";
      });
      return;
    }

    const maxTilt = 5;

    cards.forEach((card) => {
      let frameId = null;
      let rotateX = 0;
      let rotateY = 0;

      card.style.willChange = "transform";

      const applyTilt = () => {
        frameId = null;
        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      };

      const onPointerMove = (event) => {
        const rect = card.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

        rotateX = -relativeY * maxTilt;
        rotateY = relativeX * maxTilt;

        if (frameId !== null) {
          return;
        }

        frameId = window.requestAnimationFrame(applyTilt);
      };

      const resetTilt = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
          frameId = null;
        }

        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      };

      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerleave", resetTilt);
      card.addEventListener("pointercancel", resetTilt);
    });
  }

  function initHomeInteractions() {
    setupThemeToggle();
    setupScrollProgress();
    setupCursorGlow();
    setupRevealOnScroll();
    setupAnimatedCounters();
    setupFeatureTabs();
    setupCommandPlayground();
    setupTiltCards();
  }

  onReady(initHomeInteractions);
})();
