export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-07-27 08:30 CST",
  nextUpdate: "2026-07-27 20:30 CST",
  stance: "谨慎偏空",
  score: 38,
  headline: "油价回落缓解通胀焦虑，但科技股尚未摆脱资本开支重估",
  summary:
    "7 月 24 日 SPY 微涨 0.10%、VOO 涨 0.08%，但 QQQ 再跌 1.12%，指数内部仍是价值与科技分化。WTI 连续合约回落 2.14%，10 年期美债官方收益率降至 4.69%，暂时缓解油价—通胀—利率的负反馈；周末美伊连续两日停火又带来能源风险溢价下行窗口。真正的方向选择集中在周中：FOMC、美国 Q2 GDP 与 6 月 PCE，以及 MSFT、AAPL、AMZN 财报将连续验证利率和 AI 资本开支两条主线。",
  inference:
    "方向判断为基于公开数据的编辑性推断，不构成投资建议；所有时间均已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$738.93", day: "+0.10%", week: "−0.59%", month: "+0.78%",
    summary: "探高回落，勉强收红", tone: "flat", session: "07/24 美股常规时段收盘", checkedAt: "07/27 08:30 CST",
    source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo",
  },
  {
    name: "QQQ", close: "$684.23", day: "−1.12%", week: "−1.60%", month: "−3.71%",
    summary: "芯片承压，连续走弱", tone: "down", session: "07/24 美股常规时段收盘", checkedAt: "07/27 08:30 CST",
    source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / S&P Global",
  },
  {
    name: "VOO", close: "$679.14", day: "+0.08%", week: "−0.59%", month: "+0.51%",
    summary: "冲高回吐，微幅收涨", tone: "flat", session: "07/24 美股常规时段收盘", checkedAt: "07/27 08:30 CST",
    source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / S&P Global",
  },
  {
    name: "10Y 美债", close: "4.69%", day: "−2bp", week: "+14bp", month: "+28bp",
    summary: "油价回落，收益率微降", tone: "up", session: "07/24 Treasury 官方日值", checkedAt: "07/27 08:30 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury",
  },
  {
    name: "DXY", close: "101.47", day: "+0.03%", week: "+0.70%", month: "−0.14%",
    summary: "高位震荡，微幅走强", tone: "flat", session: "07/24 DXY 指数日线", checkedAt: "07/27 08:30 CST",
    source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 指数历史页",
  },
  {
    name: "现货黄金", close: "$4,053.17", day: "+0.11%", week: "+0.89%", month: "+1.31%",
    summary: "跌后企稳，小幅反弹", tone: "up", session: "07/24 XAU/USD 日线", checkedAt: "07/27 08:30 CST",
    source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com · XAU/USD 历史页（Twelve Data 复核）",
  },
  {
    name: "WTI", close: "$85.15", day: "−2.14%", week: "+4.12%", month: "+21.05%",
    summary: "外交预期，冲高回落", tone: "up", session: "07/24 连续近月合约日线", checkedAt: "07/27 08:30 CST",
    source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · 连续近月合约（含换月）",
  },
  {
    name: "BTC", close: "$64,098.50", day: "−1.45%", week: "+0.31%", month: "+5.09%",
    summary: "日内下挫，月线仍正", tone: "down", session: "07/24 BTC-USD UTC 日线", checkedAt: "07/27 08:30 CST",
    source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "Yahoo Finance · BTC-USD UTC 日线",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow,
    time: "04:00",
    category: "市场",
    impact: "高",
    title: "标普近乎持平，科技股继续落后",
    detail: "S&P 500 涨 0.05%、纳指综合跌 0.64%；SPY 收于 $738.93，QQQ 收于 $684.23。油价回落稳住大盘，但芯片与大型科技仍承受 AI 投资回报重估。",
    source: "https://apnews.com/article/stocks-markets-tariffs-oil-trump-ai-0b9c3b2aa5ca83eb391c1388efe03c97",
    sourceLabel: "AP market close",
  },
  {
    window: "previous" as EventWindow,
    time: "21:45",
    category: "宏观",
    impact: "高",
    title: "7 月综合 PMI 升至 53.6，价格压力加快",
    detail: "服务业 PMI 升至 53.6，制造业 PMI 小降至 53.8；综合产出创八个月最快增速，但企业销售价格升幅为近四年最快，形成“增长稳、通胀黏”的利率压力。",
    source: "https://www.pmi.spglobal.com/Public/Home/PressRelease/04dad02019414e5ebc89ec6a04b300bd",
    sourceLabel: "S&P Global",
  },
  {
    window: "previous" as EventWindow,
    time: "22:00",
    category: "房地产",
    impact: "中",
    title: "6 月新屋销售升至 628K",
    detail: "新屋销售年化 628K，较修订后的 5 月 618K 上升 1.6%；库存 485K，销售中位价 $398,300。需求改善但统计误差区间较宽。",
    source: "https://www.census.gov/construction/nrs/pdf/newressales_202606.pdf",
    sourceLabel: "U.S. Census / HUD",
  },
  {
    window: "previous" as EventWindow,
    time: "全天",
    category: "跨资产",
    impact: "高",
    title: "油价与美债收益率回落，风险压力暂缓",
    detail: "WTI 连续合约收于 $85.15、跌 2.14%；10 年期与 2 年期美债官方收益率分别回落至 4.69%和 4.33%，但两者仍比一周前高 14bp 与 15bp。",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve",
    sourceLabel: "U.S. Treasury / Investing.com",
  },
  {
    window: "today" as EventWindow,
    time: "20:30",
    category: "宏观",
    impact: "高",
    title: "美国 6 月耐用品订单",
    detail: "今晚首个重要定价点。总订单受运输项目扰动较大，市场更应关注剔除运输后的核心订单与非国防资本品订单；强于预期会继续支撑高利率定价。",
    source: "https://www.census.gov/economic-indicators/calendar-listview.html",
    sourceLabel: "U.S. Census",
  },
  {
    window: "today" as EventWindow,
    time: "盘前前",
    category: "风险链",
    impact: "高",
    title: "周末美伊停火能否压低能源风险溢价",
    detail: "美伊连续第二日暂停攻击，亚洲早盘油价继续回落。若停火维持，利率敏感科技股可获喘息；若霍尔木兹或红海再受袭，油价—通胀—美债收益率链条会迅速反转。",
    source: "https://apnews.com/article/iran-war-united-states-ceasefire-ad9fa27d5b1b5fd51e30d923ee738238",
    sourceLabel: "AP",
  },
  {
    window: "future" as EventWindow,
    time: "07/30 02:00",
    category: "FED",
    impact: "高",
    title: "FOMC 利率决定与 02:30 发布会",
    detail: "市场基准仍偏向按兵不动，但加息尾部风险不可忽视。最关键是声明如何处理能源、关税与近四年最快的企业售价增速；鹰派措辞首先冲击 QQQ 和高估值 AI 链。",
    source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    sourceLabel: "Federal Reserve",
  },
  {
    window: "future" as EventWindow,
    time: "07/30 05:30",
    category: "财报",
    impact: "高",
    title: "MSFT 财报与电话会",
    detail: "公司确认 07/29 美股收盘后发布、14:30 PT 电话会。影响路径：Azure 增速与 AI 资本开支回报 → MSFT → 半导体/数据中心链 → QQQ。",
    source: "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/",
    sourceLabel: "Microsoft",
  },
  {
    window: "future" as EventWindow,
    time: "07/30 20:30",
    category: "宏观",
    impact: "高",
    title: "美国 Q2 GDP 初值与 6 月 PCE",
    detail: "BEA 确认两项数据同刻发布。强 GDP + 热 PCE 会放大 FOMC 鹰派冲击；弱 GDP + 温和 PCE 才是科技估值最友好的组合。",
    source: "https://www.bea.gov/news/schedule/full",
    sourceLabel: "U.S. BEA",
  },
  {
    window: "future" as EventWindow,
    time: "07/31 05:00",
    category: "财报",
    impact: "高",
    title: "AAPL 与 AMZN 财报集中披露",
    detail: "两家公司均确认 07/30 17:00 ET 电话会。AAPL 关注服务、硬件需求与关税；AMZN 关注 AWS 增长、AI 资本开支与自由现金流。",
    source: "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-to-Webcast-Second-Quarter-2026-Financial-Results-Conference-Call/default.aspx",
    sourceLabel: "Amazon IR / Apple IR",
  },
  {
    window: "future" as EventWindow,
    time: "07/31 20:30",
    category: "就业",
    impact: "高",
    title: "美国 Q2 就业成本指数",
    detail: "ECI 是工资通胀的重要验证。若环比再度偏热，将削弱油价回落带来的宽松想象，并对长久期资产形成二次压力。",
    source: "https://www.bls.gov/schedule/2026/07_sched.htm",
    sourceLabel: "U.S. BLS",
  },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "官方确认", focus: "北京时间 07/30 05:00；Azure、AI CapEx、利润率" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "官方确认", focus: "北京时间 07/31 05:00；服务、硬件需求、关税" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "官方确认", focus: "北京时间 07/31 05:00；AWS、AI CapEx、FCF" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  {
    category: "中东 / 能源",
    date: "07/26",
    impact: "油价、通胀、美债、航空与消费",
    title: "美伊连续第二日暂停攻击，谈判窗口重新打开",
    detail: "美国与伊朗周日连续第二日暂停攻击，斡旋方推动双方重返临时停火安排。若停火延续，能源风险溢价与通胀预期有望继续下降；但双方尚未达成正式协议。",
    source: "https://apnews.com/article/iran-war-united-states-ceasefire-ad9fa27d5b1b5fd51e30d923ee738238",
    sourceLabel: "AP",
  },
  {
    category: "航运 / 海峡",
    date: "07/26",
    impact: "油轮运费、保险、能源供应链",
    title: "霍尔木兹通航安排仍未解决，海上封锁继续",
    detail: "斡旋焦点是伊朗对霍尔木兹海峡船舶通行的管理权限；美国海上封锁仍在执行。停火不等于运输恢复，航运与保险风险溢价可能维持高位。",
    source: "https://apnews.com/article/iran-war-trump-diplomacy-netanyahu-d491158a4c9a1d3429a87a6ed58f2f72",
    sourceLabel: "AP",
  },
  {
    category: "美国 / 关税",
    date: "07/24",
    impact: "跨国公司、零售、半导体供应链",
    title: "覆盖 60 个贸易伙伴的新关税已开始实施",
    detail: "10%–12.5%的新进口关税于 7 月 24 日生效，覆盖美国绝大部分进口来源。市场短期反应有限，但成本向企业利润率和终端价格传导仍是后续 PCE 风险。",
    source: "https://apnews.com/article/stocks-markets-tariffs-oil-trump-ai-0b9c3b2aa5ca83eb391c1388efe03c97",
    sourceLabel: "AP",
  },
  {
    category: "外交 / 事件风险",
    date: "07/26",
    impact: "中东风险溢价、油价、全球股指",
    title: "以色列总理周二赴美，伊朗政策仍有再升级风险",
    detail: "内塔尼亚胡计划周二在华盛顿会见特朗普。市场需要区分“战术停火”与“可持续停火”；任何重新扩大军事行动的信号都会首先反映在油价和长债收益率。",
    source: "https://apnews.com/article/iran-war-united-states-ceasefire-ad9fa27d5b1b5fd51e30d923ee738238",
    sourceLabel: "AP",
  },
] as const;

export const stockNews = [
  { ticker: "AAPL", title: "逆势上涨 3.53%，财报前成为科技板块相对避风港", detail: "AAPL 7 月 24 日收于 $333.02，盘中表现显著强于纳指；公司已确认 07/30 美股盘后披露财报。", source: "https://stockanalysis.com/stocks/aapl/history/", label: "StockAnalysis / official Apple IR date" },
  { ticker: "INTC", title: "财报次日下跌 7.89%，市场重新聚焦代工亏损与资本强度", detail: "尽管收入和非 GAAP EPS 超预期，股价收于 $92.32；市场关注 Foundry 外部客户、资本开支与自由现金流，不能只看调整后利润。", source: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", label: "SEC / Intel earnings release" },
  { ticker: "TSLA", title: "财报后抛压延续，1.4%营业利润率仍是估值约束", detail: "Q2 收入增长与负自由现金流并存。短线需要观察抛售是否从财报重估转为技术性企稳，核心基本面验证仍是毛利率与资本开支。", source: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", label: "SEC / Tesla shareholder deck" },
  { ticker: "MSFT / AMZN", title: "本周进入 AI 资本开支回报大考", detail: "MSFT 07/29 盘后、AMZN 07/30 盘后披露。Azure/AWS 增速若无法覆盖更高资本开支，可能延续大型科技估值压缩。", source: "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/", label: "Microsoft / Amazon IR" },
  { ticker: "GDX / PAAS", title: "金价跌后小幅企稳，但实际利率仍高", detail: "XAU/USD 7 月 24 日收涨 0.11%，一周上涨 0.89%；矿业股的进一步修复仍取决于 FOMC 语气与美元方向。", source: "https://www.investing.com/currencies/xau-usd-historical-data", label: "Investing.com historical data" },
] as const;

export const signals = {
  options: [
    { ticker: "MSFT/AAPL/AMZN", text: "财报周隐含波动风险上升，但本期未取得可审计的完整期权逐笔与历史基准，故不将媒体所称“大单”写成事实。" },
    { ticker: "本期", text: "暂无可信全市场期权异动数据；保留空缺，避免用成交量截图代替可验证异常度。" },
  ],
  ratings: [
    { ticker: "本期", text: "截至 07/27 08:30，未取得可由投行原始报告或多家高可信来源核对的重大评级变动，暂不填充。" },
  ],
};

export const sources = [
  ["Federal Reserve Calendar", "https://www.federalreserve.gov/newsevents/calendar.htm"],
  ["FOMC Calendar", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"],
  ["U.S. Treasury Rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS Release Calendar", "https://www.bls.gov/schedule/"],
  ["BEA Release Schedule", "https://www.bea.gov/news/schedule"],
  ["SEC EDGAR", "https://www.sec.gov/edgar/search/"],
] as const;
