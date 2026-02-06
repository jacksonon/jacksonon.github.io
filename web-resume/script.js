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

  const printLabels = {
    zh: "打印 / 导出 PDF",
    en: "Print / Save as PDF",
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
    const printLabelEl = document.querySelector('[data-role="print-label"]');
    const printButtonEl = document.querySelector('[data-role="print-toggle"]');

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

  const printButton = document.querySelector('[data-role="print-toggle"]');
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }
})();
