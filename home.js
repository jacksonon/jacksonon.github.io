(() => {
  "use strict";

  const THEME_STORAGE_KEY = "rightai-theme";
  const LANGUAGE_STORAGE_KEY = "rightai-language";
  const DEFAULT_LANGUAGE = "zh";

  /* ==========================================================================
     i18n Translations
     ========================================================================== */
  const TRANSLATIONS = {
    "zh": {
      "skip.link": "跳至主要内容",
      "nav.home": "首页",
      "nav.philosophy": "内核与执行",
      "nav.features": "工作界面",
      "nav.demo": "演示视频",
      "nav.quickstart": "快速开始",
      "nav.discuss": "社区讨论",
      "nav.links": "友情链接",
      "nav.donate": "打赏支持",
      "hero.badge": "",
      "hero.label": "Right AI Omni Agent Harness",
      "hero.title": "极简透明高效",
      "hero.desc1": "Right AI Omni 是一个开源（BSD-3-Clause）的终端型 Agent 工程 / Agent Harness，源代码公开可查。",
      "hero.desc2": "模型与提供商配置、工具执行、权限审批、上下文管理和子代理协作集中在同一内核。支持 TUI、Web、mini CLI 与 Electron，也能从手机浏览器连接电脑上的 Agent。",
      "hero.btn.github": "查看 GitHub",
      "hero.btn.docs": "工作界面",
      "hero.btn.dist": "桌面端下载",
      "hero.btn.donate": "打赏支持",
      "hero.ext.tag": "内置 Omni 内核",
      "hero.ext.note": "Chrome 浏览器插件：",
      "hero.btn.chrome": "RightAI 商店扩展",
      "hero.btn.download": "Right AI 离线插件 (ZIP)",
      "term.tab.npx": "npx Web 启动",
      "term.tab.npm": "npm / bun 全局安装",
      "term.tab.curl": "curl 一键安装",
      "term.copy": "复制",
      "term.copied": "已复制",
      "demo.title": "看看 Omni 如何工作",
      "demo.desc": "观看任务执行与界面演示。选择适合你的工作方式后，可按下方指引安装，再连接手机或另一台电脑。",
      "demo.bilibili": "前往哔哩哔哩观看高清完整视频（支持 1080P / 高帧率）",
      "use.eyebrow": "开始使用",
      "use.title": "多元化安装与运行方案",
      "use.1.title": "npx Web 免安装体验",
      "use.1.desc": "无需全局安装，一行命令即刻拉起本地服务并唤起浏览器 Web 工作台，体验完整多会话 Agent 交互。",
      "use.2.title": "npm / bun 全局安装",
      "use.2.desc": "支持 npm 或 bun 全局安装 @right-ai/omni，随时随地在终端调度 Agent。",
      "use.3.title": "curl 一键安装（原生二进制）",
      "use.3.desc": "零依赖原生二进制文件，自动识别平台架构，自带完整全屏 OpenTUI 沉浸交互体验。",
      "use.4.title": "Electron 桌面端（免环境依赖）",
      "use.4.desc": "macOS (Apple Silicon / Intel)、Windows (.exe)、Linux (.AppImage) 独立安装包，内置运行环境开箱即用。",
      "use.4.btn": "前往 Releases",
      "comments.kicker": "社区互动 · DISCUSS",
      "comments.title": "评论与讨论区",
      "comments.lead": "基于 GitHub Discussions 驱动的实时评论区。欢迎在此分享你的使用心得、插件灵感或反馈问题。",
      "footer.links.title": "友情链接 · FRIENDLY LINKS",
      "links.heading": "推荐生态与合作伙伴",
      "links.lead": "精选优质开发者工具、AI Agent 资源与开源项目。",
      "footer.links.0.name": "Right AI 浏览器插件",
      "footer.links.0.desc": "Chrome 商店官方扩展 · 网页 AI 助手与效率工具箱",
      "footer.links.1": "基于 Apple Store Connect API 的应用在线管理服务",
      "footer.links.2": "一个基于语言配置，推测及讲解商店商品页语言顺序",
      "footer.links.3": "免费 Agent 资源站点",
      "footer.links.4": "开源 AI 编程 Agent",
      "footer.chrome": "Right AI 浏览器插件",
      "footer.wechat": "微信公众号",
      "footer.wechat.scan": "扫码关注获取动态",
      "footer.license": "开源 · BSD-3-Clause 协议",
      "footer.copyright": "© 2026 Omni 版权所有",
      "footer.privacy": "隐私政策",
      "donate.title": "感谢支持 Omni！",
      "donate.message": "扫描二维码完成打赏，支持开源与持续迭代！",
      "donate.alipay": "支付宝",
      "donate.wechat": "微信支付",
      "philo.eyebrow": "执行回路 · 可追踪，可干预",
      "philo.title": "从一个任务，到可验证的结果",
      "philo.desc": "基于原生 OpenAI SDK 构建。模型决定下一步，Omni 负责上下文、执行边界和结果回传，让每一步都有迹可循。",
      "loop.1.title": "组装上下文",
      "loop.1.desc": "读取项目指引、相关文件与会话历史；长任务通过摘要与压缩管理上下文。",
      "loop.2.title": "流式调用模型",
      "loop.2.desc": "通过模型提供商配置连接 Chat Completions 或 Responses，输出回答或工具调用。",
      "loop.3.title": "检查执行边界",
      "loop.3.desc": "每次工具调用经过权限策略、审批与审计；按配置启用命令沙箱和生命周期 Hooks。",
      "loop.4.title": "执行并回传结果",
      "loop.4.desc": "并行执行本轮工具，将结果按顺序返回模型；失败与拒绝也进入下一轮判断。",
      "loop.feedback": "工具结果 → 更新上下文 → 继续执行，直到模型给出回答或达到步数上限。",
      "core.1.title": "权限与沙箱，分别配置",
      "core.1.desc": "full / safe / ask / read 四级权限，默认 safe。OS 沙箱默认关闭；启用后默认 fail-closed，无法提供所需隔离时拒绝执行。Windows 原生沙箱尚未实现。",
      "core.2.title": "上下文随任务延续",
      "core.2.desc": "全局与项目 AGENTS.md 级联加载，SKILL.md 按需读取；JSONL 会话持久化、摘要压缩与检查点支持长任务和后续恢复。",
      "core.3.title": "从单循环到任务协作",
      "core.3.desc": "支持前后台子代理、共享任务看板与消息通信；工作流按依赖分批执行，子代理可选择 git worktree 隔离。通过 MCP、插件与 Hooks 扩展能力。",
      "feat.eyebrow": "四种入口 · 同一套 Agent 能力",
      "feat.title": "同一个 Agent 内核，四种工作方式",
      "feat.desc": "从终端到桌面，再到手机浏览器。各入口复用 Agent 循环与工具能力，按使用场景提供不同的交互方式。",
      "interface.tui.title": "全屏终端，专注键盘工作流",
      "interface.tui.desc": "OpenTUI 提供流式思考、工具卡片、Markdown 与 Diff；用 @ 浏览文件，用斜杠命令切换模型、管理任务与会话。",
      "interface.tui.alt": "全屏 TUI 界面",
      "interface.web.title": "浏览器工作台，也能从手机接入",
      "interface.web.desc": "按工作区管理多个会话，查看工具执行与 Diff，响应审批和提问。移动端抽屉导航配合账号登录、扫码配对与隧道，连接你电脑上的 Agent。",
      "interface.web.alt": "Web 多会话工作台",
      "interface.mini.title": "滚屏终端，保留熟悉的命令行节奏",
      "interface.mini.desc": "行式呈现流式回答、工具输出与每轮 token、耗时统计；交互选择器使用临时屏幕。自动化与管道场景可使用 omni exec 的结构化输出。",
      "interface.mini.alt": "mini CLI 行式终端界面",
      "interface.electron.title": "独立桌面窗口，内置运行环境",
      "interface.electron.desc": "提供 macOS、Windows、Linux 安装包，在独立窗口中使用 Web 工作台与本地后端，无需单独安装 Node.js。下图展示共用的 Web 界面。",
      "interface.electron.alt": "Electron 共用的 Web 工作台界面",
      "kernel.eyebrow": "SHARED RUNTIME",
      "kernel.title": "界面之下，是同一套执行能力",
      "kernel.desc": "界面负责展示与交互，核心负责模型调用、工具执行、权限策略与会话管理。Headless Exec 与 MCP Server 也复用这些能力。",
      "layer.1.title": "模型接入",
      "layer.1.desc": "providers 配置 · Chat Completions / Responses · 模型与思考级别切换",
      "layer.2.title": "上下文与循环",
      "layer.2.desc": "级联记忆 · 摘要压缩 · 流式调用 · 并行工具 · 结果回传",
      "layer.3.title": "工具与扩展",
      "layer.3.desc": "8 个静态工具：读、写、编辑、目录、搜索、命令、技能、LSP；运行时扩展子代理、提问、协作、搜索与 MCP 工具",
      "layer.4.title": "执行与持久化",
      "layer.4.desc": "权限与审批 · 可选 OS 沙箱 · Hooks · 审计 · JSONL 会话与检查点",
      "remote.eyebrow": "REMOTE ACCESS · v0.9.1",
      "remote.title": "电脑上执行，手机上继续",
      "remote.desc": "通过浏览器发送任务、查看执行进展、处理审批与提问。代码、命令和 Agent 后端仍在运行 Omni 的电脑上执行；电脑与服务需要保持在线。",
      "remote.route.client": "手机 / 另一台电脑",
      "remote.route.access": "局域网 / HTTPS 隧道 + 登录认证",
      "remote.route.host": "你的电脑 · Omni Web + Agent",
      "remote.auth.title": "首次接入：先在电脑上设置账号密码",
      "remote.auth.desc": "密码以 scrypt 哈希保存。扫码使用 5 分钟有效、单次兑换的配对码；后续也可使用账号密码登录。",
      "remote.1.title": "同一网络，扫码配对",
      "remote.1.desc": "电脑启动后显示局域网链接与终端二维码。手机连接同一局域网，扫码进入 Web 工作台。",
      "remote.1.note": "也可运行 omni web --host 0.0.0.0，使用局域网地址和账号密码登录。",
      "remote.2.title": "离开局域网，通过隧道接入",
      "remote.2.desc": "安装 cloudflared 后，生成临时公网 HTTPS 地址。使用账号密码登录，手机浏览器可在 HTTPS 下添加到主屏幕。",
      "remote.2.note": "临时地址用于快速连接；固定域名与长期访问可配置 Cloudflare 命名隧道。",
      "remote.3.title": "常驻服务，管理启停与自启",
      "remote.3.desc": "已配置命名隧道及其本地配置文件后，用 LaunchAgent 管理 Web 与隧道进程。此服务管理命令目前仅支持 macOS。",
      "remote.3.note": "将 omni 替换为你的隧道名。start / stop / restart 控制运行状态；enable / disable 单独控制登录自启；status 查看状态。",
      "remote.events": "远程消息自动适配：优先使用 SSE；遇到隧道缓冲等情况，自动回退长轮询，继续接收任务事件。",
      "nav.remote": "远程控制",
      "hero.btn.remote": "手机远程控制",
      "interfaces.label": "选择 Omni 界面",
      "interfaces.zoom": "放大界面截图",
      "kernel.source": "阅读架构参考 ↗",
      "remote.guide": "查看使用指南 ↗",
      "interfaces.preview": "界面截图预览",
      "interfaces.close": "关闭预览"
    },
    "en": {
      "skip.link": "Skip to main content",
      "nav.home": "Home",
      "nav.philosophy": "Core & execution",
      "nav.features": "Interfaces",
      "nav.demo": "Demo",
      "nav.quickstart": "Quick Start",
      "nav.discuss": "Discuss",
      "nav.links": "Links",
      "nav.donate": "Donate",
      "hero.badge": "",
      "hero.label": "Right AI Omni Agent Harness",
      "hero.title": "Minimal, Transparent & High-Efficiency",
      "hero.desc1": "Right AI Omni is an open-source (BSD-3-Clause) terminal-based agent harness; the source code is public.",
      "hero.desc2": "One core brings together provider settings, tools, permissions, context and subagents. Work through TUI, Web, mini CLI or Electron, or connect to your computer’s agent from a phone browser.",
      "hero.btn.github": "View on GitHub",
      "hero.btn.docs": "Interfaces",
      "hero.btn.dist": "Download Desktop",
      "hero.btn.donate": "Donate",
      "hero.ext.tag": "Built-in Omni Core",
      "hero.ext.note": "Chrome Extension:",
      "hero.btn.chrome": "RightAI Web Store",
      "hero.btn.download": "Right AI Offline Package (ZIP)",
      "term.tab.npx": "npx Web Run",
      "term.tab.npm": "npm / bun Install",
      "term.tab.curl": "curl Install",
      "term.copy": "Copy",
      "term.copied": "Copied!",
      "demo.title": "See Omni in action",
      "demo.desc": "Watch task execution and interface demos. Choose the way you want to work, then follow the installation and remote access guides below.",
      "demo.bilibili": "Watch Full HD Video on Bilibili (1080P)",
      "use.eyebrow": "GETTING STARTED",
      "use.title": "Multiple Ways to Install and Run Omni",
      "use.1.title": "npx Web Instant Start",
      "use.1.desc": "Zero global setup. Launch the local backend and browser Web UI immediately to explore multi-session agentic coding.",
      "use.2.title": "npm / bun Global Install",
      "use.2.desc": "Supports npm install -g @right-ai/omni or bun install -g @right-ai/omni for CLI execution.",
      "use.3.title": "curl One-Liner (Native Binary)",
      "use.3.desc": "Zero-dependency native binary with auto-detected platform architecture and full OpenTUI experience.",
      "use.4.title": "Electron Desktop App (No Node Needed)",
      "use.4.desc": "Standalone desktop bundle for macOS (ARM/Intel), Windows, and Linux. No Node or Bun setup required.",
      "use.4.btn": "Releases",
      "comments.kicker": "COMMUNITY DISCUSS",
      "comments.title": "Comments & Discussions",
      "comments.lead": "Real-time discussions powered by GitHub Discussions. Share your feedback, ideas, and creations.",
      "footer.links.title": "FRIENDLY LINKS",
      "links.heading": "Ecosystem & Friendly Links",
      "links.lead": "Curated developer utilities, AI agent directories, and open-source tools.",
      "footer.links.0.name": "Right AI Chrome Extension",
      "footer.links.0.desc": "Chrome Web Store Official Extension · AI Sidebar & Web Productivity Toolkit",
      "footer.links.1": "Online app management service built on Apple Store Connect API",
      "footer.links.2": "Predicts and explains store product page language order",
      "footer.links.3": "Resource site offering free AI agents",
      "footer.links.4": "Open-source AI coding agent",
      "footer.chrome": "Right AI Chrome Extension",
      "footer.wechat": "WeChat Official",
      "footer.wechat.scan": "Scan to follow updates",
      "footer.license": "Open Source · BSD-3-Clause License",
      "footer.copyright": "© 2026 Omni. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "donate.title": "Support Omni",
      "donate.message": "Scan to donate and support open-source development!",
      "donate.alipay": "Alipay",
      "donate.wechat": "WeChat Pay",
      "philo.eyebrow": "THE EXECUTION LOOP",
      "philo.title": "From a task to a result you can verify",
      "philo.desc": "Built on the OpenAI SDK. The model chooses the next step; Omni manages context, execution boundaries and feedback so you can follow the work.",
      "loop.1.title": "Assemble context",
      "loop.1.desc": "Load project instructions, relevant files and session history. Summaries and compaction manage context during longer tasks.",
      "loop.2.title": "Stream the model response",
      "loop.2.desc": "Connect through provider settings using Chat Completions or Responses, returning an answer or tool calls.",
      "loop.3.title": "Check execution boundaries",
      "loop.3.desc": "Each tool call passes permission policy, approval and auditing, with command sandboxing and lifecycle hooks configured as needed.",
      "loop.4.title": "Execute and return results",
      "loop.4.desc": "Run tool calls in parallel and return results in order. Errors and denials also inform the next model step.",
      "loop.feedback": "Tool results → updated context → another step, until the model answers or the step limit is reached.",
      "core.1.title": "Permissions and sandboxing, configured separately",
      "core.1.desc": "Four permission levels: full / safe / ask / read, with safe as the default. The OS sandbox is off by default; when enabled, it fails closed if required isolation is unavailable. Native Windows sandboxing is not implemented.",
      "core.2.title": "Context that follows the task",
      "core.2.desc": "Cascade global and project AGENTS.md instructions, load SKILL.md on demand, and use JSONL persistence, compaction and checkpoints for longer tasks and later resumption.",
      "core.3.title": "From one loop to coordinated work",
      "core.3.desc": "Use foreground and background subagents, shared task boards and messages. Workflows run in dependency batches, with optional git worktree isolation. Extend capabilities through MCP, plugins and hooks.",
      "feat.eyebrow": "FOUR SURFACES · ONE AGENT CORE",
      "feat.title": "One agent core. Four ways to work.",
      "feat.desc": "From the terminal to the desktop and a phone browser. Each surface reuses the agent loop and tools, with interactions suited to the way you work.",
      "interface.tui.title": "A full-screen, keyboard-first workspace",
      "interface.tui.desc": "OpenTUI brings streamed reasoning, tool cards, Markdown and diffs. Browse files with @ and use slash commands to switch models and manage tasks and sessions.",
      "interface.tui.alt": "Full-screen TUI",
      "interface.web.title": "A browser workspace, accessible from your phone",
      "interface.web.desc": "Manage sessions by workspace, inspect tool runs and diffs, and respond to approvals and questions. Mobile navigation, account login, QR pairing and tunnels connect you to the agent on your computer.",
      "interface.web.alt": "Web multi-session workspace",
      "interface.mini.title": "A scrolling terminal that fits your CLI workflow",
      "interface.mini.desc": "See streamed answers, tool output and per-turn token and timing stats in scrollback. Interactive pickers use a temporary screen. For automation and pipelines, use structured output from omni exec.",
      "interface.mini.alt": "mini CLI scrolling terminal",
      "interface.electron.title": "A standalone desktop window with a bundled runtime",
      "interface.electron.desc": "Packages for macOS, Windows and Linux run the Web workspace and local backend in a desktop window, with no separate Node.js installation. The image shows the shared Web interface.",
      "interface.electron.alt": "The Web workspace shared by Electron",
      "kernel.eyebrow": "SHARED RUNTIME",
      "kernel.title": "A shared execution core beneath the interfaces",
      "kernel.desc": "Interfaces handle display and interaction; the core handles model calls, tools, permissions and sessions. Headless Exec and the MCP server reuse these capabilities too.",
      "layer.1.title": "Models",
      "layer.1.desc": "Provider settings · Chat Completions / Responses · model and reasoning selection",
      "layer.2.title": "Context & loop",
      "layer.2.desc": "Cascaded memory · compaction · streaming · parallel tools · result feedback",
      "layer.3.title": "Tools & extensions",
      "layer.3.desc": "8 static tools: read, write, edit, list, search, command, skill and LSP; runtime extensions for delegation, questions, collaboration, web search and MCP",
      "layer.4.title": "Execution & state",
      "layer.4.desc": "Permissions and approvals · optional OS sandbox · hooks · auditing · JSONL sessions and checkpoints",
      "remote.eyebrow": "REMOTE ACCESS · v0.9.1",
      "remote.title": "Run on your computer. Continue from your phone.",
      "remote.desc": "Send tasks, follow progress, and handle approvals and questions in a browser. Code, commands and the agent backend run on the computer hosting Omni, which must stay online with the service running.",
      "remote.route.client": "Phone / another computer",
      "remote.route.access": "LAN / HTTPS tunnel + authentication",
      "remote.route.host": "Your computer · Omni Web + Agent",
      "remote.auth.title": "Before connecting: set up an account on your computer",
      "remote.auth.desc": "Passwords are stored as scrypt hashes. QR pairing uses a single-use code valid for five minutes; account login is also available.",
      "remote.1.title": "On the same network, scan to pair",
      "remote.1.desc": "Start Omni to display a LAN link and terminal QR code. Connect your phone to the same network and scan to open the Web workspace.",
      "remote.1.note": "Or run omni web --host 0.0.0.0 and log in at the LAN address with your account.",
      "remote.2.title": "Connect beyond your LAN through a tunnel",
      "remote.2.desc": "Install cloudflared to create a temporary public HTTPS address. Sign in with your account; on HTTPS, add the Web app to your phone’s home screen.",
      "remote.2.note": "Use the temporary URL for quick access. Configure a named Cloudflare tunnel for a stable domain and longer-term access.",
      "remote.3.title": "Keep it running and manage startup",
      "remote.3.desc": "After configuring a named tunnel and its local configuration file, use LaunchAgent to manage the Web and tunnel processes. Service management currently supports macOS only.",
      "remote.3.note": "Replace omni with your tunnel name. start / stop / restart control running processes; enable / disable control login startup independently. Use status to inspect both.",
      "remote.events": "Remote updates adapt automatically: SSE is preferred; if a tunnel buffers the stream, the client falls back to long polling to keep receiving task events.",
      "nav.remote": "Remote access",
      "hero.btn.remote": "Connect from your phone",
      "interfaces.label": "Choose an Omni interface",
      "interfaces.zoom": "Enlarge interface screenshot",
      "kernel.source": "Read the architecture reference ↗",
      "remote.guide": "Read the user guide ↗",
      "interfaces.preview": "Interface screenshot preview",
      "interfaces.close": "Close preview"
    }
  };

  /* ==========================================================================
     Language & i18n
     ========================================================================== */
  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("zh")) return "zh";
    return "en";
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANGUAGE;
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (e) {}
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.documentElement.setAttribute("data-language", lang);
    document.body.setAttribute("data-language", lang);

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.zh;
    document.title = "Right AI - Agent Harness";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt], [data-i18n-aria]").forEach((el) => {
      for (const [dataAttr, attr] of [["data-i18n-alt", "alt"], ["data-i18n-aria", "aria-label"]]) {
        const value = dict[el.getAttribute(dataAttr)];
        if (value) el.setAttribute(attr, value);
      }
    });

    // Update toggle buttons
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const bLang = btn.getAttribute("data-lang-btn");
      if (bLang === lang) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });

    document.dispatchEvent(new CustomEvent("rightai:language-change", { detail: { language: lang } }));
  }

  function initI18n() {
    const current = getCurrentLanguage();
    setLanguage(current);

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-lang-btn");
        setLanguage(target);
      });
    });
  }

  /* ==========================================================================
     WebGL2 Hero Fluid Shader with Ping-Pong Flowmap Simulation (DeepSeek Exact)
     ========================================================================== */
  const HERO_FLOW_FS = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform sampler2D u_prev;
uniform vec2 u_mouse;
uniform vec2 u_velocity;
uniform float u_brushRadius;
uniform float u_brushStrength;
uniform float u_decay;
out vec4 fragColor;

void main() {
  vec4 prev = texture(u_prev, vUv);

  prev.r *= u_decay;
  prev.gb = mix(vec2(0.5), prev.gb, u_decay);

  float dist = distance(vUv, u_mouse);

  float influence = exp(-dist * dist / (u_brushRadius * u_brushRadius * 0.5));
  influence = max(0.0, influence - 0.01);

  float speed = length(u_velocity);
  float presenceStrength = u_brushStrength * 0.3;
  float velBonus = min(speed * 3.0, 0.7) * u_brushStrength;
  float totalStrength = presenceStrength + velBonus;

  prev.r = max(prev.r, influence * totalStrength);
  float blendAmt = influence * min(totalStrength, 0.4) * 0.3;
  prev.g = mix(prev.g, clamp(u_velocity.x * 2.0 + 0.5, 0.0, 1.0), blendAmt);
  prev.b = mix(prev.b, clamp(u_velocity.y * 2.0 + 0.5, 0.0, 1.0), blendAmt);

  fragColor = prev;
}
`;

  const HERO_VS_SOURCE = `#version 300 es
in vec4 a_position;
out vec2 vUv;
void main() {
  vUv = a_position.xy * 0.5 + 0.5;
  gl_Position = a_position;
}
`;

  const HERO_FLUID_FS = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_c1, u_c2, u_c3, u_c4, u_c5;
uniform float u_scale;
uniform vec2 u_offset;
uniform float u_grain;
uniform float u_speed;
uniform sampler2D u_flowmap;
uniform float u_distortBoost;
uniform float u_swirlBoost;
uniform float u_glowIntensity;
uniform vec3 u_glowColor1;
uniform vec3 u_glowColor2;
uniform vec3 u_glowColor3;
uniform vec2 u_lightPos;
uniform float u_lightCore;
uniform float u_lightHalo;
uniform float u_vignette;
uniform float u_bloomThreshold;
uniform float u_bloomRange;
uniform float u_bloomStrength;
out vec4 fragColor;

vec3 mod289v3(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289v4(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289v4(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289v3(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

float hash(vec2 p){
  vec3 p3=fract(vec3(p.xyx)*.1031);
  p3+=dot(p3,p3.yzx+33.33);
  return fract((p3.x+p3.y)*p3.z);
}

float fbm(vec3 p){
  float v=0.,amp=.6;vec3 shift=vec3(100.);
  for(int i=0;i<1;i++){v+=amp*snoise(p);p=p*2.+shift;amp*=.4;}
  return v;
}

float fluidNoise(vec2 uv,float t){
  float n1=fbm(vec3(uv*.6,t*.06));
  float n2=fbm(vec3(uv*.6+5.2,t*.06+1.3));
  vec2 w1=vec2(n1,n2)*.6;
  float n3=fbm(vec3((uv+w1)*.7+1.7,t*.05+3.1));
  float n4=fbm(vec3((uv+w1)*.7+9.2,t*.05+5.7));
  vec2 w2=vec2(n3,n4)*.5;
  return fbm(vec3((uv+w1+w2)*.5,t*.04));
}

vec2 curlish(vec2 uv,float t){
  float eps=.02;
  float n=snoise(vec3(uv*.8,t));
  float nx=snoise(vec3((uv+vec2(eps,0.))*.8,t));
  float ny=snoise(vec3((uv+vec2(0.,eps))*.8,t));
  return vec2(-(ny-n)/eps,(nx-n)/eps)*.003;
}

void main(){
  float aspect=u_resolution.x/u_resolution.y;
  vec2 uv=gl_FragCoord.xy/u_resolution;
  vec2 suv=vec2(uv.x*aspect, uv.y) * u_scale + u_offset;
  float t=u_time;

  // Mouse interaction via flowmap
  vec4 flow = texture(u_flowmap, uv);
  float influence = flow.r;
  vec2 flowDir = (flow.gb - 0.5) * 2.0;

  // Apply mouse distortion to UV
  suv += flowDir * influence * u_distortBoost * 0.8;
  // Apply mouse swirl
  float swirlAngle = influence * u_swirlBoost * 2.5;
  float cs = cos(swirlAngle), sn = sin(swirlAngle);
  vec2 delta = suv - vec2(uv.x * aspect, uv.y) * u_scale;
  suv += (mat2(cs, sn, -sn, cs) * delta - delta) * influence;

  vec2 curl=curlish(suv,t*.04);
  vec2 uvD=suv+curl*12.;
  float f=fluidNoise(uvD,t);
  float swirl=snoise(vec3(uvD*.8+f*1.5,t*.035))*.5+.5;
  float n=f*.5+.5;
  vec3 col=mix(u_c1,u_c2,smoothstep(.2,.5,n));
  col=mix(col,u_c3,smoothstep(.35,.65,n+swirl*.25));
  col=mix(col,u_c4,smoothstep(.6,.85,swirl)*.55);
  col=mix(col,u_c5,smoothstep(.5,.8,n*swirl)*.35);

  // Mouse proximity color shift: 3-color glow blended by distance + noise
  float glow = smoothstep(0.0, 0.8, influence);
  float glowNoise = snoise(vec3(uvD * 1.5, t * 0.08)) * 0.5 + 0.5;
  float glowDist = smoothstep(0.0, 1.0, influence);
  vec3 glowMix = mix(u_glowColor3, u_glowColor2, glowDist);
  glowMix = mix(glowMix, u_glowColor1, glowDist * glowNoise);
  col = mix(col, glowMix, glow * u_glowIntensity);

  if(u_grain>0.0){
    vec2 flowOffset = (uvD - suv) * u_resolution.y;
    vec2 gp = floor((gl_FragCoord.xy + flowOffset) / 5.0);
    float gr=hash(gp)*2.-1.;
    col+=gr*u_grain;
  }

  // Self-luminance bloom: bright fluid regions become their own light spots
  float luma=dot(col,vec3(.299,.587,.114));
  float bloom=smoothstep(u_bloomThreshold-u_bloomRange,u_bloomThreshold+u_bloomRange,luma);
  col+=(col*.85+vec3(.15,.145,.13))*bloom*u_bloomStrength;

  // Virtual light source
  float ld=length((uv-u_lightPos)*vec2(aspect,1.));
  float core=exp(-ld*ld*4.5);
  float halo=exp(-ld*1.8);
  col+=vec3(1.,.97,.9)*core*u_lightCore+vec3(.72,.8,1.)*halo*u_lightHalo;

  float vig=1.-smoothstep(.35,.75,length(uv-.5));
  col=mix(col*(1.-u_vignette),col,vig);
  fragColor=vec4(col,1.);
}
`;

  const HERO_FLUID_PARAMS = {
    mouseRadius: 0.09,
    mouseStrength: 1.8,
    mouseSmoothing: 0.1,
    mouseVelocity: 0.2,
    decay: 0.925,
    distortBoost: 2.2,
    noiseBoost: 0.3,
    swirlBoost: 0.8,
    glowIntensity: 0.13,
    glowColors: ["#fff7d1", "#538dca", "#2d448b"],
    speed: 28,
    scale: 1.77,
    offsetX: -124,
    offsetY: -48,
    grain: 0.005,
    colors: ["#000000", "#1A3870", "#204a7e", "#eed8aa", "#000000"],
    lightX: 0.89,
    lightY: 0.46,
    lightCore: 0.14,
    lightHalo: 0.2,
    vignette: 0.38,
    lightFollow: 0.63,
    bloomThreshold: 0.61,
    bloomRange: 0.18,
    bloomStrength: 0.4
  };

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    return [
      parseInt(clean.slice(0, 2), 16) / 255,
      parseInt(clean.slice(2, 4), 16) / 255,
      parseInt(clean.slice(4, 6), 16) / 255
    ];
  }

  function initHeroShader() {
    const canvas = document.getElementById("hero-shader-canvas");
    if (!canvas) return;

    let gl = null;
    try {
      gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: false, powerPreference: "low-power" });
    } catch (e) {}

    if (!gl) {
      if (canvas.parentElement) {
        canvas.parentElement.style.background = "radial-gradient(ellipse 80% 60% at 50% 20%, #173872 0%, #0a1329 45%, #0a0a0a 100%)";
      }
      return;
    }

    function createShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn("Shader error:", gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    function createProg(fsSrc) {
      const vs = createShader(gl.VERTEX_SHADER, HERO_VS_SOURCE);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.warn("Link error:", gl.getProgramInfoLog(prog));
        return null;
      }
      return prog;
    }

    const flowProg = createProg(HERO_FLOW_FS);
    const fluidProg = createProg(HERO_FLUID_FS);
    if (!flowProg || !fluidProg) return;

    const flowUniforms = {
      prev: gl.getUniformLocation(flowProg, "u_prev"),
      mouse: gl.getUniformLocation(flowProg, "u_mouse"),
      velocity: gl.getUniformLocation(flowProg, "u_velocity"),
      brushRadius: gl.getUniformLocation(flowProg, "u_brushRadius"),
      brushStrength: gl.getUniformLocation(flowProg, "u_brushStrength"),
      decay: gl.getUniformLocation(flowProg, "u_decay")
    };

    const fluidUniforms = {
      time: gl.getUniformLocation(fluidProg, "u_time"),
      resolution: gl.getUniformLocation(fluidProg, "u_resolution"),
      scale: gl.getUniformLocation(fluidProg, "u_scale"),
      offset: gl.getUniformLocation(fluidProg, "u_offset"),
      grain: gl.getUniformLocation(fluidProg, "u_grain"),
      speed: gl.getUniformLocation(fluidProg, "u_speed"),
      flowmap: gl.getUniformLocation(fluidProg, "u_flowmap"),
      distortBoost: gl.getUniformLocation(fluidProg, "u_distortBoost"),
      swirlBoost: gl.getUniformLocation(fluidProg, "u_swirlBoost"),
      glowIntensity: gl.getUniformLocation(fluidProg, "u_glowIntensity"),
      glowColor1: gl.getUniformLocation(fluidProg, "u_glowColor1"),
      glowColor2: gl.getUniformLocation(fluidProg, "u_glowColor2"),
      glowColor3: gl.getUniformLocation(fluidProg, "u_glowColor3"),
      c1: gl.getUniformLocation(fluidProg, "u_c1"),
      c2: gl.getUniformLocation(fluidProg, "u_c2"),
      c3: gl.getUniformLocation(fluidProg, "u_c3"),
      c4: gl.getUniformLocation(fluidProg, "u_c4"),
      c5: gl.getUniformLocation(fluidProg, "u_c5"),
      lightPos: gl.getUniformLocation(fluidProg, "u_lightPos"),
      lightCore: gl.getUniformLocation(fluidProg, "u_lightCore"),
      lightHalo: gl.getUniformLocation(fluidProg, "u_lightHalo"),
      vignette: gl.getUniformLocation(fluidProg, "u_vignette"),
      bloomThreshold: gl.getUniformLocation(fluidProg, "u_bloomThreshold"),
      bloomRange: gl.getUniformLocation(fluidProg, "u_bloomRange"),
      bloomStrength: gl.getUniformLocation(fluidProg, "u_bloomStrength")
    };

    // Quad buffer
    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    function bindQuad(prog) {
      const loc = gl.getAttribLocation(prog, "a_position");
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    function createFBO(w, h, data) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      if (data) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { fbo, tex };
    }

    let canvasW = 0, canvasH = 0;
    let flowW = 0, flowH = 0;
    let ping = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvasW = Math.round(canvas.clientWidth * dpr) || 1440;
    canvasH = Math.round(canvas.clientHeight * dpr) || 900;
    canvas.width = canvasW;
    canvas.height = canvasH;
    flowW = Math.max(1, Math.round(canvasW / 4));
    flowH = Math.max(1, Math.round(canvasH / 4));

    const initData = new Uint8Array(flowW * flowH * 4);
    for (let i = 0; i < flowW * flowH; i++) {
      initData[4 * i] = 0;
      initData[4 * i + 1] = 128;
      initData[4 * i + 2] = 128;
      initData[4 * i + 3] = 255;
    }

    let fboA = createFBO(flowW, flowH, initData);
    let fboB = createFBO(flowW, flowH, initData);

    const mouseState = {
      x: 0.5, y: 0.5,
      smoothX: 0.5, smoothY: 0.5,
      vx: 0, vy: 0,
      svx: 0, svy: 0
    };

    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!isCoarse) {
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseState.x = (e.clientX - rect.left) / rect.width;
        mouseState.y = 1 - (e.clientY - rect.top) / rect.height;
      }, { passive: true });
    }

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    observer.observe(canvas.parentElement || canvas);

    const startTime = performance.now();
    let lastRenderTime = 0;
    const FRAME_MS = 1000 / 30;

    function render(now) {
      requestAnimationFrame(render);
      if (!isVisible || now - lastRenderTime < FRAME_MS) return;
      lastRenderTime = now - (now - lastRenderTime) % FRAME_MS;

      const curW = Math.round(canvas.clientWidth * dpr);
      const curH = Math.round(canvas.clientHeight * dpr);
      if (curW !== canvasW || curH !== canvasH) {
        canvasW = curW;
        canvasH = curH;
        canvas.width = canvasW;
        canvas.height = canvasH;
      }

      const p = HERO_FLUID_PARAMS;
      mouseState.smoothX += (mouseState.x - mouseState.smoothX) * p.mouseSmoothing;
      mouseState.smoothY += (mouseState.y - mouseState.smoothY) * p.mouseSmoothing;
      mouseState.svx += ((mouseState.x - mouseState.smoothX) * 0.5 - mouseState.svx) * p.mouseVelocity;
      mouseState.svy += ((mouseState.y - mouseState.smoothY) * 0.5 - mouseState.svy) * p.mouseVelocity;

      // Ping-pong flowmap step
      const readFBO = ping ? fboA : fboB;
      const writeFBO = ping ? fboB : fboA;
      ping = !ping;

      gl.bindFramebuffer(gl.FRAMEBUFFER, writeFBO.fbo);
      gl.viewport(0, 0, flowW, flowH);
      gl.useProgram(flowProg);
      bindQuad(flowProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, readFBO.tex);
      gl.uniform1i(flowUniforms.prev, 0);
      gl.uniform2f(flowUniforms.mouse, mouseState.smoothX, mouseState.smoothY);
      gl.uniform2f(flowUniforms.velocity, mouseState.svx, mouseState.svy);
      gl.uniform1f(flowUniforms.brushRadius, p.mouseRadius);
      gl.uniform1f(flowUniforms.brushStrength, isCoarse ? 0 : p.mouseStrength);
      gl.uniform1f(flowUniforms.decay, p.decay);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // Render main fluid pass
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvasW, canvasH);
      gl.useProgram(fluidProg);
      bindQuad(fluidProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, writeFBO.tex);
      gl.uniform1i(fluidUniforms.flowmap, 0);

      const elapsedTime = (performance.now() - startTime) * 0.001 * (p.speed / 100);
      gl.uniform1f(fluidUniforms.time, elapsedTime);
      gl.uniform2f(fluidUniforms.resolution, canvasW, canvasH);
      gl.uniform1f(fluidUniforms.scale, p.scale);
      gl.uniform2f(fluidUniforms.offset, p.offsetX / 100, p.offsetY / 100);
      gl.uniform1f(fluidUniforms.grain, p.grain);
      gl.uniform1f(fluidUniforms.distortBoost, p.distortBoost);
      gl.uniform1f(fluidUniforms.swirlBoost, p.swirlBoost);

      const followX = isCoarse ? p.lightX : p.lightX + (mouseState.smoothX - p.lightX) * p.lightFollow;
      gl.uniform2f(fluidUniforms.lightPos, followX, p.lightY);
      gl.uniform1f(fluidUniforms.lightCore, isCoarse ? 0 : p.lightCore);
      gl.uniform1f(fluidUniforms.lightHalo, isCoarse ? 0 : p.lightHalo);
      gl.uniform1f(fluidUniforms.vignette, p.vignette);
      gl.uniform1f(fluidUniforms.bloomThreshold, p.bloomThreshold);
      gl.uniform1f(fluidUniforms.bloomRange, p.bloomRange);
      gl.uniform1f(fluidUniforms.bloomStrength, p.bloomStrength);
      gl.uniform1f(fluidUniforms.glowIntensity, p.glowIntensity);

      const g1 = hexToRgb(p.glowColors[0]);
      const g2 = hexToRgb(p.glowColors[1]);
      const g3 = hexToRgb(p.glowColors[2]);
      gl.uniform3f(fluidUniforms.glowColor1, g1[0], g1[1], g1[2]);
      gl.uniform3f(fluidUniforms.glowColor2, g2[0], g2[1], g2[2]);
      gl.uniform3f(fluidUniforms.glowColor3, g3[0], g3[1], g3[2]);

      const c1 = hexToRgb(p.colors[0]);
      const c2 = hexToRgb(p.colors[1]);
      const c3 = hexToRgb(p.colors[2]);
      const c4 = hexToRgb(p.colors[3]);
      const c5 = hexToRgb(p.colors[4]);
      gl.uniform3f(fluidUniforms.c1, c1[0], c1[1], c1[2]);
      gl.uniform3f(fluidUniforms.c2, c2[0], c2[1], c2[2]);
      gl.uniform3f(fluidUniforms.c3, c3[0], c3[1], c3[2]);
      gl.uniform3f(fluidUniforms.c4, c4[0], c4[1], c4[2]);
      gl.uniform3f(fluidUniforms.c5, c5[0], c5[1], c5[2]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    render(performance.now());
  }

  /* ==========================================================================
     Interactive 2D Particle Grid Mesh Canvas (DeepSeek Exact)
     ========================================================================== */
  function initHeroParticleMesh() {
    const canvas = document.getElementById("hero-particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isCoarse) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points = [];
    let cols = 0, rows = 0;
    let clientW = 0, clientH = 0;
    let isDormant = false;
    let animId = 0;
    const mouse = { x: NaN, y: NaN };
    let isIntersecting = true;

    const GRID_SIZE = 90;

    function buildGrid() {
      cols = Math.ceil(clientW / GRID_SIZE) + 1;
      rows = Math.ceil(clientH / GRID_SIZE) + 1;
      const startX = (clientW - (cols - 1) * GRID_SIZE) / 2;
      const startY = (clientH - (rows - 1) * GRID_SIZE) / 2;
      points = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = startX + c * GRID_SIZE;
          const y = startY + r * GRID_SIZE;
          points.push({
            restX: x, restY: y,
            x: x, y: y,
            vx: 0, vy: 0
          });
        }
      }
    }

    let resizeTimer = null;
    function resize() {
      clientW = canvas.clientWidth;
      clientH = canvas.clientHeight;
      canvas.width = clientW * dpr;
      canvas.height = clientH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    window.addEventListener("resize", () => {
      clientW = canvas.clientWidth;
      clientH = canvas.clientHeight;
      canvas.width = clientW * dpr;
      canvas.height = clientH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildGrid, 150);
    }, { passive: true });

    resize();

    function wake() {
      if (isDormant) {
        isDormant = false;
        animId = requestAnimationFrame(render);
      }
    }

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      wake();
    }, { passive: true });

    let lastTime = 0;
    const FRAME_INTERVAL = 1000 / 30;

    function render(time) {
      if (!isIntersecting || time - lastTime < FRAME_INTERVAL) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastTime = time - (time - lastTime) % FRAME_INTERVAL;

      ctx.clearRect(0, 0, clientW, clientH);

      const mx = mouse.x;
      const my = mouse.y;
      let maxVel = 0;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 0.1) {
          const force = (1 - dist / 140) * 30;
          p.vx += (dx / dist) * force * 0.1;
          p.vy += (dy / dist) * force * 0.1;
        }
        const rx = p.restX - p.x;
        const ry = p.restY - p.y;
        p.vx += 0.05 * rx;
        p.vy += 0.05 * ry;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;

        const vel = Math.abs(p.vx) + Math.abs(p.vy);
        if (vel > maxVel) maxVel = vel;
      }

      // Draw horizontal lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 0.5;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p1 = points[r * cols + c];
          const p2 = points[r * cols + c + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 20) continue;
          const nx = dx / dist, ny = dy / dist;
          ctx.beginPath();
          ctx.moveTo(p1.x + 10 * nx, p1.y + 10 * ny);
          ctx.lineTo(p2.x - 10 * nx, p2.y - 10 * ny);
          ctx.stroke();
        }
      }

      // Draw vertical lines
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 1; r++) {
          const p1 = points[r * cols + c];
          const p2 = points[(r + 1) * cols + c];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 20) continue;
          const nx = dx / dist, ny = dy / dist;
          ctx.beginPath();
          ctx.moveTo(p1.x + 10 * nx, p1.y + 10 * ny);
          ctx.lineTo(p2.x - 10 * nx, p2.y - 10 * ny);
          ctx.stroke();
        }
      }

      // Draw square dots
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        let sz = 1.8;
        let alpha = 0.16;
        if (!isNaN(mx) && !isNaN(my)) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const prox = Math.max(0, 1 - dist / 140);
          sz = 1.8 + 2 * prox;
          alpha = 0.16 + 0.4 * prox;
        }
        ctx.globalAlpha = alpha;
        ctx.fillRect(p.x - sz, p.y - sz, sz * 2, sz * 2);
      }
      ctx.globalAlpha = 1;

      if (maxVel < 0.01) {
        isDormant = true;
      } else {
        animId = requestAnimationFrame(render);
      }
    }

    animId = requestAnimationFrame(render);

    const observer = new IntersectionObserver((entries) => {
      isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) wake();
    }, { threshold: 0 });
    observer.observe(canvas);
  }

  /* ==========================================================================
     Interactive 3D Right AI Particle Logo (Disperse & Reform on Mouse)
     ========================================================================== */
  function initRightAiParticleLogo(THREE) {
    const canvas = document.getElementById("hero-logo-particle-canvas");
    if (!canvas) return;

    if (window.innerWidth < 768) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "assets/rightai-icon.png";

    img.onload = () => {
      const targetSize = 60;
      const offCanvas = document.createElement("canvas");
      offCanvas.width = targetSize;
      offCanvas.height = targetSize;
      const offCtx = offCanvas.getContext("2d");
      offCtx.clearRect(0, 0, targetSize, targetSize);

      const r = Math.min(targetSize / img.width, targetSize / img.height);
      const w = img.width * r;
      const h = img.height * r;
      offCtx.drawImage(img, (targetSize - w) / 2, (targetSize - h) / 2, w, h);

      const imgData = offCtx.getImageData(0, 0, targetSize, targetSize);
      const luma = new Float32Array(targetSize * targetSize);
      for (let i = 0; i < targetSize * targetSize; i++) {
        const p = 4 * i;
        const alpha = imgData.data[p + 3] / 255;
        luma[i] = alpha > 0.2 ? alpha : 0;
      }

      const isIsolated = (x, y) => {
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < targetSize && ny < targetSize && luma[ny * targetSize + nx] > 0.2) {
              return false;
            }
          }
        }
        return true;
      };

      const positions = [];
      const scatteredPositions = [];
      const opacities = [];
      const edges = [];
      const half = targetSize / 2;

      for (let y = 0; y < targetSize; y++) {
        for (let x = 0; x < targetSize; x++) {
          const val = luma[y * targetSize + x];
          if (val > 0.2 && !isIsolated(x, y)) {
            const posX = (x - half) * 0.18;
            const posY = (half - y) * 0.18;
            positions.push(posX, posY, 0);
            opacities.push(val);

            let edgeCount = 0;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = x + dx, ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= targetSize || ny >= targetSize || luma[ny * targetSize + nx] <= 0.2) {
                  edgeCount++;
                }
              }
            }
            edges.push(edgeCount / 8);

            const phi = Math.random() * Math.PI * 2;
            const theta = Math.acos(2 * Math.random() - 1);
            const dist = 3.5 * (0.4 + 0.6 * Math.random());
            scatteredPositions.push(
              Math.sin(theta) * Math.cos(phi) * dist,
              Math.sin(theta) * Math.sin(phi) * dist,
              Math.cos(theta) * dist * 0.5
            );
          }
        }
      }

      const count = positions.length / 3;
      if (count === 0) return;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(800, 800);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.set(0, 0, 18);

      const geometry = new THREE.BoxGeometry(0.06, 0.06, 0.018);
      const indexArray = new Float32Array(count);
      for (let i = 0; i < count; i++) indexArray[i] = i;

      geometry.setAttribute("aOpacity", new THREE.InstancedBufferAttribute(new Float32Array(opacities), 1));
      geometry.setAttribute("aIndex", new THREE.InstancedBufferAttribute(indexArray, 1));
      geometry.setAttribute("aScattered", new THREE.InstancedBufferAttribute(new Float32Array(scatteredPositions), 3));
      geometry.setAttribute("aEdge", new THREE.InstancedBufferAttribute(new Float32Array(edges), 1));

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: `
          attribute float aOpacity;
          attribute float aIndex;
          attribute float aEdge;
          attribute vec3 aScattered;

          uniform float uTime;
          uniform float uWaveSpeed;
          uniform float uWaveAmount;
          uniform vec2 uMouse;
          uniform float uMouseRadius;
          uniform float uMouseStrength;
          uniform float uMouseDistort;
          uniform float uAssembly;
          uniform float uLoose;
          uniform float uScatter;
          uniform vec3 uLightPos;
          uniform float uLightRange;
          uniform float uShadeMin;
          uniform float uShadeMax;

          varying float vOpacity;
          varying vec3 vWorldPos;
          varying float vAssembly;
          varying float vLight;

          void main() {
            vOpacity = aOpacity;
            vAssembly = uAssembly;

            vec3 targetCenter = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
            vec3 localOffset = (instanceMatrix * vec4(position, 1.0)).xyz - targetCenter;
            vec3 scatteredCenter = aScattered;

            float assembly = smoothstep(0.0, 1.0, uAssembly);
            vec3 center = mix(scatteredCenter, targetCenter, assembly);
            vec3 pos = center + localOffset;
            vWorldPos = center;

            // Idle looseness
            float loose = uLoose * mix(0.25, 1.0, aEdge) * assembly;
            if (loose > 0.001) {
              vec3 jitter = vec3(
                fract(sin(aIndex * 12.9898) * 43758.5453) - 0.5,
                fract(sin(aIndex * 78.2330) * 12543.1230) - 0.5,
                fract(sin(aIndex * 39.4250) * 26711.7700) - 0.5
              );
              pos += jitter * 0.05 * loose;
              pos.x += sin(uTime * 0.50 + aIndex * 0.53) * 0.06 * loose;
              pos.y += cos(uTime * 0.42 + aIndex * 0.71) * 0.06 * loose;
              pos.z += sin(uTime * 0.36 + aIndex * 0.91) * 0.08 * loose;
            }

            // Scroll dispersion
            if (uScatter > 0.001) {
              float disperse = uScatter * mix(0.5, 1.0, aEdge);
              pos += (scatteredCenter - center) * disperse;
              pos.z += sin(uTime * 0.6 + aIndex * 0.3) * disperse * 0.6;
            }

            // Wave ripple from center
            if (assembly > 0.95) {
              float effectStrength = (assembly - 0.95) * 20.0;
              float dist = length(center.xy);
              float waveFade = smoothstep(0.0, 3.0, dist);
              float wave = sin(dist * 3.0 - uTime * uWaveSpeed) * uWaveAmount * effectStrength * waveFade;
              pos.z += wave;
            }

            // Mouse scatter
            if (assembly > 0.8) {
              float mouseEffect = (assembly - 0.8) * 5.0;
              vec2 toMouse = center.xy - uMouse;
              float mouseDist = length(toMouse);

              if (mouseDist < uMouseRadius && mouseDist > 0.001) {
                float t = 1.0 - mouseDist / uMouseRadius;
                float force = t * t * t * mouseEffect * uMouseStrength;

                vec2 radialDir = toMouse / mouseDist;
                float noiseAngle = sin(aIndex * 0.37 + uTime * 0.5) * uMouseDistort;
                float ca = cos(noiseAngle);
                float sa = sin(noiseAngle);
                vec2 pushDir = vec2(radialDir.x * ca - radialDir.y * sa, radialDir.x * sa + radialDir.y * ca);

                pos.xy += pushDir * force * 2.0;
                pos.z += sin(aIndex * 1.7 + uTime) * force * 0.8;
              }
            }

            // Scatter floating
            if (assembly < 0.9) {
              float scatter = smoothstep(0.9, 0.0, assembly);
              pos.x += sin(uTime * 0.5 + aIndex * 0.1) * 0.2 * scatter;
              pos.y += cos(uTime * 0.4 + aIndex * 0.07) * 0.2 * scatter;
              pos.z += sin(uTime * 0.3 + aIndex * 0.13) * 0.15 * scatter;
            }

            vec4 worldPos = modelMatrix * vec4(pos, 1.0);
            float lightDist = distance(worldPos.xyz, uLightPos);
            float lit = clamp(1.0 - lightDist / uLightRange, 0.0, 1.0);
            vLight = mix(uShadeMin, uShadeMax, lit * lit);

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying float vOpacity;
          varying vec3 vWorldPos;
          varying float vAssembly;
          varying float vLight;

          uniform float uTime;
          uniform vec3 uColor;

          void main() {
            float dist = length(vWorldPos.xy);
            float glow = smoothstep(8.0, 0.0, dist) * 0.3 * vAssembly;

            float baseAlpha = mix(0.45, 0.75, vAssembly);
            float alpha = vOpacity * (baseAlpha + glow);
            float shimmer = sin(uTime * 1.5 + vWorldPos.x * 5.0 + vWorldPos.y * 3.0) * 0.1 + 0.9;
            alpha *= shimmer * min(vLight, 1.0);

            vec3 color = (uColor + glow * vec3(0.2, 0.3, 0.5)) * vLight;
            color = mix(color, color * vec3(1.07, 1.02, 0.94), clamp(vLight - 1.0, 0.0, 1.0));
            gl_FragColor = vec4(color, alpha);
          }
        `,
        uniforms: {
          uTime: { value: 0 },
          uWaveSpeed: { value: 1.5 },
          uWaveAmount: { value: 0.06 },
          uLightPos: { value: new THREE.Vector3(4.5, 5.5, 3.0) },
          uLightRange: { value: 14.0 },
          uShadeMin: { value: 0.28 },
          uShadeMax: { value: 2.79 },
          uColor: { value: new THREE.Color(0.75, 0.8, 0.9) },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uMouseRadius: { value: 4.9 },
          uMouseStrength: { value: 0.8 },
          uMouseDistort: { value: 5.0 },
          uAssembly: { value: 0 },
          uLoose: { value: 1.0 },
          uScatter: { value: 0 }
        }
      });

      const mesh = new THREE.InstancedMesh(geometry, material, count);
      mesh.frustumCulled = false;

      const dummy = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        dummy.position.set(positions[3 * i], positions[3 * i + 1], positions[3 * i + 2]);
        const s = 0.5 + Math.random();
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;

      const group = new THREE.Group();
      group.add(mesh);
      scene.add(group);

      let mouseActive = false;
      const targetMouse = new THREE.Vector2(0, 0);
      const smoothMouse = new THREE.Vector2(0, 0);
      const invMatrix = new THREE.Matrix4();
      const projectedMouse = new THREE.Vector3();

      const vFOV = (camera.fov * Math.PI) / 180;
      const vHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const vWidth = vHeight * camera.aspect;

      window.addEventListener("mousemove", (e) => {
        mouseActive = true;
        const rect = canvas.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetMouse.x = (nx * vWidth) * 0.5;
        targetMouse.y = (ny * vHeight) * 0.5;
      }, { passive: true });

      window.addEventListener("mouseleave", () => {
        mouseActive = false;
      });

      let scrollFactor = 0;
      window.addEventListener("scroll", () => {
        scrollFactor = Math.min(1, window.scrollY / window.innerHeight);
      }, { passive: true });

      let isVisible = true;
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { threshold: 0 });
      observer.observe(canvas);

      const clock = new THREE.Clock();
      let animTime = 0;

      function animate() {
        requestAnimationFrame(animate);
        if (!isVisible) return;

        const delta = clock.getDelta();
        animTime += delta;

        const I = animTime - 0.3;
        const L = Math.max(0, Math.min(1, I / 2.5));
        const D = 1 - Math.pow(1 - L, 3);

        material.uniforms.uTime.value = animTime;
        material.uniforms.uAssembly.value = D;
        material.uniforms.uLoose.value = 1.0;
        material.uniforms.uScatter.value = 1.6 * Math.min(1, 1.5 * scrollFactor);

        const targetStrength = mouseActive ? 0.8 : 0.0;
        let currStrength = material.uniforms.uMouseStrength.value;
        material.uniforms.uMouseStrength.value += (targetStrength - currStrength) * (1 - Math.pow(0.05, delta));

        smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.2;
        smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.2;

        invMatrix.copy(group.matrixWorld).invert();
        projectedMouse.set(smoothMouse.x, smoothMouse.y, 0);
        projectedMouse.applyMatrix4(invMatrix);
        material.uniforms.uMouse.value.set(projectedMouse.x, projectedMouse.y);

        const P = D * Math.max(0, 1 - 1.5 * scrollFactor);
        material.uniforms.uColor.value.setRGB(0.75 * P, 0.8 * P, 0.9 * P);

        group.rotation.z = animTime * ((1 - D) * 0.3) + 0.04 * Math.sin(0.25 * animTime);
        group.rotation.x = 0.05 * Math.sin(0.08 * animTime * 0.7);
        group.rotation.y = 0.1 * Math.sin(0.08 * animTime);
        group.position.y = 0.15 * Math.sin(0.4 * animTime);
        group.scale.setScalar((0.75 + 0.25 * D) * (1 - 0.5 * scrollFactor));
        group.position.y += 2.5 * scrollFactor;

        renderer.render(scene, camera);
      }

      animate();
    };
  }

  /* ==========================================================================
     Accessible Interface Tabs
     ========================================================================== */
  function initInterfaceTabs() {
    const tabs = [...document.querySelectorAll('[role="tab"][aria-controls^="interface-panel-"]')];
    function activate(tab) {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
        document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
      });
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        activate(tabs[next]);
        tabs[next].focus();
      });
    });
  }

  /* ==========================================================================
     Terminal Tabs & Copy to Clipboard
     ========================================================================== */
  function initTerminal() {
    const tabButtons = document.querySelectorAll("[data-term-tab]");
    const codeSnippet = document.getElementById("hero-code-snippet");
    const heroCopyBtn = document.getElementById("hero-copy-btn");

    const commands = {
      npx: "npx @right-ai/omni web",
      npm: "npm install -g @right-ai/omni",
      curl: "curl -fsSL https://raw.githubusercontent.com/jacksonon/omni/main/scripts/install.sh | sh"
    };

    let currentTab = "npx";

    function setTab(tab) {
      if (!commands[tab]) return;
      currentTab = tab;
      tabButtons.forEach((btn) => {
        const isActive = btn.getAttribute("data-term-tab") === tab;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      if (codeSnippet) {
        codeSnippet.innerHTML = `<span class="ds-code-prompt">$ </span>${commands[tab]}`;
      }
    }

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-term-tab");
        if (tab) setTab(tab);
      });
    });

    // Copy handlers
    function copyText(text, btn) {
      navigator.clipboard.writeText(text).then(() => {
        const label = btn.querySelector(".copy-text");
        if (label) {
          const oldText = label.textContent;
          const currentLang = getCurrentLanguage();
          label.textContent = currentLang === "zh" ? "已复制" : "Copied!";
          btn.style.color = "var(--ds-color-brand)";
          setTimeout(() => {
            label.textContent = oldText;
            btn.style.color = "";
          }, 2000);
        }
      }).catch(() => {});
    }

    heroCopyBtn?.addEventListener("click", () => {
      copyText(commands[currentTab], heroCopyBtn);
    });

    document.querySelectorAll("[data-copy-val]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-copy-val");
        if (val) copyText(val, btn);
      });
    });
  }

  /* ==========================================================================
     Card Spotlight Mouse Tracker
     ========================================================================== */
  function initCardSpotlight() {
    const cards = document.querySelectorAll(".ds-pillar-card, .ds-start-card, .footer-link");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--spotlight-x", `${x}px`);
        card.style.setProperty("--spotlight-y", `${y}px`);
      }, { passive: true });
    });
  }

  /* ==========================================================================
     Video Player
     ========================================================================== */
  function initVideoPlayer() {
    const video = document.getElementById("demo-video-el");
    const overlay = document.getElementById("demo-play-overlay");
    if (!video || !overlay) return;

    overlay.addEventListener("click", () => {
      overlay.classList.add("is-hidden");
      video.play().catch(() => {});
    });

    video.addEventListener("pause", () => {
      if (!video.seeking) {
        overlay.classList.remove("is-hidden");
      }
    });

    video.addEventListener("play", () => {
      overlay.classList.add("is-hidden");
    });
  }

  /* ==========================================================================
     Cursor Blend Ring
     ========================================================================== */
  function initCursorRing() {
    const ring = document.getElementById("cursor-ring");
    if (!ring || window.matchMedia("(hover: none)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let visible = false;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        ring.style.opacity = "1";
      }
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      visible = false;
      ring.style.opacity = "0";
    });

    // Blend trigger on interactive elements
    const interactiveSelector = "a, button, [role='button'], .ds-terminal-tab, .footer-link";
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-blend"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-blend"));
    });

    function tick() {
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ==========================================================================
     Scroll Reveal & Navigation Scrollspy
     ========================================================================== */
  function initScrollEffects() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px 140px 0px" });
    reveals.forEach((el) => {
      observer.observe(el);
      // Immediately reveal if already in view
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    });

    // Mobile menu drawer toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    mobileBtn?.addEventListener("click", () => {
      mobileDrawer?.classList.toggle("is-open");
    });
    mobileDrawer?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileDrawer?.classList.remove("is-open"));
    });

    // Header background blur on scroll (DeepSeek Harness style)
    const header = document.querySelector(".ds-header-wrapper");
    const headerBar = document.querySelector(".ds-header-bar");
    const updateHeaderScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled) {
        header?.classList.add("is-scrolled");
        headerBar?.classList.add("is-scrolled");
      } else {
        header?.classList.remove("is-scrolled");
        headerBar?.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", updateHeaderScroll, { passive: true });
    window.addEventListener("resize", updateHeaderScroll, { passive: true });
    updateHeaderScroll();

    // Back to top button
    const backBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 360) {
        backBtn?.classList.add("is-visible");
      } else {
        backBtn?.classList.remove("is-visible");
      }
    }, { passive: true });
    backBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ==========================================================================
     Theme Toggle (Dark / Light)
     ========================================================================== */
  function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn?.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      document.body.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (e) {}
      document.dispatchEvent(new CustomEvent("rightai:theme-change", { detail: { theme: next } }));
    });
  }

  /* ==========================================================================
     MANDATORY SECTION 1: Giscus Discussions
     ========================================================================== */
  const GISCUS_LANG_MAP = {
    zh: "zh-CN",
    en: "en",
    "zh-Hant": "zh-TW",
    ja: "ja",
    ko: "ko",
    ru: "ru"
  };

  function setupGiscus() {
    const container = document.querySelector(".giscus");
    if (!container) return;

    const getGiscusTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "dark";
      return theme === "dark" ? "transparent_dark" : "light";
    };

    const getGiscusLang = () => {
      const lang = getCurrentLanguage();
      return GISCUS_LANG_MAP[lang] || "en";
    };

    if (!container.dataset.loaded) {
      container.dataset.loaded = "true";
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.setAttribute("data-repo", "jacksonon/jacksonon.github.io");
      script.setAttribute("data-repo-id", "R_kgDOP9MaGg");
      script.setAttribute("data-category", "General");
      script.setAttribute("data-category-id", "DIC_kwDOP9MaGs4DCpIU");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "bottom");
      script.setAttribute("data-theme", getGiscusTheme());
      script.setAttribute("data-lang", getGiscusLang());
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
      container.appendChild(script);
    }

    function syncGiscus() {
      const frame = container.querySelector("iframe.giscus-frame");
      if (!frame) return;
      frame.contentWindow?.postMessage({
        giscus: {
          setConfig: {
            lang: getGiscusLang(),
            theme: getGiscusTheme()
          }
        }
      }, "https://giscus.app");
    }

    document.addEventListener("rightai:language-change", syncGiscus);
    document.addEventListener("rightai:theme-change", syncGiscus);
  }

  /* ==========================================================================
     Donate Modal
     ========================================================================== */
  function initDonateModal() {
    const modal = document.getElementById("donate-modal");
    if (!modal) return;

    function openModal() {
      modal.hidden = false;
    }
    function closeModal() {
      modal.hidden = true;
    }

    document.querySelectorAll(".donate-trigger").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    modal.querySelectorAll("[data-close]").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     GitHub Release Tag Fetcher
     ========================================================================== */
  function initReleaseTag() {
    const badge = document.getElementById("header-release-badge");
    const container = document.getElementById("header-release-container");
    if (!container || !badge) return;

    fetch("https://api.github.com/repos/jacksonon/omni/releases/latest")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch release");
        return res.json();
      })
      .then((data) => {
        const tag = data && data.tag_name ? String(data.tag_name).trim() : "";
        if (tag) {
          badge.textContent = tag;
          container.removeAttribute("hidden");
          container.style.removeProperty("display");
          TRANSLATIONS.zh["hero.badge"] = tag;
          TRANSLATIONS.en["hero.badge"] = tag;
        } else {
          badge.textContent = "";
          container.setAttribute("hidden", "");
        }
        if (data && data.html_url) {
          document.querySelectorAll('a[href*="github.com/jacksonon/omni/releases"]').forEach((btn) => {
            btn.href = data.html_url;
          });
        }
      })
      .catch(() => {
        // No default tag: keep the badge hidden when the release API is unreachable
        badge.textContent = "";
        container.setAttribute("hidden", "");
      });
  }

  /* ==========================================================================
     Lightbox Image Preview
     ========================================================================== */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const imgEl = document.getElementById("lightbox-image");
    const captionEl = document.getElementById("lightbox-caption");
    if (!lightbox || !imgEl) return;

    function open(src, caption) {
      imgEl.src = src;
      imgEl.alt = caption || "";
      if (captionEl) captionEl.textContent = caption || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.hidden = true;
      imgEl.src = "";
      document.body.style.overflow = "";
      returnFocus?.focus();
    }

    let returnFocus = null;
    document.querySelectorAll(".omni-image-zoom").forEach((button) => {
      button.addEventListener("click", () => {
        const img = button.querySelector("img");
        returnFocus = button;
        open(img.src, img.alt);
        lightbox.querySelector("button[data-lightbox-close]")?.focus();
      });
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        e.preventDefault();
        lightbox.querySelector("button[data-lightbox-close]")?.focus();
      }
    });
  }

  /* ==========================================================================
     Initialize All
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initI18n();
    initReleaseTag();
    initHeroShader();
    initHeroParticleMesh();
    import("./assets/three.module.js")
      .then((THREE) => {
        initRightAiParticleLogo(THREE);
      })
      .catch((err) => {
        console.warn("Three.js particle logo load error:", err);
      });
    initInterfaceTabs();
    initLightbox();
    initTerminal();
    initCardSpotlight();
    initVideoPlayer();
    initCursorRing();
    initScrollEffects();
    initThemeToggle();
    setupGiscus();
    initDonateModal();
  });
})();
