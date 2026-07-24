export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-07-24 08:30 CST",
  nextUpdate: "2026-07-24 20:30 CST",
  stance: "风险偏空",
  score: 24,
  headline: "油价与长债收益率共振上行，科技股遭遇估值压缩",
  summary:
    "7 月 23 日美股录得近一个月最差单日表现：SPY 收跌 1.23%、QQQ 收跌 1.90%。WTI 连续合约大涨 10.22%，10 年期美债官方收益率升至 4.71%；187K 的超低初请数据进一步强化“经济不弱、通胀风险上升”的利率压力。TSLA 财报后重挫，INTC 盘后则以 $16.1B 收入和高于预期的 Q3 指引形成局部正面催化。",
  inference:
    "方向判断为基于公开数据的编辑性推断，不构成投资建议；所有时间均已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$738.18", day: "−1.23%", week: "−1.67%", month: "+0.63%",
    summary: "跌破支撑，显著收低", tone: "down", session: "07/23 美股收盘", checkedAt: "07/24 08:30 CST",
    source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / S&P Global",
  },
  {
    name: "QQQ", close: "$691.96", day: "−1.90%", week: "−1.98%", month: "−3.04%",
    summary: "科技领跌，抛压集中", tone: "down", session: "07/23 美股收盘", checkedAt: "07/24 08:30 CST",
    source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / S&P Global",
  },
  {
    name: "VOO", close: "$678.61", day: "−1.23%", week: "−1.67%", month: "+0.34%",
    summary: "同步标普，放量下跌", tone: "down", session: "07/23 美股收盘", checkedAt: "07/24 08:30 CST",
    source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / S&P Global",
  },
  {
    name: "10Y 美债", close: "4.71%", day: "+4bp", week: "+14bp", month: "+21bp",
    summary: "收益率再冲高位", tone: "down", session: "07/23 官方日值", checkedAt: "07/24 08:30 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury",
  },
  {
    name: "DXY", close: "101.44", day: "+0.31%", week: "+0.87%", month: "+0.03%",
    summary: "利差推动美元走强", tone: "up", session: "07/23 指数日线", checkedAt: "07/24 08:30 CST",
    source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 指数历史页",
  },
  {
    name: "现货黄金", close: "$4,051.36", day: "−1.99%", week: "+1.97%", month: "−1.43%",
    summary: "实际利率压制回落", tone: "down", session: "07/23 XAU/USD 日线", checkedAt: "07/24 08:30 CST",
    source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com / Twelve Data 复核",
    contextSource: "https://www.fx678.com/C/20260722/202607222019132282.html",
  },
  {
    name: "WTI", close: "$92.19", day: "+10.22%", week: "+17.77%", month: "+25.93%",
    summary: "供应冲击，跳涨逾一成", tone: "down", session: "07/23 连续合约日线", checkedAt: "07/24 08:30 CST",
    source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · 连续近月合约（含换月）",
    contextSource: "https://www.fx678.com/C/20260722/202607222019132282.html",
  },
  {
    name: "BTC", close: "$64,917.90", day: "−1.79%", week: "+1.70%", month: "+3.50%",
    summary: "风险偏好拖累回落", tone: "down", session: "07/23 UTC 日线", checkedAt: "07/24 08:30 CST",
    source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD UTC 日线",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow,
    time: "04:00",
    category: "市场",
    impact: "高",
    title: "美股创近一个月最大单日跌幅",
    detail: "标普 500 跌 1.2%、纳指综合跌 2.2%；SPY 收于 $738.18，QQQ 收于 $691.96。油价、长债收益率和大型科技财报共同压低风险偏好。",
    source: "https://apnews.com/article/3cb4bc150707e0a4378312fbb825f5e4",
    sourceLabel: "AP market close",
  },
  {
    window: "previous" as EventWindow,
    time: "20:30",
    category: "宏观",
    impact: "高",
    title: "初请失业金 187K，远低于预期",
    detail: "截至 7 月 18 日当周初请降至 187K，前值修订为 209K；持续申领为 1.796M。异常强劲的就业信号强化了利率维持高位的压力。",
    source: "https://fred.stlouisfed.org/series/ICSA",
    sourceLabel: "U.S. DOL via FRED",
  },
  {
    window: "previous" as EventWindow,
    time: "全天",
    category: "跨资产",
    impact: "高",
    title: "油价飙升，长债收益率同步上冲",
    detail: "WTI 连续近月合约收于 $92.19、日涨 10.22%；10 年期与 2 年期美债官方收益率分别升至 4.71% 和 4.37%。",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve",
    sourceLabel: "U.S. Treasury",
  },
  {
    window: "previous" as EventWindow,
    time: "盘后",
    category: "财报",
    impact: "高",
    title: "INTC Q2 收入 $16.1B，指引强于预期",
    detail: "收入同比增 25%，非 GAAP EPS 为 $0.42；Q3 收入指引 $15.8B–$16.8B、非 GAAP EPS $0.38。GAAP EPS −$2.16 含重大调整，需区分口径。",
    source: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm",
    sourceLabel: "SEC / Intel",
  },
  {
    window: "today" as EventWindow,
    time: "21:45",
    category: "宏观",
    impact: "高",
    title: "美国 7 月 S&P Global PMI 初值",
    detail: "市场关注制造业与服务业动能，以及投入价格是否受油价冲击抬升。强增长、强价格组合最不利于久期较长的科技股。",
    source: "https://www.pmi.spglobal.com/Public/Release/ReleaseDates",
    sourceLabel: "S&P Global release calendar",
  },
  {
    window: "today" as EventWindow,
    time: "22:00",
    category: "宏观",
    impact: "中",
    title: "美国 6 月新屋销售",
    detail: "前值 580K，市场预期约 600K。若利率上行下住房需求仍偏强，可能继续推高“更久更高”的利率定价。",
    source: "https://www.census.gov/economic-indicators/calendar-listview.html",
    sourceLabel: "U.S. Census",
  },
  {
    window: "today" as EventWindow,
    time: "次日 01:00",
    category: "能源",
    impact: "中",
    title: "Baker Hughes 美国钻机数",
    detail: "在油价剧烈上行后，钻机活动可用于判断美国供给响应，但短期市场仍更关注地缘运输风险。",
    source: "https://rigcount.bakerhughes.com/",
    sourceLabel: "Baker Hughes",
  },
  {
    window: "future" as EventWindow,
    time: "07/28–29",
    category: "FED",
    impact: "高",
    title: "FOMC 利率会议",
    detail: "未来一周核心风险。油价冲击与强劲初请数据提高了鹰派措辞风险；重点观察声明是否承认能源通胀的二次影响。",
    source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    sourceLabel: "Federal Reserve",
  },
  {
    window: "future" as EventWindow,
    time: "07/30 05:00",
    category: "财报",
    impact: "高",
    title: "MSFT 财报与电话会",
    detail: "公司确认 07/29 美股收盘后发布，电话会 14:30 PT。关注 Azure、AI 资本开支与利润率之间的平衡。",
    source: "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/",
    sourceLabel: "Microsoft",
  },
  {
    window: "future" as EventWindow,
    time: "07/31 盘前",
    category: "财报",
    impact: "高",
    title: "AAPL 财报日期仍待公司确认",
    detail: "第三方日历指向月底窗口，但截至本次核对，公司 IR 尚未给出可验证的正式日期，页面不将预计时间写成已确认。",
    source: "https://investor.apple.com/",
    sourceLabel: "Apple IR",
  },
  {
    window: "future" as EventWindow,
    time: "07/30 20:30",
    category: "宏观",
    impact: "高",
    title: "美国 Q2 GDP 初值与 6 月 PCE",
    detail: "BEA 官方日历确认两项数据同刻发布，将成为 FOMC 后最关键的增长与通胀验证。",
    source: "https://www.bea.gov/news/schedule/full",
    sourceLabel: "U.S. BEA",
  },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "官方确认", focus: "北京时间 07/30 05:00；Azure、AI CapEx、利润率" },
  { ticker: "AAPL", company: "苹果", date: "待确认", status: "待 IR 确认", focus: "iPhone、服务、关税影响" },
  { ticker: "AMZN", company: "亚马逊", date: "待确认", status: "持续追踪", focus: "AWS、广告、零售利润率" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  {
    category: "中东 / 能源",
    date: "07/23",
    impact: "油价、通胀、美债、航空与消费",
    title: "红海油轮遇袭，第二条能源运输要道风险升高",
    detail: "胡塞武装称袭击两艘沙特油轮，红海航线风险与霍尔木兹海峡受阻同时发酵。布伦特原油结算价升至 $100.69，能源成本冲击直接推高全球通胀和利率风险。",
    source: "https://apnews.com/article/stocks-markets-iran-trump-ai-inflation-45b9165d6c518f5bea668b6ba7a89838",
    sourceLabel: "AP",
  },
  {
    category: "贸易 / 关税",
    date: "07/23",
    impact: "跨国公司、零售、半导体供应链",
    title: "美国对 60 个贸易伙伴启用新一轮关税",
    detail: "美国宣布对覆盖其绝大部分进口来源的 60 个贸易伙伴征收 10%–12.5%关税，并于 7 月 24 日生效。企业成本、供应链调整和终端价格再次成为市场变量。",
    source: "https://apnews.com/article/trump-tariffs-supreme-court-forced-labor-4ea091eeee3fa1bfbe55af3f482e6bc1",
    sourceLabel: "AP",
  },
  {
    category: "欧洲 / 央行",
    date: "07/23",
    impact: "欧债、欧元、全球利率敏感资产",
    title: "欧洲央行维持利率不变，但继续警惕能源通胀",
    detail: "ECB 将存款机制利率维持在 2.25%，同时强调能源冲击的完整通胀影响尚未显现。德国 10 年期国债收益率升破 3.2%，全球长久期资产继续承压。",
    source: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260723~29f24d99bc.en.html",
    sourceLabel: "European Central Bank",
  },
  {
    category: "日本 / 外汇",
    date: "07/23",
    impact: "美元、日股、套利交易与全球流动性",
    title: "日元重返 40 年低位，日本短债收益率触及多年高点",
    detail: "油价冲击与加息预期推动日本两年期国债收益率触及 31 年高位，日元仍处于约 40 年低位。若日本当局干预汇市，可能触发套息交易快速去杠杆。",
    source: "https://www.channelnewsasia.com/business/stocks-sink-big-tech-cash-burn-oil-hits-100-first-time-may-6272331",
    sourceLabel: "Reuters via CNA",
  },
] as const;

export const stockNews = [
  { ticker: "TSLA", title: "财报后重挫，利润率与现金流成为焦点", detail: "Q2 收入同比增 26%，但营业利润率降至 1.4%、自由现金流转为 −$1.09B；股价在 7 月 23 日出现两位数跌幅。", source: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", label: "SEC / Tesla shareholder deck" },
  { ticker: "INTC", title: "收入、非 GAAP 利润与 Q3 指引均偏强", detail: "Q2 收入 $16.1B、同比增 25%，非 GAAP EPS $0.42；Q3 收入中值 $16.3B，非 GAAP EPS 指引 $0.38。", source: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", label: "SEC / Intel earnings release" },
  { ticker: "GDX / PAAS", title: "黄金回落，实际利率压力盖过避险需求", detail: "XAU/USD 7 月 23 日收跌 1.99%，10 年期美债收益率升至 4.71%；矿业股短线同时面对金价与估值压力。", source: "https://www.investing.com/currencies/xau-usd-historical-data", label: "Investing.com historical data" },
  { ticker: "MSFT", title: "微软确认 07/29 盘后发布财报", detail: "电话会将重点验证 AI 投入是否继续转化为 Azure 增长。", source: "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/", label: "Microsoft Source" },
] as const;

export const signals = {
  options: [
    { ticker: "TSLA", text: "财报后的两位数实际波动已兑现；下一阶段需区分方向风险与波动率回落风险。" },
    { ticker: "本期", text: "未取得可审计的全市场逐笔期权链，故不展示未经验证的“大单异动”。" },
  ],
  ratings: [
    { ticker: "本期", text: "未发现可由高可信来源交叉验证的重大评级变动，暂不填充。" },
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
