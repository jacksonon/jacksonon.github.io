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

  const pdfLabels = {
    zh: "下载 PDF",
    en: "Download PDF",
  };

  const pdfFiles = {
    zh: "resume-zh.pdf",
    en: "resume-en.pdf",
  };

  const pdfDownloadNames = {
    zh: "Jackson-WANG-Resume-zh.pdf",
    en: "Jackson-WANG-Resume-en.pdf",
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
    const pdfLabelEl = document.querySelector('[data-role="pdf-label"]');
    const pdfDownloadEl = document.querySelector('[data-role="pdf-download"]');
    if (themeLabelEl) {
      themeLabelEl.textContent = themeLabels[lang] || themeLabels.zh;
    }
    if (langLabelEl) {
      langLabelEl.textContent = langLabels[lang] || langLabels.zh;
    }
    if (pdfLabelEl) {
      pdfLabelEl.textContent = pdfLabels[lang] || pdfLabels.zh;
    }
    if (pdfDownloadEl) {
      pdfDownloadEl.setAttribute("href", pdfFiles[lang] || pdfFiles.zh);
      pdfDownloadEl.setAttribute(
        "download",
        pdfDownloadNames[lang] || pdfDownloadNames.zh
      );
      pdfDownloadEl.setAttribute(
        "aria-label",
        pdfLabels[lang] || pdfLabels.zh
      );
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
})();
