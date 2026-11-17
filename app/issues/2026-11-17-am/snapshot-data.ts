export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-11-17 08:30 CST",
  nextUpdate: "2026-11-18 08:30 CST",
  stance: "偏谨慎 · 利率上行压制科技估值",
  score: 33,
  windowDates: { previous: "周五 · 11/13", today: "周一 · 11/16", future: "11/17—11/23" },
  headline: "PPI 虽低于预期，长端利率与芯片抛压仍压制科技股",
  summary:
    "11/13 美股常规时段收盘：SPY 收于 $754.37（−0.36%）、QQQ 收于 $679.89（−1.20%）、VOO 收于 $693.38（−0.38%）。U.S. Treasury 官方日曲线显示 10Y 升至 5.15%、2Y 升至 4.88%。BLS 的 10 月 PPI 环比 +0.3%，但核心口径仍为 +0.5%；公开报道显示芯片股回调与长端利率走高共同压制风险偏好。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。ETF 使用 11/13 美股常规时段收盘；10Y 使用 U.S. Treasury 11/13 官方日值；未能取得同源日线的 DXY、黄金、WTI、BTC 明确留空。",
};

export const markets = [
  { name: "SPY", close: "$754.37", day: "−0.36%", week: "+2.59%", month: "—", summary: "科技拖累收低", tone: "down", session: "11/13 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/17 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · SPY 同源历史日线" },
  { name: "QQQ", close: "$679.89", day: "−1.20%", week: "+3.63%", month: "—", summary: "芯片领跌", tone: "down", session: "11/13 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/17 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · QQQ 同源历史日线" },
  { name: "VOO", close: "$693.38", day: "−0.38%", week: "+2.57%", month: "—", summary: "宽基小幅走弱", tone: "down", session: "11/13 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/17 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD", sourceLabel: "Financial Times · VOO 同源历史日线" },
  { name: "10Y 美债", close: "5.15%", day: "+5bp", week: "+29bp", month: "−6bp", summary: "长端继续上行", tone: "up", session: "11/13 U.S. Treasury 日收益率曲线；周/月基准为 11/06、10/13", checkedAt: "11/17 08:30 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { name: "DXY", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得报道中的美元指数变动，未将其冒充同源日线收盘", checkedAt: "11/17 08:30 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "DXY 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得期货/报道口径，未将其冒充 XAU/USD 日线收盘", checkedAt: "11/17 08:30 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "XAU/USD 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "近月口径待核", tone: "neutral", session: "报道显示 12 月合约结算 $88.56，但未取得可交叉核对的同源多周期日线", checkedAt: "11/17 08:30 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "WTI near-month 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "UTC 日线待核", tone: "neutral", session: "未取得可交叉核对的 UTC 日线收盘", checkedAt: "11/17 08:30 CST", source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "BTC-USD 历史行情源（待核）" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "科技承压，QQQ 跌幅显著大于宽基", detail: "11/13 常规时段，SPY 收于 $754.37（−0.36%），QQQ 收于 $679.89（−1.20%），VOO 收于 $693.38（−0.38%）。公开报道显示半导体与 AI 相关个股走弱，不能据此替代对单一公司的基本面判断。", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · ETF 历史收盘" },
  { window: "previous" as EventWindow, time: "21:30", category: "通胀", impact: "高", title: "10 月 PPI 环比 +0.3%，核心口径仍为 +0.5%", detail: "BLS 公布的最终需求 PPI 环比上涨 0.3%，同比上涨 6.5%；剔除食品、能源和贸易服务的口径环比上涨 0.5%。这同时包含总体压力放缓与核心黏性的事实，不把它直接等同于下一次 FOMC 决议。", source: "https://www.bls.gov/news.release/ppi.nr0.htm", sourceLabel: "U.S. BLS · October PPI" },
  { window: "previous" as EventWindow, time: "收盘", category: "利率", impact: "高", title: "官方 10Y 升至 5.15%，2Y 升至 4.88%", detail: "U.S. Treasury 11/13 日收益率曲线显示，10Y 较 11/12 上升 5bp、2Y 上升 2bp；10Y 较 11/06 高 29bp。长端实际折现率上行仍是高估值科技股的重要估值约束。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "高", title: "本周先看联储官员讲话与利率再定价", detail: "联储网站列示 11/16 有主席 Warsh 的开场讲话与理事 Barr 的 AI 金融稳定演讲。除非讲话直接涉及通胀、就业或政策路径，不将主题演讲自动解读成货币政策信号。", source: "https://www.federalreserve.gov/newsevents/speech/2026-speeches.htm", sourceLabel: "Federal Reserve · 2026 speeches" },
  { window: "today" as EventWindow, time: "全天", category: "公司", impact: "高", title: "Nvidia 财报临近，AI 资本开支与领导层不确定性仍是焦点", detail: "Reuters 报道称，Nvidia 将于周二美股盘后公布季度业绩，周五芯片板块承压。对关注清单而言，应分别验证云厂商资本开支、数据中心订单和公司层面的官方披露，而不是以指数波动替代业绩判断。", source: "https://www.business-standard.com/world-news/us-stocks-mostly-ease-with-tech-nvidia-concerns-airline-shares-fall-126111400058_1.html", sourceLabel: "Reuters · U.S. market close" },
  { window: "future" as EventWindow, time: "11/17 21:30", category: "外贸价格", impact: "中", title: "美国 10 月进出口价格", detail: "进口价格可帮助判断能源、美元与贸易成本是否继续向国内价格传导；重点观察非燃料进口，而非只用单月总体变化判断利率方向。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
  { window: "future" as EventWindow, time: "11/18 21:30", category: "零售 / 风险偏好", impact: "高", title: "美国 10 月零售销售（市场需以官方日历再确认）", detail: "消费数据是盈利与增长预期的重要验证。由于本轮未取得对应的官方发布时间表条目，不在页面给出具体读数或市场一致预期；发布前应以 Census Bureau 日历复核。", source: "https://www.census.gov/economic-indicators/calendar-listview.html", sourceLabel: "U.S. Census Bureau · official calendar" },
  { window: "future" as EventWindow, time: "11/18 23:00", category: "就业", impact: "中", title: "美国年度工伤与疾病统计", detail: "该报告不是通常意义上的高频就业指引，但属于官方劳动力市场信息。利率路径的更高权重仍来自 PPI、就业报告与 FOMC 沟通。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
] as const;

export const earnings = [
  { ticker: "MU", company: "美光科技", date: "06/24 盘后", status: "已披露", focus: "收入 $41.46B；GAAP EPS $24.67；调整后 FCF $18.3B", reportUrl: "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/a2026q3ex991-pressrelease.htm", analysisUrl: "/reports/mu-fy2026-q3" },
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "GOOGL", company: "Alphabet", date: "07/22 盘后", status: "已披露", focus: "收入 $119.80B；Google Cloud +82%；EPS $9.11", reportUrl: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm", analysisUrl: "/reports/alphabet-q2-2026" },
  { ticker: "META", company: "Meta", date: "07/29 盘后", status: "已披露", focus: "收入 $60.80B；EPS $6.18；Q3 指引 $61B—$64B", reportUrl: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx", analysisUrl: "/reports/meta-q2-2026" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
  { ticker: "SPCX", company: "SpaceX", date: "08/04 盘后", status: "已披露", focus: "收入 $7.814B；调整后 EBITDA $3.538B；资本开支 $18.369B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", analysisUrl: "/reports/spcx-q2-2026" },
  { ticker: "PLTR", company: "Palantir", date: "08/03 盘后", status: "已披露", focus: "收入 $1.94B；美国商业收入 +149%；上调全年指引", reportUrl: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm", analysisUrl: "/reports/pltr-q2-2026" },
  { ticker: "AMD", company: "AMD", date: "08/04 盘后", status: "已披露", focus: "收入 $11.536B；数据中心 $6.72B；Q3 指引约 $13B", reportUrl: "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/q22026991.htm", analysisUrl: "/reports/amd-q2-2026" },
  { ticker: "SNDK", company: "SanDisk", date: "08/05 盘后", status: "已披露", focus: "收入 $8.965B；GAAP 毛利率 84.6%；新增 $14B 回购授权", reportUrl: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", analysisUrl: "/reports/sndk-fy2026-q4" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "GOOGL", "META", "SKHY", "MU", "AMD", "PLTR", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  { category: "中东 / 能源与航运", date: "11/14", impact: "油价、通胀预期与航空运输成本", title: "供给回升压住油价，但霍尔木兹航运风险仍未消失", detail: "Reuters 报道显示，WTI 与 Brent 连续第二周下跌，市场开始交易全球供应盈余；同时，油轮及地区基础设施仍面对袭击风险。传导路径是：供应修复压低能源通胀，航运或军事事件则会快速重建风险溢价。", source: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/14/oil-prices-suffer-a-second-straight-weekly-drop-on-signs-of-a-growing-supply-surplus", sourceLabel: "Reuters · oil market report" },
  { category: "全球利率 / 资金流", date: "11/14", impact: "美债、美元、黄金与成长股估值", title: "长端美债收益率走高，科技股折现率压力未解除", detail: "官方曲线显示 10Y 当日升至 5.15%，而 Reuters 报道称 2Y 的单周升幅为两年多来最大。影响路径首先是长久期估值承压，其次才是融资和盈利预期的二阶影响；不将市场定价视作联储承诺。", source: "https://www.business-standard.com/world-news/us-stocks-mostly-ease-with-tech-nvidia-concerns-airline-shares-fall-126111400058_1.html", sourceLabel: "Reuters · global markets" },
  { category: "中美 / 供应链", date: "11/14", impact: "半导体、AI 出口限制与风险偏好", title: "APEC 前的中美元首会面预期把 AI 与贸易议题推回前台", detail: "Reuters 周度前瞻称，11 月 18—19 日深圳 APEC 场边会面预计讨论 AI 风险对话、芯片与贸易问题。其对相关资产的影响取决于具体政策文本与出口管制执行，而非会面本身。", source: "https://economictimes.indiatimes.com/markets/us-stocks/news/5-world-market-themes-for-the-week-ahead/articleshow/135822113.cms", sourceLabel: "Reuters · global week ahead" },
  { category: "地缘政治 / 安全", date: "11/14", impact: "能源风险溢价、避险资产与全球运输", title: "美国对伊朗下一步军事行动仍具不确定性", detail: "Reuters 援引知情人士称，美国总统可能在没有新挑衅时暂缓进一步行动，但尚无最终解决路径。后续观察点是官方声明、航运安全与原油实际装船量；不把匿名消息等同于既定政策。", source: "https://www.reuters.com/3fec1b0a85a0/world/middle-east/trump-tells-advisers-he-may-hold-off-iran-attacks-barring-new-provocations-2026-11-14/", sourceLabel: "Reuters · Middle East" },
  { category: "全球股市 / 行业轮动", date: "11/14", impact: "AI 链、航空运输与跨市场风险偏好", title: "芯片走弱与航空突发事件加大周末持仓风险", detail: "Reuters 报道称，半导体指数下跌、AI 相关个股承压；FAA 的全国离港暂停又拖累航空股。对组合的直接观察点是周初服务恢复、芯片业绩与长端利率是否同步缓和。", source: "https://www.moneycontrol.com/news/business/s-p-500-nasdaq-end-lower-as-nvidia-uncertainty-weighs-on-tech-shares-14080000.html/amp", sourceLabel: "Reuters · U.S. market close" },
] as const;

export const stockNews = [
  { ticker: "GOOGL", title: "Cloud 加速与 AI 投入共振，但 EPS 受到投资收益显著放大", detail: "Alphabet Q2 收入同比增长 24%至 $119.80B，Google Cloud 收入增长 82%至 $24.77B；EPS $9.11 包含约 $98.0B 股权证券未实现净收益，不能直接外推。季度资本开支 $44.92B，高于经营现金流 $39.07B，下一阶段需同时验证云增长与现金回报。", source: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm", label: "SEC · Alphabet Q2 release" },
  { ticker: "META", title: "广告增长仍强，法律费用与 AI 资本开支压低利润和自由现金流", detail: "Meta Q2 收入增长 28%至 $60.80B，广告展示量增长 14%、单价增长 12%；但营业利润率降至 31%，自由现金流仅 $784M。公司预计 Q3 收入 $61B—$64B，并把 2026 年资本开支区间收窄至 $130B—$145B。", source: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx", label: "Meta Investor Relations" },
  { ticker: "AMD", title: "收购 Taalas，补强专用 AI 推理芯片能力", detail: "Taalas 的架构针对模型推理数据流和内存瓶颈，AMD 计划将其与 Instinct GPU、EPYC、ROCm 和 Helios 机架级方案结合。官方未披露交易金额和近期收入贡献，当前只能判断技术与人才协同，不能量化盈利增厚。", source: "https://ir.amd.com/news-events/press-releases/detail/1296/amd-acquires-taalas-to-advance-compute-solutions-for-rapidly-growing-ai-inference-market", label: "AMD Investor Relations" },
  { ticker: "SNDK / MU / SKHY", title: "8 月 13 日 SanDisk 投资者日成为存储周期下一验证点", detail: "财报确认价格与数据中心需求强劲，同时消费业务走弱且涨价贡献较高。投资者日需要验证 NAND 供需、长期合同、资本开支与回购，避免只用单季高毛利率外推完整周期。", source: "https://investor.sandisk.com/", label: "SanDisk Investor Relations" },
  { ticker: "AAPL", title: "8 月 10 日为季度股息登记日", detail: "苹果此前宣布每股 0.27 美元现金股息，8 月 10 日收盘登记、8 月 13 日支付。这是已披露的资本回报安排，不属于经营基本面新变化。", source: "https://www.apple.com/newsroom/2026/07/apple-reports-third-quarter-results/", label: "Apple Newsroom · official results" },
  { ticker: "SPCX", title: "限售解禁只代表可售供给增加，实际出售规模仍不可确认", detail: "首份上市后财报显示业务增长与 AI 资本开支同时激增。本期未取得可信的实际抛售披露，因此不把解禁等同于股东已经卖出。", source: "https://www.channelnewsasia.com/business/spacexs-first-quarterly-results-public-company-beat-expectations-ai-costs-hit-stock-6299041", label: "Reuters via CNA" },
  { ticker: "PLTR", title: "强劲财报仍是最新可核实公司级信息", detail: "Q2 总收入 $1.94B、美国商业收入同比增长 149%，公司上调全年收入指引。周末未发现同等级 SEC 或 IR 新公告；高增长兑现与估值风险应分别判断。", source: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm", label: "SEC · Palantir Q2 release" },
  { ticker: "TSLA / MSFT / INTC / PAAS / AMZN", title: "周末无同等级 SEC 或公司 IR 重大新公告", detail: "今晚共同驱动仍是收益率、美元和油价。没有可信公司级更新时不强行填充，也不使用未经证实的供应链传闻解释开盘波动。", source: "https://www.sec.gov/edgar/search/", label: "SEC EDGAR · filing search" },
] as const;

export const fedPolicy = {
  currentRange: "3.75%—4.00%",
  bias: "偏鹰 · 12 月前等待更多通胀证据",
  checkedAt: "11/17 08:30 CST",
  nextMeeting: "12/08—12/09（含经济预测）",
  summary: "10 月 FOMC 将目标区间维持在 3.75%—4.00%，但 Cook 与 Hammack 主张当次上调 25bp；声明称通胀仍然偏高。最新 BLS PPI 显示，10 月总体环比 +0.3%，剔除食品、能源和贸易服务环比 +0.5%。事实层面，核心价格压力尚未消失；模型层面，是否加息、幅度及路径仍须由后续就业、PCE 与 12 月会议决定，市场概率不是政策承诺。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "明显增强", title: "核心 PPI 连续两月环比 +0.5%，官方声明仍称通胀偏高", detail: "10 月声明明确写明通胀仍偏高，两名委员主张当次加息。BLS 随后公布的剔除食品、能源和贸易服务 PPI 环比 +0.5%，与 9 月相同；若后续 PCE 同样偏强，鹰派证据会增强。", source: "https://www.bls.gov/news.release/ppi.nr0.htm", sourceLabel: "U.S. BLS · October PPI" },
    { direction: "cut", directionLabel: "支持降息", signal: "本期未获新增官方证据", title: "不以旧就业数据替代当前政策证据", detail: "本轮没有核实到足以更新政策判断的新的官方偏鸽材料，因此不把历史就业叙事延续为当前结论。若后续就业明显转弱且通胀同时降温，才会形成更完整的降息证据链。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · official release calendar" },
    { direction: "neutral", directionLabel: "按兵不动", signal: "最近一次正式决定", title: "10 月会议选择维持目标区间", detail: "多数委员在 10 月决定维持 3.75%—4.00%。这是当前正式政策水平，不等同于 12 月的预先承诺；下一次带预测材料的会议在 12 月 8—9 日。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
  ],
  catalysts: [
    { date: "11/17 21:30", event: "10 月进出口价格", detail: "观察进口成本、能源与贸易价格传导。", hawkish: "非燃料进口价格加速。", dovish: "进口价格与核心成本同步回落。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "BLS" },
    { date: "11/25 21:30", event: "10 月个人收入与支出（含 PCE）", detail: "PCE 是联储重点关注的通胀指标。", hawkish: "核心 PCE 高于预期且消费韧性较强。", dovish: "核心 PCE 放缓、实际消费转弱。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA" },
    { date: "12/08—12/09", event: "FOMC 与经济预测", detail: "下一次带预测材料的正式政策决策窗口。", hawkish: "上调通胀预测、上调利率路径或实际加息。", dovish: "通胀预期下修并强调就业下行风险。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 11/17 08:30，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "截至 11/17 08:30，未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["Federal Reserve · October FOMC statement", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm"],
  ["Federal Reserve · FOMC calendar", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"],
  ["U.S. Treasury · 2026 daily yield curve CSV", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv"],
  ["Financial Times · SPY historical close", "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD"],
  ["Financial Times · QQQ historical close", "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD"],
  ["Financial Times · VOO historical close", "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD"],
  ["BLS · October 2026 CPI", "https://www.bls.gov/news.release/cpi.nr0.htm"],
  ["BLS · October 2026 PPI", "https://www.bls.gov/news.release/ppi.nr0.htm"],
  ["BLS · November 2026 release calendar", "https://www.bls.gov/schedule/2026/11_sched_list.htm"],
  ["BEA · release schedule", "https://www.bea.gov/news/schedule"],
  ["Reuters · global market reaction to October CPI", "https://ca.marketscreener.com/news/world-stocks-bounce-as-oil-slides-heading-us-cpi-print-ce785edadd8af024/"],
  ["Investing.com · DXY historical data", "https://www.investing.com/indices/usdollar-historical-data"],
  ["Investing.com · XAU/USD historical data", "https://www.investing.com/currencies/xau-usd-historical-data"],
  ["AMD Investor Relations · Taalas acquisition", "https://ir.amd.com/news-events/press-releases/detail/1296/amd-acquires-taalas-to-advance-compute-solutions-for-rapidly-growing-ai-inference-market"],
  ["SEC · Alphabet Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm"],
  ["Meta Investor Relations · Q2 2026 results", "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx"],
  ["Reuters analysis · Hormuz and energy risk", "https://international.astroawani.com/global-news/oil-traders-double-down-iran-deal-bet-odds-worsen"],
  ["Department of Labor · claims", "https://www.dol.gov/agencies/eta/ui-claims"],
  ["SEC · SanDisk FY2026 Q4", "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm"],
] as const;
