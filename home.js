(() => {
  "use strict";

  const THEME_STORAGE_KEY = "rightai-theme";
  const LANGUAGE_STORAGE_KEY = "rightai-language";
  const DEFAULT_LANGUAGE = "zh";

  /* ==========================================================================
     i18n Translations
     ========================================================================== */
  const TRANSLATIONS = {
    zh: {
      "skip.link": "跳至主要内容",
      "nav.home": "首页",
      "nav.philosophy": "工程理念",
      "nav.features": "架构与工具",
      "nav.demo": "终端与界面",
      "nav.quickstart": "快速开始",
      "nav.discuss": "社区讨论",
      "nav.links": "友情链接",
      "nav.donate": "打赏支持",
      "hero.badge": "v0.7.13",
      "hero.label": "Agent 工程 · 终端型 AI 编程助手",
      "hero.title": "极简、透明、无依赖的 Agent 工程",
      "hero.desc1": "基于裸 OpenAI SDK 与自研执行主循环，无臃肿框架包装。每一行代码均可审查，每一次工具调用与思考推理皆有迹可循。",
      "hero.desc2": "单 Agent 循环 + 8 工具系统（6 基础 + 2 注入）· OS 级进程沙箱与安全护栏 · 级联记忆与技能生态 · 全屏终端 TUI 与 Web/Electron 桌面应用。",
      "hero.btn.github": "查看 GitHub",
      "hero.btn.docs": "系统架构",
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
      "philo.formula": "AGENT = LLM STREAM + 8 TOOLS + OS SANDBOX + CASCADE MEMORY",
      "philo.title": "从裸 SDK 循环到生产级自主执行回路",
      "philo.desc1": "大语言模型是 Agent 的大脑，但真实工程需要坚不可摧的执行回路与安全护栏。",
      "philo.desc2": "Omni 摒弃黑盒框架抽象，回归流式调用、并行工具执行与自我纠错最本真的形态，让 Agent 稳定落地复杂编程场景。",
      "pillar1.title": "裸 SDK 主循环与自纠错",
      "pillar1.desc": "流式调用 LLM → 并行执行工具调用 → 执行结果回传自纠错闭环。工具执行失败信息原样回传模型，由模型自行理解并自愈代码缺陷，杜绝框架吞错。",
      "pillar2.title": "权限分级与 OS 级进程沙箱",
      "pillar2.desc": "内置 full / safe / ask / read 四级权限，危险命令正则拦截与审批卡片；底层集成 macOS sandbox-exec 与 Linux bwrap 进程隔离，网络白名单过滤代理出网（TLS 不解密）。",
      "pillar3.title": "级联记忆与动态技能生态",
      "pillar3.desc": "项目级与全局级 AGENTS.md 级联加载，首轮自动注入；自动扫描 .opencode/skills 与 .claude/skills 下的 SKILL.md 并按需渐进披露；支持会话 JSONL 持久化与长对话摘要压缩。",
      "feat.eyebrow": "系统架构",
      "feat.title": "分层设计、全屏 TUI 与 Web 多端协同",
      "feat.1.title": "全屏终端 TUI（OpenTUI 交互模式）",
      "feat.1.desc": "思考模块流式实时呈现、Bash 工具卡片点击展开、Markdown 表格与代码块排版、左右并排 diff 对比；输入框支持 @ 文件层级逐层浏览与插入，31 个 / 斜杠快捷命令采用圆角浮层悬停，带来纯粹极速的键盘流体验。",
      "feat.2.title": "Web 工作台与多会话并发（Electron 跨平台）",
      "feat.2.desc": "按工作区分组的多会话侧栏并行调度、实时 Markdown 回答、左右并排 diff 与审批交互卡片；跨平台 Electron 桌面应用（macOS / Windows / Linux 内置 Node 运行时，免环境配置）开箱即用。",
      "feat.3.title": "分层内核、8 执行工具与安全沙箱",
      "feat.3.desc": "入口层统一调度单 Agent 主循环与自我纠错闭环；6 个基础工具 + 动态注入 delegate（子代理 git worktree 临时分支隔离）与 mcp_* 外部工具；macOS sandbox-exec 与 Linux bwrap 进程沙箱，全生命周期 Hooks 拦截自愈。",
      "sim.placeholder": "输入编程任务，或让 Omni 探索代码库...",
      "sim.std.name": "标准模式 (Standard)",
      "sim.std.desc": "功能完备的编码与操作 Agent，支持终端命令、代码读写与自我纠错。",
      "sim.ptc.name": "架构规划 (Architect)",
      "sim.ptc.desc": "调度推理强模型进行方案分析与 EARS 规格设计，同步任务清单。",
      "sim.min.name": "快速执行 (Editor)",
      "sim.min.desc": "调度高吞吐轻模型执行具体的代码落地与编辑，极致降低延迟与开销。",
      "sim.create.name": "子代理隔离 (Delegate)",
      "sim.create.desc": "自动 git worktree 临时分支隔离运行，生成变更报告与合并建议。",
      "demo.title": "沉浸式终端 TUI、Web 工作台与跨平台桌面端",
      "demo.desc": "双端无缝协作：终端基于 OpenTUI 提供流畅的键盘流体验（语法高亮、左右并排 diff、浮动 @ 提及文件、28 个 / 命令），浏览器或独立桌面应用（macOS / Windows / Linux 内置 Node 免环境配置）提供多会话并行与丰富可视化卡片。",
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
      "cta.title": "探索透明自主的 Agent 编程工程",
      "cta.desc": "Omni 是面向开发者的开源 Agent 工程实践。无论是扩展自定义 MCP 服务、编写 SKILL.md 技能，还是挂载生命周期 Hooks，一切均由你掌控。欢迎加入社区并参与贡献！",
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
      "footer.license": "开源 · MIT 协议",
      "footer.copyright": "© 2026 Omni 版权所有",
      "footer.privacy": "隐私政策",
      "donate.title": "感谢支持 Omni！",
      "donate.message": "扫描二维码完成打赏，支持开源与持续迭代！",
      "donate.alipay": "支付宝",
      "donate.wechat": "微信支付"
    },
    en: {
      "skip.link": "Skip to main content",
      "nav.home": "Home",
      "nav.philosophy": "Philosophy",
      "nav.features": "Architecture",
      "nav.demo": "Interfaces",
      "nav.quickstart": "Quick Start",
      "nav.discuss": "Discuss",
      "nav.links": "Links",
      "nav.donate": "Donate",
      "hero.badge": "v0.7.13",
      "hero.label": "Agent Engineering · Terminal AI Assistant",
      "hero.title": "Minimal, Transparent, Framework-Free Agent Engineering",
      "hero.desc1": "Built on bare OpenAI SDK and custom main loop with zero framework dependencies. Every tool call and reasoning step is observable and self-correcting.",
      "hero.desc2": "Single-agent loop + 8-tool suite (6 base + 2 injected) · OS-level sandboxing & safety tiers · Cascade memory & skills · Full-screen TUI & Web/Electron apps.",
      "hero.btn.github": "View on GitHub",
      "hero.btn.docs": "Architecture",
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
      "philo.formula": "AGENT = LLM STREAM + 8 TOOLS + OS SANDBOX + CASCADE MEMORY",
      "philo.title": "From Bare SDK Loop to Production-Grade Autonomous Execution",
      "philo.desc1": "LLMs are the mind of an Agent, but engineering requires solid runtime loops and guardrails.",
      "philo.desc2": "Omni removes framework bloat, returning to streaming calls, parallel tool execution, and self-correction to solve real-world coding tasks.",
      "pillar1.title": "Bare SDK Loop & Self-Correction",
      "pillar1.desc": "Streams LLM calls → executes tool calls (parallel) → feeds results back. Tool error messages are returned to the model so it can diagnose and fix its own code.",
      "pillar2.title": "Permission Tiers & OS Sandbox",
      "pillar2.desc": "Provides full / safe / ask / read tiers, dangerous command interception, and macOS sandbox-exec / Linux bwrap isolation with network proxy allowlists.",
      "pillar3.title": "Cascade Memory & Skill Ecosystem",
      "pillar3.desc": "Cascades project & global AGENTS.md, auto-extracts preferences, discovers SKILL.md specs with progressive disclosure, and persists sessions as JSONL.",
      "feat.eyebrow": "SYSTEM ARCHITECTURE",
      "feat.title": "Layered Architecture, OpenTUI & Multi-Surface Delivery",
      "feat.1.title": "Full-Screen Terminal TUI (OpenTUI Mode)",
      "feat.1.desc": "Live thinking module streams reasoning, clickable Bash tool cards expand on demand, Markdown tables and syntax-highlighted code blocks, and side-by-side diff. Floating @ file mentions and 31 / slash command popovers provide an uninterrupted keyboard-first flow.",
      "feat.2.title": "Web Workbench & Electron Desktop App",
      "feat.2.desc": "Multi-session concurrency grouped by workspaces, live Markdown rendering, side-by-side diff inspection, and interactive permission approvals. Built-in Node runtime enables zero-dependency standalone desktop apps across macOS, Windows, and Linux.",
      "feat.3.title": "Layered Core, 8 Execution Tools & OS Sandboxing",
      "feat.3.desc": "Unified entry points drive a bare SDK autonomous loop with self-correction. 6 base tools + delegate subagents (isolated in temporary git worktrees) + mcp_* external tools, guarded by macOS sandbox-exec / Linux bwrap OS sandboxing and lifecycle hooks.",
      "sim.placeholder": "Enter a coding task or ask Omni to inspect this repo...",
      "sim.std.name": "Standard Mode",
      "sim.std.desc": "Complete coding suite with terminal execution, file edits, and self-correction.",
      "sim.ptc.name": "Architect Mode",
      "sim.ptc.desc": "Routes to reasoning-heavy models for architectural planning and spec drafting.",
      "sim.min.name": "Editor Mode",
      "sim.min.desc": "Routes to fast, cost-efficient models for concrete code editing and testing.",
      "sim.create.name": "Delegate Mode",
      "sim.create.desc": "Automates isolated git worktree execution on temp branches with diff reports.",
      "demo.title": "Full-Screen Terminal TUI, Web UI & Desktop Apps",
      "demo.desc": "Seamless duality: Enjoy lightning-fast keyboard-first workflows in the OpenTUI terminal, or leverage visual multi-session concurrency in Web & Electron desktop apps.",
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
      "cta.title": "Build the Future of Agentic Coding with Omni",
      "cta.desc": "Omni champions open-source transparency and zero black-box magic. From custom MCP servers to domain skills and lifecycle hooks, everything is in your hands.",
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
      "footer.license": "Open Source · MIT License",
      "footer.copyright": "© 2026 Omni. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "donate.title": "Support Omni",
      "donate.message": "Scan to donate and support open-source development!",
      "donate.alipay": "Alipay",
      "donate.wechat": "WeChat Pay"
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
     Sticky Showcase Step Switcher
     ========================================================================== */
  function initStickyShowcase() {
    const stepItems = document.querySelectorAll(".ds-step-item");
    const slides = [
      document.getElementById("slide-1"),
      document.getElementById("slide-2"),
      document.getElementById("slide-3")
    ];

    if (!stepItems.length) return;

    let isManual = false;
    let manualTimer = null;

    function activateStep(index) {
      stepItems.forEach((item, i) => {
        item.classList.toggle("is-active", i === index);
      });

      slides.forEach((slide, i) => {
        if (slide) {
          slide.classList.toggle("is-active", i === index);
        }
      });
    }

    stepItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        isManual = true;
        activateStep(i);
        clearTimeout(manualTimer);
        manualTimer = setTimeout(() => {
          isManual = false;
        }, 1200);
      });
    });

    // Scroll trigger for steps
    const observer = new IntersectionObserver((entries) => {
      if (isManual) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute("data-step"), 10) - 1;
          if (!isNaN(stepIndex)) {
            activateStep(stepIndex);
          }
        }
      });
    }, { threshold: 0.55 });

    stepItems.forEach((item) => observer.observe(item));
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
    const interactiveSelector = "a, button, [role='button'], .ds-step-item, .ds-terminal-tab, .footer-link";
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

    // Header background blur on scroll
    const header = document.querySelector(".ds-header-wrapper");
    const updateHeaderScroll = () => {
      if (window.scrollY > 30) {
        header?.classList.add("is-scrolled");
      } else {
        header?.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", updateHeaderScroll, { passive: true });
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

    fetch("https://api.github.com/repos/jacksonon/omni/releases/latest")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch release");
        return res.json();
      })
      .then((data) => {
        if (data && data.tag_name) {
          const tag = data.tag_name;
          if (badge) badge.textContent = tag;
          TRANSLATIONS.zh["hero.badge"] = tag;
          TRANSLATIONS.en["hero.badge"] = tag;
        }
        if (data && data.html_url) {
          document.querySelectorAll('a[href*="github.com/jacksonon/omni/releases"]').forEach((btn) => {
            btn.href = data.html_url;
          });
        }
      })
      .catch(() => {
        // Fallback to static tag and releases/latest
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
    }

    document.querySelectorAll(".ds-showcase-slide img").forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        open(img.src, img.alt);
      });
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !lightbox.hidden) close();
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
    initStickyShowcase();
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
