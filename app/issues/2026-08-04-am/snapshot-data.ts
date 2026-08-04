export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-08-04 11:03 CST",
  nextUpdate: "2026-08-04 20:30 CST",
  stance: "中性偏多 · 事件密集",
  score: 64,
  headline: "油价急跌释放估值压力，科技反弹迎来就业与 SpaceX 双重检验",
  summary:
    "8 月 3 日美股在美伊谈判重启、WTI 前月合约收盘下跌 5.22%的背景下强势反弹，SPY、QQQ 分别上涨 1.42%和 1.76%；10 年期美债官方收益率回落 5bp 至 4.70%。但美国 7 月 ISM 制造业升至 55.6、价格分项仍达 71.1，说明增长与通胀压力并未同步消失。下一交易日的定价顺序是北京时间 20:30 美国贸易数据、22:00 JOLTS，以及 8 月 5 日 04:30 SpaceX 首份上市后财报电话会。",
  inference:
    "方向判断为基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$757.67", day: "+1.42%", week: "+2.51%", month: "+1.73%",
    summary: "油跌释压，权重反弹", tone: "up", session: "08/03 美股常规时段收盘", checkedAt: "08/04 11:03 CST",
    source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘",
  },
  {
    name: "QQQ", close: "$700.07", day: "+1.76%", week: "+2.63%", month: "−1.76%",
    summary: "科技领涨，月线仍弱", tone: "up", session: "08/03 美股常规时段收盘", checkedAt: "08/04 11:03 CST",
    source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / Tiingo · QQQ 同源历史收盘",
  },
  {
    name: "VOO", close: "$696.40", day: "+1.42%", week: "+2.52%", month: "+1.69%",
    summary: "大盘普涨，收近高位", tone: "up", session: "08/03 美股常规时段收盘", checkedAt: "08/04 11:03 CST",
    source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / Tiingo · VOO 同源历史收盘",
  },
  {
    name: "10Y 美债", close: "4.70%", day: "−5bp", week: "+5bp", month: "+21bp",
    summary: "油价降温，长端回落", tone: "up", session: "08/03 Treasury 官方日值；2Y 4.25%", checkedAt: "08/04 11:03 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方日值",
  },
  {
    name: "DXY", close: "99.96", day: "+0.05%", week: "−1.56%", month: "−0.89%",
    summary: "日内企稳，周线偏弱", tone: "flat", session: "08/03 现金美元指数日线收盘", checkedAt: "08/04 11:03 CST",
    source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 同源历史日线",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "现货黄金", close: "$4,055.25", day: "+0.31%", week: "−0.52%", month: "−2.88%",
    summary: "避险退潮，尾盘回稳", tone: "up", session: "08/03 XAU/USD 日线收盘", checkedAt: "08/04 11:03 CST",
    source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com · XAU/USD 同源历史日线",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "WTI", close: "$80.25", day: "−5.22%", week: "−2.86%", month: "+16.83%",
    summary: "外交缓和，油价急挫", tone: "down", session: "08/03 WTI 近月期货历史日线收盘", checkedAt: "08/04 11:03 CST",
    source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · WTI 近月同源历史日线（媒体结算报道 $80.34）",
    contextSource: "https://www.fx678.com/",
  },
  {
    name: "BTC", close: "$63,510.20", day: "+1.01%", week: "−0.37%", month: "+1.45%",
    summary: "风险回暖，小幅走高", tone: "up", session: "08/03 BTC/USD 24 小时日线收盘", checkedAt: "08/04 11:03 CST",
    source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 同源历史日线",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow, time: "04:00", category: "市场", impact: "高",
    title: "油价下跌与科技权重反弹推动美股全面收高",
    detail: "S&P 500 涨 1.48%至 7,600.50、纳指综合涨 2.13%；SPY 与 QQQ 的可审计常规时段收盘分别涨 1.42%和 1.76%。微软、亚马逊延续财报后涨势，风险偏好明显修复。",
    source: "https://abcnews.com/US/wireStory/falling-oil-prices-calm-worries-inflation-wall-street-135332803", sourceLabel: "Associated Press · market close",
  },
  {
    window: "previous" as EventWindow, time: "22:00", category: "制造业", impact: "高",
    title: "7 月 ISM 制造业 PMI 升至 55.6，价格压力仍高",
    detail: "ISM 报告显示 PMI 由 53.3 升至 55.6，为 2022 年 5 月以来最高；新订单 56.7、生产 58.5、就业 52.8，但价格指数仍为 71.1。增长利好周期股，价格黏性限制利率下行空间。",
    source: "https://www.prnewswire.com/news-releases/manufacturing-pmi-at-55-6-july-2026-ism-manufacturing-pmi-report-302840669.html", sourceLabel: "Institute for Supply Management · official release",
  },
  {
    window: "previous" as EventWindow, time: "全天", category: "能源", impact: "高",
    title: "美伊重启谈判叠加 OPEC+ 增产，WTI 单日跌逾 5%",
    detail: "市场降低霍尔木兹供应中断溢价，WTI 近月历史日线收于 $80.25。油价回落压低通胀预期并带动 10 年期美债官方收益率下降 5bp，但中东协议尚未落地。",
    source: "https://www.channelnewsasia.com/business/oil-prices-sink-middle-east-hopes-yen-extends-gains-after-joint-intervention-6294571", sourceLabel: "Reuters via CNA",
  },
  {
    window: "today" as EventWindow, time: "20:30", category: "贸易", impact: "中",
    title: "美国 6 月国际贸易",
    detail: "贸易差额会影响 Q2 GDP 后续修订，并检验关税对进口量、库存和美元需求的传导。",
    source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA · official schedule",
  },
  {
    window: "today" as EventWindow, time: "22:00", category: "就业", impact: "高",
    title: "美国 6 月 JOLTS 职位空缺",
    detail: "职位空缺、离职率与招聘率共同判断劳动力供需。读数偏强会推升 2Y/10Y 并压制高估值科技；温和降温则支持软着陆交易。",
    source: "https://www.bls.gov/schedule/2026/08_sched.htm", sourceLabel: "U.S. BLS · official schedule",
  },
  {
    window: "today" as EventWindow, time: "08/05 04:30", category: "财报", impact: "高",
    title: "SpaceX 上市后首份财报电话会",
    detail: "公司 IR 确认 8 月 4 日美股盘后披露 Q2 结果，电话会为美东 16:30。重点验证 Starlink 增长与利润率、自由现金流、Starship 商业化进度；不要用媒体一致预期替代公司披露。",
    source: "https://ir.spacex.com/events/event-details/2026/SpaceX-Q2-2026-Earnings/default.aspx", sourceLabel: "SpaceX Investor Relations",
  },
  {
    window: "future" as EventWindow, time: "08/05 22:00", category: "服务业", impact: "高",
    title: "美国 7 月 ISM 服务业 PMI",
    detail: "服务业价格与就业分项将决定制造业强势是否扩散；价格再升会削弱油价下跌带来的通胀缓解。",
    source: "https://www.ismworld.org/supply-management-news-and-reports/reports/rob-report-calendar/", sourceLabel: "ISM · official report calendar",
  },
  {
    window: "future" as EventWindow, time: "08/06 04:00", category: "财报", impact: "高",
    title: "SanDisk 披露 FY2026 Q4 与全年业绩",
    detail: "公司尚未披露本期实际值；关键验证项是 NAND 定价、数据中心 SSD 需求、库存和下一财年资本开支。",
    source: "https://investor.sandisk.com/", sourceLabel: "SanDisk Investor Relations",
  },
  {
    window: "future" as EventWindow, time: "08/06 20:30", category: "生产率", impact: "中",
    title: "美国 Q2 非农生产率与单位劳工成本初值",
    detail: "生产率能否抵消工资增长，决定企业利润率与服务通胀的中期路径。",
    source: "https://www.bls.gov/schedule/2026/08_sched.htm", sourceLabel: "U.S. BLS · official schedule",
  },
  {
    window: "future" as EventWindow, time: "08/07 20:30", category: "就业", impact: "高",
    title: "美国 7 月非农就业报告",
    detail: "未来七天最重要的定价锚：就业与工资同步偏强将推高收益率并压缩科技估值；温和降温最利于软着陆。",
    source: "https://www.bls.gov/schedule/2026/08_sched.htm", sourceLabel: "U.S. BLS · official schedule",
  },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
  { ticker: "SPCX", company: "SpaceX", date: "08/04 盘后", status: "官方确认", focus: "北京时间 08/05 04:30 电话会；首份上市后季报", reportUrl: "https://ir.spacex.com/events/event-details/2026/SpaceX-Q2-2026-Earnings/default.aspx" },
  { ticker: "SNDK", company: "SanDisk", date: "08/05 盘后", status: "IR 待披露", focus: "NAND 定价、数据中心 SSD、库存与资本开支", reportUrl: "https://investor.sandisk.com/" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  {
    category: "中东 / 能源", date: "08/03", impact: "WTI、通胀、美债、航空与消费",
    title: "美伊重启谈判，市场削减霍尔木兹风险溢价",
    detail: "特朗普称与伊朗就霍尔木兹与核问题展开新谈判；OPEC+ 同时同意 9 月增产 18.8 万桶/日。原油急跌缓解全球通胀压力，但协议未落地意味着尾部风险仍在。",
    source: "https://www.channelnewsasia.com/business/oil-prices-sink-middle-east-hopes-yen-extends-gains-after-joint-intervention-6294571", sourceLabel: "Reuters via CNA",
  },
  {
    category: "日本 / 外汇", date: "08/03", impact: "DXY、美债、日股与全球套息交易",
    title: "美日确认 2011 年以来首次联合买入日元干预",
    detail: "日本财务省确认与美国财政部联合干预，并称必要时将再次行动。日元升值会压缩日元融资套息交易，也可能改变日本机构对美债的配置行为。",
    source: "https://www.channelnewsasia.com/east-asia/japan-yen-intervention-us-more-action-6295441", sourceLabel: "Reuters via CNA",
  },
  {
    category: "中国 / 制造业", date: "08/03", impact: "工业品、半导体与亚洲风险偏好",
    title: "中国民间制造业 PMI 降至 50.9，扩张动能放缓",
    detail: "7 月 RatingDog 中国制造业 PMI 从 51.7 降至 50.9，低于市场预期；出口订单恢复扩张，但产出和新订单增速放慢。",
    source: "https://www.channelnewsasia.com/business/oil-prices-sink-middle-east-hopes-yen-extends-gains-after-joint-intervention-6294571", sourceLabel: "Reuters via CNA",
  },
  {
    category: "亚洲 / 半导体", date: "08/03", impact: "MU、SNDK、SKHY、QQQ",
    title: "韩日股市逆势走弱，芯片估值与强日元形成压力",
    detail: "韩国大型存储芯片股在纪录业绩后继续调整，日本出口股受日元快速升值压制。美股存储链反弹仍需 SNDK 财报验证定价与库存。",
    source: "https://www.channelnewsasia.com/business/oil-prices-sink-middle-east-hopes-yen-extends-gains-after-joint-intervention-6294571", sourceLabel: "Reuters via CNA",
  },
] as const;

export const stockNews = [
  { ticker: "MSFT / AMZN", title: "财报后涨势延续，AI 收入兑现主导回补", detail: "MSFT 收于 $487.65、AMZN 收于 $284.02，分别上涨 4.93%和 4.58%；市场继续奖励 Azure 与 AWS 的可验证增长。", source: "https://finance.yahoo.com/video/why-microsoft-amazon-other-big-195257279.html", label: "Yahoo Finance · Big Tech earnings reaction" },
  { ticker: "SNDK", title: "8 月 5 日盘后财报成为存储链下一催化剂", detail: "截至本期只确认财报日，未把非官方一致预期写成事实；重点看 NAND 价格、企业级 SSD、库存与资本开支。", source: "https://investor.sandisk.com/", label: "SanDisk Investor Relations" },
  { ticker: "SPCX", title: "今晚披露上市后首份季报", detail: "公司 IR 确认 8 月 4 日盘后发布 Q2 结果，并于北京时间 8 月 5 日 04:30 举行电话会；Starlink 利润率与自由现金流是核心。", source: "https://ir.spacex.com/updates/releases-details/2026/SpaceX-to-Post-Second-Quarter-2026-Results-and-Host-Webcast-on-August-4-2026-2026-g8layJlbFm/default.aspx", label: "SpaceX Investor Relations" },
  { ticker: "TSLA", title: "随风险偏好回暖上涨 3.49%，未见同等级公司新公告", detail: "本期涨幅主要与大盘和成长股回补同步；没有用未经公司或 SEC 核实的传闻解释走势。", source: "https://exa.ai/library/markets/stock/TSLA?date=2026-08-03", label: "Exa Markets · session record" },
  { ticker: "GDX / PAAS", title: "黄金日线小幅回升，但近月仍偏弱", detail: "XAU/USD 同源历史日线收于 $4,055.25，较上一个交易日收盘涨 0.31%、过去一月跌 2.88%；避险溢价退潮限制弹性。", source: "https://www.investing.com/currencies/xau-usd-historical-data", label: "Investing.com · XAU/USD history" },
] as const;

export const signals = {
  options: [
    { ticker: "本期", text: "截至 08/04 11:03，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把单笔成交量或媒体截图定义为异动。" },
  ],
  ratings: [
    { ticker: "本期", text: "未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；自媒体“升级”不纳入。" },
  ],
};

export const sources = [
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["U.S. Treasury · daily rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS August 2026 calendar", "https://www.bls.gov/schedule/2026/08_sched.htm"],
  ["BEA release schedule", "https://www.bea.gov/news/schedule"],
  ["ISM Manufacturing", "https://www.prnewswire.com/news-releases/manufacturing-pmi-at-55-6-july-2026-ism-manufacturing-pmi-report-302840669.html"],
  ["SEC EDGAR", "https://www.sec.gov/edgar/search/"],
] as const;
