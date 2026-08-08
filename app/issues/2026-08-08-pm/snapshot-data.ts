export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘前展望",
  updatedAt: "2026-08-08 22:31 CST",
  nextUpdate: "2026-08-10 08:30 CST",
  stance: "中性偏多 · CPI 前不追高",
  score: 62,
  windowDates: {
    previous: "周五 · 08/07",
    today: "周六 · 08/08",
    future: "08/10—08/14",
  },
  headline: "弱就业点燃科技股与黄金，下周 CPI 决定“暂停加息”交易能否延续",
  summary:
    "周五美股把疲弱就业首先解读为利率利好：S&P 500 涨 0.6%并刷新收盘高位，纳指综合涨 1.3%；SPY、QQQ、VOO 的可审计常规时段涨幅分别为 0.61%、1.17%和 0.61%。美国 10 年期国债官方收益率降 4bp 至 4.65%，DXY 下跌、黄金大涨，说明“弱就业—降低加息压力—压低实际利率—抬高成长股估值”的路径暂时占优。周末美股休市，下一交易日风险不是新收盘价，而是地缘政治跳空与下周 CPI/PPI 对这条路径的反证；若通胀重新加速，科技股与黄金的同步上涨可能快速反转。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。周末不使用盘中价或周六加密货币报价冒充前一交易日收盘。",
};

export const markets = [
  { name: "SPY", close: "$773.26", day: "+0.61%", week: "+3.51%", month: "+3.42%", summary: "降息预期推高", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/08 22:31 CST", source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘" },
  { name: "QQQ", close: "$723.03", day: "+1.17%", week: "+5.09%", month: "+1.92%", summary: "科技领涨创新高", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/08 22:31 CST", source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / S&P Global · QQQ 同源历史收盘" },
  { name: "VOO", close: "$710.71", day: "+0.61%", week: "+3.50%", month: "+3.44%", summary: "大盘温和上攻", tone: "up", session: "08/07 美股常规时段收盘", checkedAt: "08/08 22:31 CST", source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / S&P Global · VOO 同源历史收盘" },
  { name: "10Y 美债", close: "4.65%", day: "−4bp", week: "−10bp", month: "+10bp", summary: "弱就业压低长端", tone: "down", session: "08/07 Treasury 官方日值；2Y 4.19%", checkedAt: "08/08 22:31 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方同源日值" },
  { name: "DXY", close: "99.54", day: "−0.39%", week: "−0.37%", month: "−1.47%", summary: "就业降温压美元", tone: "down", session: "08/07 美元现货指数日线收盘", checkedAt: "08/08 22:31 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 现货指数同源日线", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "$4,343.74", day: "+2.44%", week: "+7.45%", month: "+5.76%", summary: "美元利率双降助涨", tone: "up", session: "08/07 XAU/USD 美国站日线收盘", checkedAt: "08/08 22:31 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com 美国站 · XAU/USD 同源日线", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "$77.08", day: "−0.27%", week: "−8.96%", month: "+9.43%", summary: "地缘溢价震荡回吐", tone: "down", session: "08/07 WTI 近月历史日线收盘", checkedAt: "08/08 22:31 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · WTI 近月同源日线（非 CME 结算）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "$64,914.70", day: "+0.95%", week: "+3.24%", month: "+2.51%", summary: "风险偏好温和回升", tone: "up", session: "08/07 BTC/USD 24 小时日线收盘", checkedAt: "08/08 22:31 CST", source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 24 小时同源日线" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "20:30", category: "就业", impact: "高", title: "美国 7 月非农减少 2.3 万，前两月合计下修 10.3 万", detail: "显著弱于市场预期。失业率由 4.2%降至 4.1%，但劳动参与率降至 61.4%；平均时薪同比放缓至 3.2%。事实更接近“低招聘、供给也收缩”，并非单一的衰退或繁荣信号。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · official employment report" },
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "弱就业压低收益率，科技股领涨并推动标普刷新高位", detail: "S&P 500 涨 0.6%至 7,757.64，道指涨 0.3%，纳指综合涨 1.3%。SPY、QQQ、VOO 的可审计常规时段涨幅分别为 0.61%、1.17%和 0.61%；10Y 官方日值回落 4bp 至 4.65%。", source: "https://apnews.com/article/stocks-dow-jones-iran-oil-fed-interest-rates-9d586bdbf1fb230dcf1f915dcaf50858", sourceLabel: "Associated Press · final market close" },
  { window: "previous" as EventWindow, time: "08/08 03:00", category: "信贷", impact: "低", title: "6 月美国消费者信贷增加约 142 亿美元", detail: "美联储 G.19 显示 6 月消费者信贷年化增速 3.3%，总额由约 5.153 万亿美元升至 5.167 万亿美元；二季度年化增速 2.6%。信贷仍扩张，但强度不足以单独改变就业后的利率判断。", source: "https://www.federalreserve.gov/releases/g19/current/", sourceLabel: "Federal Reserve · official G.19" },
  { window: "today" as EventWindow, time: "全天", category: "休市", impact: "中", title: "美股周末休市，不生成新的现金市场收盘价", detail: "跨资产板块统一保留 08/07 已完成日线。周六 BTC 波动只作为连续交易资产的观察，不代替 SPY、QQQ、VOO 的下一交易日价格，也不据此推断周一必然高开或低开。", source: "https://www.nyse.com/markets/hours-calendars", sourceLabel: "NYSE · market hours" },
  { window: "today" as EventWindow, time: "周末", category: "地缘政治", impact: "高", title: "霍尔木兹谈判与航运执行风险可能制造周一跳空", detail: "需要同时验证船只实际通行、保险恢复承保与制裁豁免，而不只看协议标题。若周末出现破裂或袭击，最先传导至 WTI、黄金、通胀预期和长端收益率。", source: "https://www.reuters.com/world/china/global-markets-global-markets-2026-08-07/", sourceLabel: "Reuters · global markets" },
  { window: "future" as EventWindow, time: "08/10 21:30", category: "开盘", impact: "中", title: "周一美股开盘检验周五利率交易的持续性", detail: "若 2Y、10Y 继续低位且 QQQ 相对 SPY 走强，说明估值路径仍主导；若银行、周期和小盘明显落后，则增长担忧仍在累积。周一缺少同等级宏观数据，价格结构比单一标题更重要。", source: "https://www.nyse.com/markets/hours-calendars", sourceLabel: "NYSE hours · 编辑性观察框架" },
  { window: "future" as EventWindow, time: "08/12 20:30", category: "通胀", impact: "高", title: "美国 7 月 CPI 与实际收入", detail: "这是未来七天最重要的方向事件。核心服务与住房降温将巩固暂停加息交易；若核心通胀重新加速，收益率、美元可能反弹并压缩 QQQ、PLTR、AMD 等高久期资产估值。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 20:30", category: "通胀", impact: "高", title: "美国 7 月 PPI", detail: "生产端价格将检验服务业价格升温是否具有广度，并影响随后核心 PCE 的推算。超预期会削弱就业报告带来的利率利好。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 21:00", category: "公司", impact: "中", title: "SanDisk 投资者日", detail: "重点跟踪 NAND 供需、NBM 合同、数据中心 SSD、资本开支与回购执行，验证高毛利率与涨价驱动能否延续，并影响 SNDK、MU、SKHY 的周期定价。", source: "https://investor.sandisk.com/", sourceLabel: "SanDisk Investor Relations" },
  { window: "future" as EventWindow, time: "08/14 20:30", category: "消费", impact: "高", title: "美国 7 月零售销售", detail: "检验就业转弱是否已传导至居民需求。强消费叠加高通胀会推升收益率；核心零售骤弱则会把市场叙事从暂停加息推向盈利下修。", source: "https://www.census.gov/retail/release_schedule.html", sourceLabel: "U.S. Census Bureau · official schedule" },
] as const;

export const earnings = [
  { ticker: "MU", company: "美光科技", date: "06/24 盘后", status: "已披露", focus: "收入 $41.46B；GAAP EPS $24.67；调整后 FCF $18.3B", reportUrl: "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/a2026q3ex991-pressrelease.htm", analysisUrl: "/reports/mu-fy2026-q3" },
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
  { ticker: "SPCX", company: "SpaceX", date: "08/04 盘后", status: "已披露", focus: "收入 $7.814B；调整后 EBITDA $3.538B；资本开支 $18.369B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", analysisUrl: "/reports/spcx-q2-2026" },
  { ticker: "PLTR", company: "Palantir", date: "08/03 盘后", status: "已披露", focus: "收入 $1.94B；美国商业收入 +149%；上调全年指引", reportUrl: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm", analysisUrl: "/reports/pltr-q2-2026" },
  { ticker: "AMD", company: "AMD", date: "08/04 盘后", status: "已披露", focus: "收入 $11.536B；数据中心 $6.72B；Q3 指引约 $13B", reportUrl: "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/q22026991.htm", analysisUrl: "/reports/amd-q2-2026" },
  { ticker: "SNDK", company: "SanDisk", date: "08/05 盘后", status: "已披露", focus: "收入 $8.965B；GAAP 毛利率 84.6%；新增 $14B 回购授权", reportUrl: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", analysisUrl: "/reports/sndk-fy2026-q4" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "AMD", "PLTR", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  { category: "美国就业 / 全球利率", date: "08/07", impact: "美债、美元、黄金与全球成长股", title: "美国就业意外转负，全球利率路径重新向宽松一侧倾斜", detail: "7 月非农减少 2.3 万、前两月合计下修 10.3 万，工资同比降至 3.2%。直接路径是短端利率与美元承压、黄金和高久期资产受益；二阶风险是增长与企业盈利预期被下修。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", sourceLabel: "U.S. BLS · official report" },
  { category: "中国贸易 / 供应链", date: "08/07", impact: "半导体、工业金属、航运与亚洲股市", title: "中国前七个月贸易增长 17.3%，机电与高科技出口继续领跑", detail: "海关总署数据显示，前七个月进出口总值 30.13 万亿元，出口增长 14%、进口增长 22%；机电产品出口增长 21.2%。全球 AI 硬件和资本品需求仍强，但对美贸易同比下降 1.6%，关税与区域再平衡仍是风险。", source: "https://news.cgtn.com/news/2026-08-07/China-s-goods-trade-shows-strong-growth-in-first-seven-months-of-2026-1PpxAFTUlk4/p.html", sourceLabel: "CGTN · 引述中国海关总署" },
  { category: "加拿大就业 / 货币政策", date: "08/07", impact: "加元、加拿大国债与北美周期股", title: "加拿大就业增加 7.5 万，失业率降至两年低点 6.4%", detail: "就业增幅由私营部门和自雇推动，平均时薪同比增长放缓至 2.8%。加拿大劳动市场明显强于美国，可能限制加拿大央行转鸽空间，并放大美加利差与 USD/CAD 波动。", source: "https://www150.statcan.gc.ca/n1/daily-quotidien/260807/dq260807a-eng.htm", sourceLabel: "Statistics Canada · official LFS" },
  { category: "中东 / 能源航运", date: "08/07", impact: "WTI、通胀、航运保险与美债", title: "霍尔木兹谈判仍受强硬派掣肘，能源风险溢价难以清零", detail: "伊朗强硬派公开反对替代航道，阿拉伯斡旋方也担心谈判代表无法保证执行。即使出现协议标题，船只通行、保险承保与制裁豁免三项仍需同时验证，油价才可能持续回落。", source: "https://www.reuters.com/world/china/global-markets-global-markets-2026-08-07/", sourceLabel: "Reuters · global markets" },
  { category: "日本 / 外汇资金流", date: "08/07", impact: "日元、美债、DXY 与套息交易", title: "日元回吐联合干预涨幅，弱非农再次考验美元方向", detail: "美元兑日元在 158 附近重新企稳，说明干预冲击被部分吸收。美国就业显著转弱会压缩美元利差优势；若日元仍无法走强，市场将更关注日本国内利率与财政政策，而不只是再次干预。", source: "https://www.reuters.com/world/asia-pacific/yen-dollar-drift-iran-deal-concerns-payroll-jitters-2026-08-06/", sourceLabel: "Reuters" },
  { category: "亚洲科技 / 存储周期", date: "08/07", impact: "SNDK、SKHY、MU 与半导体估值", title: "存储链高预期落差继续冲击亚洲科技，基本面与估值开始分化", detail: "SanDisk 与 Western Digital 的强劲业绩仍触发获利回吐，韩国和日本存储相关股票承压。对 MU 与 SKHY 而言，短期风险更多来自估值、涨价贡献和周期见顶担忧，而非新出现的公司级坏消息。", source: "https://www.malaymail.com/news/money/2026/08/07/oil-rally-resumes-as-hormuz-uncertainty-weighs-on-global-markets/230450", sourceLabel: "AFP market report" },
] as const;

export const stockNews = [
  { ticker: "SNDK", title: "财报后的高波动延续，市场从利润转向周期持续性", detail: "公司收入、毛利率与现金流均强，但约三分之二环比增长来自涨价，消费收入环比下降 32%。8 月 13 日投资者日将成为下一验证点。", source: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", label: "SEC · earnings release" },
  { ticker: "SPCX", title: "限售解禁窗口开启，实际出售规模仍不可确认", detail: "首份上市后财报显示业务增长与 AI 资本开支同时激增。解禁只代表可售供给增加，不代表股份已经售出；本期不对实际抛售规模作推测。", source: "https://www.channelnewsasia.com/business/spacexs-first-quarterly-results-public-company-beat-expectations-ai-costs-hit-stock-6299041", label: "Reuters via CNA" },
  { ticker: "AMD", title: "数据中心收入翻倍，Q3 收入指引继续加速", detail: "Q2 收入同比增长 50%至 $11.536B，数据中心收入 $6.72B；公司预计 Q3 收入约 $13B、上下浮动 $300M，非 GAAP 毛利率约 56%。执行风险转向 AI 系统交付与竞争。", source: "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/q22026991.htm", label: "SEC · AMD Q2 earnings release" },
  { ticker: "PLTR", title: "美国商业收入增长 149%，全年收入指引升至约 $8.15B", detail: "Q2 总收入 $1.94B、同比增长 93%，美国商业收入 $764M、美国政府收入 $809M；调整后自由现金流 $1.22B。业务兑现强，但高增长持续性与估值仍需分开判断。", source: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm", label: "SEC · Palantir Q2 earnings release" },
  { ticker: "MU", title: "SanDisk 财报强化存储景气，也提高周期见顶敏感度", detail: "MU 最近一季收入 $41.46B、调整后自由现金流 $18.3B，Q4 收入指引 $50B±$1B；SanDisk 财报显示存储涨价仍强，同时提醒投资者关注价格贡献、库存和新增供给。", source: "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/a2026q3ex991-pressrelease.htm", label: "SEC · Micron FY2026 Q3 release" },
  { ticker: "INTC / MSFT / AAPL / AMZN / TSLA", title: "本期无同等级 SEC 或公司 IR 重大新公告", detail: "周五共同驱动是弱就业带来的利率下行与增长担忧。高久期科技股先受益于估值，下一步由 CPI、PPI 和零售销售验证；不使用未经证实的供应链传闻解释周末波动。", source: "https://www.bls.gov/news.release/empsit.nr0.htm", label: "U.S. BLS · official employment report" },
] as const;

export const fedPolicy = {
  currentRange: "3.50%—3.75%",
  bias: "维持限制性 · 就业转弱抬高加息门槛",
  checkedAt: "08/08 22:31 CST",
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
  options: [{ ticker: "本期", text: "截至 08/08 22:31，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
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
  ["China Customs data via CGTN", "https://news.cgtn.com/news/2026-08-07/China-s-goods-trade-shows-strong-growth-in-first-seven-months-of-2026-1PpxAFTUlk4/p.html"],
  ["Reuters · August 7 global markets", "https://www.reuters.com/world/china/global-markets-global-markets-2026-08-07/"],
  ["Department of Labor · claims", "https://www.dol.gov/agencies/eta/ui-claims"],
  ["SEC · SanDisk FY2026 Q4", "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm"],
] as const;

