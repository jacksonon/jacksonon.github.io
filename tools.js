(() => {
  const THEME_STORAGE_KEY = "rightai-theme";
  const LANGUAGE_STORAGE_KEY = "rightai-language";
  const DEFAULT_LANGUAGE = "zh";
  const SUPPORTED_LANGUAGES = ["en", "ru", "zh", "zh-Hant", "ja", "ko"];
  const DATA_URL = "data/webmaster-tools.json";

  const UI_TEXT = {
    zh: {
      "meta.title": "站长工具列表 | Right AI",
      "meta.description": "站长工具列表：聚合 SEO、测速、索引与抓取分析工具，快速访问常用站长资源。",
      "brand.homeAria": "返回 Right AI 首页",
      "nav.aria": "页面导航",
      "nav.backHome": "← 返回首页",
      "nav.language": "语言",
      "nav.languageAria": "语言切换器",
      "theme.toggle": "切换主题",
      "theme.switchToLight": "切换到浅色主题",
      "theme.switchToDark": "切换到深色主题",
      "theme.light": "浅色模式",
      "theme.dark": "深色模式",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "站长工具列表",
      "intro.lead": "快速检索常用站长工具，覆盖收录提交、SEO 诊断、性能测速和站点分析等典型场景。",
      "search.regionAria": "站长工具搜索",
      "search.label": "搜索站长工具",
      "search.placeholder": "输入工具名称或描述进行筛选",
      "search.hint": "支持按名称和描述实时筛选。",
      "results.total": "共 {{total}} 个工具",
      "results.filtered": "匹配 {{visible}} / {{total}} 个工具",
      "results.noData": "暂无可展示的工具数据。",
      "empty.withKeyword": "没有找到与“{{keyword}}”相关的工具，请尝试其他关键词。",
      "empty.default": "暂无可展示的工具，请稍后再试。",
      "status.loading": "正在加载工具列表...",
      "status.emptyData": "数据为空，请检查 JSON 文件内容。",
      "status.loadError": "工具数据加载失败，请稍后重试。",
      "card.export": "export {{name}}",
      "card.open": "打开工具",
      "card.openAria": "访问 {{name}}"
    },
    "zh-Hant": {
      "meta.title": "站長工具列表 | Right AI",
      "meta.description": "站長工具列表：聚合 SEO、測速、索引與抓取分析工具，快速存取常用站長資源。",
      "brand.homeAria": "返回 Right AI 首頁",
      "nav.aria": "頁面導覽",
      "nav.backHome": "← 返回首頁",
      "nav.language": "語言",
      "nav.languageAria": "語言切換器",
      "theme.toggle": "切換主題",
      "theme.switchToLight": "切換到淺色主題",
      "theme.switchToDark": "切換到深色主題",
      "theme.light": "淺色模式",
      "theme.dark": "深色模式",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "站長工具列表",
      "intro.lead": "快速檢索常用站長工具，覆蓋收錄提交、SEO 診斷、效能測速和站點分析等典型場景。",
      "search.regionAria": "站長工具搜尋",
      "search.label": "搜尋站長工具",
      "search.placeholder": "輸入工具名稱或描述進行篩選",
      "search.hint": "支援按名稱和描述即時篩選。",
      "results.total": "共 {{total}} 個工具",
      "results.filtered": "匹配 {{visible}} / {{total}} 個工具",
      "results.noData": "暫無可展示的工具資料。",
      "empty.withKeyword": "沒有找到與「{{keyword}}」相關的工具，請嘗試其他關鍵詞。",
      "empty.default": "暫無可展示的工具，請稍後再試。",
      "status.loading": "正在載入工具列表...",
      "status.emptyData": "資料為空，請檢查 JSON 檔案內容。",
      "status.loadError": "工具資料載入失敗，請稍後重試。",
      "card.export": "export {{name}}",
      "card.open": "開啟工具",
      "card.openAria": "造訪 {{name}}"
    },
    en: {
      "meta.title": "Webmaster Tools Directory | Right AI",
      "meta.description": "Webmaster tools directory with SEO, speed test, indexing, and crawling analysis resources.",
      "brand.homeAria": "Back to Right AI home",
      "nav.aria": "Page navigation",
      "nav.backHome": "← Back Home",
      "nav.language": "Language",
      "nav.languageAria": "Language switcher",
      "theme.toggle": "Switch theme",
      "theme.switchToLight": "Switch to light theme",
      "theme.switchToDark": "Switch to dark theme",
      "theme.light": "Light Mode",
      "theme.dark": "Dark Mode",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "Webmaster Tools Directory",
      "intro.lead": "Quickly find webmaster tools for indexing submission, SEO diagnostics, speed testing, and site analysis.",
      "search.regionAria": "Webmaster tool search",
      "search.label": "Search webmaster tools",
      "search.placeholder": "Filter by tool name or description",
      "search.hint": "Live filtering supports names and descriptions.",
      "results.total": "{{total}} tools",
      "results.filtered": "{{visible}} of {{total}} tools matched",
      "results.noData": "No tool data available.",
      "empty.withKeyword": "No tools found for \"{{keyword}}\". Try another keyword.",
      "empty.default": "No tools available right now. Please try again later.",
      "status.loading": "Loading tools...",
      "status.emptyData": "Data is empty. Please check the JSON content.",
      "status.loadError": "Failed to load tool data. Please try again later.",
      "card.export": "export {{name}}",
      "card.open": "Open Tool",
      "card.openAria": "Open {{name}}"
    },
    ru: {
      "meta.title": "Каталог инструментов вебмастера | Right AI",
      "meta.description": "Каталог инструментов для вебмастеров: SEO, проверка скорости, индексация и анализ сканирования.",
      "brand.homeAria": "Вернуться на главную Right AI",
      "nav.aria": "Навигация по странице",
      "nav.backHome": "← На главную",
      "nav.language": "Язык",
      "nav.languageAria": "Переключатель языка",
      "theme.toggle": "Сменить тему",
      "theme.switchToLight": "Переключить на светлую тему",
      "theme.switchToDark": "Переключить на темную тему",
      "theme.light": "Светлая тема",
      "theme.dark": "Темная тема",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "Каталог инструментов вебмастера",
      "intro.lead": "Быстро находите инструменты вебмастера для отправки в индекс, SEO-диагностики, проверки скорости и анализа сайта.",
      "search.regionAria": "Поиск инструментов вебмастера",
      "search.label": "Поиск инструментов вебмастера",
      "search.placeholder": "Фильтр по названию или описанию",
      "search.hint": "Мгновенная фильтрация по названию и описанию.",
      "results.total": "Всего инструментов: {{total}}",
      "results.filtered": "Найдено: {{visible}} из {{total}}",
      "results.noData": "Нет доступных данных по инструментам.",
      "empty.withKeyword": "Инструменты по запросу «{{keyword}}» не найдены. Попробуйте другой запрос.",
      "empty.default": "Сейчас нет инструментов для отображения. Попробуйте позже.",
      "status.loading": "Загрузка списка инструментов...",
      "status.emptyData": "Данные пусты. Проверьте содержимое JSON-файла.",
      "status.loadError": "Не удалось загрузить данные инструментов. Повторите позже.",
      "card.export": "export {{name}}",
      "card.open": "Открыть инструмент",
      "card.openAria": "Открыть {{name}}"
    },
    ja: {
      "meta.title": "ウェブマスターツール一覧 | Right AI",
      "meta.description": "SEO、速度計測、インデックス、クロール分析をまとめたウェブマスターツール一覧。",
      "brand.homeAria": "Right AI ホームへ戻る",
      "nav.aria": "ページナビゲーション",
      "nav.backHome": "← ホームへ戻る",
      "nav.language": "言語",
      "nav.languageAria": "言語切替",
      "theme.toggle": "テーマ切替",
      "theme.switchToLight": "ライトテーマに切り替え",
      "theme.switchToDark": "ダークテーマに切り替え",
      "theme.light": "ライトモード",
      "theme.dark": "ダークモード",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "ウェブマスターツール一覧",
      "intro.lead": "インデックス送信、SEO 診断、速度計測、サイト分析などの定番ツールをすばやく検索できます。",
      "search.regionAria": "ウェブマスターツール検索",
      "search.label": "ウェブマスターツールを検索",
      "search.placeholder": "ツール名または説明で絞り込み",
      "search.hint": "名前と説明でリアルタイムに絞り込みできます。",
      "results.total": "全 {{total}} 件",
      "results.filtered": "{{total}} 件中 {{visible}} 件に一致",
      "results.noData": "表示できるツールデータがありません。",
      "empty.withKeyword": "「{{keyword}}」に一致するツールが見つかりません。別のキーワードをお試しください。",
      "empty.default": "現在表示できるツールがありません。しばらくしてから再度お試しください。",
      "status.loading": "ツール一覧を読み込み中...",
      "status.emptyData": "データが空です。JSON ファイルの内容を確認してください。",
      "status.loadError": "ツールデータの読み込みに失敗しました。しばらくしてから再試行してください。",
      "card.export": "export {{name}}",
      "card.open": "ツールを開く",
      "card.openAria": "{{name}} を開く"
    },
    ko: {
      "meta.title": "웹마스터 도구 목록 | Right AI",
      "meta.description": "SEO, 속도 측정, 인덱싱, 크롤링 분석 도구를 모아둔 웹마스터 도구 목록입니다.",
      "brand.homeAria": "Right AI 홈으로 이동",
      "nav.aria": "페이지 내비게이션",
      "nav.backHome": "← 홈으로",
      "nav.language": "언어",
      "nav.languageAria": "언어 전환기",
      "theme.toggle": "테마 전환",
      "theme.switchToLight": "라이트 테마로 전환",
      "theme.switchToDark": "다크 테마로 전환",
      "theme.light": "라이트 모드",
      "theme.dark": "다크 모드",
      "intro.kicker": "Webmaster Resources",
      "intro.title": "웹마스터 도구 목록",
      "intro.lead": "수집 제출, SEO 진단, 성능 측정, 사이트 분석 등 자주 쓰는 웹마스터 도구를 빠르게 검색하세요.",
      "search.regionAria": "웹마스터 도구 검색",
      "search.label": "웹마스터 도구 검색",
      "search.placeholder": "도구 이름 또는 설명으로 필터링",
      "search.hint": "이름과 설명 기준으로 실시간 필터링을 지원합니다.",
      "results.total": "총 {{total}}개 도구",
      "results.filtered": "{{total}}개 중 {{visible}}개 일치",
      "results.noData": "표시할 도구 데이터가 없습니다.",
      "empty.withKeyword": "\"{{keyword}}\"와 일치하는 도구를 찾을 수 없습니다. 다른 키워드를 시도해 주세요.",
      "empty.default": "현재 표시할 도구가 없습니다. 잠시 후 다시 시도해 주세요.",
      "status.loading": "도구 목록을 불러오는 중...",
      "status.emptyData": "데이터가 비어 있습니다. JSON 파일 내용을 확인해 주세요.",
      "status.loadError": "도구 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
      "card.export": "export {{name}}",
      "card.open": "도구 열기",
      "card.openAria": "{{name}} 열기"
    }
  };

  const state = {
    tools: [],
    language: DEFAULT_LANGUAGE,
    keyword: "",
    hasLoaded: false,
    status: {
      key: "",
      isError: false,
      params: {}
    }
  };

  const elements = {
    body: document.body,
    searchInput: document.querySelector("#tool-search"),
    list: document.querySelector("#tools-list"),
    emptyState: document.querySelector("#empty-state"),
    resultsCount: document.querySelector("#results-count"),
    statusMessage: document.querySelector("#status-message"),
    themeToggle: document.querySelector("#theme-toggle"),
    themeLabel: document.querySelector("[data-theme-label]"),
    languageToggle: document.querySelector("#language-toggle")
  };

  const normalizeTheme = (theme) => (theme === "dark" || theme === "light" ? theme : null);

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
      // Ignore storage errors in private mode or restricted environments.
    }
  }

  function normalizeLanguage(language) {
    const raw = String(language || "").trim();
    if (!raw) {
      return DEFAULT_LANGUAGE;
    }

    if (SUPPORTED_LANGUAGES.includes(raw)) {
      return raw;
    }

    const lower = raw.toLowerCase();
    if (lower.startsWith("zh-hant") || lower.startsWith("zh-tw") || lower.startsWith("zh-hk")) {
      return "zh-Hant";
    }
    if (lower.startsWith("zh")) {
      return "zh";
    }
    if (lower.startsWith("ja")) {
      return "ja";
    }
    if (lower.startsWith("ko")) {
      return "ko";
    }
    if (lower.startsWith("ru")) {
      return "ru";
    }
    if (lower.startsWith("en")) {
      return "en";
    }

    return DEFAULT_LANGUAGE;
  }

  function getDocumentLanguage(language) {
    const normalized = normalizeLanguage(language);
    if (normalized === "zh") {
      return "zh-CN";
    }
    if (normalized === "zh-Hant") {
      return "zh-Hant";
    }

    return normalized;
  }

  function getLanguageCandidates(language) {
    const normalized = normalizeLanguage(language);
    const candidates = [normalized];

    if (normalized === "zh-Hant") {
      candidates.push("zh");
    }
    if (!candidates.includes("zh")) {
      candidates.push("zh");
    }
    if (!candidates.includes("en")) {
      candidates.push("en");
    }

    return candidates;
  }

  function getBrowserLanguage() {
    const candidates = Array.isArray(window.navigator?.languages)
      ? window.navigator.languages
      : [window.navigator?.language];

    for (const language of candidates) {
      const normalized = normalizeLanguage(language);
      if (SUPPORTED_LANGUAGES.includes(normalized)) {
        return normalized;
      }
    }

    return DEFAULT_LANGUAGE;
  }

  function interpolate(template, params = {}) {
    return String(template || "").replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
      const value = params[key];
      return value === undefined || value === null ? "" : String(value);
    });
  }

  function t(key, params = {}, language = state.language) {
    if (!key) {
      return "";
    }

    const normalized = normalizeLanguage(language);
    const localePack = UI_TEXT[normalized] || UI_TEXT[DEFAULT_LANGUAGE];
    const fallbackPack = UI_TEXT[DEFAULT_LANGUAGE];
    const englishPack = UI_TEXT.en || {};
    const template = localePack[key] ?? fallbackPack[key] ?? englishPack[key] ?? "";
    return interpolate(template, params);
  }

  function getSystemTheme() {
    if (typeof window.matchMedia !== "function") {
      return "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const body = elements.body;
    if (!body) {
      return;
    }

    body.setAttribute("data-theme", theme);

    if (!elements.themeToggle) {
      return;
    }

    const isDark = theme === "dark";
    elements.themeToggle.setAttribute("aria-pressed", String(isDark));
    elements.themeToggle.setAttribute(
      "aria-label",
      isDark ? t("theme.switchToLight") : t("theme.switchToDark")
    );

    if (elements.themeLabel) {
      elements.themeLabel.textContent = isDark ? t("theme.light") : t("theme.dark");
    }
  }

  function setupThemeToggle() {
    const storedTheme = normalizeTheme(readStorage(THEME_STORAGE_KEY));
    const initialTheme = storedTheme || getSystemTheme();

    applyTheme(initialTheme);

    if (!elements.themeToggle) {
      return;
    }

    elements.themeToggle.addEventListener("click", () => {
      const currentTheme = elements.body?.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      writeStorage(THEME_STORAGE_KEY, nextTheme);
    });
  }

  function renderStatus() {
    if (!elements.statusMessage) {
      return;
    }

    const { key, isError, params } = state.status;
    elements.statusMessage.textContent = key ? t(key, params) : "";
    elements.statusMessage.classList.toggle("is-error", Boolean(isError));
  }

  function setStatus(key = "", isError = false, params = {}) {
    state.status = {
      key,
      isError,
      params
    };
    renderStatus();
  }

  function getObjectTextByKey(field, key) {
    if (!field || typeof field !== "object" || Array.isArray(field)) {
      return "";
    }

    const directValue = field[key];
    if (typeof directValue === "string" && directValue.trim()) {
      return directValue.trim();
    }

    const lowerKey = key.toLowerCase();
    for (const [entryKey, entryValue] of Object.entries(field)) {
      if (entryKey.toLowerCase() === lowerKey && typeof entryValue === "string" && entryValue.trim()) {
        return entryValue.trim();
      }
    }

    return "";
  }

  function getObjectByKey(field, key) {
    if (!field || typeof field !== "object" || Array.isArray(field)) {
      return null;
    }

    const directValue = field[key];
    if (directValue && typeof directValue === "object" && !Array.isArray(directValue)) {
      return directValue;
    }

    const lowerKey = key.toLowerCase();
    for (const [entryKey, entryValue] of Object.entries(field)) {
      if (entryKey.toLowerCase() === lowerKey && entryValue && typeof entryValue === "object" && !Array.isArray(entryValue)) {
        return entryValue;
      }
    }

    return null;
  }

  function resolveLocalizedField(value, language) {
    if (typeof value === "string") {
      return value.trim();
    }

    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return "";
    }

    const candidates = getLanguageCandidates(language);
    for (const candidate of candidates) {
      const localized = getObjectTextByKey(value, candidate);
      if (localized) {
        return localized;
      }
    }

    for (const entryValue of Object.values(value)) {
      if (typeof entryValue === "string" && entryValue.trim()) {
        return entryValue.trim();
      }
    }

    return "";
  }

  function resolveFieldFromI18nMap(i18nMap, field, language) {
    if (!i18nMap || typeof i18nMap !== "object" || Array.isArray(i18nMap)) {
      return "";
    }

    const candidates = getLanguageCandidates(language);
    for (const candidate of candidates) {
      const localeEntry = getObjectByKey(i18nMap, candidate);
      if (!localeEntry) {
        continue;
      }

      const localized = localeEntry[field];
      if (typeof localized === "string" && localized.trim()) {
        return localized.trim();
      }
    }

    for (const entryValue of Object.values(i18nMap)) {
      if (!entryValue || typeof entryValue !== "object" || Array.isArray(entryValue)) {
        continue;
      }

      const localized = entryValue[field];
      if (typeof localized === "string" && localized.trim()) {
        return localized.trim();
      }
    }

    return "";
  }

  function normalizeTools(payload) {
    const list = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.tools)
        ? payload.tools
        : [];

    return list
      .map((item) => {
        const safeItem = item && typeof item === "object" && !Array.isArray(item)
          ? item
          : {};
        const url = typeof safeItem.url === "string" ? safeItem.url.trim() : "";
        const fallbackName = resolveFieldFromI18nMap(safeItem.i18n, "name", DEFAULT_LANGUAGE)
          || resolveLocalizedField(safeItem.name, DEFAULT_LANGUAGE);
        const fallbackDescription = resolveFieldFromI18nMap(safeItem.i18n, "description", DEFAULT_LANGUAGE)
          || resolveLocalizedField(safeItem.description, DEFAULT_LANGUAGE);

        if (!fallbackName || !fallbackDescription || !url) {
          return null;
        }

        return {
          name: safeItem.name,
          description: safeItem.description,
          i18n: safeItem.i18n,
          fallbackName,
          fallbackDescription,
          url
        };
      })
      .filter(Boolean);
  }

  function toCardLabel(name, index) {
    const asciiSlug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return `${asciiSlug || `tool-${index + 1}`}.md`;
  }

  function createToolCard(tool, index) {
    const listItem = document.createElement("li");
    listItem.className = "tool-card";

    const article = document.createElement("article");

    const shellHead = document.createElement("div");
    shellHead.className = "tool-shell-head";

    const controls = document.createElement("div");
    controls.className = "tool-shell-controls";
    controls.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 3; i += 1) {
      controls.append(document.createElement("span"));
    }

    const shellTitle = document.createElement("p");
    shellTitle.className = "tool-shell-title";
    shellTitle.textContent = toCardLabel(tool.name, index);

    shellHead.append(controls, shellTitle);

    const title = document.createElement("h2");
    title.textContent = tool.name;

    const exportLine = document.createElement("p");
    exportLine.className = "tool-export";
    exportLine.textContent = t("card.export", { name: tool.name });

    const description = document.createElement("p");
    description.className = "tool-description";
    description.textContent = tool.description;

    const link = document.createElement("a");
    link.className = "tool-link";
    link.href = tool.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t("card.open");
    link.setAttribute("aria-label", t("card.openAria", { name: tool.name }));

    article.append(shellHead, title, exportLine, description, link);
    listItem.append(article);
    return listItem;
  }

  function updateResultCount(visibleCount, totalCount, hasKeyword) {
    if (!elements.resultsCount) {
      return;
    }

    if (!totalCount) {
      elements.resultsCount.textContent = t("results.noData");
      return;
    }

    if (!hasKeyword) {
      elements.resultsCount.textContent = t("results.total", { total: totalCount });
      return;
    }

    elements.resultsCount.textContent = t("results.filtered", {
      visible: visibleCount,
      total: totalCount
    });
  }

  function normalizeSearchValue(value) {
    return String(value || "").toLocaleLowerCase(state.language);
  }

  function renderTools(keyword = state.keyword) {
    if (!elements.list || !elements.emptyState) {
      return;
    }

    state.keyword = typeof keyword === "string" ? keyword : "";

    const trimmedKeyword = state.keyword.trim();
    const normalizedKeyword = normalizeSearchValue(trimmedKeyword);

    const localizedTools = state.tools.map((tool) => ({
      name: resolveFieldFromI18nMap(tool.i18n, "name", state.language)
        || resolveLocalizedField(tool.name, state.language)
        || tool.fallbackName,
      description: resolveFieldFromI18nMap(tool.i18n, "description", state.language)
        || resolveLocalizedField(tool.description, state.language)
        || tool.fallbackDescription,
      url: tool.url
    }));

    const filteredTools = normalizedKeyword
      ? localizedTools.filter((tool) => {
        const name = normalizeSearchValue(tool.name);
        const description = normalizeSearchValue(tool.description);
        return name.includes(normalizedKeyword) || description.includes(normalizedKeyword);
      })
      : localizedTools;

    elements.list.innerHTML = "";

    if (!filteredTools.length) {
      elements.emptyState.hidden = false;
      elements.emptyState.textContent = normalizedKeyword
        ? t("empty.withKeyword", { keyword: trimmedKeyword })
        : t("empty.default");
      updateResultCount(0, localizedTools.length, Boolean(normalizedKeyword));
      return;
    }

    elements.emptyState.hidden = true;

    const fragment = document.createDocumentFragment();
    filteredTools.forEach((tool, index) => {
      fragment.append(createToolCard(tool, index));
    });

    elements.list.append(fragment);
    updateResultCount(filteredTools.length, localizedTools.length, Boolean(normalizedKeyword));
  }

  async function loadTools() {
    setStatus("status.loading");

    try {
      const response = await fetch(DATA_URL, {
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      state.tools = normalizeTools(payload);
      state.hasLoaded = true;

      renderTools(state.keyword);

      if (!state.tools.length) {
        setStatus("status.emptyData", true);
      } else {
        setStatus("");
      }
    } catch (_error) {
      state.tools = [];
      state.hasLoaded = true;
      renderTools(state.keyword);
      setStatus("status.loadError", true);
    }
  }

  function applyStaticTexts() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key) {
        return;
      }

      const translated = t(key);
      if (translated) {
        node.textContent = translated;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (!key) {
        return;
      }

      const translated = t(key);
      if (translated) {
        node.setAttribute("placeholder", translated);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      const key = node.getAttribute("data-i18n-aria-label");
      if (!key) {
        return;
      }

      const translated = t(key);
      if (translated) {
        node.setAttribute("aria-label", translated);
      }
    });

    const description = document.querySelector("meta[name=\"description\"]");
    if (description) {
      description.setAttribute("content", t("meta.description"));
    }

    document.title = t("meta.title");
  }

  function applyLanguage(language, persist) {
    const finalLanguage = normalizeLanguage(language);
    state.language = finalLanguage;

    if (elements.body) {
      elements.body.setAttribute("data-language", finalLanguage);
    }

    document.documentElement.lang = getDocumentLanguage(finalLanguage);

    if (elements.languageToggle) {
      elements.languageToggle.value = finalLanguage;
    }

    applyStaticTexts();

    if (persist) {
      writeStorage(LANGUAGE_STORAGE_KEY, finalLanguage);
    }

    const currentTheme = elements.body?.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(currentTheme);

    if (state.hasLoaded) {
      renderTools(state.keyword);
    }

    renderStatus();
  }

  function setupLanguageSwitcher() {
    const storedLanguage = readStorage(LANGUAGE_STORAGE_KEY);
    const bodyLanguage = elements.body?.getAttribute("data-language");
    const initialLanguage = normalizeLanguage(storedLanguage || bodyLanguage || getBrowserLanguage());

    applyLanguage(initialLanguage, false);

    if (!elements.languageToggle) {
      return;
    }

    elements.languageToggle.addEventListener("change", (event) => {
      applyLanguage(event.target.value, true);
    });
  }

  function setupSearch() {
    if (!elements.searchInput) {
      return;
    }

    elements.searchInput.addEventListener("input", (event) => {
      const keyword = typeof event.target.value === "string" ? event.target.value : "";
      renderTools(keyword);
    });
  }

  function init() {
    setupThemeToggle();
    setupLanguageSwitcher();
    setupSearch();
    loadTools();
  }

  init();
})();
