export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘前版",
  updatedAt: "2026-07-31 20:36 CST",
  nextUpdate: "2026-08-03 08:30 CST",
  stance: "中性偏多 · 高波动",
  score: 61,
  headline: "AMZN 与 AAPL 走出分化，今晚工资通胀决定科技反弹成色",
  summary:
    "美股今晚开盘前的主线已经从“AI 是否有需求”转向“增长质量能否覆盖资本成本”：AMZN 因 AWS 增长 37%且上调全年资本开支至 $220B，在盘后上涨逾 9%；AAPL 虽创收入纪录，却因关税退款不可持续而盘后下跌 2.3%。北京时间 20:30 的 Q2 就业成本指数发布窗口刚刚到达，但 BLS 官方正文截至 20:36 尚不可稳定读取，本期不填未经核实的实际值。交易顺序应依次观察 ECI、21:30 开盘、21:45 芝加哥 PMI 与 22:00 密歇根消费者信心终值。",
  inference:
    "方向判断为基于公开数据的编辑性推断，不构成投资建议；事实、模型判断与数据缺口均分开标注，所有时间已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$741.69", day: "+1.68%", week: "+0.48%", month: "−0.68%",
    summary: "微软领涨，强势反弹", tone: "up", session: "07/30 美股常规时段收盘", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/SPY/history/", sourceLabel: "Yahoo Finance · SPY 历史收盘",
  },
  {
    name: "QQQ", close: "$683.55", day: "+3.30%", week: "−1.22%", month: "−7.18%",
    summary: "AI 回补，弹性居首", tone: "up", session: "07/30 美股常规时段收盘", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/QQQ/history/", sourceLabel: "Yahoo Finance · QQQ 历史收盘",
  },
  {
    name: "VOO", close: "$681.79", day: "+1.66%", week: "+0.47%", month: "−0.73%",
    summary: "科技带动，全面收高", tone: "up", session: "07/30 美股常规时段收盘", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/VOO/history/", sourceLabel: "Yahoo Finance · VOO 历史收盘",
  },
  {
    name: "10Y 美债", close: "4.68%", day: "+1bp", week: "−3bp", month: "+24bp",
    summary: "通胀黏性，长端微升", tone: "down", session: "07/30 Treasury 官方日值；2Y 4.23%", checkedAt: "07/31 09:38 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方日值",
  },
  {
    name: "DXY", close: "100.01", day: "−0.78%", week: "−1.40%", month: "−1.17%",
    summary: "增长放缓，美元走弱", tone: "down", session: "07/30 ICE 美元指数日线收盘", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/DX-Y.NYB/history/", sourceLabel: "Yahoo Finance · ICE DXY 历史收盘",
  },
  {
    name: "现货黄金", close: "$4,040.90", day: "−0.63%", week: "−0.21%", month: "+0.83%",
    summary: "美元回落，金价仍软", tone: "down", session: "07/30 XAU/USD 00:00 日线收盘", checkedAt: "07/31 09:38 CST",
    source: "https://www.myfxbook.com/forex-market/currencies/xauusd-historical-data", sourceLabel: "Myfxbook · XAU/USD 同源历史日线",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—",
    summary: "结算行未齐，拒绝估算", tone: "flat", session: "07/30 NYMEX 9 月合约结算待核", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/CL=F/history/", sourceLabel: "Yahoo Finance · 07/30 完整结算行尚不可稳定复核",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—",
    summary: "UTC 日线未齐，拒绝估算", tone: "flat", session: "07/30 BTC-USD UTC 日线待核", checkedAt: "07/31 09:38 CST",
    source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "Yahoo Finance · 07/30 完整 UTC 日线尚不可稳定复核",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow, time: "04:00", category: "市场", impact: "高",
    title: "微软创近 18 年最佳单日，AI 链强势修复",
    detail: "S&P 500 涨 1.7%至 7,437.63，纳指综合涨 2.8%，道指涨 1.2%；微软因 Azure 与 AI 投资兑现信号大涨 15.5%。这是风险偏好修复，但 QQQ 过去一月仍跌 7.18%，尚不是趋势完全逆转。",
    source: "https://apnews.com/article/99b5702d93a2b5c6e513fb952ccdcc92", sourceLabel: "Associated Press · market close",
  },
  {
    window: "previous" as EventWindow, time: "20:30", category: "宏观", impact: "高",
    title: "Q2 GDP 放缓至 1.5%，私人内需却加速",
    detail: "BEA 初值显示实际 GDP 年化增速由 Q1 的 2.1%降至 1.5%；但私人国内最终销售增速由 1.7%升至 3.9%。总量偏弱、内需不差，不能简单解读为衰退信号。",
    source: "https://www.bea.gov/news/2026/gdp-advance-estimate-2nd-quarter-2026", sourceLabel: "U.S. BEA · GDP advance estimate",
  },
  {
    window: "previous" as EventWindow, time: "20:30", category: "通胀", impact: "高",
    title: "6 月核心 PCE 环比仅增 0.1%，但同比仍达 3.3%",
    detail: "6 月整体 PCE 环比下降 0.1%、核心环比上升 0.1%；同比整体和核心分别为 3.7%和 3.3%。短期动量缓和，但同比水平仍不支持快速宽松。",
    source: "https://www.bea.gov/news/2026/personal-income-and-outlays-june-2026", sourceLabel: "U.S. BEA · Personal Income and Outlays",
  },
  {
    window: "previous" as EventWindow, time: "全天", category: "FED", impact: "高",
    title: "美联储 9–3 维持 3.50%—3.75%，三位委员主张加息",
    detail: "Hammack、Kashkari、Logan 主张加息 25bp；声明称经济活动稳健、通胀仍高。三票鹰派异议解释了股市上涨时长债收益率仍升至 4.68%的背离。",
    source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm", sourceLabel: "Federal Reserve · FOMC statement",
  },
  {
    window: "today" as EventWindow, time: "20:30", category: "就业", impact: "高",
    title: "Q2 就业成本指数发布窗口已到，实际值待官方页稳定可读",
    detail: "BLS 官方日历确认此刻发布；截至 20:36，官方正文与归档尚不可稳定读取，因此不采用二手快讯填值。影响路径不变：高于预期 → 2Y/10Y 上行 → QQQ 与高估值 AI 链承压；明显降温则支持软着陆交易。",
    source: "https://www.bls.gov/schedule/news_release/eci.htm", sourceLabel: "U.S. BLS · ECI release schedule",
  },
  {
    window: "today" as EventWindow, time: "21:30", category: "开盘", impact: "高",
    title: "AAPL 与 AMZN 财报分化进入常规交易验证",
    detail: "AP 记录 AMZN 盘后涨逾 9%、AAPL 盘后跌 2.3%。若 AMZN 强势外溢到 MSFT、MU 与 QQQ，而 AAPL 跌幅不扩散，科技反弹仍可延续；若收益率同步上冲，财报利好可能被估值压缩抵消。",
    source: "https://apnews.com/article/b4ce02b4666a35b8975823c5c22072ee", sourceLabel: "Associated Press · Amazon earnings reaction",
  },
  {
    window: "today" as EventWindow, time: "21:45", category: "制造业", impact: "中",
    title: "美国 7 月芝加哥商业景气指数",
    detail: "该指标在开盘后 15 分钟发布。订单与价格若同时偏强，会增强增长韧性但推高利率压力；订单弱、价格强则是风险资产最不友好的组合。",
    source: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-chicago-report-on-business/", sourceLabel: "ISM Chicago Report on Business",
  },
  {
    window: "today" as EventWindow, time: "22:00", category: "消费", impact: "中",
    title: "密歇根大学 7 月消费者信心终值",
    detail: "重点不是标题指数，而是通胀预期。若长期通胀预期上修，将与偏热 ECI 形成叠加，推动长债收益率上行；若下修，则有助于稳定科技估值。",
    source: "https://data.sca.isr.umich.edu/", sourceLabel: "University of Michigan · Surveys of Consumers",
  },
  {
    window: "future" as EventWindow, time: "08/03 22:00", category: "制造业", impact: "中",
    title: "美国 7 月 ISM 制造业",
    detail: "新订单判断需求，价格分项判断关税与能源成本传导；价格强、订单弱将是最不利的滞胀组合。",
    source: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-report-on-business/", sourceLabel: "ISM",
  },
  {
    window: "future" as EventWindow, time: "08/04 20:30", category: "贸易", impact: "中",
    title: "美国 6 月国际贸易",
    detail: "贸易缺口将影响 Q2 GDP 后续修订，并检验关税对进口量与库存的早期影响。",
    source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA",
  },
  {
    window: "future" as EventWindow, time: "08/04 22:00", category: "就业", impact: "高",
    title: "美国 6 月 JOLTS 职位空缺",
    detail: "职位空缺与离职率决定劳动力供需是否继续再平衡；偏强读数会强化本周 FOMC 的鹰派分歧。",
    source: "https://www.bls.gov/schedule/2026/home.htm", sourceLabel: "U.S. BLS · 2026 release calendar",
  },
  {
    window: "future" as EventWindow, time: "08/06 20:30", category: "生产率", impact: "中",
    title: "美国 Q2 非农生产率初值",
    detail: "生产率若能抵消工资成本，有助于压低单位劳工成本；反之会放大 ECI 的通胀含义。",
    source: "https://www.bls.gov/schedule/2026/home.htm", sourceLabel: "U.S. BLS",
  },
  {
    window: "future" as EventWindow, time: "08/07 20:30", category: "就业", impact: "高",
    title: "美国 7 月非农就业报告",
    detail: "未来七天的最终定价锚。就业强且工资热会推升收益率并压缩科技估值；就业温和降温才有利于软着陆交易。",
    source: "https://www.bls.gov/schedule/2026/home.htm", sourceLabel: "U.S. BLS",
  },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  {
    category: "中东 / 能源", date: "07/30", impact: "WTI、通胀、美债、航空与消费",
    title: "美伊互射导弹，霍尔木兹通行量降至战时低位",
    detail: "AP 报道美伊再度交火，7 月 20—26 日海峡船舶通行量由前一周 82 艘降至 39 艘。外交突破尚未出现，能源供应的尾部风险仍高。",
    source: "https://apnews.com/article/iran-war-us-hormuz-strait-july-30-2026-8dc77ed6a65f389ea4af84635d2473bd", sourceLabel: "Associated Press",
  },
  {
    category: "红海 / 航运", date: "07/30", impact: "油轮、保险、沙特能源设施",
    title: "沙特绕开霍尔木兹的替代航线也面临威胁",
    detail: "胡塞武装威胁封锁 Bab el-Mandeb，部分沙特原油不得不经红海港口、埃及陆上管道再装船。绕行成本上升会把地缘风险传导到运费和通胀。",
    source: "https://apnews.com/article/iran-war-us-hormuz-strait-july-30-2026-8dc77ed6a65f389ea4af84635d2473bd", sourceLabel: "Associated Press",
  },
  {
    category: "韩国 / 半导体", date: "07/30", impact: "MU、SNDK、SKHY、QQQ",
    title: "三星与 SK 海力士创纪录盈利，股价却继续承压",
    detail: "三星 Q2 营业利润同比增长逾 19 倍，SK 海力士收入也创新高；市场仍担忧扩产、资本开支和中国竞争。基本面强与估值去杠杆并存，是存储链当前核心矛盾。",
    source: "https://apnews.com/article/samsung-ai-profit-memory-chips-10c2c548a392988862d8c7bd3f6fae05", sourceLabel: "Associated Press",
  },
  {
    category: "全球科技 / AI", date: "07/30", impact: "MSFT、AMZN、QQQ、半导体",
    title: "云计算增长重新验证 AI 需求，但现金回报分化",
    detail: "MSFT Azure 增长 43%，AMZN AWS 增长 37%；市场奖励可验证收入增量，同时惩罚自由现金流恶化。后续 AI 链定价将从“投入多少”转向“收入与现金何时兑现”。",
    source: "https://apnews.com/article/b4ce02b4666a35b8975823c5c22072ee", sourceLabel: "Associated Press",
  },
] as const;

export const stockNews = [
  { ticker: "MSFT", title: "Azure +43%，微软创近 18 年最佳单日", detail: "Microsoft Cloud 收入 $59.3B、商业 RPO $678B；AI 投入开始被收入和订单验证，但 GAAP EPS 仍含投资收益。", source: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", label: "SEC · Microsoft earnings release" },
  { ticker: "AAPL", title: "纪录收入未能抵消利润率正常化担忧", detail: "iPhone 与大中华区收入均增约 22%，但 EPS 含 $0.11 关税退款；AP 记录股价盘后跌 2.3%，市场在折价一次性收益。", source: "https://apnews.com/article/94102918cb3592ebc1d2a38c4d7d819a", label: "Associated Press · Apple earnings reaction" },
  { ticker: "AMZN", title: "AWS 加速推动盘后涨逾 9%，资本开支再上调", detail: "AWS 增长 37%、为 18 个季度最快；公司将 2026 年资本开支计划由 $200B 上调至 $220B。市场当前奖励收入兑现，但 TTM FCF −$7.6B 仍是后续验证点。", source: "https://apnews.com/article/b4ce02b4666a35b8975823c5c22072ee", label: "Associated Press · Amazon earnings reaction" },
  { ticker: "SNDK / MU / SKHY", title: "存储盈利创纪录，扩产与中国竞争仍压估值", detail: "三星和 SK 海力士业绩证明 AI 存储需求仍强，但亚洲存储股继续承压；对 MU、SNDK、SKHY 而言，价格周期与资本开支兑现仍是主线。", source: "https://apnews.com/article/samsung-ai-profit-memory-chips-10c2c548a392988862d8c7bd3f6fae05", label: "Associated Press" },
  { ticker: "GDX / PAAS", title: "金价小跌，实际利率仍是约束", detail: "同源 XAU/USD 日线收于 $4,040.90，日跌 0.63%；美元虽弱，但长债收益率回升限制贵金属弹性。", source: "https://www.myfxbook.com/forex-market/currencies/xauusd-historical-data", label: "Myfxbook · XAU/USD history" },
] as const;

export const signals = {
  options: [
    { ticker: "MSFT/AAPL/AMZN", text: "本期未取得可审计的完整期权逐笔和统一历史异常度基准；不把媒体截图或单笔成交量写成“异动”事实。" },
    { ticker: "本期", text: "暂无可信全市场期权异动数据，保留空缺。" },
  ],
  ratings: [
    { ticker: "本期", text: "截至 07/31 20:36，未取得可由投行原始报告或多家高可信来源复核的重大评级变动，暂不填充。" },
  ],
};

export const sources = [
  ["Federal Reserve · FOMC", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"],
  ["U.S. Treasury Rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS 2026 Calendar", "https://www.bls.gov/schedule/2026/home.htm"],
  ["BEA GDP", "https://www.bea.gov/news/2026/gdp-advance-estimate-2nd-quarter-2026"],
  ["BEA PCE", "https://www.bea.gov/news/2026/personal-income-and-outlays-june-2026"],
  ["SEC EDGAR", "https://www.sec.gov/edgar/search/"],
] as const;
