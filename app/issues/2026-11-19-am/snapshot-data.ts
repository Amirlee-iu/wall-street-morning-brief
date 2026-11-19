export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-11-19 08:30 CST",
  nextUpdate: "2026-11-20 08:30 CST",
  stance: "偏谨慎 · AI 链持续去风险",
  score: 20,
  windowDates: { previous: "周二 · 11/17", today: "周三 · 11/18", future: "11/19—11/25" },
  headline: "AI 去风险延续，收益率下行仍未扭转科技与宽基回撤",
  summary:
    "11/17 美股常规时段收盘：SPY 收于 $732.44（−1.01%）、QQQ 收于 $656.95（−0.73%）、VOO 收于 $673.19（−1.04%）。U.S. Treasury 官方日曲线显示 10Y 降至 5.10%、2Y 降至 4.80%。公开报道显示 AI 去风险持续、美元仍偏强；利率回落未能扭转风险资产的广泛承压。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。ETF 使用 11/17 美股常规时段收盘；10Y 使用 U.S. Treasury 11/17 官方日值；未能取得同源日线的 DXY、黄金、WTI、BTC 明确留空。",
};

export const markets = [
  { name: "SPY", close: "$732.44", day: "−1.01%", week: "−0.39%", month: "—", summary: "连续回撤", tone: "down", session: "11/17 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/19 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · SPY 同源历史日线" },
  { name: "QQQ", close: "$656.95", day: "−0.73%", week: "+0.13%", month: "—", summary: "科技再度走弱", tone: "down", session: "11/17 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/19 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · QQQ 同源历史日线" },
  { name: "VOO", close: "$673.19", day: "−1.04%", week: "−0.41%", month: "—", summary: "宽基继续承压", tone: "down", session: "11/17 美股常规时段收盘；周基准为 11/06；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/19 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD", sourceLabel: "Financial Times · VOO 同源历史日线" },
  { name: "10Y 美债", close: "5.10%", day: "−2bp", week: "+24bp", month: "−5bp", summary: "连续小幅下行", tone: "down", session: "11/17 U.S. Treasury 日收益率曲线；周/月基准为 11/06、10/19", checkedAt: "11/19 08:30 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { name: "DXY", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得报道中的美元指数变动，未将其冒充同源日线收盘", checkedAt: "11/19 08:30 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "DXY 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮仅取得现货报道口径，未将其冒充 XAU/USD 日线收盘", checkedAt: "11/19 08:30 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "XAU/USD 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "近月口径待核", tone: "neutral", session: "报道显示 12 月合约盘中回升，但未取得可交叉核对的同源多周期日线", checkedAt: "11/19 08:30 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "WTI near-month 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "UTC 日线待核", tone: "neutral", session: "未取得可交叉核对的 UTC 日线收盘", checkedAt: "11/19 08:30 CST", source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "BTC-USD 历史行情源（待核）" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "AI 去风险延续，三大 ETF 同步收低", detail: "11/17 常规时段，SPY 收于 $732.44（−1.01%），QQQ 收于 $656.95（−0.73%），VOO 收于 $673.19（−1.04%）。Reuters 报道显示 AI 交易去杠杆与半导体压力仍是主导线索；不把指数表现替代对单一公司的基本面判断。", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · ETF 历史收盘" },
  { window: "previous" as EventWindow, time: "收盘", category: "利率", impact: "高", title: "官方 10Y 降至 5.10%，2Y 降至 4.80%", detail: "U.S. Treasury 11/17 日收益率曲线显示，10Y 较前日下降 2bp、2Y 下降 3bp。利率下行未扭转股市回撤，意味着市场还在重估 AI 盈利路径与风险溢价。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { window: "previous" as EventWindow, time: "盘后", category: "财报 / AI", impact: "高", title: "Nvidia 业绩与指引高于市场预期，但常规交易时段抛压仍在", detail: "Reuters 报道称，Nvidia 季度业绩优于预期，Q4 收入指引为 $126B—$134B，且未假设中国数据中心芯片销售。该公司不在本页关注清单内；其影响应聚焦对 AI 资本开支和供应链验证，而非直接外推至所有芯片公司。", source: "https://www.investing.com/news/stock-market-news/nvidia-earnings-beat-estimates-attention-turns-to-call-5034180", sourceLabel: "Reuters · NVIDIA results" },
  { window: "today" as EventWindow, time: "21:30", category: "美联储", impact: "高", title: "FOMC 10 月会议纪要", detail: "会议纪要将提供委员对通胀、劳动力市场与下一步政策的内部讨论。鹰派信号是更广泛支持加息或担忧 AI 需求推动通胀；偏鸽信号是强调增长/就业下行风险。纪要记录的是 10 月信息集，需与后续数据分开阅读。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve · FOMC calendar" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "中", title: "Barr 最新讲话聚焦普惠社区，并非直接政策信号", detail: "联储 RSS 显示 Barr 发布了关于美国弱势社区投资的讲话。若未出现关于通胀、就业或利率路径的明确表态，不应将主题演讲机械归类为鹰派或鸽派。", source: "https://www.federalreserve.gov/feeds/speeches.xml", sourceLabel: "Federal Reserve · speeches RSS" },
  { window: "future" as EventWindow, time: "11/20 23:00", category: "就业", impact: "中", title: "美国 10 月州就业与失业数据", detail: "州层面数据可补充观察劳动力市场的区域分化，但不替代全国就业报告。重点是是否出现跨州、跨行业一致走弱，而非单一州的月度波动。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
  { window: "future" as EventWindow, time: "11/20 23:00", category: "就业", impact: "中", title: "美国 10 月州就业与失业数据", detail: "州层面数据可补充观察劳动力市场的区域分化，但不替代全国就业报告。重点是是否出现跨州、跨行业一致走弱，而非单一州的月度波动。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · 11 月发布日历" },
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
  { category: "全球股市 / AI 供应链", date: "11/16", impact: "半导体、云资本开支与风险偏好", title: "芯片板块回撤扩散至亚洲与欧美市场", detail: "Reuters 报道称，美国芯片股下跌 5.3%，韩国与台湾市场亦走弱。传导路径是 AI 资本开支回报与领导层不确定性引发的估值重估；后续观察点是龙头业绩、订单展望和云厂商资本开支。", source: "https://live.euronext.com/en/financial-news/stocks-end-lower-ahead-nvidia-earnings-and-anthropic-ipo-oil-drops", sourceLabel: "Reuters · global market close" },
  { category: "中东 / 能源与航运", date: "11/16", impact: "油价、通胀预期与航空运输成本", title: "供应修复压低油价，油轮事件仍保留尾部风险", detail: "Reuters 报道称，霍尔木兹海峡石油流量恢复的迹象令油价走低，但新的油轮事件仍提示航运风险未完全消失。供给持续恢复会压低能源通胀；运输受阻则可能迅速重建风险溢价。", source: "https://live.euronext.com/en/financial-news/stocks-end-lower-ahead-nvidia-earnings-and-anthropic-ipo-oil-drops", sourceLabel: "Reuters · oil and shipping" },
  { category: "全球利率 / 汇率", date: "11/16", impact: "美元、黄金与成长股估值", title: "美元续创阶段高位，收益率回落幅度有限", detail: "Reuters 报道显示，美元指数触及 2025 年 4 月以来高位，10Y 收益率仅小幅回落。对跨资产的传导是美元融资条件偏紧与高久期估值承压；并不意味着单日收益率回落足以改变政策预期。", source: "https://www.investing.com/news/economy-news/trading-day-ai-jitters-slam-wall-street-5031112", sourceLabel: "Reuters · FX and rates market report" },
  { category: "中美 / 供应链", date: "11/16", impact: "AI 芯片出口、半导体估值与风险偏好", title: "美国收紧境外算力租用漏洞，AI 芯片对华限制再受关注", detail: "CNBC 报道称，美国商务部拟收紧使中国企业可租用境外 Nvidia 算力的漏洞。对市场的影响取决于最终规则的覆盖范围、执行时间与企业收入敞口，不能仅凭标题量化单家公司影响。", source: "https://www.cnbc.com/2026/11/15/stock-market-today-live-updates.html", sourceLabel: "CNBC · policy and market report" },
  { category: "全球货币政策", date: "11/16", impact: "短端利率、银行股与风险资产折现率", title: "12 月加息预期仍主导，但后续路径尚未由市场定价决定", detail: "Reuters 报道称，期货市场仍计入 12 月加息预期，而 10 月会议纪要将于周三发布。市场概率只是资产定价；正式政策仍须以 FOMC 决议、通胀与就业证据为准。", source: "https://live.euronext.com/en/financial-news/stocks-end-lower-ahead-nvidia-earnings-and-anthropic-ipo-oil-drops", sourceLabel: "Reuters · monetary-policy watch" },
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
  checkedAt: "11/19 08:30 CST",
  nextMeeting: "12/08—12/09（含经济预测）",
  summary: "10 月 FOMC 将目标区间维持在 3.75%—4.00%，但 Cook 与 Hammack 主张当次上调 25bp；声明称通胀仍然偏高。最新 BLS PPI 显示，10 月总体环比 +0.3%，剔除食品、能源和贸易服务环比 +0.5%。事实层面，核心价格压力尚未消失；模型层面，是否加息、幅度及路径仍须由后续就业、PCE 与 12 月会议决定，市场概率不是政策承诺。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "明显增强", title: "核心 PPI 连续两月环比 +0.5%，官方声明仍称通胀偏高", detail: "10 月声明明确写明通胀仍偏高，两名委员主张当次加息。BLS 随后公布的剔除食品、能源和贸易服务 PPI 环比 +0.5%，与 9 月相同；若后续 PCE 同样偏强，鹰派证据会增强。", source: "https://www.bls.gov/news.release/ppi.nr0.htm", sourceLabel: "U.S. BLS · October PPI" },
    { direction: "cut", directionLabel: "支持降息", signal: "本期未获新增官方证据", title: "不以旧就业数据替代当前政策证据", detail: "本轮没有核实到足以更新政策判断的新的官方偏鸽材料，因此不把历史就业叙事延续为当前结论。若后续就业明显转弱且通胀同时降温，才会形成更完整的降息证据链。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "U.S. BLS · official release calendar" },
    { direction: "neutral", directionLabel: "按兵不动", signal: "最近一次正式决定", title: "10 月会议选择维持目标区间", detail: "多数委员在 10 月决定维持 3.75%—4.00%。这是当前正式政策水平，不等同于 12 月的预先承诺；下一次带预测材料的会议在 12 月 8—9 日。", source: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm", sourceLabel: "Federal Reserve · 10 月 FOMC 声明" },
  ],
  catalysts: [
    { date: "11/17 21:30", event: "10 月进出口价格", detail: "观察进口成本、能源与贸易价格传导。", hawkish: "非燃料进口价格加速。", dovish: "进口价格与核心成本同步回落。", source: "https://www.bls.gov/schedule/2026/11_sched_list.htm", sourceLabel: "BLS" },
    { date: "11/25 21:30", event: "10 月个人收入与支出（含 PCE）", detail: "PCE 是联储重点关注的通胀指标。", hawkish: "核心 PCE 高于预期且消费韧性较强。", dovish: "核心 PCE 放缓、实际消费转弱。", source: "https://www.bea.gov/news/schedule", sourceLabel: "U.S. BEA" },
    { date: "12/08—12/09", event: "FOMC 与经济预测", detail: "下一次带预测材料的正式政策决策窗口。", hawkish: "上调通胀预测、上调利率路径或实际加息。", dovish: "通胀预期下修并强调就业下行风险。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 11/19 08:30，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "截至 11/19 08:30，未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
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
