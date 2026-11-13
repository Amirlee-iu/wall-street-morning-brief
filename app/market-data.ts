export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-11-13 08:30 CST",
  nextUpdate: "2026-11-16 08:30 CST",
  stance: "偏谨慎 · 油价与利率再抬头",
  score: 36,
  windowDates: { previous: "周四 · 11/12", today: "周五 · 11/13", future: "11/14—11/20" },
  headline: "油价、收益率与芯片不确定性叠加，指数震荡收低",
  summary:
    "11/12 美股常规时段收盘：SPY 收于 $757.12（−0.35%）、QQQ 收于 $688.17（−0.32%）、VOO 收于 $696.00（−0.34%）。U.S. Treasury 官方日曲线显示 10Y 升至 5.10%、2Y 升至 4.86%。公开报道显示油价反弹与芯片龙头不确定性放大日内波动；这里仅把可核对事实与影响路径分开陈列。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。ETF 使用 11/12 美股常规时段收盘；10Y 使用 U.S. Treasury 11/12 官方日值；未能取得同源日线的 DXY、黄金、WTI、BTC 明确留空。",
};

export const markets = [
  { name: "SPY", close: "$757.12", day: "−0.35%", week: "+3.29%", month: "−2.70%", summary: "震荡后收低", tone: "down", session: "11/12 美股常规时段收盘；周/月基准为 11/05、10/09", checkedAt: "11/13 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · SPY 同源历史日线" },
  { name: "QQQ", close: "$688.17", day: "−0.32%", week: "+6.36%", month: "−7.76%", summary: "芯片波动拖累", tone: "down", session: "11/12 美股常规时段收盘；周/月基准为 11/05、10/09", checkedAt: "11/13 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · QQQ 同源历史日线" },
  { name: "VOO", close: "$696.00", day: "−0.34%", week: "+3.27%", month: "−2.68%", summary: "宽基冲高回落", tone: "down", session: "11/12 美股常规时段收盘；周/月基准为 11/05、10/09", checkedAt: "11/13 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD", sourceLabel: "Financial Times · VOO 同源历史日线" },
  { name: "10Y 美债", close: "5.10%", day: "+12bp", week: "+26bp", month: "−14bp", summary: "再上五厘", tone: "up", session: "11/12 U.S. Treasury 日收益率曲线；周/月基准为 11/05、10/09", checkedAt: "11/13 08:30 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { name: "DXY", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得盘中报道，未将其冒充日线收盘", checkedAt: "11/13 08:30 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "DXY 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得盘中报道，未将其冒充日线收盘", checkedAt: "11/13 08:30 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "XAU/USD 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "近月收盘待核", tone: "neutral", session: "本轮仅取得盘中报价，未将其冒充 NYMEX 近月收盘", checkedAt: "11/13 08:30 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "WTI near-month 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "UTC 日线待核", tone: "neutral", session: "未取得可交叉核对的 UTC 日线收盘", checkedAt: "11/13 08:30 CST", source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "BTC-USD 历史行情源（待核）" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "盘中", category: "AI / 个股", impact: "高", title: "芯片龙头事件放大波动，竞争对手出现分化", detail: "公开报道显示，Nvidia 的管理层变动引发股价大幅波动，AMD 与博通上涨。该事件说明 AI 供应链的公司特异性风险仍可能外溢到指数；不把单一公司事件外推为全部半导体的基本面结论。", source: "https://live.euronext.com/en/financial-news/wall-street-ends-lower-nvidia-ceo-resigns-us-yields", sourceLabel: "Reuters · U.S. market close" },
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "指数震荡收低，QQQ 跌幅略小于宽基", detail: "11/12 常规时段，SPY 收于 $757.12（−0.35%），QQQ 收于 $688.17（−0.32%），VOO 收于 $696.00（−0.34%）。三者均为收盘对收盘变化；盘中剧烈波动不等同于收盘趋势。", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · ETF 历史收盘" },
  { window: "previous" as EventWindow, time: "收盘", category: "利率 / 能源", impact: "高", title: "官方 10Y 日值升至 5.10%，2Y 升至 4.86%", detail: "U.S. Treasury 日收益率曲线显示，10Y 较 11/10 上升 12bp，2Y 上升 13bp。同期公开报道显示 WTI 近月收盘上涨；高油价、通胀预期和长端利率是并行风险，不将其简化为单一因果。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { window: "today" as EventWindow, time: "21:30", category: "开盘", impact: "中", title: "退伍军人节：美股照常开市，国债现券市场休市", detail: "纽约证券交易所日历显示 11 月 11 日并非 NYSE 全日休市日；债券市场的节假日安排可能使利率流动性较平日薄。应把这一交易环境与新的宏观数据分开判断。", source: "https://www.nyse.com/markets/hours-calendars", sourceLabel: "NYSE · market calendar" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "高", title: "政策证据仍以 10 月声明与后续数据为锚", detail: "10 月 FOMC 将目标区间维持在 3.75%—4.00%，并有两名委员主张当次加息 25bp。市场概率不是政策承诺；在 12 月会议前，PPI 和劳动力市场数据将继续改变利率路径的证据权重。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
  { window: "today" as EventWindow, time: "全天", category: "公司", impact: "中", title: "未以传闻补充关注股重大披露", detail: "本轮以 SEC EDGAR 与公司 IR 为优先渠道；未核实到可审计的新公司级文件时，个股要闻保留原始财报与官方材料，不将二手市场传闻写成事实。", source: "https://www.sec.gov/edgar/search/", sourceLabel: "SEC EDGAR · filing search" },
  { window: "future" as EventWindow, time: "11/13 21:30", category: "通胀", impact: "高", title: "美国 10 月 PPI", detail: "PPI 是 CPI 后的下一项官方价格数据。偏鹰触发条件是核心服务与中间需求价格继续扩散；偏鸽触发条件是核心分项回落并伴随前值下修。该路径是分析框架，不是预测。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
  { window: "future" as EventWindow, time: "11/17 21:30", category: "外贸价格", impact: "中", title: "美国 10 月进出口价格", detail: "进口价格可帮助判断能源与关税相关成本是否继续向国内价格传导。重点观察非燃料进口与出口价格，而不是仅以单月总体变化解释货币政策。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
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
  { category: "中东 / 能源与航运", date: "11/10", impact: "油价、通胀预期与航空运输成本", title: "和平谈判预期压低油价，但地缘风险未消失", detail: "Reuters 报道称，美国暂缓进一步军事行动的表态带动原油下行，Brent 一度跌破每桶 90 美元。若外交进展延续，传导是能源成本和通胀预期降温；若谈判逆转，风险溢价可能重回油价与航运。", source: "https://www.investing.com/news/commodities-news/morning-bid-war-is-over-5014909", sourceLabel: "Reuters · energy and geopolitics" },
  { category: "全球利率 / 资金流", date: "11/10", impact: "美债、美元、黄金与成长股估值", title: "美国 CPI 后，美元与美债收益率同步上行", detail: "Reuters 报道的市场反应显示，CPI 后 2Y 与 10Y 收益率上升，美元走强、黄金承压。对全球风险资产的传导并非线性：高实际利率首先压缩高久期资产估值，随后才影响融资与盈利预期。", source: "https://www.devdiscourse.com/article/international/4004613-global-markets-stocks-cut-gains-dollar-and-yields-up-as-us-cpi-cements-december-rate-hike-bets", sourceLabel: "Reuters · global markets" },
  { category: "欧洲 / 全球股市", date: "11/10", impact: "跨市场风险偏好、能源与周期板块", title: "欧洲股市受低油价支撑，仍需面对美国利率重估", detail: "Reuters 市场报道显示，STOXX 600 在油价回落背景下靠近高位；但美国 CPI 后利率上行使全球估值环境趋紧。后续观察欧洲资产能否继续与美国高估值科技股脱钩。", source: "https://live.euronext.com/en/financial-news/world-stocks-bounce-oil-slides-heading-us-cpi-print", sourceLabel: "Reuters · Europe and global equities" },
  { category: "汇率 / 货币政策", date: "11/10", impact: "日元、欧元、美元指数与套息交易", title: "美元走强成为跨资产定价的二阶压力", detail: "CPI 之后美元指数走高，Reuters 报道中美元兑日元及欧元均走强。若美元延续走强，美元融资压力与新兴市场风险偏好会承压；若油价继续回落，则会部分抵消通胀驱动的美元利多。", source: "https://ca.marketscreener.com/news/world-stocks-bounce-as-oil-slides-heading-us-cpi-print-ce785edadd8af024/", sourceLabel: "Reuters · FX and rates market report" },
  { category: "全球货币政策", date: "11/10", impact: "全球短端利率、银行股与风险资产折现率", title: "主要央行仍面对通胀与地缘成本的共同约束", detail: "公开市场晨报汇总了英国、日本、新西兰等政策讨论。该内容用于识别全球“利率更久偏高”的共同风险，不把报道中的官员观点等同于任何央行委员会的正式决定。", source: "https://www.newsquawk.com/daily/5853-us-market-open-crude-benchmarks-slip-as-trilateral-talks-between-us-russia-ukraine-take-place-on-us-iran-diplomacy-hopes-fed-waller-strikes-a-hawkish-tone-ahead-of-cpi", sourceLabel: "Newsquawk · global central-bank roundup" },
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
  checkedAt: "11/11 08:30 CST",
  nextMeeting: "12/08—12/09（含经济预测）",
  summary: "10 月 FOMC 将目标区间维持在 3.75%—4.00%，但 Cook 与 Hammack 主张当次上调 25bp；声明称通胀仍然偏高。11/10 公布的 10 月总体 CPI 环比 +0.4%、核心 CPI 环比 +0.3%，均高于调查预期。事实层面，这强化了通胀风险；模型层面，是否加息、幅度及路径仍须由 11 月 PPI、后续就业资料与 12 月会议决定，市场概率不是政策承诺。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "明显增强", title: "CPI 再次高于预期，官方声明仍称通胀偏高", detail: "10 月声明明确写明通胀仍偏高，两名委员主张当次加息。之后公布的核心 CPI 环比 +0.3%，高于 0.2% 的调查预期；若 PPI 进一步证实价格压力扩散，鹰派证据会增强。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
    { direction: "cut", directionLabel: "支持降息", signal: "本期未获新增官方证据", title: "不以旧就业数据替代当前政策证据", detail: "本轮没有核实到足以更新政策判断的新的官方偏鸽材料，因此不把历史就业叙事延续为当前结论。若后续就业明显转弱且通胀同时降温，才会形成更完整的降息证据链。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · official release calendar" },
    { direction: "neutral", directionLabel: "按兵不动", signal: "最近一次正式决定", title: "10 月会议选择维持目标区间", detail: "多数委员在 10 月决定维持 3.75%—4.00%。这是当前正式政策水平，不等同于 12 月的预先承诺；下一次带预测材料的会议在 12 月 8—9 日。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
  ],
  catalysts: [
    { date: "11/13 21:30", event: "10 月 PPI", detail: "检验 CPI 后的生产端与服务成本压力。", hawkish: "核心服务和中间需求价格再度走高。", dovish: "核心分项走弱且前值下修。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "BLS" },
    { date: "11/17 21:30", event: "10 月进出口价格", detail: "观察进口成本、能源与贸易价格传导。", hawkish: "非燃料进口价格加速。", dovish: "进口价格与核心成本同步回落。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "BLS" },
    { date: "11/25 21:30", event: "10 月个人收入与支出（含 PCE）", detail: "PCE 是联储重点关注的通胀指标。", hawkish: "核心 PCE 高于预期且消费韧性较强。", dovish: "核心 PCE 放缓、实际消费转弱。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA" },
    { date: "12/08—12/09", event: "FOMC 与经济预测", detail: "下一次带预测材料的正式政策决策窗口。", hawkish: "上调通胀预测、上调利率路径或实际加息。", dovish: "通胀预期下修并强调就业下行风险。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 11/11 08:30，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "截至 11/11 08:30，未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
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
