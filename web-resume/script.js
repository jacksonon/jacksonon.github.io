(function () {
  const THEME_KEY = "wjw_theme";
  const LANG_KEY = "wjw_lang";

  const themeLabels = {
    zh: "暗 / 亮模式",
    en: "Light / Dark",
  };

  const langLabels = {
    zh: "中文 / EN",
    en: "中文 / EN",
  };

  function deriveThemeByTime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  }

  function applyTheme(theme) {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(`theme-${theme}`);
    document.documentElement.setAttribute("data-theme", theme);
  }

  function applyLang(lang) {
    const body = document.body;
    body.classList.remove("lang-zh", "lang-en");
    body.classList.add(`lang-${lang}`);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const themeLabelEl = document.querySelector('[data-role="theme-label"]');
    const langLabelEl = document.querySelector('[data-role="lang-label"]');
    if (themeLabelEl) {
      themeLabelEl.textContent = themeLabels[lang] || themeLabels.zh;
    }
    if (langLabelEl) {
      langLabelEl.textContent = langLabels[lang] || langLabels.zh;
    }
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  const savedLang = window.localStorage.getItem(LANG_KEY);

  const browserLang =
    (navigator.language || navigator.userLanguage || "en").toLowerCase();
  const defaultLang = browserLang.startsWith("zh") ? "zh" : "en";

  const initialLang = savedLang || defaultLang;
  const initialTheme = savedTheme || deriveThemeByTime();

  applyTheme(initialTheme);
  applyLang(initialLang);

  const themeButtons = document.querySelectorAll('[data-role="theme-toggle"]');
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-dark")
        ? "light"
        : "dark";
      applyTheme(nextTheme);
      window.localStorage.setItem(THEME_KEY, nextTheme);
    });
  });

  const langButtons = document.querySelectorAll('[data-role="lang-toggle"]');
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextLang = document.body.classList.contains("lang-zh")
        ? "en"
        : "zh";
      applyLang(nextLang);
      window.localStorage.setItem(LANG_KEY, nextLang);
    });
  });
})();

