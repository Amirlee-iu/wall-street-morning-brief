export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-07-29 10:06 CST",
  nextUpdate: "2026-07-29 20:30 CST",
  stance: "中性偏谨慎",
  score: 43,
  headline: "油价与长债继续降温，但存储芯片抛售揭示科技内部裂缝",
  summary:
    "7 月 28 日 SPY 与 VOO 均涨约 0.24%，但 QQQ 跌 0.97%，道指强、半导体弱的轮动进一步扩大。美国 10 年期国债官方日值降至 4.61%，9 月 WTI 再跌 4.06%至 $79.26，暂时压低能源通胀风险；与此同时，SNDK、MU 与 SKHY 所在的存储链继续受中国竞争和 AI 投资回报担忧冲击。下一交易日方向将由北京时间周四凌晨的 FOMC 与 MSFT 财报、晚间 GDP/PCE 共同决定。",
  inference:
    "方向判断为基于公开数据的编辑性推断，不构成投资建议；所有时间均已换算为北京时间。",
};

export const markets = [
  {
    name: "SPY", close: "$740.86", day: "+0.24%", week: "−0.99%", month: "+1.63%",
    summary: "价值托底，小幅收高", tone: "up", session: "07/28 美股常规时段收盘", checkedAt: "07/29 10:06 CST",
    source: "https://finance.yahoo.com/quote/SPY/history/", sourceLabel: "Yahoo Finance · SPY 历史收盘",
  },
  {
    name: "QQQ", close: "$675.49", day: "−0.97%", week: "−4.72%", month: "−4.39%",
    summary: "芯片再挫，连续走弱", tone: "down", session: "07/28 美股常规时段收盘", checkedAt: "07/29 10:06 CST",
    source: "https://finance.yahoo.com/quote/QQQ/history/", sourceLabel: "Yahoo Finance · QQQ 历史收盘",
  },
  {
    name: "VOO", close: "$680.96", day: "+0.24%", week: "−1.00%", month: "+1.60%",
    summary: "板块轮动，小幅收涨", tone: "up", session: "07/28 美股常规时段收盘", checkedAt: "07/29 10:06 CST",
    source: "https://finance.yahoo.com/quote/VOO/history/", sourceLabel: "Yahoo Finance · VOO 历史收盘",
  },
  {
    name: "10Y 美债", close: "4.61%", day: "−4bp", week: "−2bp", month: "+23bp",
    summary: "油价降温，收益率回落", tone: "up", session: "07/28 Treasury 官方日值；2Y 4.26%", checkedAt: "07/29 10:06 CST",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury",
  },
  {
    name: "DXY", close: "101.40", day: "−0.14%", week: "+0.47%", month: "+0.04%",
    summary: "会前高位，小幅回吐", tone: "flat", session: "07/28 DXY 指数日线收盘", checkedAt: "07/29 10:06 CST",
    source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com · DXY 指数历史页",
  },
  {
    name: "现货黄金", close: "$4,027.83", day: "−1.12%", week: "−1.23%", month: "−1.50%",
    summary: "鹰派担忧，连续承压", tone: "down", session: "07/28 XAU/USD 日线收盘", checkedAt: "07/29 10:06 CST",
    source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com · XAU/USD 历史页",
  },
  {
    name: "WTI", close: "$79.26", day: "−4.06%", week: "−6.65%", month: "+14.49%",
    summary: "和谈预期，三日连跌", tone: "down", session: "07/28 NYMEX 9 月合约结算", checkedAt: "07/29 10:06 CST",
    source: "https://wkzo.com/2026/07/28/oil-prices-fall-5-to-two-week-low-on-hopes-for-us-iran-conflict-easing/", sourceLabel: "Reuters 结算价 / Yahoo 连续合约区间复核",
  },
  {
    name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—",
    summary: "完整日线暂缺，拒绝估算", tone: "flat", session: "07/28 BTC-USD UTC 日线待核", checkedAt: "07/29 10:06 CST",
    source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "Yahoo Finance · 07/28 完整 UTC 行尚不可稳定复核",
  },
] as const;

export const events = [
  {
    window: "previous" as EventWindow,
    time: "04:00",
    category: "市场",
    impact: "高",
    title: "标普小涨、纳指下跌，板块轮动继续扩大",
    detail: "S&P 500 涨 0.21%，纳指综合跌 0.22%，道指涨 1.03%；SPY 收于 $740.86，QQQ 收于 $675.49。工业、医疗和必需消费托底，但半导体与存储链继续下挫。",
    source: "https://www.straitstimes.com/business/sp-500-ends-higher-as-investors-await-tech-earnings",
    sourceLabel: "Reuters market close",
  },
  {
    window: "previous" as EventWindow,
    time: "22:00",
    category: "消费",
    impact: "中",
    title: "美国 7 月消费者信心降至 90.8",
    detail: "Conference Board 指数由上修后的 92.2 降至 90.8；现况指数连续第三个月下降，预期指数停留在 74.7。消费端没有崩塌，但对增长的支撑继续减弱。",
    source: "https://www.conference-board.org/topics/consumer-confidence/",
    sourceLabel: "The Conference Board",
  },
  {
    window: "previous" as EventWindow,
    time: "全天",
    category: "跨资产",
    impact: "高",
    title: "油价与长债收益率同步回落",
    detail: "9 月 WTI 结算于 $79.26、跌 4.06%；Treasury 官方 10 年期与 2 年期日值分别为 4.61%和 4.26%。能源通胀风险降温，但 FOMC 前市场仍保留鹰派尾部风险。",
    source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve",
    sourceLabel: "U.S. Treasury / Reuters",
  },
  {
    window: "today" as EventWindow,
    time: "全天",
    category: "FED",
    impact: "高",
    title: "FOMC 第二日会议，正式决定在北京时间周四凌晨",
    detail: "美联储官方日历确认会议于 7 月 28—29 日举行。今天白天没有已确认的高影响美国数据，市场将围绕是否按兵不动、以及对能源通胀和 AI 投资的措辞调整仓位。",
    source: "https://www.federalreserve.gov/newsevents/2026-july.htm",
    sourceLabel: "Federal Reserve",
  },
  {
    window: "today" as EventWindow,
    time: "22:30",
    category: "能源",
    impact: "中",
    title: "EIA 原油库存周报",
    detail: "油价三日连跌后，库存变化将验证需求与供应是否配合地缘风险溢价回落；若库存意外下降，WTI 在 FOMC 前可能出现技术性反弹。",
    source: "https://www.eia.gov/petroleum/supply/weekly/",
    sourceLabel: "U.S. EIA",
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
    time: "07/30 盘后 / 05:30",
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
  {
    window: "future" as EventWindow,
    time: "08/03 22:00",
    category: "制造业",
    impact: "中",
    title: "美国 7 月 ISM 制造业",
    detail: "在耐用品订单与信心数据偏软之后，ISM 新订单与价格分项将判断制造业需求是否继续降温，以及关税和能源成本是否仍在向终端传导。",
    source: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-report-on-business/",
    sourceLabel: "ISM",
  },
  {
    window: "future" as EventWindow,
    time: "08/04 20:30",
    category: "贸易",
    impact: "中",
    title: "美国 6 月国际贸易",
    detail: "BEA 已确认 8 月 4 日发布。贸易缺口会影响 Q2 GDP 后续修订，也会检验新关税对进口量和企业库存的早期影响。",
    source: "https://www.bea.gov/news/schedule",
    sourceLabel: "U.S. BEA",
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
    date: "07/28",
    impact: "油价、通胀、美债、航空与消费",
    title: "阿曼提出霍尔木兹联合管理与自愿收费方案",
    detail: "阿曼向伊朗提交获海湾国家支持的方案，希望以联合管理和自愿费用恢复航运。伊朗与美国对控制权和收费仍有分歧，现阶段是谈判框架，不是正式通航协议。",
    source: "https://www.france24.com/en/middle-east/20260728-oman-presents-iran-with-gulf-backed-plan-to-ease-strait-of-hormuz-tensions",
    sourceLabel: "Reuters via France 24",
  },
  {
    category: "红海 / 航运",
    date: "07/28",
    impact: "油轮、保险、沙特能源设施",
    title: "胡塞武装声称向沙特油轮发射导弹",
    detail: "Reuters 报道称胡塞武装声称导弹迫使一艘沙特油轮掉头。即使美伊暂停直接攻击，代理人战线仍可能让红海和霍尔木兹的航运风险溢价维持高位。",
    source: "https://www.al-monitor.com/originals/2026/07/oman-presents-iran-gulf-backed-plan-voluntary-fees-use-hormuz",
    sourceLabel: "Reuters via Al-Monitor",
  },
  {
    category: "中国 / 半导体",
    date: "07/28",
    impact: "SNDK、MU、SKHY、QQQ",
    title: "长鑫存储上市冲击扩散至全球存储芯片股",
    detail: "CXMT 上市后的竞争担忧继续冲击美韩存储链。市场交易的是未来 DRAM/NAND 供给与定价压力，不等于先进 HBM 竞争格局已经即时逆转。",
    source: "https://ts2.tech/en/china-chip-listing-sends-shockwaves-through-memory-sector-as-limited-float-drives-sharp-price-swings/",
    sourceLabel: "Reuters-based report",
  },
  {
    category: "外交 / 事件风险",
    date: "07/28",
    impact: "中东风险溢价、油价、全球股指",
    title: "美伊公开表述仍矛盾，停火未变成协议",
    detail: "特朗普称谈判进展良好并保留恢复打击的选项，伊朗则否认与美国直接谈判。油价已快速剔除部分战争溢价，任何谈判破裂或油轮事件都可能触发反向急涨。",
    source: "https://www.cnbc.com/2026/07/28/us-iran-war-trump-hormuz.html",
    sourceLabel: "CNBC",
  },
] as const;

export const stockNews = [
  { ticker: "SNDK / MU / SKHY", title: "存储链连续第二日遭集中抛售", detail: "CXMT 上市使投资者重新评估未来 DRAM/NAND 供给与定价。该风险对通用存储更直接，对先进 HBM 的即时替代仍缺乏证据。", source: "https://ts2.tech/en/china-chip-listing-sends-shockwaves-through-memory-sector-as-limited-float-drives-sharp-price-swings/", label: "Reuters-based market report" },
  { ticker: "AAPL", title: "财报前逆势走强，盘中触及 5 万亿美元市值", detail: "AAPL 7 月 28 日上涨约 0.9%，相对半导体明显占优；周四盘后财报将检验服务收入、硬件需求、内存成本和关税影响。", source: "https://www.apple.com/investor/earnings-call/", label: "Apple Investor · earnings call" },
  { ticker: "MSFT", title: "今晚收盘后进入 Azure 与 AI 回报大考", detail: "公司确认 7 月 29 日美股盘后发布财报。市场更关注 Azure 增速、资本开支与利润率的匹配，而不只是 EPS 是否超预期。", source: "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/", label: "Microsoft official release" },
  { ticker: "INTC", title: "强财报后的关键问题转向资本强度和现金流", detail: "Q2 增长与指引改善已披露，但 2026 资本开支上调、Foundry 亏损与现金消耗仍限制估值扩张；后续看超大规模客户支出是否验证需求。", source: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", label: "SEC / Intel earnings release" },
  { ticker: "GDX / PAAS", title: "金价跌 1.12%，矿业股缺少利率顺风", detail: "XAU/USD 收于 $4,027.83，一周跌 1.23%；若 FOMC 偏鹰或实际利率上升，贵金属矿企仍可能落后。", source: "https://www.investing.com/currencies/xau-usd-historical-data", label: "Investing.com historical data" },
] as const;

export const signals = {
  options: [
    { ticker: "MSFT/AAPL/AMZN", text: "财报与 FOMC 同周使隐含波动风险上升，但本期未取得可审计的完整期权逐笔及统一历史基准，故不把媒体所称“大单”写成事实。" },
    { ticker: "本期", text: "暂无可信全市场期权异动数据；保留空缺，避免用成交量截图代替可验证异常度。" },
  ],
  ratings: [
    { ticker: "本期", text: "截至 07/29 10:06，未取得可由投行原始报告或多家高可信来源复核的重大评级变动，暂不填充。" },
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
