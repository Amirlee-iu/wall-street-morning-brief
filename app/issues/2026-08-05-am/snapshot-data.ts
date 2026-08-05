export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-08-05 09:35 CST",
  nextUpdate: "2026-08-05 20:30 CST",
  stance: "偏多 · 警惕事件反转",
  score: 72,
  headline: "油价与长债同步回落，科技股创高后转向服务业与就业检验",
  summary:
    "8 月 4 日美股延续风险修复：SPY、QQQ、VOO 常规时段分别上涨 1.80%、3.40%和 1.81%，10 年期美债官方收益率下降 7bp 至 4.63%，WTI 近月结算下跌 5.69%至 $75.77。JOLTS 显示职位空缺降至 735.9 万但招聘回升，美国 6 月贸易逆差收窄至 $73.3B；SpaceX 营收增长 92%、调整后 EBITDA 增长 191%，但 $18.37B 季度资本开支与 8 月 6 日限售解禁构成显著风险。今天关注北京时间 22:00 ISM 服务业，盘后关注 SanDisk 财报。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$771.33", day: "+1.80%", week: "+4.11%", month: "+3.56%",
    summary: "权重领涨，再创新高", tone: "up", session: "08/04 美股常规时段收盘", checkedAt: "08/05 09:35 CST",
    source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘",
  },
  {
    name: "QQQ", close: "$723.85", day: "+3.40%", week: "+7.16%", month: "+1.58%",
    summary: "芯片爆发，科技领跑", tone: "up", session: "08/04 美股常规时段收盘", checkedAt: "08/05 09:35 CST",
    source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / Tiingo · QQQ 同源历史收盘",
  },
  {
    name: "VOO", close: "$708.98", day: "+1.81%", week: "+4.11%", month: "+3.52%",
    summary: "大盘普涨，刷新高位", tone: "up", session: "08/04 美股常规时段收盘", checkedAt: "08/05 09:35 CST",
    source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / Tiingo · VOO 同源历史收盘",
  },
  {
    name: "10Y 美债", close: "4.63%", day: "−7bp", week: "+2bp", month: "+14bp",
    summary: "油价急跌，长端回落", tone: "up", session: "08/04 Treasury 官方日值；2Y 4.20%", checkedAt: "08/05 09:35 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方同源日值",
  },
  {
    name: "DXY", close: "99.88", day: "−0.02%", week: "−1.52%", month: "−0.97%",
    summary: "冲高受阻，延续偏弱", tone: "flat", session: "08/04 现金美元指数日线收盘", checkedAt: "08/05 09:35 CST",
    source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 同源历史日线",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "现货黄金", close: "$4,083.47", day: "+0.73%", week: "+1.36%", month: "−2.21%",
    summary: "美元偏弱，金价回升", tone: "up", session: "08/04 XAU/USD 日线收盘", checkedAt: "08/05 09:35 CST",
    source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com · XAU/USD 同源历史日线",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "WTI", close: "$75.77", day: "−5.69%", week: "−4.40%", month: "+10.31%",
    summary: "和谈升温，油价重挫", tone: "down", session: "08/04 NYMEX WTI 近月结算", checkedAt: "08/05 09:35 CST",
    source: "https://www.morningstar.com/news/dow-jones/202608049724/front-month-nymex-crude-fell-569-to-settle-at-7577-data-talk", sourceLabel: "CME 结算报道 $75.77；区间：Investing.com 历史序列",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "BTC", close: "$63,914.20", day: "+0.64%", week: "0.00%", month: "+1.23%",
    summary: "风险回暖，温和上行", tone: "up", session: "08/04 BTC/USD 24 小时日线收盘", checkedAt: "08/05 09:35 CST",
    source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 同源历史日线",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow, time: "04:00", category: "市场", impact: "高",
    title: "油价回落与芯片股大涨推动美股创纪录",
    detail: "S&P 500 上涨 1.79%至 7,736.52，道指上涨 1.71%，纳指综合上涨 2.59%。SPY、QQQ、VOO 的可审计常规时段涨幅分别为 1.80%、3.40%和 1.81%；油价、收益率同步下行放松了科技估值约束。",
    source: "https://www.barchart.com/story/news/3625178/sp-500-rises-2-dow-jumps-1-000-points-as-profits-keep-piling-up-and-oil-prices-ease", sourceLabel: "Associated Press via Barchart",
  },
  {
    window: "previous" as EventWindow, time: "22:00", category: "就业", impact: "高",
    title: "6 月 JOLTS 职位空缺降至 735.9 万，招聘小幅回升",
    detail: "职位空缺较 5 月减少 17.8 万，低于路透调查的 740 万；招聘增加 9.6 万至 534.8 万，离职率维持 2.0%。劳动力市场呈现低招聘、低解雇的温和降温，而非断崖式恶化。",
    source: "https://alfred.stlouisfed.org/release?rd=2026-08-04&rid=192", sourceLabel: "BLS 数据 via FRED / ALFRED",
  },
  {
    window: "previous" as EventWindow, time: "20:30", category: "贸易", impact: "中",
    title: "美国 6 月贸易逆差收窄至 $73.3B",
    detail: "逆差较修订后的 5 月减少 $4.4B；出口下降 0.9%至 $314.7B，进口下降 1.8%至 $388.0B。收窄主要来自进口降幅更大，不能简单等同于内需加速。",
    source: "https://www.bea.gov/news/2026/us-international-trade-goods-and-services-june-2026", sourceLabel: "U.S. BEA · official release",
  },
  {
    window: "previous" as EventWindow, time: "盘后", category: "财报", impact: "高",
    title: "SpaceX 营收近翻倍，但 AI 投资与解禁压制盘后股价",
    detail: "Q2 营收 $7.814B、同比增长 92%，调整后 EBITDA $3.538B、增长 191%；季度资本开支达到 $18.369B，其中 AI 分部 $15.828B。公司盘后股价下跌约 7%，8 月 6 日限售股解禁仍是短线供给风险。",
    source: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", sourceLabel: "SEC · SpaceX Q2 earnings release",
  },
  {
    window: "today" as EventWindow, time: "22:00", category: "服务业", impact: "高",
    title: "美国 7 月 ISM 服务业 PMI",
    detail: "价格与就业分项会检验制造业扩张是否向服务业扩散。增长和价格同时偏强将推高收益率、压缩科技估值；温和增长配合价格降温更利于软着陆。",
    source: "https://www.ismworld.org/supply-management-news-and-reports/reports/rob-report-calendar/", sourceLabel: "ISM · official report calendar",
  },
  {
    window: "today" as EventWindow, time: "08/06 04:00", category: "财报", impact: "高",
    title: "SanDisk 披露 FY2026 Q4 与全年业绩",
    detail: "公司确认美东 8 月 5 日 16:30 举行电话会。重点验证上季 $7.75B—$8.25B 收入指引、NAND 定价、数据中心 SSD、库存和下一财年资本配置。",
    source: "https://investor.sandisk.com/news-events/events", sourceLabel: "SanDisk Investor Relations · official event",
  },
  {
    window: "future" as EventWindow, time: "08/06 08:35", category: "美联储", impact: "中",
    title: "旧金山联储主席 Daly 发表主题演讲",
    detail: "讲话安排在美西 8 月 5 日 17:35。市场关注其对服务通胀、劳动力降温和政策限制性的表述；若强调通胀黏性，可能推动短端收益率反弹。",
    source: "https://www.frbsf.org/news-and-media/events/2026/08/mary-c-daly-esri-international-conference/", sourceLabel: "Federal Reserve Bank of San Francisco",
  },
  {
    window: "future" as EventWindow, time: "08/06 20:30", category: "就业 / 生产率", impact: "中",
    title: "初请失业金与 Q2 非农生产率、单位劳工成本初值",
    detail: "初请检验裁员是否仍受控；生产率与单位劳工成本共同决定工资增长能否被效率提升吸收。",
    source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar",
  },
  {
    window: "future" as EventWindow, time: "08/07 20:30", category: "就业", impact: "高",
    title: "美国 7 月非农就业报告",
    detail: "未来七天最重要的定价锚。就业与工资同步偏强会推高 2Y/10Y 并压制高估值科技；温和降温、失业率稳定最利于软着陆。",
    source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar",
  },
  {
    window: "future" as EventWindow, time: "08/07 22:00", category: "美联储", impact: "中",
    title: "里士满联储主席 Barkin 炉边谈话",
    detail: "非农发布后约 90 分钟讲话，可能成为美联储官员对就业数据的首轮公开解读，需防范利率与美元二次波动。",
    source: "https://nabe.com/NABE/Events/Event_Display.aspx?EventKey=WEBAUG7&WebsiteKey=91b9e16d-e6fe-4f31-a4af-02c194225c32", sourceLabel: "NABE · official event",
  },
  {
    window: "future" as EventWindow, time: "08/12 20:30", category: "通胀", impact: "高",
    title: "美国 7 月 CPI",
    detail: "处于未来七天窗口末端。油价回落有利于总体通胀，但核心服务与住房分项决定市场能否延续降息和成长股估值扩张交易。",
    source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar",
  },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
  { ticker: "SPCX", company: "SpaceX", date: "08/04 盘后", status: "已披露", focus: "收入 $7.814B；调整后 EBITDA $3.538B；资本开支 $18.369B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", analysisUrl: "/reports/spcx-q2-2026" },
  { ticker: "SNDK", company: "SanDisk", date: "08/05 盘后", status: "官方确认", focus: "北京时间 08/06 04:30 电话会；验证 NAND 价格与 FY2027 指引", reportUrl: "https://investor.sandisk.com/news-events/events" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  {
    category: "中东 / 能源", date: "08/04", impact: "WTI、通胀、美债与航空股",
    title: "美伊谈判释放进展信号，原油风险溢价继续回落",
    detail: "WTI 结算下跌 5.69%至 $75.77，Brent 下跌 5.26%至 $79.36。谈判尚未形成最终协议，霍尔木兹航运仍受约束，因此油价的通胀利好与供应尾部风险并存。",
    source: "https://www.globalbankingandfinance.com/oil-ticks-up-selloff-talks-end-us-iran-war-remain-uncertain/", sourceLabel: "Reuters",
  },
  {
    category: "日本 / 外汇", date: "08/04", impact: "DXY、美债、日股与套息交易",
    title: "日元干预后回吐部分涨幅，政策不确定性仍高",
    detail: "日元回落至约 157.8 日元兑 1 美元，但仍较协调干预前升值约 4%。汇率快速波动继续影响日本出口股、全球套息仓位和日本机构美债配置。",
    source: "https://uk.marketscreener.com/news/stocks-rise-despite-iran-tensions-oil-up-yen-eases-ce7f50ded98df027", sourceLabel: "Reuters via MarketScreener",
  },
  {
    category: "全球股市", date: "08/04", impact: "QQQ、半导体与全球风险偏好",
    title: "欧洲与亚洲股市跟随风险修复，科技板块领涨",
    detail: "STOXX 600 上涨约 0.55%，科技板块上涨约 1.7%；日经指数上涨约 0.32%。风险偏好改善具有全球性，但仍高度依赖油价和中东谈判进展。",
    source: "https://uk.marketscreener.com/news/stocks-rise-despite-iran-tensions-oil-up-yen-eases-ce7f50ded98df027", sourceLabel: "Reuters via MarketScreener",
  },
] as const;

export const stockNews = [
  { ticker: "SPCX", title: "首份上市后财报显示收入与 EBITDA 跃升，资本开支同样激增", detail: "营收同比增长 92%，Connectivity 调整后 EBITDA 达 $2.597B；AI 分部调整后 EBITDA 转正至 $1.146B，但 AI 资本开支 $15.828B、限售解禁和盘后约 7%跌幅提示估值消化压力。", source: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", label: "SEC · SpaceX earnings release" },
  { ticker: "SNDK / MU / INTC", title: "半导体链领涨，SNDK 财报接棒成为验证点", detail: "8 月 4 日 SNDK 与 INTC 均上涨约 10.84%，MU 上涨约 7.62%。SanDisk 将于北京时间 8 月 6 日 04:30 举行财报电话会，需用实际业绩验证存储涨价与数据中心需求。", source: "https://investor.sandisk.com/news-events/events", label: "SanDisk Investor Relations" },
  { ticker: "AMZN", title: "Bezos 披露拟出售约 $4B 股票，股价逆市回落", detail: "亚马逊 8 月 4 日收跌约 2.32%，与大盘和其他大型科技股明显分化；出售计划影响短期供给，但不改变 AWS 财报基本面。", source: "https://www.cnbc.com/amp/2026/08/03/stock-market-today-live-updates.html", label: "CNBC · market close" },
  { ticker: "MSFT / AAPL / TSLA", title: "大型科技普遍反弹，暂无同等级公司新公告", detail: "MSFT、AAPL、TSLA 分别上涨约 1.06%、1.96%和 1.64%。本期未用未经公司或 SEC 证实的传闻解释涨幅。", source: "https://www.barchart.com/story/news/3625178/sp-500-rises-2-dow-jumps-1-000-points-as-profits-keep-piling-up-and-oil-prices-ease", label: "Associated Press via Barchart" },
] as const;

export const signals = {
  options: [
    { ticker: "本期", text: "截至 08/05 09:35，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把单笔成交量、社交媒体截图或付费墙摘要定义为期权异动。" },
  ],
  ratings: [
    { ticker: "本期", text: "未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站的目标价变化不作为事实写入。" },
  ],
};

export const sources = [
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["U.S. Treasury · daily rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS August 2026 calendar", "https://data.bls.gov/schedule/2026/08_sched_list.htm"],
  ["BEA June trade release", "https://www.bea.gov/news/2026/us-international-trade-goods-and-services-june-2026"],
  ["SEC · SpaceX Q2 filing", "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm"],
  ["SanDisk Investor Relations", "https://investor.sandisk.com/news-events/events"],
] as const;
