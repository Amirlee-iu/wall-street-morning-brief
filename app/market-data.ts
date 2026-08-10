export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-08-10 09:16 CST",
  nextUpdate: "2026-08-10 20:30 CST",
  stance: "中性偏多 · CPI 前控制追价",
  score: 62,
  windowDates: { previous: "周五 · 08/07", today: "周一 · 08/10", future: "08/11—08/17" },
  headline: "弱就业推动科技股创新高，今晚先看利率交易能否跨过周末风险",
  summary:
    "周五市场驱动已经闭环：美国 7 月非农减少 2.3 万、前两月合计下修 10.3 万，10 年期美债官方收益率降 4bp 至 4.65%，SPY、QQQ、VOO 常规时段分别上涨 0.61%、1.17%和 0.61%，美元走弱、黄金大涨。市场先交易“加息压力下降”而非“盈利下修”，科技股因此领涨。周末没有新的美股现金收盘；中国 7 月 CPI 同比涨幅降至 0.5%、PPI 涨幅降至 3.5%，而霍尔木兹航运与燃料库存风险仍未解除。今晚无同等级美国宏观数据，重点观察收益率能否维持低位、QQQ 是否继续相对 SPY 走强，以及油价是否因协议落空重新抬升通胀风险。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。除 BTC 使用 08/09 完成的 24 小时日线外，其余跨资产均使用最近完成的 08/07 交易日收盘。",
};

export const markets = [
  { name: "SPY", close: "$773.26", day: "+0.61%", week: "+3.51%", month: "+3.42%", summary: "利率回落推高", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/10 09:16 CST", source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘" },
  { name: "QQQ", close: "$723.03", day: "+1.17%", week: "+5.09%", month: "+1.92%", summary: "科技领涨创新高", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/10 09:16 CST", source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / S&P Global · QQQ 同源历史收盘" },
  { name: "VOO", close: "$710.71", day: "+0.61%", week: "+3.50%", month: "+3.44%", summary: "大盘温和上攻", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/10 09:16 CST", source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / S&P Global · VOO 同源历史收盘" },
  { name: "10Y 美债", close: "4.65%", day: "−4bp", week: "−10bp", month: "+10bp", summary: "弱就业压低长端", tone: "down", session: "08/07 Treasury 官方日值；2Y 4.19%", checkedAt: "08/10 09:16 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方同源日值" },
  { name: "DXY", close: "99.54", day: "−0.39%", week: "−0.37%", month: "−1.47%", summary: "就业降温压美元", tone: "down", session: "08/07 美元现货指数日线收盘", checkedAt: "08/10 09:16 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 现货指数同源日线", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "$4,343.74", day: "+2.44%", week: "+7.45%", month: "+5.76%", summary: "美元利率双降助涨", tone: "up", session: "08/07 XAU/USD 美国站日线收盘", checkedAt: "08/10 09:16 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com 美国站 · XAU/USD 同源日线", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "$77.08", day: "−0.27%", week: "−8.96%", month: "+9.43%", summary: "协议预期压油价", tone: "down", session: "08/07 WTI 近月历史日线收盘", checkedAt: "08/10 09:16 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · WTI 近月同源日线（非 CME 结算）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "$65,172.80", day: "+0.34%", week: "+2.54%", month: "+3.08%", summary: "周末温和续涨", tone: "up", session: "08/09 BTC/USD 24 小时日线收盘", checkedAt: "08/10 09:16 CST", source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 24 小时同源日线" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "20:30", category: "就业", impact: "高", title: "美国 7 月非农减少 2.3 万，招聘趋势显著弱于预期", detail: "5 月和 6 月合计再下修 10.3 万；失业率降至 4.1%，但劳动参与率降至 61.4%，工资同比放缓至 3.2%。这抬高了继续加息门槛，却尚未构成明确的降息承诺。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · official employment report" },
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "收益率回落推动科技股领涨，标普刷新收盘高位", detail: "S&P 500 涨 0.6%至 7,757.64，道指涨 0.3%，纳指综合涨 1.3%。SPY、QQQ、VOO 分别上涨 0.61%、1.17%和 0.61%；10Y 官方日值下降 4bp 至 4.65%。", source: "https://apnews.com/article/stocks-dow-jones-iran-oil-fed-interest-rates-9d586bdbf1fb230dcf1f915dcaf50858", sourceLabel: "Associated Press · final market close" },
  { window: "previous" as EventWindow, time: "08/08 03:00", category: "信贷", impact: "低", title: "6 月美国消费者信贷增加约 142 亿美元", detail: "美联储 G.19 显示 6 月消费者信贷年化增长 3.3%，二季度年化增长 2.6%。信贷仍在扩张，但不足以独立扭转就业报告造成的利率下行。", source: "https://www.federalreserve.gov/releases/g19/current/", sourceLabel: "Federal Reserve · official G.19" },
  { window: "today" as EventWindow, time: "09:16", category: "盘后结论", impact: "中", title: "周末没有新美股收盘，周五利率交易仍是有效基准", detail: "除 BTC 更新至 08/09 已完成日线外，其余价格保留 08/07 最近交易日收盘。中国通胀与中东航运是新增外部变量，不将周末报价或未经证实的期货传闻冒充现金市场事实。", source: "https://www.nyse.com/markets/hours-calendars", sourceLabel: "NYSE · official market hours" },
  { window: "today" as EventWindow, time: "21:30", category: "开盘", impact: "高", title: "美股开盘检验“低收益率—高估值”链条能否延续", detail: "若 2Y、10Y 保持低位且 QQQ 继续跑赢 SPY，说明利率利好仍主导；若银行、周期和小盘明显落后，增长担忧正在累积。油价反弹会从通胀预期端直接破坏这条链条。", source: "https://www.nyse.com/markets/hours-calendars", sourceLabel: "NYSE hours · 编辑性影响路径" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "中", title: "官方 RSS 暂无比 Cook 8 月 5 日更新的政策演讲", detail: "今晚没有在官方 RSS 中确认的同等级新政策讲话。政策判断继续依据 7 月 FOMC、Cook 讲话和最新就业数据，避免把媒体转述或市场概率当成官员承诺。", source: "https://www.federalreserve.gov/feeds/speeches.xml", sourceLabel: "Federal Reserve · official speeches RSS" },
  { window: "future" as EventWindow, time: "08/12 20:30", category: "通胀", impact: "高", title: "美国 7 月 CPI 与实际收入", detail: "未来七天最重要的方向事件。核心服务与住房降温将巩固暂停加息交易；核心通胀重新加速则可能推动美元和收益率反弹，压缩 QQQ、AMD、PLTR 等高久期资产估值。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 20:30", category: "通胀 / 就业", impact: "高", title: "美国 7 月 PPI 与每周初请失业金", detail: "PPI 检验生产端成本向核心 PCE 的传导，初请验证非农疲弱是否扩散至裁员。高 PPI 与低初请组合最偏鹰；价格回落且初请上升最偏鸽。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "BLS / DOL official calendars" },
  { window: "future" as EventWindow, time: "08/13 21:00", category: "公司", impact: "中", title: "SanDisk 投资者日", detail: "跟踪 NAND 供需、NBM 合同、数据中心 SSD、资本开支与回购执行，验证高毛利率与涨价驱动能否延续，并影响 SNDK、MU、SKHY 的周期定价。", source: "https://investor.sandisk.com/", sourceLabel: "SanDisk Investor Relations" },
  { window: "future" as EventWindow, time: "08/14 20:30", category: "消费", impact: "高", title: "美国 7 月零售销售", detail: "检验就业转弱是否已传导至居民需求。强消费叠加高通胀会推升收益率；核心零售骤弱则会把叙事从暂停加息推向盈利下修。", source: "https://www.census.gov/retail/release_schedule.html", sourceLabel: "U.S. Census Bureau · official schedule" },
  { window: "future" as EventWindow, time: "08/14 22:00", category: "信心", impact: "中", title: "密歇根大学消费者信心与通胀预期初值", detail: "重点看一年期与长期通胀预期是否因能源风险重新抬头；预期失锚会增加联储按兵不动甚至加息的理由。", source: "https://data.sca.isr.umich.edu/", sourceLabel: "University of Michigan · Surveys of Consumers" },
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
  { category: "中国通胀 / 全球需求", date: "08/09", impact: "工业金属、能源、亚洲股市与全球通胀预期", title: "中国 7 月 CPI 与 PPI 同步降温，输入性价格压力明显回落", detail: "国家统计局数据显示，CPI 同比上涨 0.5%、环比下降 0.1%，核心 CPI 同比上涨 0.9%；PPI 同比上涨 3.5%、环比下降 0.7%。需求并未崩塌，但能源与原材料涨价的传导明显减弱。后续观察 8 月工业活动和消费能否接力。", source: "https://www.stats.gov.cn/sj/zxfbhjd/202608/t20260809_1965009.html", sourceLabel: "中国国家统计局 · 官方解读" },
  { category: "中东 / 能源与航运", date: "08/09", impact: "WTI、柴油裂解价差、航运保险、通胀与美债", title: "油价押注霍尔木兹协议，但库存和成品油短缺使乐观更脆弱", detail: "路透分析指出，海湾被困原油较 6 月更少、全球柴油库存更紧，红海替代路线也受胡塞封锁威胁。即使部分恢复通航，保险、制裁与炼化瓶颈仍可能阻止能源价格快速正常化。后续必须看实际船流而非谈判标题。", source: "https://international.astroawani.com/global-news/oil-traders-double-down-iran-deal-bet-odds-worsen", sourceLabel: "Reuters analysis via Astro Awani" },
  { category: "美国就业 / 全球货币政策", date: "08/07", impact: "全球国债、美元、黄金与高久期股票", title: "美国就业意外转负，全球利率定价转向暂停加息", detail: "7 月非农减少 2.3 万、前两月合计下修 10.3 万，工资同比放缓至 3.2%。直接路径是美债收益率和美元下行、黄金与成长股受益；二阶风险是企业盈利和全球需求预期下修。下周 CPI/PPI 决定这是否只是单日估值交易。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · official report" },
  { category: "日本 / 汇率与资金流", date: "08/07", impact: "日元、DXY、美债与套息交易", title: "日元回吐联合干预涨幅，政策利差重新成为主导变量", detail: "美元兑日元在干预后重新回到 158 附近，说明一次性流动性冲击被部分吸收。美国就业转弱削弱美元利差优势；若日元仍不升，市场会转向关注日本国内利率与财政政策。后续观察是否出现新的官方干预或资金回流。", source: "https://www.reuters.com/world/asia-pacific/yen-dollar-drift-iran-deal-concerns-payroll-jitters-2026-08-06/", sourceLabel: "Reuters · FX markets" },
  { category: "加拿大就业 / 央行分化", date: "08/07", impact: "加元、加拿大国债与北美周期股", title: "加拿大就业增加 7.5 万，与美国疲弱数据形成政策分化", detail: "加拿大失业率降至 6.4%，平均时薪同比增长 2.8%。劳动市场明显强于美国，可能限制加拿大央行转鸽空间，并放大美加利差和 USD/CAD 波动。后续观察就业增量能否持续及工资是否继续降温。", source: "https://www150.statcan.gc.ca/n1/daily-quotidien/260807/dq260807a-eng.htm", sourceLabel: "Statistics Canada · official LFS" },
  { category: "AI 芯片 / 跨境供应链", date: "08/06", impact: "AMD、MU、SNDK、数据中心资本开支与加拿大科技生态", title: "AMD 收购加拿大 AI 推理芯片公司 Taalas，补强专用推理路线", detail: "AMD 官方称 Taalas 将并入其全栈 AI 平台，以降低推理中的计算与内存瓶颈；交易仍需常规监管批准。战略上有助于补足专用推理能力，但尚未披露交易金额和财务贡献。后续看技术整合、产品路线和监管进度。", source: "https://ir.amd.com/news-events/press-releases/detail/1296/amd-acquires-taalas-to-advance-compute-solutions-for-rapidly-growing-ai-inference-market", sourceLabel: "AMD Investor Relations · official release" },
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
  currentRange: "3.50%—3.75%",
  bias: "维持限制性 · 就业转弱抬高加息门槛",
  checkedAt: "08/10 09:16 CST",
  nextMeeting: "09/15—09/16（含经济预测）",
  summary: "7 月非农减少 2.3 万且前两月合计下修 10.3 万，使 9 月加息门槛显著上升；工资同比放缓至 3.2%也削弱工资通胀压力。但失业率仍降至 4.1%、劳动参与率下滑，油价与核心通胀风险尚未消失。模型判断由“加息风险高于降息”调整为“更可能按兵不动”，CPI、PPI 和零售销售将决定弱就业是软着陆还是增长下滑。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "降温但未消失", title: "通胀与油价仍是加息尾部风险", detail: "Cook 表示必要时准备加息，7 月 FOMC 也有三票主张加息 25bp。若 CPI 核心服务重新加速、油价冲击扩散至预期，弱就业也未必足以阻止收紧。", source: "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm", sourceLabel: "Federal Reserve · Cook speech" },
    { direction: "cut", directionLabel: "支持降息", signal: "明显增强", title: "招聘趋势比标题更弱", detail: "7 月非农减少 2.3 万，5 月和 6 月合计下修 10.3 万，过去 12 个月平均月增仅 3.4 万；工资同比降至 3.2%。若后续失业率回升，降息证据将进一步完整。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · official report" },
    { direction: "neutral", directionLabel: "按兵不动", signal: "当前基准", title: "失业率下降与参与率下滑互相抵消", detail: "失业率由 4.2%降至 4.1%，但劳动参与率降至 61.4%。这不是清晰的需求崩塌，也不是健康扩张，更支持联储等待通胀与消费数据。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · household survey" },
  ],
  catalysts: [
    { date: "08/12 20:30", event: "7 月 CPI", detail: "核心服务、住房和商品价格是关键，不只看能源拉动的总体数字。", hawkish: "核心通胀环比再加速，广度扩大。", dovish: "核心服务持续降温，住房与商品同步回落。", source: "https://www.bls.gov/schedule/news_release/cpi.htm", sourceLabel: "BLS" },
    { date: "08/13 20:30", event: "7 月 PPI", detail: "观察生产端成本是否向核心 PCE 传导。", hawkish: "核心中间品与服务价格继续上升。", dovish: "生产端价格全面回落、前值下修。", source: "https://www.bls.gov/schedule/news_release/ppi.htm", sourceLabel: "BLS" },
    { date: "08/14 20:30", event: "7 月零售销售", detail: "检验就业转弱是否已经传导至居民需求与企业收入。", hawkish: "消费仍强，增长稳定且通胀压力延续。", dovish: "核心零售明显转弱、前值下修。", source: "https://www.census.gov/retail/index.html", sourceLabel: "U.S. Census Bureau" },
    { date: "08/26 20:30", event: "Q2 GDP 修正值与 7 月 PCE", detail: "PCE 是联储首选通胀指标，GDP 与利润数据同时校验增长质量。", hawkish: "核心 PCE 加速且 GDP/利润保持强劲。", dovish: "核心 PCE回落，同时增长与利润下修。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA" },
    { date: "09/15—09/16", event: "FOMC 与经济预测", detail: "将公布利率决定及最新经济预测，是下一次正式政策决策窗口。", hawkish: "通胀预测上修、点阵图抬高或实际加息。", dovish: "就业预测转弱、通胀下修并释放未来降息条件。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 08/10 09:16，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["Federal Reserve · July FOMC statement", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"],
  ["Federal Reserve · FOMC calendar", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"],
  ["U.S. Treasury · daily rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS · July 2026 employment", "https://www.bls.gov/news.release/empsit.nr0.htm"],
  ["Associated Press · August 7 final close", "https://apnews.com/article/stocks-dow-jones-iran-oil-fed-interest-rates-9d586bdbf1fb230dcf1f915dcaf50858"],
  ["Federal Reserve · June consumer credit", "https://www.federalreserve.gov/releases/g19/current/"],
  ["BLS August 2026 calendar", "https://data.bls.gov/schedule/2026/08_sched_list.htm"],
  ["Statistics Canada · July employment", "https://www150.statcan.gc.ca/n1/daily-quotidien/260807/dq260807a-eng.htm"],
  ["China NBS · July CPI and PPI", "https://www.stats.gov.cn/sj/zxfbhjd/202608/t20260809_1965009.html"],
  ["AMD Investor Relations · Taalas acquisition", "https://ir.amd.com/news-events/press-releases/detail/1296/amd-acquires-taalas-to-advance-compute-solutions-for-rapidly-growing-ai-inference-market"],
  ["SEC · Alphabet Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm"],
  ["Meta Investor Relations · Q2 2026 results", "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx"],
  ["Reuters analysis · Hormuz and energy risk", "https://international.astroawani.com/global-news/oil-traders-double-down-iran-deal-bet-odds-worsen"],
  ["Department of Labor · claims", "https://www.dol.gov/agencies/eta/ui-claims"],
  ["SEC · SanDisk FY2026 Q4", "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm"],
] as const;
