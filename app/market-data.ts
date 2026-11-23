export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-11-23 08:30 CST",
  nextUpdate: "2026-11-24 08:30 CST",
  stance: "偏谨慎 · AI 去风险触发宽基修正",
  score: 12,
  windowDates: { previous: "周五 · 11/20", today: "周一 · 11/23", future: "11/24—11/30" },
  headline: "AI 抛售加速，宽基进入修正区间",
  summary:
    "11/20 美股常规时段收盘：SPY 收于 $689.81（−3.64%）、QQQ 收于 $608.45（−5.67%）、VOO 收于 $635.54（−3.41%）。U.S. Treasury 官方日曲线显示 10Y 降至 4.92%、2Y 降至 4.63%。Reuters 报道将本轮急跌归因于 AI 交易去风险；官方层面，Cook 仍称通胀高于目标并主张更积极应对，二者共同放大了估值与政策的不确定性。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。ETF 使用 11/20 美股常规时段收盘；10Y 使用 U.S. Treasury 11/20 官方日值；未能取得同源日线的 DXY、黄金、WTI、BTC 明确留空。",
};

export const markets = [
  { name: "SPY", close: "$689.81", day: "−3.64%", week: "−8.56%", month: "—", summary: "跌入修正区间", tone: "down", session: "11/20 美股常规时段收盘；周基准为 11/13；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/23 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · SPY 同源历史日线" },
  { name: "QQQ", close: "$608.45", day: "−5.67%", week: "−10.51%", month: "—", summary: "科技抛售加速", tone: "down", session: "11/20 美股常规时段收盘；周基准为 11/13；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/23 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · QQQ 同源历史日线" },
  { name: "VOO", close: "$635.54", day: "−3.41%", week: "−8.34%", month: "—", summary: "宽基同步重挫", tone: "down", session: "11/20 美股常规时段收盘；周基准为 11/13；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/23 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD", sourceLabel: "Financial Times · VOO 同源历史日线" },
  { name: "10Y 美债", close: "4.92%", day: "−12bp", week: "−23bp", month: "−20bp", summary: "避险买盘压低收益率", tone: "down", session: "11/20 U.S. Treasury 日收益率曲线；周/月基准为 11/13、10/20", checkedAt: "11/23 08:30 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { name: "DXY", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮未取得可交叉核验的同源日线收盘，未将报道口径冒充为收盘", checkedAt: "11/23 08:30 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "DXY 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮未取得可交叉核验的 XAU/USD 同源日线收盘", checkedAt: "11/23 08:30 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "XAU/USD 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "近月口径待核", tone: "neutral", session: "本轮未取得可交叉核验的同源近月 WTI 日线，未将盘中报道冒充为收盘", checkedAt: "11/23 08:30 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "WTI near-month 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "UTC 日线待核", tone: "neutral", session: "未取得可交叉核验的 UTC 日线收盘", checkedAt: "11/23 08:30 CST", source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "BTC-USD 历史行情源（待核）" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "AI 去风险加速，三大 ETF 大幅收低", detail: "11/20 常规时段，SPY 收于 $689.81（−3.64%），QQQ 收于 $608.45（−5.67%），VOO 收于 $635.54（−3.41%）。QQQ 单周下跌 10.51%，反映科技估值与资本开支回报的再定价正在加速。", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · ETF 历史收盘" },
  { window: "previous" as EventWindow, time: "收盘", category: "利率", impact: "高", title: "避险需求推动 10Y 单日下降 12bp", detail: "U.S. Treasury 11/20 日收益率曲线显示，10Y 从 5.04% 降至 4.92%，2Y 从 4.76% 降至 4.63%。收益率下行反映风险偏好恶化，并不单独构成政策转向证据。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { window: "previous" as EventWindow, time: "01:15", category: "美联储", impact: "高", title: "Cook：通胀仍高于目标，认为等待行动存在成本", detail: "Cook 在 11/20 讲话中表示，通胀长期高于 2% 目标，认为当前环境下等待政策调整存在成本；她曾在 10 月会议主张加息 25bp。此为单一官员观点，不能替代 FOMC 决议。", source: "https://www.federalreserve.gov/newsevents/speech/cook20261120a.htm", sourceLabel: "Federal Reserve · Cook speech" },
  { window: "today" as EventWindow, time: "全天", category: "市场", impact: "高", title: "先观察 AI 抛售是否由科技扩散至盈利与信用", detail: "上周五的急跌使标普与道指确认进入技术性修正，纳指年内转负。今天首先观察美债收益率、指数广度与半导体板块能否企稳；任何反弹仍需有成交与市场广度确认。", source: "https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-slip-anthropic-104746137.html", sourceLabel: "Reuters · U.S. market close" },
  { window: "today" as EventWindow, time: "全天", category: "公司", impact: "中", title: "未核实到关注股新的同等级 SEC / IR 财报披露", detail: "本轮优先核对 SEC EDGAR 与公司投资者关系材料。未取得可信新文件时，不以市场传闻补充持仓公司事件；财报时间线继续保留已披露报告和分析页入口。", source: "https://www.sec.gov/edgar/search/", sourceLabel: "SEC EDGAR · filing search" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "中", title: "联储最新 RSS：Cook 与 Waller 11/20 讲话已发布", detail: "联储 RSS 显示 Cook 和 Waller 于 11/20 发表讲话；其中 Cook 直接阐述其鹰派通胀判断，Waller 为教育活动开场致辞。政策信号需区分有实质内容的讲话与非政策主题活动。", source: "https://www.federalreserve.gov/feeds/speeches.xml", sourceLabel: "Federal Reserve · speeches RSS" },
  { window: "future" as EventWindow, time: "11/25 21:30", category: "通胀", impact: "高", title: "美国 10 月个人收入与支出（含 PCE）", detail: "BEA 将发布 PCE 通胀与消费数据，是 12 月 FOMC 前的核心官方宏观材料。重点看核心 PCE 同比、环比和实际消费能否同时降温。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA · release schedule" },
  { window: "future" as EventWindow, time: "12/08—12/09", category: "美联储", impact: "高", title: "FOMC 政策决定与经济预测", detail: "下一次正式决策将结合会前通胀、就业与金融条件。政策利率、声明用语和预测路径必须以会议结果为准，不能由市场概率预先替代。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve · FOMC calendar" },
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
  { category: "全球股市 / AI 供应链", date: "11/20", impact: "半导体、云资本开支与风险偏好", title: "AI 去风险席卷全球科技股，纳指单周跌幅创 2020 年以来最大", detail: "Reuters 报道称，科技股抛售带动纳指周跌幅达 10%，半导体板块单日下跌 11%。传导路径是对 AI 资本开支回报与估值的重新定价；后续观察龙头订单、云厂商 CapEx 和信用利差是否同步恶化。", source: "https://www.investing.com/news/stock-market-news/nasdaq-plunges-5-a-day-after-anthropic-debut-but-investors-still-believe-in-ai-5042641", sourceLabel: "Reuters · AI market selloff" },
  { category: "全球资金流 / 利率", date: "11/20", impact: "美债、美元、成长股折现率", title: "避险资金涌入美债，10Y 单日下行 12bp", detail: "U.S. Treasury 官方曲线显示 10Y 从 5.04% 降至 4.92%。Reuters 同日亦报道全球股市下跌时美债收益率出现一个月来最大单日回落。收益率下行有利于久期资产，但本次与风险规避并行，不能简单解读为风险偏好改善。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · official daily curve" },
  { category: "全球货币政策", date: "11/20", impact: "短端利率、美元与权益估值", title: "Cook 维持强硬通胀判断，称等待政策调整有成本", detail: "Cook 表示通胀长期高于 2% 目标，且近期资料未提供通胀可持续回落的充分证据；她解释了自己在 10 月会议偏好加息 25bp 的理由。该观点是单一委员立场，不能等同于委员会承诺。", source: "https://www.federalreserve.gov/newsevents/speech/cook20261120a.htm", sourceLabel: "Federal Reserve · Cook speech" },
  { category: "地缘政治 / 供应链", date: "11/20", impact: "关键矿产、设备成本与 AI 基建", title: "贸易限制与关键矿产供给仍是 AI 基建的外部变量", detail: "Cook 的官方讲话指出，贸易关系变化和中国对关键矿产出口限制会迫使各国调整供应链；铜、锂及输电设备成本是 AI 基建扩张的重要外部约束。后续观察实际政策、矿产价格与项目资本开支，而非从演讲标题推断企业盈利。", source: "https://www.federalreserve.gov/newsevents/speech/cook20261120a.htm", sourceLabel: "Federal Reserve · global economy speech" },
  { category: "市场结构 / 风险偏好", date: "11/20", impact: "宽基指数、波动率与防御板块", title: "标普与道指确认技术性修正，防御板块相对占优", detail: "Reuters 报道称标普与道指均较纪录高点回落超过 10%，而消费必需品是标普当日唯一上涨板块。传导路径是波动率上升与仓位去杠杆；后续观察抛售是否从高估值科技扩散到盈利、就业和信用数据。", source: "https://www.reuters.com/5f374b32b07b/world/china/global-markets-global-markets-2026-11-20/", sourceLabel: "Reuters · global markets" },
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
  bias: "偏鹰 · Cook 表态强化通胀优先",
  checkedAt: "11/23 08:30 CST",
  nextMeeting: "12/08—12/09（含经济预测）",
  summary: "10 月 FOMC 将目标区间维持在 3.75%—4.00%。Cook 11/20 表示，通胀长期高于 2% 目标、近期资料未提供可持续回落的充分证据，并重申其 10 月偏好加息 25bp 的理由。事实层面，这强化了鹰派委员的通胀优先立场；模型层面，12 月是否行动仍取决于 PCE、就业与委员会判断，市场概率不是政策承诺。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "近期官员表态增强", title: "Cook 认为通胀未见可持续回落，等待行动有成本", detail: "Cook 在 11/20 讲话中称，PCE 通胀长期高于 2% 目标，最新资料未提供通胀可持续回落的充分证据；她认为金融条件仍偏宽松，并说明了自己在 10 月偏好加息 25bp 的理由。单一委员发言不等同于 FOMC 决议。", source: "https://www.federalreserve.gov/newsevents/speech/cook20261120a.htm", sourceLabel: "Federal Reserve · Cook speech" },
    { direction: "cut", directionLabel: "支持降息", signal: "本期未获新增官方证据", title: "不以旧就业数据替代当前政策证据", detail: "本轮没有核实到足以更新政策判断的新的官方偏鸽材料，因此不把历史就业叙事延续为当前结论。若后续就业明显转弱且通胀同时降温，才会形成更完整的降息证据链。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · official release calendar" },
    { direction: "neutral", directionLabel: "按兵不动", signal: "最近一次正式决定", title: "10 月会议选择维持目标区间", detail: "多数委员在 10 月决定维持 3.75%—4.00%。这是当前正式政策水平，不等同于 12 月的预先承诺；下一次带预测材料的会议在 12 月 8—9 日。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
  ],
  catalysts: [
    { date: "11/25 21:30", event: "10 月个人收入与支出（含 PCE）", detail: "PCE 是联储重点关注的通胀指标。", hawkish: "核心 PCE 高于预期且消费韧性较强。", dovish: "核心 PCE 放缓、实际消费转弱。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA" },
    { date: "12/08—12/09", event: "FOMC 与经济预测", detail: "下一次带预测材料的正式政策决策窗口。", hawkish: "上调通胀预测、上调利率路径或实际加息。", dovish: "通胀预期下修并强调就业下行风险。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 11/23 08:30，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "截至 11/23 08:30，未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Reuters · November 20 AI market selloff", "https://www.investing.com/news/stock-market-news/nasdaq-plunges-5-a-day-after-anthropic-debut-but-investors-still-believe-in-ai-5042641"],
  ["Federal Reserve · Cook November 20 speech", "https://www.federalreserve.gov/newsevents/speech/cook20261120a.htm"],
  ["Federal Reserve · October 2026 FOMC minutes", "https://www.federalreserve.gov/monetarypolicy/fomcminutes20261028.htm"],
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
  ["Reuters · November 16 global market close", "https://live.euronext.com/en/financial-news/stocks-end-lower-ahead-nvidia-earnings-and-anthropic-ipo-oil-drops"],
  ["SEC · NVIDIA Q3 FY2027 release", "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/q3fy27pr.htm"],
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
