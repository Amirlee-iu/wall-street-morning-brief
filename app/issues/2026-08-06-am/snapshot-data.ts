export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-08-06 09:31 CST",
  nextUpdate: "2026-08-06 20:30 CST",
  stance: "中性 · 防范滞胀重定价",
  score: 56,
  headline: "指数高位整理，服务业价格升温与存储周期峰值风险同时浮现",
  summary:
    "8 月 5 日美股高位分化：SPY、QQQ、VOO 常规时段分别下跌 0.20%、0.90%和 0.19%，10 年期美债官方收益率持平于 4.63%，现货黄金按 Investing.com 美国站日线口径大涨 4.92%。ISM 服务业 PMI 升至 54.1，但就业分项跌至 47.4、价格分项升至 70.3，构成增长仍稳、就业转弱、通胀黏性的混合信号。SanDisk 季度收入 $8.965B、GAAP 毛利率 84.6%，但环比增长约三分之二来自涨价，叠加消费业务环比下滑，需防范存储周期高位回撤。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。",
};

export const markets = [
  { name: "SPY", close: "$769.79", day: "−0.20%", week: "+5.53%", month: "+2.46%", summary: "高位窄幅回吐", tone: "down", session: "08/05 美股常规时段收盘", checkedAt: "08/06 09:31 CST", source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘" },
  { name: "QQQ", close: "$717.30", day: "−0.90%", week: "+8.40%", month: "−0.76%", summary: "科技领跌回吐", tone: "down", session: "08/05 美股常规时段收盘", checkedAt: "08/06 09:31 CST", source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / Tiingo · QQQ 同源历史收盘" },
  { name: "VOO", close: "$707.60", day: "−0.19%", week: "+5.51%", month: "+2.46%", summary: "大盘高位整固", tone: "down", session: "08/05 美股常规时段收盘", checkedAt: "08/06 09:31 CST", source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / Tiingo · VOO 同源历史收盘" },
  { name: "10Y 美债", close: "4.63%", day: "0bp", week: "−4bp", month: "+15bp", summary: "长端横盘观望", tone: "flat", session: "08/05 Treasury 官方日值；2Y 4.18%", checkedAt: "08/06 09:31 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方同源日值" },
  { name: "DXY", close: "99.68", day: "−0.18%", week: "−1.20%", month: "−1.16%", summary: "美元延续走弱", tone: "down", session: "08/05 美元指数日线收盘", checkedAt: "08/06 09:31 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com 美国站 · DXY 同源日线", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "$4,278.22", day: "+4.92%", week: "+5.22%", month: "+2.71%", summary: "避险资金涌入", tone: "up", session: "08/05 XAU/USD 美国站日线收盘", checkedAt: "08/06 09:31 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com 美国站 · XAU/USD 同源日线", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "$74.88", day: "−1.17%", week: "−11.34%", month: "+9.23%", summary: "和谈预期压油价", tone: "down", session: "08/05 WTI 近月历史日线收盘", checkedAt: "08/06 09:31 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · WTI 近月同源日线（非 CME 结算）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "$64,651.20", day: "+0.87%", week: "+1.07%", month: "+0.97%", summary: "窄幅震荡偏强", tone: "up", session: "08/05 BTC/USD 24 小时日线收盘", checkedAt: "08/06 09:31 CST", source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 同源日线" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "04:00", category: "市场", impact: "高", title: "美股高位分化，科技股领跌", detail: "S&P 500 下跌 0.2%至 7,723.55，纳指综合下跌 0.8%，道指上涨 0.5%并创收盘新高。SPY、QQQ、VOO 的可审计常规时段涨跌分别为 −0.20%、−0.90%和 −0.19%。", source: "https://apnews.com/article/53179dc1c0148c5afeb47379b8f5b5c5", sourceLabel: "Associated Press · market close" },
  { window: "previous" as EventWindow, time: "22:00", category: "服务业", impact: "高", title: "ISM 服务业 PMI 54.1，价格升温、就业转为收缩", detail: "7 月服务业 PMI 较 6 月的 54.0微升；商业活动 59.1、新订单 57.2，但就业由 51.2降至 47.4，价格由 67.7升至 70.3。总量扩张未消除滞胀式内部结构风险。", source: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/july/", sourceLabel: "ISM · official report" },
  { window: "previous" as EventWindow, time: "盘后", category: "财报", impact: "高", title: "SanDisk 盈利与回购强劲，增长高度依赖涨价", detail: "季度收入 $8.965B、环比增长 51%，GAAP 毛利率 84.6%、EPS $43.97；公司称环比增长约三分之一来自销量、三分之二来自涨价，并新增 $14B 回购授权。", source: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", sourceLabel: "SEC · SanDisk earnings release" },
  { window: "previous" as EventWindow, time: "08/06 04:05", category: "美联储", impact: "高", title: "Cook：通胀风险高于就业风险，必要时准备加息", detail: "理事 Cook 表示经济仍具韧性、劳动力市场处于低招聘低解雇状态；若关税、油价与供给改善未带来持续反通胀，美联储没有等待的奢侈，必要时准备提高利率。", source: "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm", sourceLabel: "Federal Reserve · official speech" },
  { window: "today" as EventWindow, time: "08:35", category: "美联储", impact: "中", title: "旧金山联储主席 Daly 主题演讲", detail: "活动已举行，但截至本期核对时官方活动页尚未发布可验证全文；不引用二手转述替代官方政策表述。", source: "https://www.frbsf.org/news-and-media/events/2026/08/mary-c-daly-esri-international-conference/", sourceLabel: "Federal Reserve Bank of San Francisco" },
  { window: "today" as EventWindow, time: "20:30", category: "就业 / 生产率", impact: "中", title: "初请失业金与 Q2 生产率、单位劳工成本初值", detail: "初请检验裁员是否仍受控；生产率与单位劳工成本共同决定工资增长能否被效率提升吸收。就业转弱且成本放缓利好债券，成本偏强则压制高估值科技。", source: "https://www.bls.gov/schedule/news_release/prod2.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/07 20:30", category: "就业", impact: "高", title: "美国 7 月非农就业报告", detail: "未来七天最重要的定价锚。就业与工资同步偏强会推高收益率并压制高估值科技；温和降温、失业率稳定最利于软着陆。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/07 22:00", category: "美联储", impact: "中", title: "里士满联储主席 Barkin 炉边谈话", detail: "安排在非农发布后约 90 分钟，可能成为官员对就业数据的首轮公开解读，需防范利率与美元二次波动。", source: "https://nabe.com/NABE/Events/Event_Display.aspx?EventKey=WEBAUG7&WebsiteKey=91b9e16d-e6fe-4f31-a4af-02c194225c32", sourceLabel: "NABE · official event" },
  { window: "future" as EventWindow, time: "08/12 20:30", category: "通胀", impact: "高", title: "美国 7 月 CPI 与实际收入", detail: "油价回落有利于总体通胀，但核心服务与住房分项决定市场能否延续利率下行和成长股估值扩张交易。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 20:30", category: "通胀", impact: "高", title: "美国 7 月 PPI", detail: "生产端价格将检验 ISM 服务价格升温是否具有广度；超预期会强化通胀黏性并抬升短端利率。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 21:00", category: "公司", impact: "中", title: "SanDisk 投资者日", detail: "公司预计美东 09:00举行活动，重点跟踪 NAND 供需、NBM 合同、数据中心 SSD、资本开支与回购执行。", source: "https://investor.sandisk.com/", sourceLabel: "SanDisk Investor Relations" },
] as const;

export const earnings = [
  { ticker: "TSLA", company: "特斯拉", date: "07/22 盘后", status: "已披露", focus: "收入 $28.24B；非 GAAP EPS $0.33；FCF −$1.09B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm", analysisUrl: "/reports/tsla-q2-2026" },
  { ticker: "INTC", company: "英特尔", date: "07/23 盘后", status: "已披露", focus: "收入 $16.1B；非 GAAP EPS $0.42；Q3 指引上调", reportUrl: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm", analysisUrl: "/reports/intc-q2-2026" },
  { ticker: "MSFT", company: "微软", date: "07/29 盘后", status: "已披露", focus: "收入 $90.0B；Azure +43%；商业 RPO $678B", reportUrl: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm", analysisUrl: "/reports/msft-fy2026-q4" },
  { ticker: "AAPL", company: "苹果", date: "07/30 盘后", status: "已披露", focus: "收入 $109.42B；EPS $2.02；服务收入 +12%", reportUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm", analysisUrl: "/reports/aapl-fy2026-q3" },
  { ticker: "AMZN", company: "亚马逊", date: "07/30 盘后", status: "已披露", focus: "收入 $200.6B；AWS +37%；TTM FCF −$7.6B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", analysisUrl: "/reports/amzn-q2-2026" },
  { ticker: "SPCX", company: "SpaceX", date: "08/04 盘后", status: "已披露", focus: "收入 $7.814B；调整后 EBITDA $3.538B；资本开支 $18.369B", reportUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm", analysisUrl: "/reports/spcx-q2-2026" },
  { ticker: "SNDK", company: "SanDisk", date: "08/05 盘后", status: "已披露", focus: "收入 $8.965B；GAAP 毛利率 84.6%；新增 $14B 回购授权", reportUrl: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", analysisUrl: "/reports/sndk-fy2026-q4" },
] as const;

export const watchlist = ["SNDK", "TSLA", "MSFT", "AAPL", "SKHY", "MU", "SPCX", "INTC", "PAAS", "AMZN", "QQQ", "SPY", "VOO", "GDX"];

export const internationalNews = [
  { category: "中东 / 能源", date: "08/05", impact: "WTI、黄金、通胀与航运", title: "胡塞武装袭击沙特油轮，航运尾部风险与和谈预期并存", detail: "袭击一度推动油价反弹，但美伊谈判进展继续压低整体风险溢价；本期 WTI 同源日线仍收跌。市场需要同时定价供应中断尾部风险与霍尔木兹重开预期。", source: "https://ca.finance.yahoo.com/news/oil-prices-rebound-houthis-attacked-085646357.html", sourceLabel: "Reuters via Yahoo Finance" },
  { category: "日本 / 股市", date: "08/05", impact: "日股、日元与全球风险偏好", title: "日经指数因美伊协议希望大涨逾 3%", detail: "能源供应恢复预期缓解了日本这一原油进口国的成本压力，日股明显跑赢；若谈判反复，能源输入成本与日元仍可能快速反向定价。", source: "https://mainichi.jp/english/articles/20260805/p2g/00m/0bu/015000c", sourceLabel: "Kyodo via The Mainichi" },
  { category: "全球市场", date: "08/05", impact: "黄金、美元与全球股债", title: "避险与降通胀交易并行，黄金出现近 5%日线涨幅", detail: "美元走弱、油价周内大跌和美国就业降温预期共同支撑黄金；但 Cook 的鹰派表态提示，若通胀改善停滞，利率风险仍可能反扑。", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com · XAU/USD history" },
] as const;

export const stockNews = [
  { ticker: "SNDK", title: "FY2026 Q4 收入与现金流创高，新增 $14B 回购授权", detail: "季度收入环比增长 51%，GAAP 净利润 $6.903B；Q1 FY2027 收入指引 $10.3B—$10.8B、非 GAAP EPS $44—$46。强劲盈利背后约三分之二环比增长来自涨价，是下一阶段首要验证点。", source: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", label: "SEC · official earnings release" },
  { ticker: "SPCX", title: "限售股于 8 月 6 日解禁，供给风险进入兑现窗口", detail: "首份上市后财报显示业务增长与 AI 资本开支同时激增。实际出售规模无法事先确认，应区分“可售股份增加”与“已发生出售”。", source: "https://www.channelnewsasia.com/business/spacexs-first-quarterly-results-public-company-beat-expectations-ai-costs-hit-stock-6299041", label: "Reuters via CNA" },
  { ticker: "MU / INTC / QQQ", title: "科技与半导体在强势反弹后回吐", detail: "QQQ 常规时段下跌 0.90%。本期未发现 MU、INTC 的同等级 SEC 或公司 IR 新公告，不用未经证实的供应链传闻解释单日波动。", source: "https://apnews.com/article/53179dc1c0148c5afeb47379b8f5b5c5", label: "Associated Press · market close" },
] as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 08/06 09:31，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻稿中的隐含波动、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Federal Reserve · Cook speech", "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm"],
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["U.S. Treasury · daily rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS August 2026 calendar", "https://data.bls.gov/schedule/2026/08_sched_list.htm"],
  ["ISM · July services PMI", "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/july/"],
  ["SEC · SanDisk FY2026 Q4 8-K", "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndk-20260805.htm"],
] as const;
