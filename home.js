(() => {
  const THEME_STORAGE_KEY = "rightai-theme";
  const LANGUAGE_STORAGE_KEY = "rightai-language";
  const DEFAULT_LANGUAGE = "zh";
  const SUPPORTED_LANGUAGES = ["en", "ru", "zh", "zh-Hant", "ja", "ko"];

  const EN_TEXT = {
  "meta.title": "Right AI - Intelligent Browser Workspace",
  "meta.description": "Right AI transforms your browser into an AI workspace with quick input, multi-model workflows, webpage agent tools, and adaptive dark mode.",
  "nav.home": "Home",
  "nav.features": "Features",
  "nav.workflow": "Workflow",
  "nav.docs": "Docs",
  "nav.faq": "FAQ",
  "nav.tools": "Tools",
  "nav.language": "Language",
  "nav.chrome": "Add to Chrome",
  "nav.donate": "Donate",
  "theme.toggle": "Toggle Theme",
  "hero.title": "The most modern and interactive AI command center for your browser",
  "hero.desc": "Your browser should do more than browsing. Right AI combines Quick Input, Multi-Model Split View, Webpage Agent, and automation into one smooth workspace.",
  "hero.cta.install": "Install from Chrome Web Store",
  "hero.cta.download": "Direct Download ZIP",
  "hero.cta.docs": "View Setup Guide",
  "hero.trust.1": "Press Ctrl + R to launch Quick Input anywhere",
  "hero.trust.2": "Parallel model conversations with less context switching",
  "hero.trust.3": "Web-native AI interaction, OCR, translation, and dark adaptation",
  "shell.init.command1": "$ initialize sidebar assistant and bind shortcut",
  "shell.init.response1": "Right AI ready. Press Ctrl + R to open the input panel on any page.",
  "shell.init.command2": "$ summarize this page and suggest next actions",
  "shell.init.response2": "Summary generated with 3 actionable next steps.",
  "shell.input.label": "Command Input",
  "shell.input.placeholder": "Try: enable quick input / multi model / webpage mode",
  "shell.input.run": "Run",
  "chips.quick": "Quick Input",
  "chips.multi": "Multi Model",
  "chips.webpage": "Webpage Agent",
  "chips.dark": "Dark Mode",
  "stats.one": "Average reduction in task switching time",
  "stats.two": "Higher multi-model validation efficiency",
  "stats.three": "High-frequency web scenarios ready out of the box",
  "features.title": "One interface for input, understanding, reasoning, and execution",
  "features.lead": "No more jumping between tabs and tools. Right AI consolidates core AI actions into an interactive workflow.",
  "panels.quick.title": "Use Ctrl + R to send ideas directly to models",
  "panels.quick.1": "Launch instantly on any page and keep your flow.",
  "panels.quick.2": "Open a model conversation window on the current page (bottom-right) and keep webpage context attached for follow-up chat.",
  "panels.quick.3": "New settings: open chat page directly, bring Chrome to foreground, and press shortcut again to close.",
  "panels.quickConversation.title": "AI Quick Conversation: independent web chat window",
  "panels.quickConversation.1": "Quickly summon an independent chat window on any webpage and start model conversations with current-page context attached.",
  "panels.quickConversation.2": "Keep the chat floating on the current page to avoid frequent context switching.",
  "panels.quickConversation.3": "Together with AI Quick Input, it forms a convenient workflow: fast launch plus immersive chat.",
  "panels.multi.title": "Collaborate with multiple models on one screen",
  "panels.multi.1": "Run ChatGPT, Gemini, Claude, and custom models side by side.",
  "panels.multi.2": "Cross-check answers instantly for higher confidence.",
  "panels.multi.3": "Route subtasks to the best model automatically.",
  "panels.web.title": "Use each webpage as context and execute in place",
  "panels.web.1": "Read current page context for Q&A, rewrite, summary, and translation.",
  "panels.web.2": "Combine OCR and vision understanding for mixed-media tasks.",
  "panels.web.3": "Complete research and planning directly inside the page.",
  "panels.stock.title": "Stock module: live watch + AI analysis in one view",
  "panels.stock.1": "Track watchlist symbols, price moves, and key levels directly in the sidebar.",
  "panels.stock.2": "Combine market data with multi-model Q&A for pre-market and intraday analysis.",
  "panels.stock.3": "Use stock context while reading news, financial reports, and announcements.",
  "panels.ocr.title": "Text recognition: OCR extraction + translation in one step",
  "panels.ocr.1": "Extract copyable text from webpage images and screenshots with one click.",
  "panels.ocr.2": "Translate, summarize, and continue asking follow-up questions from OCR output.",
  "panels.ocr.3": "Ideal for posters, PDF screenshots, social images, and mixed-media content.",
  "panels.dark.title": "One-click comfortable dark mode for any website",
  "panels.dark.1": "Works even when websites do not provide native dark mode.",
  "panels.dark.2": "Sync with system and extension theme preferences.",
  "panels.dark.3": "Keeps contrast readable while preserving visual hierarchy.",
  "workflow.title": "Four steps to complete dense information tasks",
  "workflow.1.body": "Press Ctrl + R on any webpage and input the goal. Right AI captures context automatically.",
  "workflow.2.body": "Tasks are routed by type and can be processed in parallel across models.",
  "workflow.3.body": "Generate summaries, action lists, rewrites, and recommendations in the sidebar.",
  "workflow.4.body": "Use outputs directly for writing, research, and collaboration.",
  "showcase.title": "Interaction design built for real work",
  "showcase.1.title": "Market Research",
  "showcase.1.body": "Extract signals from industry pages and generate structured insights with risk cues.",
  "showcase.1.tag": "Summaries · Comparative Analysis",
  "showcase.2.title": "Product & Operations",
  "showcase.2.body": "Merge user feedback, competitor info, and copy ideas into executable plans.",
  "showcase.2.tag": "Model Collaboration · Fast Iteration",
  "showcase.3.title": "Learning & Knowledge",
  "showcase.3.body": "Break down complex concepts into guided steps with interactive follow-up Q&A.",
  "showcase.3.tag": "Deep Reading · Guided Questions",
  "docs.title": "Install and run your first command in 3 minutes",
  "docs.install.title": "Quick Installation",
  "docs.install.step1.start": "Install from Chrome Web Store",
  "docs.install.step1.middle": "or download",
  "docs.install.step1.offline": "the offline package",
  "docs.install.step1.end": "for manual installation.",
  "docs.install.step2": "Open extension management and pin Right AI to your toolbar.",
  "docs.install.step3": "Open any webpage and press Ctrl + R to trigger Quick Input.",
  "docs.install.note": "Manual path: chrome://extensions -> Developer mode -> Load unpacked",
  "docs.update.title": "Release Rhythm",
  "docs.update.1": "Weekly: prompt templates, quick actions, and visual refinements.",
  "docs.update.2": "Bi-weekly: model routing improvements and stability updates.",
  "docs.update.3": "Monthly: new scenario agents and performance upgrades.",
  "docs.update.note": "Enable auto update to get the newest interactions first.",
  "docs.quickchat.title": "AI Quick Input chat mode (new)",
  "docs.quickchat.1": "After launching, open the model chat page directly at the bottom-right of the current webpage.",
  "docs.quickchat.2": "New settings include \"Show model chat page in quick popup\" and \"Switch Chrome to front when triggered\".",
  "docs.quickchat.3": "Enable \"Press shortcut again to close quick chat window\" for fast open/close control.",
  "docs.quickchat.note": "Mix these options in extension settings based on your workflow preference.",
  "faq.title": "Common Questions",
  "faq.1.q": "Which browsers are supported?",
  "faq.1.a": "Latest Chrome is recommended. Most Chromium-based browsers are also compatible.",
  "faq.2.q": "Do I need an account to start?",
  "faq.2.a": "Core features work right after installation. Some model endpoints may require your own API key.",
  "faq.3.q": "How do I quickly open the input panel?",
  "faq.3.a": "The default recommended shortcut is Ctrl + R. You can also customize it in extension settings.",
  "faq.4.q": "How do I install the offline package?",
  "faq.4.a": "Download files/dist.zip, unzip it, open chrome://extensions, enable developer mode, and load unpacked.",
  "footer.back": "Back to top ↑",
  "hero.kicker": "Right AI · Browser Intelligence Hub",
  "features.kicker": "Feature System",
  "tabs.quick": "AI Quick Input",
  "tabs.quickConversation": "AI Quick Conversation",
  "tabs.multi": "Multi Model Split",
  "tabs.webpage": "Webpage Agent",
  "tabs.stock": "Stock Assistant",
  "tabs.ocr": "OCR & Text",
  "tabs.dark": "Adaptive Dark Mode",
  "workflow.kicker": "Workflow Engine",
  "workflow.1.title": "01 · Capture",
  "workflow.2.title": "02 · Route",
  "workflow.3.title": "03 · Generate",
  "workflow.4.title": "04 · Execute",
  "showcase.kicker": "Interactive Scenarios",
  "docs.kicker": "Get Started",
  "faq.kicker": "FAQ",
  "donate.title": "Thanks for supporting Right AI!",
  "donate.message": "Scan either QR code to leave a tip. Your support keeps Right AI moving.",
  "donate.alipay": "Alipay",
  "donate.wechat": "WeChat",
  "download.tooltip.loading": "Loading version…",
  "download.tooltip.unavailable": "Version unavailable",
  "download.tooltip.prefix": "Version ",
  "footer.tagline": "Right AI · Build faster decisions inside your browser."
};

  const LOCALE_OVERRIDES = {
  "zh-Hant": {
    "meta.title": "Right AI - 智慧瀏覽器工作空間",
    "meta.description": "Right AI 將你的瀏覽器轉化為 AI 工作空間，提供快速輸入、多模型工作流、網頁代理工具與自適應深色模式。",
    "nav.home": "首頁",
    "nav.features": "功能",
    "nav.workflow": "工作流程",
    "nav.docs": "文件",
    "nav.faq": "常見問題",
    "nav.tools": "站長工具",
    "nav.language": "語言",
    "nav.chrome": "加入 Chrome",
    "nav.donate": "打賞",
    "theme.toggle": "切換主題",
    "hero.title": "為你的瀏覽器打造最現代、最具互動性的 AI 指揮中心",
    "hero.desc": "瀏覽器不該只用來瀏覽。Right AI 將快速輸入、多模型分割視圖、網頁代理與自動化整合為一個流暢的工作空間。",
    "hero.cta.install": "從 Chrome 線上應用程式商店安裝",
    "hero.cta.download": "直接下載 ZIP",
    "hero.cta.docs": "查看安裝指南",
    "hero.trust.1": "按 Ctrl + R，隨時喚起快速輸入",
    "hero.trust.2": "模型並行對話，減少來回切換",
    "hero.trust.3": "原生網頁 AI 互動、OCR、翻譯與深色自適應",
    "shell.init.command1": "$ 初始化側邊欄助手並綁定快捷鍵",
    "shell.init.response1": "Right AI 已就緒。按 Ctrl + R 可在任何頁面開啟輸入面板。",
    "shell.init.command2": "$ 摘要此頁內容並建議下一步行動",
    "shell.init.response2": "摘要已生成，並附上 3 個可執行的下一步。",
    "shell.input.label": "指令輸入",
    "shell.input.placeholder": "試試看：啟用快速輸入 / 多模型 / 網頁模式",
    "shell.input.run": "執行",
    "chips.quick": "快速輸入",
    "chips.multi": "多模型",
    "chips.webpage": "網頁代理",
    "chips.dark": "深色模式",
    "stats.one": "平均可減少任務切換時間",
    "stats.two": "多模型驗證效率更高",
    "stats.three": "高頻網頁場景開箱即用",
    "features.title": "一個介面完成輸入、理解、推理與執行",
    "features.lead": "不用再在分頁與工具間跳轉。Right AI 將核心 AI 動作整合為互動式工作流程。",
    "panels.quick.title": "按 Ctrl + R，想法可直接送往模型",
    "panels.quick.1": "任意頁面即開即用，不中斷你的節奏。",
    "panels.quick.2": "支援在當前頁面直接開啟對話視窗，並攜帶網頁上下文持續對話。",
    "panels.quick.3": "更少打斷，把意圖直接轉成執行。",
    "panels.quickConversation.title": "AI 快速對話：網頁獨立視窗對話",
    "panels.quickConversation.1": "可快速喚起網頁上的獨立對話視窗，並攜帶目前網頁上下文直接開始模型對話。",
    "panels.quickConversation.2": "對話窗可懸浮於當前頁面，降低頻繁切換分頁與側欄的成本。",
    "panels.quickConversation.3": "與 AI 快速輸入搭配：一個負責快速啟動，一個負責沉浸對話。",
    "panels.multi.title": "同一畫面協作多個模型",
    "panels.multi.1": "可並排運行 ChatGPT、Gemini、Claude 與自訂模型。",
    "panels.multi.2": "即時交叉比對答案，決策更有把握。",
    "panels.multi.3": "可自動把子任務分派給最合適的模型。",
    "panels.web.title": "把每個網頁當成上下文，原地完成任務",
    "panels.web.1": "讀取當前頁面上下文，支援問答、改寫、摘要與翻譯。",
    "panels.web.2": "結合 OCR 與視覺理解，處理圖文混合任務。",
    "panels.web.3": "研究與規劃可直接在頁面內完成。",
    "panels.stock.title": "股票模組：盯盤與 AI 解讀整合",
    "panels.stock.1": "可在側欄即時查看自選股、漲跌幅與關鍵價位。",
    "panels.stock.2": "結合多模型問答，快速產出盤前與盤中分析。",
    "panels.stock.3": "閱讀新聞、財報與公告時可直接帶入股票上下文。",
    "panels.ocr.title": "文字辨識：OCR 擷取與翻譯一步完成",
    "panels.ocr.1": "可對網頁圖片與截圖進行文字辨識，快速擷取可複製文字。",
    "panels.ocr.2": "辨識結果可直接翻譯、摘要並持續追問。",
    "panels.ocr.3": "適用海報、PDF 截圖、社群圖文等場景。",
    "panels.dark.title": "一鍵為任意網站套用舒適深色模式",
    "panels.dark.1": "即使網站沒有原生深色模式也能正常運作。",
    "panels.dark.2": "可與系統與擴充功能的主題偏好同步。",
    "panels.dark.3": "在保留視覺層級的同時維持可讀對比。",
    "workflow.title": "四步驟完成高密度資訊任務",
    "workflow.1.body": "在任何網頁按下 Ctrl + R 輸入目標，Right AI 會自動擷取上下文。",
    "workflow.2.body": "任務會依類型分流，並可跨模型並行處理。",
    "workflow.3.body": "在側邊欄生成摘要、行動清單、改寫版本與建議。",
    "workflow.4.body": "將輸出直接用於寫作、研究與協作。",
    "showcase.title": "為真實工作打造的互動設計",
    "showcase.1.title": "市場研究",
    "showcase.1.body": "從產業頁面擷取訊號，生成含風險提示的結構化洞察。",
    "showcase.1.tag": "摘要 · 比較分析",
    "showcase.2.title": "產品與營運",
    "showcase.2.body": "整合使用者回饋、競品資訊與文案想法，轉成可執行計畫。",
    "showcase.2.tag": "模型協作 · 快速迭代",
    "showcase.3.title": "學習與知識",
    "showcase.3.body": "把複雜概念拆成引導式步驟，並支援互動追問。",
    "showcase.3.tag": "深度閱讀 · 引導提問",
    "docs.title": "3 分鐘完成安裝並執行第一條指令",
    "docs.install.title": "快速安裝",
    "docs.install.step1.start": "從 Chrome 線上應用程式商店安裝",
    "docs.install.step1.middle": "或下載",
    "docs.install.step1.offline": "離線安裝包",
    "docs.install.step1.end": "進行手動安裝。",
    "docs.install.step2": "開啟擴充功能管理頁，將 Right AI 釘選到工具列。",
    "docs.install.step3": "開啟任一網頁後按 Ctrl + R，即可觸發快速輸入。",
    "docs.install.note": "手動路徑：chrome://extensions -> 開發人員模式 -> 載入未封裝項目",
    "docs.update.title": "更新節奏",
    "docs.update.1": "每週：提示詞範本、快速操作與視覺細節優化。",
    "docs.update.2": "雙週：模型路由優化與穩定性更新。",
    "docs.update.3": "每月：新增場景代理與效能升級。",
    "docs.update.note": "建議啟用自動更新，優先體驗最新互動。",
    "docs.quickchat.title": "AI 快速輸入對話頁（新）",
    "docs.quickchat.1": "喚起後可在網頁右下角直接進入模型對話頁。",
    "docs.quickchat.2": "新增「快捷彈窗顯示模型對話頁」與「喚起時切回 Chrome 前景」設定。",
    "docs.quickchat.3": "可啟用「再次按快捷鍵關閉快捷對話視窗」來快速開關。",
    "docs.quickchat.note": "建議依你的使用習慣，在擴充功能設定中組合上述選項。",
    "faq.title": "常見問題",
    "faq.1.q": "支援哪些瀏覽器？",
    "faq.1.a": "建議使用最新版 Chrome，多數 Chromium 核心瀏覽器也相容。",
    "faq.2.q": "開始使用需要帳號嗎？",
    "faq.2.a": "核心功能安裝後即可使用；部分模型端點可能需要你自行提供 API 金鑰。",
    "faq.3.q": "如何快速開啟輸入面板？",
    "faq.3.a": "預設建議快捷鍵是 Ctrl + R，你也可以在擴充功能設定中自訂。",
    "faq.4.q": "如何安裝離線安裝包？",
    "faq.4.a": "下載 files/dist.zip 並解壓，開啟 chrome://extensions，啟用開發人員模式後點選「載入未封裝項目」。",
    "footer.back": "回到頂部 ↑",
    "hero.kicker": "Right AI · 瀏覽器智慧中樞",
    "features.kicker": "功能系統",
    "tabs.quick": "AI 快速輸入",
    "tabs.quickConversation": "AI 快速對話",
    "tabs.multi": "多模型分割",
    "tabs.webpage": "網頁代理",
    "tabs.stock": "股票助手",
    "tabs.ocr": "OCR 與文字",
    "tabs.dark": "自適應深色模式",
    "workflow.kicker": "工作流引擎",
    "workflow.1.title": "01 · 擷取",
    "workflow.2.title": "02 · 路由",
    "workflow.3.title": "03 · 生成",
    "workflow.4.title": "04 · 執行",
    "showcase.kicker": "互動場景",
    "docs.kicker": "快速開始",
    "faq.kicker": "常見問題",
    "donate.title": "感謝支持 Right AI！",
    "donate.message": "掃描任一付款碼即可完成打賞，感謝你的支持！",
    "donate.alipay": "支付寶",
    "donate.wechat": "微信",
    "footer.tagline": "Right AI · 在你的瀏覽器中更快做出決策。"
  },
  "ja": {
    "meta.title": "Right AI - インテリジェント・ブラウザワークスペース",
    "meta.description": "Right AI はブラウザを、クイック入力、マルチモデルワークフロー、Webページエージェントツール、適応型ダークモードを備えた AI ワークスペースへ変えます。",
    "nav.home": "ホーム",
    "nav.features": "機能",
    "nav.workflow": "ワークフロー",
    "nav.docs": "ドキュメント",
    "nav.faq": "よくある質問",
    "nav.tools": "ウェブマスターツール",
    "nav.language": "言語",
    "nav.chrome": "Chrome に追加",
    "nav.donate": "寄付",
    "theme.toggle": "テーマ切替",
    "hero.title": "ブラウザのための、最先端でインタラクティブな AI コマンドセンター",
    "hero.desc": "ブラウザは閲覧だけのものではありません。Right AI はクイック入力、マルチモデル分割ビュー、Webページエージェント、自動化を 1 つの滑らかなワークスペースに統合します。",
    "hero.cta.install": "Chrome ウェブストアからインストール",
    "hero.cta.download": "ZIP を直接ダウンロード",
    "hero.cta.docs": "セットアップガイドを見る",
    "hero.trust.1": "どこでも Ctrl + R でクイック入力を起動",
    "hero.trust.2": "コンテキスト切り替えを減らした並列モデル会話",
    "hero.trust.3": "Web ネイティブな AI 操作、OCR、翻訳、ダーク適応",
    "shell.init.command1": "$ サイドバーアシスタントを初期化してショートカットを割り当てる",
    "shell.init.response1": "Right AI の準備ができました。任意のページで Ctrl + R を押すと入力パネルが開きます。",
    "shell.init.command2": "$ このページを要約して次のアクションを提案する",
    "shell.init.response2": "3 つの実行可能な次のステップを含む要約を生成しました。",
    "shell.input.label": "コマンド入力",
    "shell.input.placeholder": "例: quick input / multi model / webpage mode を有効化",
    "shell.input.run": "実行",
    "chips.quick": "クイック入力",
    "chips.multi": "マルチモデル",
    "chips.webpage": "Webページエージェント",
    "chips.dark": "ダークモード",
    "stats.one": "タスク切り替え時間の平均削減",
    "stats.two": "マルチモデル検証効率の向上",
    "stats.three": "高頻度の Web シナリオに標準対応",
    "features.title": "入力・理解・推論・実行を 1 つのインターフェースに",
    "features.lead": "タブやツールを行き来する必要はありません。Right AI は主要な AI 操作をインタラクティブなワークフローに集約します。",
    "panels.quick.title": "Ctrl + R でアイデアを直接モデルへ送信",
    "panels.quick.1": "任意のページで即時起動し、作業フローを維持。",
    "panels.quick.2": "現在のページ上で対話ウィンドウを開き、ページ文脈を引き継いで会話を続けられます。",
    "panels.quick.3": "中断を減らし、意図を実行へ変換。",
    "panels.quickConversation.title": "AI クイック対話：Webページ独立ウィンドウ",
    "panels.quickConversation.1": "Webページ上で独立した対話ウィンドウを素早く呼び出し、現在ページの文脈付きでモデル対話を開始できます。",
    "panels.quickConversation.2": "対話ウィンドウを現在ページにフロート表示し、タブやサイドバーの切り替えを減らせます。",
    "panels.quickConversation.3": "AI クイック入力と組み合わせることで、素早い起動と没入型対話を両立します。",
    "panels.multi.title": "1 画面で複数モデルと協働",
    "panels.multi.1": "ChatGPT、Gemini、Claude、カスタムモデルを並べて実行。",
    "panels.multi.2": "回答を即時に照合し、確信度を向上。",
    "panels.multi.3": "サブタスクを最適なモデルへ自動ルーティング。",
    "panels.web.title": "各 Web ページを文脈として、その場で実行",
    "panels.web.1": "現在ページの文脈を読み取り、Q&A・リライト・要約・翻訳に活用。",
    "panels.web.2": "OCR と画像理解を組み合わせ、混在メディアの作業に対応。",
    "panels.web.3": "調査や計画をページ内で直接完了。",
    "panels.stock.title": "株式モジュール：監視と AI 分析を一体化",
    "panels.stock.1": "サイドバーでウォッチリスト銘柄、騰落率、重要価格帯をリアルタイム確認。",
    "panels.stock.2": "マルチモデル Q&A と組み合わせ、寄り前・場中の分析を素早く作成。",
    "panels.stock.3": "ニュース、決算、開示を読む際に株式コンテキストを直接利用できます。",
    "panels.ocr.title": "テキスト認識：OCR 抽出と翻訳をワンステップで",
    "panels.ocr.1": "Web画像やスクリーンショットからコピー可能なテキストを素早く抽出。",
    "panels.ocr.2": "抽出結果はそのまま翻訳・要約し、追加質問も可能です。",
    "panels.ocr.3": "ポスター、PDF スクリーンショット、SNS画像などの場面に最適です。",
    "panels.dark.title": "どのサイトでもワンクリックで快適なダークモード",
    "panels.dark.1": "サイト側に標準ダークモードがなくても動作。",
    "panels.dark.2": "システムと拡張機能のテーマ設定を同期。",
    "panels.dark.3": "視覚階層を保ちながら読みやすいコントラストを維持。",
    "workflow.title": "情報密度の高い作業を完了する 4 ステップ",
    "workflow.1.body": "任意の Web ページで Ctrl + R を押し、目標を入力。Right AI が文脈を自動取得します。",
    "workflow.2.body": "タスクは種類ごとに振り分けられ、モデル間で並列処理できます。",
    "workflow.3.body": "サイドバーで要約、アクションリスト、リライト、推奨を生成。",
    "workflow.4.body": "出力をそのまま執筆・調査・コラボレーションに活用。",
    "showcase.title": "実務のために設計されたインタラクション",
    "showcase.1.title": "市場調査",
    "showcase.1.body": "業界ページからシグナルを抽出し、リスク示唆付きの構造化インサイトを生成。",
    "showcase.1.tag": "要約 · 比較分析",
    "showcase.2.title": "プロダクトと運用",
    "showcase.2.body": "ユーザーフィードバック、競合情報、コピー案を実行可能な計画に統合。",
    "showcase.2.tag": "モデル協働 · 高速イテレーション",
    "showcase.3.title": "学習と知識",
    "showcase.3.body": "複雑な概念をガイド付きステップに分解し、対話型の追質問答を提供。",
    "showcase.3.tag": "深い読解 · ガイド質問",
    "docs.title": "3 分でインストールして最初のコマンドを実行",
    "docs.install.title": "クイックインストール",
    "docs.install.step1.start": "Chrome ウェブストアからインストール",
    "docs.install.step1.middle": "または",
    "docs.install.step1.offline": "オフラインパッケージ",
    "docs.install.step1.end": "をダウンロードして手動インストール。",
    "docs.install.step2": "拡張機能管理を開き、Right AI をツールバーにピン留めします。",
    "docs.install.step3": "任意の Web ページを開き、Ctrl + R を押してクイック入力を起動。",
    "docs.install.note": "手動手順: chrome://extensions -> デベロッパーモード -> パッケージ化されていない拡張機能を読み込む",
    "docs.update.title": "リリースサイクル",
    "docs.update.1": "毎週: プロンプトテンプレート、クイックアクション、表示改善。",
    "docs.update.2": "隔週: モデルルーティングの改善と安定性アップデート。",
    "docs.update.3": "毎月: 新しいシナリオエージェントと性能向上。",
    "docs.update.note": "自動更新を有効にして、最新インタラクションをいち早く利用。",
    "docs.quickchat.title": "AI クイック入力の対話ページ（新）",
    "docs.quickchat.1": "起動後、現在のWebページ右下からモデル対話ページへ直接入れます。",
    "docs.quickchat.2": "「クイックポップアップでモデル対話ページを表示」と「起動時に Chrome を前面表示」の設定を追加。",
    "docs.quickchat.3": "「ショートカット再押下でクイック対話ウィンドウを閉じる」を有効にすると素早く開閉できます。",
    "docs.quickchat.note": "拡張機能設定で、利用スタイルに合わせて上記オプションを組み合わせてください。",
    "faq.title": "よくある質問",
    "faq.1.q": "どのブラウザに対応していますか？",
    "faq.1.a": "最新の Chrome を推奨します。多くの Chromium 系ブラウザでも利用可能です。",
    "faq.2.q": "開始にアカウントは必要ですか？",
    "faq.2.a": "コア機能はインストール直後に利用できます。一部のモデルエンドポイントでは独自の API キーが必要な場合があります。",
    "faq.3.q": "入力パネルを素早く開くには？",
    "faq.3.a": "既定の推奨ショートカットは Ctrl + R です。拡張機能設定で変更することもできます。",
    "faq.4.q": "オフラインパッケージはどうインストールしますか？",
    "faq.4.a": "files/dist.zip をダウンロードして解凍し、chrome://extensions を開いてデベロッパーモードを有効化し、パッケージ化されていない拡張機能を読み込みます。",
    "footer.back": "トップへ ↑",
    "hero.kicker": "Right AI · ブラウザインテリジェンスハブ",
    "features.kicker": "機能システム",
    "tabs.quick": "AI クイック入力",
    "tabs.quickConversation": "AI クイック対話",
    "tabs.multi": "マルチモデル分割",
    "tabs.webpage": "Webページエージェント",
    "tabs.stock": "株式アシスタント",
    "tabs.ocr": "OCR とテキスト",
    "tabs.dark": "適応型ダークモード",
    "workflow.kicker": "ワークフローエンジン",
    "workflow.1.title": "01 · 収集",
    "workflow.2.title": "02 · 振り分け",
    "workflow.3.title": "03 · 生成",
    "workflow.4.title": "04 · 実行",
    "showcase.kicker": "インタラクティブシナリオ",
    "docs.kicker": "スタートガイド",
    "faq.kicker": "よくある質問",
    "donate.title": "Right AI を応援していただきありがとうございます！",
    "donate.message": "いずれかの QR コードを読み取って応援できます。ご支援ありがとうございます！",
    "donate.alipay": "Alipay",
    "donate.wechat": "WeChat",
    "footer.tagline": "Right AI · ブラウザ内でより速く意思決定。"
  },
  "ko": {
    "meta.title": "Right AI - 브라우저용 지능형 워크스페이스",
    "meta.description": "Right AI는 브라우저를 빠른 입력, 멀티 모델 워크플로, 웹페이지 에이전트 도구, 적응형 다크 모드를 갖춘 AI 워크스페이스로 바꿔줍니다.",
    "nav.home": "홈",
    "nav.features": "기능",
    "nav.workflow": "워크플로",
    "nav.docs": "문서",
    "nav.faq": "자주 묻는 질문",
    "nav.tools": "웹마스터 도구",
    "nav.language": "언어",
    "nav.chrome": "Chrome에 추가",
    "nav.donate": "후원하기",
    "theme.toggle": "테마 전환",
    "hero.title": "브라우저를 위한 가장 현대적이고 인터랙티브한 AI 커맨드 센터",
    "hero.desc": "브라우저는 단순한 탐색 그 이상이어야 합니다. Right AI는 Quick Input, 멀티 모델 분할 보기, 웹페이지 에이전트, 자동화를 하나의 매끄러운 워크스페이스로 결합합니다.",
    "hero.cta.install": "Chrome 웹 스토어에서 설치",
    "hero.cta.download": "ZIP 직접 다운로드",
    "hero.cta.docs": "설정 가이드 보기",
    "hero.trust.1": "어디서나 Ctrl + R로 Quick Input 실행",
    "hero.trust.2": "컨텍스트 전환을 줄인 병렬 모델 대화",
    "hero.trust.3": "웹 네이티브 AI 상호작용, OCR, 번역, 다크 모드 적응",
    "shell.init.command1": "$ 사이드바 어시스턴트를 초기화하고 단축키를 바인딩",
    "shell.init.response1": "Right AI 준비 완료. 아무 페이지에서 Ctrl + R을 눌러 입력 패널을 여세요.",
    "shell.init.command2": "$ 이 페이지를 요약하고 다음 실행 작업을 제안해줘",
    "shell.init.response2": "요약이 생성되었습니다. 실행 가능한 다음 단계 3개를 제안했습니다.",
    "shell.input.label": "명령 입력",
    "shell.input.placeholder": "시도: quick input / multi model / webpage mode 활성화",
    "shell.input.run": "실행",
    "chips.quick": "빠른 입력",
    "chips.multi": "멀티 모델",
    "chips.webpage": "웹페이지 에이전트",
    "chips.dark": "다크 모드",
    "stats.one": "작업 전환 시간 평균 감소",
    "stats.two": "멀티 모델 검증 효율 향상",
    "stats.three": "고빈도 웹 시나리오를 즉시 사용 가능",
    "features.title": "입력, 이해, 추론, 실행을 하나로 묶은 인터페이스",
    "features.lead": "탭과 도구 사이를 오갈 필요가 없습니다. Right AI가 핵심 AI 작업을 인터랙티브 워크플로로 통합합니다.",
    "panels.quick.title": "Ctrl + R로 아이디어를 모델에 바로 보내기",
    "panels.quick.1": "어느 페이지에서나 즉시 실행해 흐름을 유지하세요.",
    "panels.quick.2": "현재 페이지에서 대화 창을 열고 웹페이지 컨텍스트를 함께 붙여 후속 대화를 이어갈 수 있습니다.",
    "panels.quick.3": "더 적은 끊김으로 의도를 실행으로 전환합니다.",
    "panels.quickConversation.title": "AI 빠른 대화: 웹페이지 독립 창 대화",
    "panels.quickConversation.1": "웹페이지 위 독립 대화 창을 빠르게 띄우고 현재 페이지 컨텍스트를 포함해 즉시 모델 대화를 시작합니다.",
    "panels.quickConversation.2": "대화 창을 현재 페이지에 띄워 두어 탭과 사이드바 전환 비용을 줄입니다.",
    "panels.quickConversation.3": "AI 빠른 입력과 함께 쓰면 하나는 빠른 시작, 하나는 몰입형 대화를 담당합니다.",
    "panels.multi.title": "한 화면에서 여러 모델과 협업",
    "panels.multi.1": "ChatGPT, Gemini, Claude 및 커스텀 모델을 나란히 실행하세요.",
    "panels.multi.2": "답변을 즉시 교차 검증해 신뢰도를 높이세요.",
    "panels.multi.3": "하위 작업을 가장 적합한 모델로 자동 라우팅합니다.",
    "panels.web.title": "각 웹페이지를 컨텍스트로 활용하고 그 자리에서 실행",
    "panels.web.1": "현재 페이지 컨텍스트를 읽어 Q&A, 재작성, 요약, 번역을 수행합니다.",
    "panels.web.2": "OCR과 비전 이해를 결합해 혼합 미디어 작업을 처리합니다.",
    "panels.web.3": "페이지 안에서 바로 리서치와 계획을 완료하세요.",
    "panels.stock.title": "주식 모듈: 시세 확인 + AI 해석 통합",
    "panels.stock.1": "사이드바에서 관심 종목, 등락률, 핵심 가격대를 실시간으로 확인합니다.",
    "panels.stock.2": "멀티 모델 Q&A와 결합해 장전/장중 분석을 빠르게 생성합니다.",
    "panels.stock.3": "뉴스, 재무제표, 공시를 볼 때 주식 컨텍스트를 바로 활용할 수 있습니다.",
    "panels.ocr.title": "텍스트 인식: OCR 추출 + 번역을 한 번에",
    "panels.ocr.1": "웹 이미지와 스크린샷에서 복사 가능한 텍스트를 빠르게 추출합니다.",
    "panels.ocr.2": "인식 결과를 바로 번역·요약하고 추가 질문을 이어갈 수 있습니다.",
    "panels.ocr.3": "포스터, PDF 스크린샷, SNS 이미지 같은 장면에 적합합니다.",
    "panels.dark.title": "어떤 웹사이트든 원클릭으로 편안한 다크 모드",
    "panels.dark.1": "웹사이트가 기본 다크 모드를 제공하지 않아도 작동합니다.",
    "panels.dark.2": "시스템 및 확장 프로그램의 테마 설정과 동기화합니다.",
    "panels.dark.3": "시각적 위계를 유지하면서도 가독성 높은 대비를 제공합니다.",
    "workflow.title": "고밀도 정보 작업을 끝내는 4단계",
    "workflow.1.body": "아무 웹페이지에서 Ctrl + R을 누르고 목표를 입력하세요. Right AI가 컨텍스트를 자동으로 수집합니다.",
    "workflow.2.body": "작업은 유형별로 라우팅되며 모델 간 병렬 처리할 수 있습니다.",
    "workflow.3.body": "사이드바에서 요약, 실행 목록, 재작성, 추천을 생성합니다.",
    "workflow.4.body": "결과물을 글쓰기, 리서치, 협업에 바로 활용하세요.",
    "showcase.title": "실제 업무를 위해 설계된 인터랙션 디자인",
    "showcase.1.title": "시장 조사",
    "showcase.1.body": "업계 페이지에서 신호를 추출하고 리스크 단서를 포함한 구조화 인사이트를 생성합니다.",
    "showcase.1.tag": "요약 · 비교 분석",
    "showcase.2.title": "제품 & 운영",
    "showcase.2.body": "사용자 피드백, 경쟁사 정보, 카피 아이디어를 실행 가능한 계획으로 통합합니다.",
    "showcase.2.tag": "모델 협업 · 빠른 반복",
    "showcase.3.title": "학습 & 지식",
    "showcase.3.body": "복잡한 개념을 인터랙티브 후속 Q&A가 포함된 단계형 가이드로 분해합니다.",
    "showcase.3.tag": "딥 리딩 · 가이드 질문",
    "docs.title": "3분 만에 설치하고 첫 명령 실행하기",
    "docs.install.title": "빠른 설치",
    "docs.install.step1.start": "Chrome 웹 스토어에서 설치하거나",
    "docs.install.step1.middle": "또는",
    "docs.install.step1.offline": "오프라인 패키지",
    "docs.install.step1.end": "를 다운로드해 수동으로 설치하세요.",
    "docs.install.step2": "확장 프로그램 관리 페이지를 열고 Right AI를 툴바에 고정하세요.",
    "docs.install.step3": "아무 웹페이지를 열고 Ctrl + R을 눌러 Quick Input을 실행하세요.",
    "docs.install.note": "수동 경로: chrome://extensions -> 개발자 모드 -> 압축해제된 확장 프로그램 로드",
    "docs.update.title": "릴리스 주기",
    "docs.update.1": "매주: 프롬프트 템플릿, 빠른 작업, 시각적 개선.",
    "docs.update.2": "격주: 모델 라우팅 개선 및 안정성 업데이트.",
    "docs.update.3": "매월: 새로운 시나리오 에이전트와 성능 업그레이드.",
    "docs.update.note": "최신 상호작용을 가장 먼저 받으려면 자동 업데이트를 켜세요.",
    "docs.quickchat.title": "AI 빠른 입력 대화 페이지 (신규)",
    "docs.quickchat.1": "실행 후 현재 웹페이지 오른쪽 아래에서 모델 대화 페이지를 바로 열 수 있습니다.",
    "docs.quickchat.2": "\"퀵 팝업에 모델 대화 페이지 표시\" 및 \"실행 시 Chrome을 전면으로 전환\" 설정이 추가되었습니다.",
    "docs.quickchat.3": "\"단축키를 다시 눌러 퀵 대화 창 닫기\"를 켜면 빠른 열기/닫기가 가능합니다.",
    "docs.quickchat.note": "확장 프로그램 설정에서 사용 습관에 맞게 위 옵션을 조합해 보세요.",
    "faq.title": "자주 묻는 질문",
    "faq.1.q": "어떤 브라우저를 지원하나요?",
    "faq.1.a": "최신 Chrome을 권장합니다. 대부분의 Chromium 기반 브라우저도 호환됩니다.",
    "faq.2.q": "시작하려면 계정이 필요한가요?",
    "faq.2.a": "핵심 기능은 설치 직후 바로 사용할 수 있습니다. 일부 모델 엔드포인트는 개인 API 키가 필요할 수 있습니다.",
    "faq.3.q": "입력 패널을 빠르게 여는 방법은?",
    "faq.3.a": "기본 권장 단축키는 Ctrl + R입니다. 확장 프로그램 설정에서 직접 변경할 수도 있습니다.",
    "faq.4.q": "오프라인 패키지는 어떻게 설치하나요?",
    "faq.4.a": "files/dist.zip을 다운로드해 압축을 풀고 chrome://extensions를 연 뒤 개발자 모드를 켜고 압축해제된 확장 프로그램을 로드하세요.",
    "footer.back": "맨 위로 ↑",
    "hero.kicker": "Right AI · 브라우저 인텔리전스 허브",
    "features.kicker": "기능 시스템",
    "tabs.quick": "AI 빠른 입력",
    "tabs.quickConversation": "AI 빠른 대화",
    "tabs.multi": "멀티 모델 분할",
    "tabs.webpage": "웹페이지 에이전트",
    "tabs.stock": "주식 도우미",
    "tabs.ocr": "OCR 및 텍스트",
    "tabs.dark": "적응형 다크 모드",
    "workflow.kicker": "워크플로 엔진",
    "workflow.1.title": "01 · 수집",
    "workflow.2.title": "02 · 라우팅",
    "workflow.3.title": "03 · 생성",
    "workflow.4.title": "04 · 실행",
    "showcase.kicker": "인터랙티브 시나리오",
    "docs.kicker": "시작하기",
    "faq.kicker": "자주 묻는 질문",
    "donate.title": "Right AI를 후원해 주셔서 감사합니다!",
    "donate.message": "원하는 QR 코드를 스캔해 후원할 수 있습니다. 소중한 지원에 감사드립니다!",
    "donate.alipay": "알리페이",
    "donate.wechat": "위챗페이",
    "footer.tagline": "Right AI · 브라우저 안에서 더 빠르게 의사결정하세요."
  },
  "ru": {
    "meta.title": "Right AI — интеллектуальное рабочее пространство в браузере",
    "meta.description": "Right AI превращает ваш браузер в AI-рабочее пространство с быстрым вводом, мульти-модельными сценариями, инструментами агента веб-страницы и адаптивной темной темой.",
    "nav.home": "Главная",
    "nav.features": "Возможности",
    "nav.workflow": "Процесс",
    "nav.docs": "Документация",
    "nav.faq": "Частые вопросы",
    "nav.tools": "Инструменты вебмастера",
    "nav.language": "Язык",
    "nav.chrome": "Добавить в Chrome",
    "nav.donate": "Поддержать",
    "theme.toggle": "Сменить тему",
    "hero.title": "Самый современный и интерактивный AI-командный центр для вашего браузера",
    "hero.desc": "Ваш браузер должен уметь больше, чем просто просмотр страниц. Right AI объединяет Quick Input, Multi-Model Split View, Webpage Agent и автоматизацию в единое плавное рабочее пространство.",
    "hero.cta.install": "Установить из Chrome Web Store",
    "hero.cta.download": "Скачать ZIP напрямую",
    "hero.cta.docs": "Открыть руководство по настройке",
    "hero.trust.1": "Нажмите Ctrl + R, чтобы запускать Quick Input где угодно",
    "hero.trust.2": "Параллельные диалоги с моделями с меньшим переключением контекста",
    "hero.trust.3": "Нативное AI-взаимодействие в вебе, OCR, перевод и адаптация к темной теме",
    "shell.init.command1": "$ инициализировать бокового ассистента и назначить горячую клавишу",
    "shell.init.response1": "Right AI готов. Нажмите Ctrl + R, чтобы открыть панель ввода на любой странице.",
    "shell.init.command2": "$ суммируй эту страницу и предложи следующие действия",
    "shell.init.response2": "Сводка готова: добавлены 3 практических следующих шага.",
    "shell.input.label": "Ввод команды",
    "shell.input.placeholder": "Попробуйте: включить quick input / multi model / режим webpage",
    "shell.input.run": "Запуск",
    "chips.quick": "Быстрый ввод",
    "chips.multi": "Мульти-модель",
    "chips.webpage": "Агент страницы",
    "chips.dark": "Темная тема",
    "stats.one": "Среднее сокращение времени на переключение задач",
    "stats.two": "Более высокая эффективность проверки в мульти-модельном режиме",
    "stats.three": "Высокочастотные веб-сценарии готовы из коробки",
    "features.title": "Единый интерфейс для ввода, понимания, рассуждения и выполнения",
    "features.lead": "Больше не нужно прыгать между вкладками и инструментами. Right AI объединяет ключевые AI-действия в интерактивный рабочий процесс.",
    "panels.quick.title": "Используйте Ctrl + R, чтобы отправлять идеи моделям напрямую",
    "panels.quick.1": "Мгновенный запуск на любой странице без потери потока.",
    "panels.quick.2": "Открывает окно диалога на текущей странице и сохраняет контекст веб-страницы для продолжения разговора.",
    "panels.quick.3": "Преобразуйте намерение в действие с меньшим количеством прерываний.",
    "panels.quickConversation.title": "AI быстрый диалог: отдельное диалоговое окно на веб-странице",
    "panels.quickConversation.1": "Быстро вызывайте отдельное окно диалога на странице и сразу начинайте общение с моделью с контекстом текущей страницы.",
    "panels.quickConversation.2": "Окно чата может плавать поверх текущей страницы, уменьшая переключения между вкладками и сайдбаром.",
    "panels.quickConversation.3": "В паре с AI быстрым вводом это дает удобную схему: быстрый запуск плюс глубокий диалог.",
    "panels.multi.title": "Работайте с несколькими моделями на одном экране",
    "panels.multi.1": "Запускайте ChatGPT, Gemini, Claude и пользовательские модели бок о бок.",
    "panels.multi.2": "Мгновенно сверяйте ответы для большей уверенности.",
    "panels.multi.3": "Автоматически направляйте подзадачи к лучшей модели.",
    "panels.web.title": "Используйте каждую веб-страницу как контекст и выполняйте задачи на месте",
    "panels.web.1": "Читает контекст текущей страницы для Q&A, переписывания, сводки и перевода.",
    "panels.web.2": "Объединяет OCR и анализ изображений для мультимедийных задач.",
    "panels.web.3": "Проводите исследование и планирование прямо внутри страницы.",
    "panels.stock.title": "Модуль акций: мониторинг котировок и AI-анализ в одном окне",
    "panels.stock.1": "Отслеживайте список акций, динамику цены и ключевые уровни прямо в сайдбаре.",
    "panels.stock.2": "Комбинируйте рыночные данные с мульти-модельным Q&A для до- и внутридневного анализа.",
    "panels.stock.3": "Используйте биржевой контекст при чтении новостей, отчетов и объявлений.",
    "panels.ocr.title": "Распознавание текста: OCR-извлечение и перевод в один шаг",
    "panels.ocr.1": "Извлекайте копируемый текст из изображений и скриншотов на веб-странице.",
    "panels.ocr.2": "Результаты OCR можно сразу переводить, суммировать и уточнять вопросами.",
    "panels.ocr.3": "Подходит для постеров, скриншотов PDF, постов в соцсетях и смешанного контента.",
    "panels.dark.title": "Комфортная темная тема в один клик для любого сайта",
    "panels.dark.1": "Работает, даже если сайт не поддерживает темную тему нативно.",
    "panels.dark.2": "Синхронизируется с системной темой и настройками расширения.",
    "panels.dark.3": "Сохраняет читаемую контрастность и визуальную иерархию.",
    "workflow.title": "Четыре шага для задач с плотной информацией",
    "workflow.1.body": "Нажмите Ctrl + R на любой веб-странице и задайте цель. Right AI автоматически захватит контекст.",
    "workflow.2.body": "Задачи маршрутизируются по типу и могут обрабатываться параллельно разными моделями.",
    "workflow.3.body": "Генерируйте сводки, списки действий, переписывания и рекомендации в боковой панели.",
    "workflow.4.body": "Используйте результаты сразу для письма, исследований и совместной работы.",
    "showcase.title": "Дизайн взаимодействия, созданный для реальной работы",
    "showcase.1.title": "Маркетинговые исследования",
    "showcase.1.body": "Извлекайте сигналы из отраслевых страниц и создавайте структурированные инсайты с маркерами рисков.",
    "showcase.1.tag": "Сводки · Сравнительный анализ",
    "showcase.2.title": "Продукт и операции",
    "showcase.2.body": "Объединяйте обратную связь пользователей, данные о конкурентах и идеи для текста в исполнимые планы.",
    "showcase.2.tag": "Совместная работа моделей · Быстрая итерация",
    "showcase.3.title": "Обучение и знания",
    "showcase.3.body": "Разбивайте сложные концепции на понятные шаги с интерактивными уточняющими вопросами.",
    "showcase.3.tag": "Глубокое чтение · Наводящие вопросы",
    "docs.title": "Установите и запустите первую команду за 3 минуты",
    "docs.install.title": "Быстрая установка",
    "docs.install.step1.start": "Установите из Chrome Web Store",
    "docs.install.step1.middle": "или скачайте",
    "docs.install.step1.offline": "офлайн-пакет",
    "docs.install.step1.end": "для ручной установки.",
    "docs.install.step2": "Откройте управление расширениями и закрепите Right AI на панели инструментов.",
    "docs.install.step3": "Откройте любую веб-страницу и нажмите Ctrl + R, чтобы запустить Quick Input.",
    "docs.install.note": "Ручной путь: chrome://extensions -> Режим разработчика -> Загрузить распакованное расширение",
    "docs.update.title": "Ритм релизов",
    "docs.update.1": "Еженедельно: шаблоны промптов, быстрые действия и визуальные улучшения.",
    "docs.update.2": "Раз в две недели: улучшение маршрутизации моделей и обновления стабильности.",
    "docs.update.3": "Ежемесячно: новые сценарные агенты и апгрейды производительности.",
    "docs.update.note": "Включите автообновление, чтобы первыми получать новые взаимодействия.",
    "docs.quickchat.title": "Страница диалога AI быстрого ввода (новое)",
    "docs.quickchat.1": "После запуска можно сразу открыть страницу диалога модели в правом нижнем углу текущей веб-страницы.",
    "docs.quickchat.2": "Добавлены настройки \"Показывать страницу диалога модели в быстром окне\" и \"Переключать Chrome на передний план при запуске\".",
    "docs.quickchat.3": "Включите \"Нажать горячую клавишу снова, чтобы закрыть быстрое окно диалога\" для быстрого открытия/закрытия.",
    "docs.quickchat.note": "Комбинируйте эти параметры в настройках расширения под ваш рабочий сценарий.",
    "faq.title": "Частые вопросы",
    "faq.1.q": "Какие браузеры поддерживаются?",
    "faq.1.a": "Рекомендуется последняя версия Chrome. Большинство браузеров на Chromium также совместимы.",
    "faq.2.q": "Нужна ли учетная запись для начала?",
    "faq.2.a": "Базовые функции работают сразу после установки. Для некоторых модельных endpointов может понадобиться ваш собственный API-ключ.",
    "faq.3.q": "Как быстро открыть панель ввода?",
    "faq.3.a": "Рекомендуемая горячая клавиша по умолчанию — Ctrl + R. Ее также можно изменить в настройках расширения.",
    "faq.4.q": "Как установить офлайн-пакет?",
    "faq.4.a": "Скачайте files/dist.zip, распакуйте архив, откройте chrome://extensions, включите режим разработчика и загрузите распакованное расширение.",
    "footer.back": "Наверх ↑",
    "hero.kicker": "Right AI · Интеллектуальный хаб в браузере",
    "features.kicker": "Система возможностей",
    "tabs.quick": "Быстрый ввод AI",
    "tabs.quickConversation": "AI быстрый диалог",
    "tabs.multi": "Разделение по моделям",
    "tabs.webpage": "Веб-агент",
    "tabs.stock": "Биржевой ассистент",
    "tabs.ocr": "OCR и текст",
    "tabs.dark": "Адаптивная темная тема",
    "workflow.kicker": "Движок процесса",
    "workflow.1.title": "01 · Сбор",
    "workflow.2.title": "02 · Маршрутизация",
    "workflow.3.title": "03 · Генерация",
    "workflow.4.title": "04 · Выполнение",
    "showcase.kicker": "Интерактивные сценарии",
    "docs.kicker": "Быстрый старт",
    "faq.kicker": "Частые вопросы",
    "donate.title": "Спасибо за поддержку Right AI!",
    "donate.message": "Отсканируйте любой QR-код, чтобы оставить донат. Спасибо за вашу поддержку!",
    "donate.alipay": "Alipay",
    "donate.wechat": "WeChat",
    "footer.tagline": "Right AI · Принимайте решения быстрее прямо в браузере."
  }
};

  const PROMPT_TEXT = {
  "zh": {
    "prompts.quick": "开启 quick input 并设置 Ctrl + R 快捷键",
    "prompts.multi": "使用 multi model 对比回答质量",
    "prompts.webpage": "在当前 webpage 上提取重点并总结",
    "prompts.dark": "切换 dark mode 并同步到所有页面"
  },
  "en": {
    "prompts.quick": "Enable quick input and assign Ctrl + R shortcut",
    "prompts.multi": "Use multi model mode to compare answer quality",
    "prompts.webpage": "Extract key points and summarize this webpage",
    "prompts.dark": "Switch to dark mode and sync across pages"
  },
  "zh-Hant": {
    "prompts.quick": "啟用快速輸入並設定 Ctrl + R 快捷鍵",
    "prompts.multi": "使用多模型模式比較回答品質",
    "prompts.webpage": "擷取目前網頁重點並整理摘要",
    "prompts.dark": "切換為深色模式並同步到所有頁面"
  },
  "ja": {
    "prompts.quick": "quick input を有効化し、Ctrl + R ショートカットを設定",
    "prompts.multi": "multi model モードで回答品質を比較",
    "prompts.webpage": "この webpage の要点を抽出して要約",
    "prompts.dark": "dark mode に切り替えて全ページに同期"
  },
  "ko": {
    "prompts.quick": "Quick Input을 활성화하고 Ctrl + R 단축키를 지정해줘",
    "prompts.multi": "multi model 모드로 답변 품질을 비교해줘",
    "prompts.webpage": "현재 webpage의 핵심을 추출해 요약해줘",
    "prompts.dark": "dark mode로 전환하고 모든 페이지에 동기화해줘"
  },
  "ru": {
    "prompts.quick": "Включи quick input и назначь горячую клавишу Ctrl + R",
    "prompts.multi": "Используй multi model для сравнения качества ответов",
    "prompts.webpage": "Выдели ключевые моменты на этой webpage и сделай сводку",
    "prompts.dark": "Переключи dark mode и синхронизируй его на всех страницах"
  }
};

  const RESPONSE_TEXT = {
  "zh": {
    "quick": "已启用 Quick Input。按 Ctrl + R 可立即唤起。",
    "multi": "已开启多模型路由。Right AI 可按任务自动切换模型。",
    "webpage": "已附加当前网页上下文。继续提问即可基于页面内容作答。",
    "dark": "主题偏好已保存，下次访问会保持一致。",
    "default": "命令已加入队列。Right AI 已准备好执行下一条指令。"
  },
  "en": {
    "quick": "Quick Input enabled. Press Ctrl + R to open the launcher instantly.",
    "multi": "Multi-model routing is on. Right AI can switch models per task automatically.",
    "webpage": "Webpage context attached. Ask a follow-up and Right AI will use the current page.",
    "dark": "Theme preference saved. Your visual mode will stay consistent next visit.",
    "default": "Command queued. Right AI is ready for the next instruction."
  },
  "zh-Hant": {
    "quick": "已啟用快速輸入。按 Ctrl + R 即可立即喚起。",
    "multi": "已開啟多模型路由。Right AI 可依任務自動切換模型。",
    "webpage": "已附加目前網頁上下文。繼續提問即可依頁面內容作答。",
    "dark": "主題偏好已儲存，下次造訪會維持一致。",
    "default": "指令已加入佇列。Right AI 已準備好執行下一條指令。"
  },
  "ja": {
    "quick": "Quick Input を有効化しました。Ctrl + R で即座に起動できます。",
    "multi": "マルチモデルルーティングを有効化しました。Right AI がタスクごとに自動でモデルを切り替えます。",
    "webpage": "現在の Web ページ文脈を追加しました。続けて質問するとページ内容に基づいて回答します。",
    "dark": "テーマ設定を保存しました。次回アクセス時も表示モードを維持します。",
    "default": "コマンドをキューに追加しました。Right AI は次の指示を実行する準備ができています。"
  },
  "ko": {
    "quick": "Quick Input이 활성화되었습니다. Ctrl + R을 눌러 즉시 실행하세요.",
    "multi": "멀티 모델 라우팅이 켜졌습니다. Right AI가 작업별로 모델을 자동 전환할 수 있습니다.",
    "webpage": "웹페이지 컨텍스트가 연결되었습니다. 후속 질문을 하면 현재 페이지를 기반으로 답변합니다.",
    "dark": "테마 설정이 저장되었습니다. 다음 방문에도 동일한 모드가 유지됩니다.",
    "default": "명령이 대기열에 추가되었습니다. Right AI가 다음 지시를 실행할 준비를 마쳤습니다."
  },
  "ru": {
    "quick": "Quick Input включен. Нажмите Ctrl + R, чтобы мгновенно открыть лаунчер.",
    "multi": "Включена мульти-модельная маршрутизация. Right AI может автоматически выбирать модель под задачу.",
    "webpage": "Контекст веб-страницы добавлен. Задайте уточняющий запрос, и Right AI использует текущую страницу.",
    "dark": "Предпочтение темы сохранено. При следующем посещении визуальный режим останется тем же.",
    "default": "Команда поставлена в очередь. Right AI готов к следующей инструкции."
  }
};

  const themeLabelByLanguage = {
  "zh": {
    "system": "跟随系统",
    "dark": "切换深色",
    "light": "切换浅色"
  },
  "zh-Hant": {
    "system": "跟隨系統",
    "dark": "切換深色",
    "light": "切換淺色"
  },
  "ja": {
    "system": "システム追従",
    "dark": "ダークへ切替",
    "light": "ライトへ切替"
  },
  "ko": {
    "system": "시스템 따라가기",
    "dark": "다크로 전환",
    "light": "라이트로 전환"
  },
  "ru": {
    "system": "Системная тема",
    "dark": "В тёмную тему",
    "light": "В светлую тему"
  },
  "en": {
    "system": "Follow System",
    "dark": "Switch Dark",
    "light": "Switch Light"
  }
};

  const DOWNLOAD_TOOLTIP_TEXT = {
  "zh": {
    "loading": "版本加载中…",
    "unavailable": "版本信息不可用",
    "prefix": "版本 "
  },
  "zh-Hant": {
    "loading": "版本載入中…",
    "unavailable": "版本資訊不可用",
    "prefix": "版本 "
  },
  "ja": {
    "loading": "バージョンを読み込み中…",
    "unavailable": "バージョン情報を取得できません",
    "prefix": "バージョン "
  },
  "ko": {
    "loading": "버전 정보를 불러오는 중…",
    "unavailable": "버전 정보를 불러올 수 없습니다",
    "prefix": "버전 "
  },
  "ru": {
    "loading": "Загрузка версии…",
    "unavailable": "Версия недоступна",
    "prefix": "Версия "
  },
  "en": {
    "loading": "Loading version…",
    "unavailable": "Version unavailable",
    "prefix": "Version "
  }
};

  const defaultTextByKey = Object.create(null);
  const defaultPlaceholderByKey = Object.create(null);
  let initialTitle = "";
  let initialDescription = "";

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

  function normalizeLanguage(language) {
    const raw = String(language || "").trim();
    if (!raw) {
      return DEFAULT_LANGUAGE;
    }

    if (SUPPORTED_LANGUAGES.includes(raw)) {
      return raw;
    }

    const lower = raw.toLowerCase();
    if (lower.startsWith("zh-tw") || lower.startsWith("zh-hk")) {
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

  function getCurrentLanguage() {
    const bodyLanguage = document.body?.getAttribute("data-language") || DEFAULT_LANGUAGE;
    return normalizeLanguage(bodyLanguage);
  }

  function getLocalePack(language) {
    const normalized = normalizeLanguage(language);
    if (normalized === "zh") {
      return defaultTextByKey;
    }

    return {
      ...EN_TEXT,
      ...(LOCALE_OVERRIDES[normalized] || {}),
    };
  }

  function translateKey(key, language) {
    if (!key) {
      return "";
    }

    const normalized = normalizeLanguage(language);
    const localePack = getLocalePack(normalized);
    const translated = localePack[key];

    if (translated !== undefined) {
      return translated;
    }

    return EN_TEXT[key] ?? defaultTextByKey[key] ?? "";
  }

  function translatePrompt(key, language) {
    const normalized = normalizeLanguage(language);
    const prompts = PROMPT_TEXT[normalized] || PROMPT_TEXT.en;
    return prompts?.[key] ?? PROMPT_TEXT.en[key] ?? PROMPT_TEXT.zh[key] ?? "";
  }

  function commandResponse(type, language) {
    const normalized = normalizeLanguage(language);
    const responses = RESPONSE_TEXT[normalized] || RESPONSE_TEXT.en;
    return responses?.[type] ?? RESPONSE_TEXT.en[type] ?? RESPONSE_TEXT.zh[type] ?? "";
  }

  function getDownloadTooltipCopy(language) {
    const normalized = normalizeLanguage(language);
    return DOWNLOAD_TOOLTIP_TEXT[normalized] || DOWNLOAD_TOOLTIP_TEXT.en;
  }

  function cacheDefaultCopy() {
    if (Object.keys(defaultTextByKey).length > 0) {
      return;
    }

    initialTitle = document.title;
    initialDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key || defaultTextByKey[key] !== undefined) {
        return;
      }

      defaultTextByKey[key] = node.textContent || "";
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (!key || defaultPlaceholderByKey[key] !== undefined) {
        return;
      }

      defaultPlaceholderByKey[key] = node.getAttribute("placeholder") || "";
    });
  }

  function applyLanguage(language, persist) {
    const body = document.body;
    if (!body) {
      return;
    }

    const finalLanguage = normalizeLanguage(language);
    body.setAttribute("data-language", finalLanguage);
    document.documentElement.lang = finalLanguage === "zh" ? "zh-CN" : finalLanguage;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const translated = translateKey(key, finalLanguage);
      if (translated) {
        node.textContent = translated;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (!key) {
        return;
      }

      const translated = finalLanguage === "zh"
        ? (defaultPlaceholderByKey[key] || "")
        : (translateKey(key, finalLanguage) || defaultPlaceholderByKey[key] || "");

      if (translated) {
        node.setAttribute("placeholder", translated);
      }
    });

    document.querySelectorAll(".prompt-chip[data-prompt-key]").forEach((chip) => {
      const key = chip.getAttribute("data-prompt-key");
      const translated = translatePrompt(key, finalLanguage);
      if (translated) {
        chip.dataset.prompt = translated;
      }
    });

    const languageToggle = document.querySelector("#language-toggle");
    if (languageToggle) {
      languageToggle.value = finalLanguage;
      languageToggle.setAttribute("aria-label", translateKey("nav.language", finalLanguage) || "Language");
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const description = finalLanguage === "zh"
        ? initialDescription
        : (translateKey("meta.description", finalLanguage) || initialDescription);
      metaDescription.setAttribute("content", description);
    }

    document.title = finalLanguage === "zh"
      ? initialTitle
      : (translateKey("meta.title", finalLanguage) || initialTitle);

    if (persist) {
      writeStorage(LANGUAGE_STORAGE_KEY, finalLanguage);
    }

    document.dispatchEvent(new CustomEvent("rightai:language-change", { detail: { language: finalLanguage } }));
  }

  function setupLanguageSwitcher() {
    cacheDefaultCopy();

    const storedLanguage = readStorage(LANGUAGE_STORAGE_KEY);
    const bodyLanguage = document.body?.getAttribute("data-language");
    const browserLanguage = window.navigator?.language;
    const initialLanguage = normalizeLanguage(storedLanguage || bodyLanguage || browserLanguage);

    applyLanguage(initialLanguage, false);

    const languageToggle = document.querySelector("#language-toggle");
    if (!languageToggle) {
      return;
    }

    languageToggle.addEventListener("change", (event) => {
      applyLanguage(event.target.value, true);
    });
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

    const systemPreference = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;

    const normalizeThemeMode = (mode) => {
      if (mode === "light" || mode === "dark" || mode === "system") {
        return mode;
      }
      return "system";
    };

    const resolveThemeFromMode = (mode) => {
      if (mode === "light" || mode === "dark") {
        return mode;
      }
      return systemPreference?.matches ? "dark" : "light";
    };

    const getNextThemeMode = (mode) => {
      if (mode === "system") {
        return "dark";
      }
      if (mode === "dark") {
        return "light";
      }
      return "system";
    };

    let currentThemeMode = normalizeThemeMode(readStorage(THEME_STORAGE_KEY));

    const applyThemeMode = (mode, persist) => {
      currentThemeMode = normalizeThemeMode(mode);
      const resolvedTheme = resolveThemeFromMode(currentThemeMode);
      body.setAttribute("data-theme-mode", currentThemeMode);
      body.setAttribute("data-theme", resolvedTheme);

      if (themeToggle) {
        const language = getCurrentLanguage();
        const labels = themeLabelByLanguage[language] || themeLabelByLanguage.en;
        const nextThemeMode = getNextThemeMode(currentThemeMode);
        const toggleLabel = labels[nextThemeMode] || themeLabelByLanguage.en[nextThemeMode];

        themeToggle.setAttribute("aria-pressed", String(resolvedTheme === "dark"));
        themeToggle.setAttribute("aria-label", toggleLabel);

        if (themeLabel) {
          themeLabel.textContent = toggleLabel;
        }
      }

      if (persist) {
        writeStorage(THEME_STORAGE_KEY, currentThemeMode);
      }
    };

    applyThemeMode(currentThemeMode, false);

    document.addEventListener("rightai:language-change", () => {
      applyThemeMode(currentThemeMode, false);
    });

    const onSystemThemeChange = () => {
      if (currentThemeMode !== "system") {
        return;
      }
      applyThemeMode("system", false);
    };

    if (systemPreference) {
      if (typeof systemPreference.addEventListener === "function") {
        systemPreference.addEventListener("change", onSystemThemeChange);
      } else if (typeof systemPreference.addListener === "function") {
        systemPreference.addListener(onSystemThemeChange);
      }
    }

    if (!themeToggle) {
      return;
    }

    themeToggle.addEventListener("click", () => {
      const nextThemeMode = getNextThemeMode(currentThemeMode);
      applyThemeMode(nextThemeMode, true);
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
    return value.toLocaleString(getCurrentLanguage(), {
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
    const chips = Array.from(document.querySelectorAll(".prompt-chip[data-prompt], .prompt-chip[data-prompt-key]"));

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

    const pickResponseType = (commandText) => {
      const text = commandText.toLowerCase();

      const quickTerms = ["quick", "快捷", "快輸入", "быстр", "クイック", "빠른"];
      const multiTerms = ["multi", "模型", "model", "модел", "モデル", "모델"];
      const webTerms = ["web", "page", "网页", "網頁", "страниц", "ページ", "웹"];
      const darkTerms = ["dark", "theme", "深色", "暗色", "темн", "ダーク", "어두"];

      if (quickTerms.some((term) => text.includes(term))) {
        return "quick";
      }
      if (multiTerms.some((term) => text.includes(term))) {
        return "multi";
      }
      if (webTerms.some((term) => text.includes(term))) {
        return "webpage";
      }
      if (darkTerms.some((term) => text.includes(term))) {
        return "dark";
      }

      return "default";
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

      const language = getCurrentLanguage();
      const responseType = pickResponseType(commandText);
      const response = commandResponse(responseType, language);
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

        const prompt = chip.dataset.prompt
          || translatePrompt(chip.getAttribute("data-prompt-key"), getCurrentLanguage());
        commandInput.value = prompt || "";
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

  function setupDonateModal() {
    const donateModal = document.querySelector(".donate-modal");
    const donateDialog = donateModal?.querySelector(".donate-modal-dialog") || null;
    const donateTriggers = Array.from(document.querySelectorAll(".donate-trigger"));

    if (!donateModal || !donateDialog || donateTriggers.length === 0) {
      return;
    }

    let previousFocusedNode = null;

    const closeDonateModal = () => {
      donateModal.hidden = true;
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onDonateKeydown);

      if (previousFocusedNode && typeof previousFocusedNode.focus === "function") {
        previousFocusedNode.focus();
      }
      previousFocusedNode = null;
    };

    const openDonateModal = () => {
      previousFocusedNode = document.activeElement;
      donateModal.hidden = false;
      document.body.classList.add("modal-open");
      donateDialog.focus();
      document.addEventListener("keydown", onDonateKeydown);
    };

    function onDonateKeydown(event) {
      if (event.key === "Escape") {
        closeDonateModal();
      }
    }

    donateTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openDonateModal();
      });
    });

    donateModal.addEventListener("click", (event) => {
      if (event.target.closest("[data-close]")) {
        event.preventDefault();
        closeDonateModal();
        return;
      }

      if (!event.target.closest(".donate-modal-dialog")) {
        closeDonateModal();
      }
    });
  }

  function setupDownloadVersionTooltip() {
    const downloadAnchors = Array.from(document.querySelectorAll(".direct-download"));

    if (downloadAnchors.length === 0) {
      return;
    }

    const tooltip = document.createElement("div");
    tooltip.className = "download-tooltip";
    tooltip.setAttribute("role", "status");
    document.body.appendChild(tooltip);

    let versionLabel = "";
    let versionLoadFailed = false;
    let activeAnchor = null;

    const getTooltipText = () => {
      const copy = getDownloadTooltipCopy(getCurrentLanguage());
      if (versionLabel) {
        return `${copy.prefix}${versionLabel}`;
      }

      if (versionLoadFailed) {
        return copy.unavailable;
      }

      return copy.loading;
    };

    const positionTooltip = (targetNode) => {
      const rect = targetNode.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;
      const tooltipHeight = tooltip.offsetHeight;
      const tooltipWidth = tooltip.offsetWidth;

      let top = rect.top + scrollY - tooltipHeight - 12;
      if (top < scrollY + 8) {
        top = rect.bottom + scrollY + 12;
      }

      let left = rect.left + scrollX + rect.width / 2 - tooltipWidth / 2;
      const minLeft = scrollX + 8;
      const maxLeft = scrollX + window.innerWidth - tooltipWidth - 8;
      left = Math.max(minLeft, Math.min(left, maxLeft));

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    };

    const showTooltip = (targetNode) => {
      activeAnchor = targetNode;
      tooltip.textContent = getTooltipText();
      tooltip.classList.add("is-visible");
      positionTooltip(targetNode);
    };

    const hideTooltip = () => {
      activeAnchor = null;
      tooltip.classList.remove("is-visible");
    };

    downloadAnchors.forEach((anchor) => {
      anchor.addEventListener("mouseenter", () => showTooltip(anchor));
      anchor.addEventListener("mouseleave", hideTooltip);
      anchor.addEventListener("focus", () => showTooltip(anchor));
      anchor.addEventListener("blur", hideTooltip);
    });

    window.addEventListener("scroll", () => {
      if (activeAnchor) {
        positionTooltip(activeAnchor);
      }
    });

    window.addEventListener("resize", () => {
      if (activeAnchor) {
        positionTooltip(activeAnchor);
      }
    });

    document.addEventListener("rightai:language-change", () => {
      if (activeAnchor) {
        showTooltip(activeAnchor);
      }
    });

    fetch("files/version.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load version");
        }

        return response.text();
      })
      .then((text) => {
        const trimmed = text.trim();
        versionLabel = trimmed;
        versionLoadFailed = !trimmed;

        if (activeAnchor) {
          showTooltip(activeAnchor);
        }
      })
      .catch(() => {
        versionLoadFailed = true;

        if (activeAnchor) {
          showTooltip(activeAnchor);
        }
      });
  }

  function initHomeInteractions() {
    setupLanguageSwitcher();
    setupThemeToggle();
    setupScrollProgress();
    setupCursorGlow();
    setupRevealOnScroll();
    setupAnimatedCounters();
    setupFeatureTabs();
    setupCommandPlayground();
    setupTiltCards();
    setupDonateModal();
    setupDownloadVersionTooltip();
  }

  onReady(initHomeInteractions);
})();
