(() => {
  const THEME_STORAGE_KEY = "rightai-theme";
  const DATA_URL = "data/webmaster-tools.json";

  const state = {
    tools: []
  };

  const elements = {
    body: document.body,
    searchInput: document.querySelector("#tool-search"),
    list: document.querySelector("#tools-list"),
    emptyState: document.querySelector("#empty-state"),
    resultsCount: document.querySelector("#results-count"),
    statusMessage: document.querySelector("#status-message"),
    themeToggle: document.querySelector("#theme-toggle"),
    themeLabel: document.querySelector("[data-theme-label]")
  };

  const normalizeTheme = (theme) => (theme === "dark" || theme === "light" ? theme : null);

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage errors in private mode or restricted environments.
    }
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
      isDark ? "切换到浅色主题" : "切换到深色主题"
    );

    if (elements.themeLabel) {
      elements.themeLabel.textContent = isDark ? "浅色模式" : "深色模式";
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

  function setStatus(message, isError = false) {
    if (!elements.statusMessage) {
      return;
    }

    elements.statusMessage.textContent = message;
    elements.statusMessage.classList.toggle("is-error", isError);
  }

  function normalizeTools(payload) {
    const list = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.tools)
        ? payload.tools
        : [];

    return list
      .map((item) => {
        const name = typeof item?.name === "string" ? item.name.trim() : "";
        const description = typeof item?.description === "string" ? item.description.trim() : "";
        const url = typeof item?.url === "string" ? item.url.trim() : "";

        if (!name || !description || !url) {
          return null;
        }

        return { name, description, url };
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
    exportLine.textContent = `export ${tool.name}`;

    const description = document.createElement("p");
    description.className = "tool-description";
    description.textContent = tool.description;

    const link = document.createElement("a");
    link.className = "tool-link";
    link.href = tool.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "打开工具";
    link.setAttribute("aria-label", `访问 ${tool.name}`);

    article.append(shellHead, title, exportLine, description, link);
    listItem.append(article);
    return listItem;
  }

  function updateResultCount(visibleCount, totalCount, keyword) {
    if (!elements.resultsCount) {
      return;
    }

    if (!totalCount) {
      elements.resultsCount.textContent = "暂无可展示的工具数据。";
      return;
    }

    if (!keyword) {
      elements.resultsCount.textContent = `共 ${totalCount} 个工具`;
      return;
    }

    elements.resultsCount.textContent = `匹配 ${visibleCount} / ${totalCount} 个工具`;
  }

  function renderTools(keyword = "") {
    if (!elements.list || !elements.emptyState) {
      return;
    }

    const normalizedKeyword = keyword.trim().toLowerCase();
    const filteredTools = normalizedKeyword
      ? state.tools.filter((tool) => {
        const name = tool.name.toLowerCase();
        const description = tool.description.toLowerCase();
        return name.includes(normalizedKeyword) || description.includes(normalizedKeyword);
      })
      : state.tools;

    elements.list.innerHTML = "";

    if (!filteredTools.length) {
      elements.emptyState.hidden = false;
      elements.emptyState.textContent = normalizedKeyword
        ? `没有找到与“${keyword.trim()}”相关的工具，请尝试其他关键词。`
        : "暂无可展示的工具，请稍后再试。";
      updateResultCount(0, state.tools.length, normalizedKeyword);
      return;
    }

    elements.emptyState.hidden = true;

    const fragment = document.createDocumentFragment();
    filteredTools.forEach((tool, index) => {
      fragment.append(createToolCard(tool, index));
    });

    elements.list.append(fragment);
    updateResultCount(filteredTools.length, state.tools.length, normalizedKeyword);
  }

  async function loadTools() {
    setStatus("正在加载工具列表...");

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

      renderTools();

      if (!state.tools.length) {
        setStatus("数据为空，请检查 JSON 文件内容。", true);
      } else {
        setStatus("");
      }
    } catch (error) {
      state.tools = [];
      renderTools();
      setStatus("工具数据加载失败，请稍后重试。", true);
    }
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
    setupSearch();
    loadTools();
  }

  init();
})();
