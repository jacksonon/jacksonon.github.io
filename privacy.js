(function () {
  var body = document.body;
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-lang-btn]");
  function setLang(lang) {
    body.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
    });
    applyTheme(readThemeMode());
    try {
      localStorage.setItem("rightai-policy-lang", lang);
    } catch (err) {
      /* ignore */
    }
  }
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.dataset.langBtn);
    });
  });
  var saved = null;
  try {
    saved = localStorage.getItem("rightai-policy-lang");
  } catch (err) {
    /* ignore */
  }
  if (saved === "zh" || saved === "en") {
    setLang(saved);
  }

  // Theme: cycle system -> dark -> light, shared preference with landing page.
  var themeToggle = document.getElementById("theme-toggle");
  var THEME_ORDER = ["system", "dark", "light"];
  var THEME_LABELS = {
    en: { system: "Theme: follow system", dark: "Theme: dark", light: "Theme: light" },
    zh: { system: "主题：跟随系统", dark: "主题：深色", light: "主题：浅色" }
  };

  function readThemeMode() {
    var mode = root.dataset.themeMode;
    return THEME_ORDER.indexOf(mode) >= 0 ? mode : "system";
  }

  function resolveTheme(mode) {
    if (mode === "light" || mode === "dark") {
      return mode;
    }
    var prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(mode) {
    var resolved = resolveTheme(mode);
    root.dataset.themeMode = mode;
    root.dataset.theme = resolved;
    if (!themeToggle) {
      return;
    }
    var pageLang = body.dataset.lang === "zh" ? "zh" : "en";
    var label = (THEME_LABELS[pageLang] || THEME_LABELS.en)[mode];
    themeToggle.setAttribute("aria-pressed", String(resolved === "dark"));
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.querySelectorAll("[data-theme-icon]").forEach(function (el) {
      el.hidden = el.getAttribute("data-theme-icon") !== mode;
    });
  }

  applyTheme(readThemeMode());

  if (window.matchMedia) {
    var media = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function () {
      if (readThemeMode() === "system") {
        applyTheme("system");
      }
    };
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onSystemChange);
    } else if (typeof media.addListener === "function") {
      media.addListener(onSystemChange);
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = THEME_ORDER[(THEME_ORDER.indexOf(readThemeMode()) + 1) % THEME_ORDER.length];
      applyTheme(next);
      try {
        localStorage.setItem("rightai-theme", next);
      } catch (err) {
        /* ignore */
      }
    });
  }
})();
