(function () {
  const THEME_KEY = "resume_theme";
  const LANG_KEY = "resume_lang";

  const themeLabels = {
    zh: "暗 / 亮模式",
    en: "Light / Dark",
  };

  const langLabels = {
    zh: "中文 / EN",
    en: "中文 / EN",
  };

  const printLabels = {
    zh: "打印 / 导出 PDF",
    en: "Print / Save as PDF",
  };

  const pageLabels = {
    zh: "Interactive Resume · 完整版",
    en: "Interactive Resume · Full",
  };

  const pageTitles = {
    zh: "Jackson WANG · 资深 Apple 平台软件工程师 & Agentic Engineering Developer",
    en: "Jackson WANG · Senior Apple Platform Software Engineer & Agentic Engineering Developer",
  };

  const pageDescriptions = {
    zh: "Jackson WANG，专注 Apple 生态的资深 iOS 软件工程师，擅长跨平台 SDK、性能与稳定性优化及 Agentic Engineering 实践。",
    en: "Jackson WANG is a senior Apple-platform software engineer focused on cross-platform SDKs, reliability, and agentic engineering workflows.",
  };

  function deriveThemeByTime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  }

  function getActiveLang() {
    return document.body.classList.contains("lang-en") ? "en" : "zh";
  }

  function getActiveTheme() {
    return document.body.classList.contains("theme-light") ? "light" : "dark";
  }

  function syncQuickLinks(lang) {
    const quickLinks = document.querySelectorAll('[data-role="quick-link"]');
    quickLinks.forEach((link) => {
      const target = lang === "en" ? link.dataset.targetEn : link.dataset.targetZh;
      if (target) {
        link.setAttribute("href", target);
      }
    });
  }

  function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    document.documentElement.setAttribute("data-theme", theme);
  }

  function applyLang(lang) {
    document.body.classList.remove("lang-zh", "lang-en");
    document.body.classList.add(`lang-${lang}`);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const themeLabelEl = document.querySelector('[data-role="theme-label"]');
    const langLabelEl = document.querySelector('[data-role="lang-label"]');
    const printLabelEl = document.querySelector('[data-role="print-label"]');
    const printButtonEl = document.querySelector('[data-role="print-toggle"]');
    const pageLabelEl = document.querySelector('[data-role="page-label"]');
    const brandEl = document.querySelector(".brand-pill");

    if (themeLabelEl) {
      themeLabelEl.textContent = themeLabels[lang] || themeLabels.zh;
    }

    if (langLabelEl) {
      langLabelEl.textContent = langLabels[lang] || langLabels.zh;
    }

    if (printLabelEl) {
      printLabelEl.textContent = printLabels[lang] || printLabels.zh;
    }

    if (printButtonEl) {
      printButtonEl.setAttribute("aria-label", printLabels[lang] || printLabels.zh);
    }

    if (pageLabelEl) {
      pageLabelEl.textContent = pageLabels[lang] || pageLabels.zh;
    }

    if (brandEl) {
      brandEl.setAttribute("aria-label", lang === "zh" ? "返回简历首页" : "Resume home");
    }

    const themeButton = document.querySelector('[data-role="theme-toggle"]');
    const langButton = document.querySelector('[data-role="lang-toggle"]');

    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        lang === "zh" ? "切换明暗模式" : "Toggle light and dark mode"
      );
    }

    if (langButton) {
      langButton.setAttribute("aria-label", lang === "zh" ? "切换语言" : "Switch language");
    }

    document.title = pageTitles[lang] || pageTitles.zh;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", pageDescriptions[lang] || pageDescriptions.zh);
    }

    syncQuickLinks(lang);
  }

  function markActiveNav() {
    const lang = getActiveLang();
    const page = document.querySelector(`.lang-page.lang-${lang}`);
    if (!page) {
      return;
    }

    const navLinks = page.querySelectorAll(".main-nav a");
    navLinks.forEach((link) => link.classList.remove("is-active"));

    const quickLinks = document.querySelectorAll('[data-role="quick-link"]');
    quickLinks.forEach((link) => link.classList.remove("is-active"));

    const sections = Array.from(page.querySelectorAll(".section[id]"));
    if (sections.length === 0) {
      return;
    }

    const offset = window.scrollY + 160;
    let currentId = sections[0].id;

    sections.forEach((section) => {
      if (section.offsetTop <= offset) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("is-active");
      }
    });

    quickLinks.forEach((link) => {
      const target = lang === "en" ? link.dataset.targetEn : link.dataset.targetZh;
      if (target === `#${currentId}`) {
        link.classList.add("is-active");
      }
    });
  }

  function setupScrollProgress() {
    const progress = document.querySelector('[data-role="scroll-progress"]');
    if (!progress) {
      return;
    }

    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
      markActiveNav();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function setupPointerGlow() {
    document.addEventListener(
      "pointermove",
      (event) => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      },
      { passive: true }
    );
  }

  function setupRevealAnimations() {
    const targets = document.querySelectorAll(
      ".site-header, .section, .item, .columns .column, .site-footer"
    );

    targets.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function setupTiltEffects() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hoverCapable = window.matchMedia("(hover: hover)").matches;

    if (reduceMotion || !hoverCapable) {
      return;
    }

    const cards = document.querySelectorAll(".item, .columns .column");
    cards.forEach((card) => {
      card.classList.add("tilt-card");

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - y) * 6.5;
        const tiltY = (x - 0.5) * 8;

        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.style.setProperty("--tilt-scale", "1.01");
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-scale", "1");
      });
    });
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  const savedLang = window.localStorage.getItem(LANG_KEY);

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const urlTheme = params.get("theme");

  const browserLang =
    (navigator.language || navigator.userLanguage || "en").toLowerCase();
  const defaultLang = browserLang.startsWith("zh") ? "zh" : "en";

  const initialLang =
    urlLang === "zh" || urlLang === "en" ? urlLang : savedLang || defaultLang;
  const initialTheme =
    urlTheme === "light" || urlTheme === "dark"
      ? urlTheme
      : savedTheme || deriveThemeByTime();

  applyTheme(initialTheme);
  applyLang(initialLang);

  setupScrollProgress();
  setupPointerGlow();
  setupRevealAnimations();
  setupTiltEffects();
  markActiveNav();

  const themeButtons = document.querySelectorAll('[data-role="theme-toggle"]');
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      window.localStorage.setItem(THEME_KEY, nextTheme);
    });
  });

  const langButtons = document.querySelectorAll('[data-role="lang-toggle"]');
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextLang = getActiveLang() === "zh" ? "en" : "zh";
      applyLang(nextLang);
      window.localStorage.setItem(LANG_KEY, nextLang);
      markActiveNav();
    });
  });

  const printButton = document.querySelector('[data-role="print-toggle"]');
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }
})();
