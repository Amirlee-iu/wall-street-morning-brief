export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后总结",
  updatedAt: "2026-11-24 08:30 CST",
  nextUpdate: "2026-11-25 08:30 CST",
  stance: "中性偏谨慎 · 事件驱动反弹待验证",
  score: 42,
  windowDates: { previous: "周一 · 11/23", today: "周二 · 11/24", future: "11/25—12/01" },
  headline: "AI 龙头事件催化强反弹，仍需验证市场广度",
  summary:
    "11/23 美股常规时段收盘：SPY 收于 $722.29（+4.71%）、QQQ 收于 $651.03（+7.00%）、VOO 收于 $663.91（+4.46%）。U.S. Treasury 最新官方日值仍为 11/23，10Y 持平 4.92%、2Y 持平 4.63%。Reuters 报道，英伟达管理层事件驱动 AI 股反弹；该反弹显著，但尚不足以单独确认上一周的去风险已经结束。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。ETF 使用 11/23 美股常规时段收盘；10Y 使用 U.S. Treasury 11/23 官方日值；未能取得同源日线的 DXY、黄金、WTI、BTC 明确留空。",
};

export const markets = [
  { name: "SPY", close: "$722.29", day: "+4.71%", week: "−2.39%", month: "—", summary: "事件驱动反弹", tone: "up", session: "11/23 美股常规时段收盘；周基准为 11/16；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/24 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=SPY%3APCQ%3AUSD", sourceLabel: "Financial Times · SPY 同源历史日线" },
  { name: "QQQ", close: "$651.03", day: "+7.00%", week: "−1.62%", month: "—", summary: "科技急弹", tone: "up", session: "11/23 美股常规时段收盘；周基准为 11/16；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/24 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · QQQ 同源历史日线" },
  { name: "VOO", close: "$663.91", day: "+4.46%", week: "−2.40%", month: "—", summary: "宽基显著修复", tone: "up", session: "11/23 美股常规时段收盘；周基准为 11/16；FT 本轮未提供足够长的同源月度基准", checkedAt: "11/24 08:30 CST", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=VOO%3APCQ%3AUSD", sourceLabel: "Financial Times · VOO 同源历史日线" },
  { name: "10Y 美债", close: "4.92%", day: "0bp", week: "−20bp", month: "−8bp", summary: "利率低位持稳", tone: "neutral", session: "11/23 U.S. Treasury 日收益率曲线；周/月基准为 11/16、10/23", checkedAt: "11/24 08:30 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { name: "DXY", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮未取得可交叉核验的同源日线收盘，未将报道口径冒充为收盘", checkedAt: "11/24 08:30 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "DXY 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "同源日线待核", tone: "neutral", session: "本轮未取得可交叉核验的 XAU/USD 同源日线收盘", checkedAt: "11/24 08:30 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "XAU/USD 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "近月口径待核", tone: "neutral", session: "本轮未取得可交叉核验的同源近月 WTI 日线，未将盘中报道冒充为收盘", checkedAt: "11/24 08:30 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "WTI near-month 历史行情源（待核）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "暂无可信数据", day: "—", week: "—", month: "—", summary: "UTC 日线待核", tone: "neutral", session: "未取得可交叉核验的 UTC 日线收盘", checkedAt: "11/24 08:30 CST", source: "https://finance.yahoo.com/quote/BTC-USD/history/", sourceLabel: "BTC-USD 历史行情源（待核）" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "收盘", category: "市场", impact: "高", title: "AI 龙头事件推动科技急弹，QQQ 上涨 7.00%", detail: "11/23 常规时段，SPY 收于 $722.29（+4.71%），QQQ 收于 $651.03（+7.00%），VOO 收于 $663.91（+4.46%）。强势反弹修复前一交易日的恐慌抛售，但单日变动不能证明估值去风险已经结束。", source: "https://markets.ft.com/data/etfs/tearsheet/historical?s=QQQ%3ANMQ%3AUSD", sourceLabel: "Financial Times · ETF 历史收盘" },
  { window: "previous" as EventWindow, time: "收盘", category: "利率", impact: "中", title: "官方 10Y 维持 4.92%，反弹未伴随利率上冲", detail: "U.S. Treasury 11/23 日收益率曲线显示，10Y 与 11/20 持平于 4.92%，2Y 亦持平于 4.63%。在风险资产急弹日长端未明显上行，说明市场仍同时计入避险需求与政策不确定性。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/2026/all?type=daily_treasury_yield_curve&field_tdr_date_value=2026&page&_format=csv", sourceLabel: "U.S. Treasury · 官方日收益率曲线" },
  { window: "previous" as EventWindow, time: "收盘", category: "AI / 公司治理", impact: "高", title: "Nvidia 管理层事件引发 AI 链快速回补", detail: "Reuters 报道称，英伟达恢复 Jensen Huang 担任 CEO 后，其股价大涨并带动芯片与科技股广泛反弹。该事件是高不确定性的公司级催化，不能替代订单、盈利与资本开支对 AI 周期的基本面验证。", source: "https://www.marketscreener.com/news/wall-street-soars-on-huang-s-return-to-nvidia-treasury-yields-rise-ce7851dadf8ff627", sourceLabel: "Reuters · U.S. market close" },
  { window: "today" as EventWindow, time: "全天", category: "市场", impact: "高", title: "观察反弹能否扩散至市场广度与信用", detail: "当天的重点不是追逐单一科技龙头，而是验证上涨能否获得成交、等权指数和信用市场的同步确认。若仅由少数 AI 大盘股推动，反弹的持续性仍偏脆弱。", source: "https://ca.investing.com/news/economy-news/trading-day-market-euphoria-as-huang-returns-to-nvidia-4976815", sourceLabel: "Reuters · market context" },
  { window: "today" as EventWindow, time: "全天", category: "公司", impact: "中", title: "未核实到关注股新的同等级 SEC / IR 财报披露", detail: "本轮优先核对 SEC EDGAR 与公司投资者关系材料。未取得可信新文件时，不以市场传闻补充持仓公司事件；财报时间线继续保留已披露报告和分析页入口。", source: "https://www.sec.gov/edgar/search/", sourceLabel: "SEC EDGAR · filing search" },
  { window: "today" as EventWindow, time: "全天", category: "美联储", impact: "中", title: "联储 RSS 未见 11/23 后新的政策实质讲话", detail: "最新 RSS 仍显示 11/20 的 Cook 与 Waller 讲话。Cook 的通胀优先观点仍为已核实的最新实质政策信息；Waller 为教育活动开场致辞，不应机械贴上政策标签。", source: "https://www.federalreserve.gov/feeds/speeches.xml", sourceLabel: "Federal Reserve · speeches RSS" },
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
  { category: "全球股市 / AI 供应链", date: "11/23", impact: "半导体、云资本开支与风险偏好", title: "英伟达管理层事件驱动 AI 链强势回补", detail: "Reuters 报道称，英伟达恢复 Jensen Huang 担任 CEO 后，股价大涨并带动芯片与科技股反弹。传导路径是此前拥挤的空头与风险仓位回补；后续仍须看订单、云厂商 CapEx 与估值，而非将单日催化等同于基本面确认。", source: "https://www.marketscreener.com/news/wall-street-soars-on-huang-s-return-to-nvidia-treasury-yields-rise-ce7851dadf8ff627", sourceLabel: "Reuters · U.S. market close" },
  { category: "全球资金流 / 汇率", date: "11/23", impact: "美元、外资流向与新兴市场风险偏好", title: "科技反弹带动美元走强，风险偏好与加息预期同时作用", detail: "Reuters 市场报道显示，AI 股反弹的同时，美元对一篮子货币升至一年多来高位。传导路径是风险偏好修复与偏鹰利率预期共同影响美元；这不替代可审计的 DXY 日线收盘，因此跨资产卡片仍保留空值。", source: "https://ca.investing.com/news/economy-news/trading-day-market-euphoria-as-huang-returns-to-nvidia-4976815", sourceLabel: "Reuters · FX and markets" },
  { category: "全球货币政策", date: "11/23", impact: "短端利率、美元与权益估值", title: "Cook 的通胀优先判断仍是最新实质联储表态", detail: "联储 RSS 未显示 11/23 后新的实质政策讲话；最新的 Cook 讲话仍强调通胀高于目标、等待行动有成本。该观点是单一委员立场，市场应等待 PCE 与 FOMC 的集体决定。", source: "https://www.federalreserve.gov/feeds/speeches.xml", sourceLabel: "Federal Reserve · speeches RSS" },
  { category: "区域市场 / 供应链", date: "11/23", impact: "亚洲半导体、台湾与韩国风险资产", title: "亚洲市场在上周 AI 抛售后寻求企稳，政策支持预期抬升", detail: "Reuters 报道称，在上周 AI 芯片股重挫后，亚洲部分市场与美国股指期货尝试反弹，相关当局准备稳定市场。传导路径是全球半导体估值与风险偏好联动；后续观察现货市场是否跟随而非只看期货。", source: "https://wealthinsights.metrobank.com.ph/news/global-markets-us-futures-bounce-while-asia-markets-brace-for-ai-wipeout", sourceLabel: "Reuters · Asia market open" },
  { category: "市场结构 / 风险偏好", date: "11/23", impact: "宽基指数、波动率与防御板块", title: "强反弹并未抹平上一周 AI 去风险，市场广度仍是关键", detail: "AP 报道称，受压的 AI 股反弹带动纳指表现领先、道指亦大幅上涨。单日走势显示情绪修复，但对趋势的判断仍需结合等权指数、信用利差与随后 PCE 数据，不能仅凭大盘股反弹下结论。", source: "https://apnews.com/article/fcdf1bad36b4f81c90cbb0f33a2c5704", sourceLabel: "AP · U.S. index close" },
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
  checkedAt: "11/24 08:30 CST",
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
  options: [{ ticker: "本期", text: "截至 11/24 08:30，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "截至 11/24 08:30，未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Reuters · November 23 AI rebound", "https://www.marketscreener.com/news/wall-street-soars-on-huang-s-return-to-nvidia-treasury-yields-rise-ce7851dadf8ff627"],
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
