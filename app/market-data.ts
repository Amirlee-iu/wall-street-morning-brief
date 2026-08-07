export type EventWindow = "previous" | "today" | "future";

export const briefing = {
  edition: "盘后版",
  updatedAt: "2026-08-07 11:14 CST",
  nextUpdate: "2026-08-07 20:30 CST",
  stance: "中性偏谨慎 · 等待非农",
  score: 48,
  headline: "油价与长债收益率反弹压制风险偏好，今晚非农决定下一方向",
  summary:
    "8 月 6 日美股小幅收低：SPY、QQQ、VOO 常规时段分别下跌 0.16%、0.37%和 0.17%。10 年期美债官方收益率上升 6bp 至 4.69%，WTI 近月日线收盘反弹 3.87%至 $78.13，重新抬高通胀与估值压力。美国 Q2 非农生产率年化增长 1.4%、单位劳工成本增长 1.3%，成本信号温和；但 SanDisk 财报后收跌 6.81%，表明存储行业的高盈利已被更高预期和周期见顶担忧抵消。今晚北京时间 20:30 的 7 月非农、失业率与工资是下一交易日最重要的定价锚。",
  inference:
    "市场判断基于公开资料的编辑性推断，不构成投资建议；事实、模型判断与数据缺口分开标注，所有时间已换算为北京时间。",
};

export const markets = [
  { name: "SPY", close: "$768.56", day: "−0.16%", week: "+3.62%", month: "+2.30%", summary: "高位小幅回落", tone: "down", session: "08/06 美股常规时段收盘", checkedAt: "08/07 09:41 CST", source: "https://stockanalysis.com/etf/spy/history/", sourceLabel: "StockAnalysis / Tiingo · SPY 同源历史收盘" },
  { name: "QQQ", close: "$714.65", day: "−0.37%", week: "+4.55%", month: "−1.13%", summary: "科技继续承压", tone: "down", session: "08/06 美股常规时段收盘", checkedAt: "08/07 09:41 CST", source: "https://stockanalysis.com/etf/qqq/history/", sourceLabel: "StockAnalysis / Tiingo · QQQ 同源历史收盘" },
  { name: "VOO", close: "$706.40", day: "−0.17%", week: "+3.61%", month: "+2.28%", summary: "大盘温和整固", tone: "down", session: "08/06 美股常规时段收盘", checkedAt: "08/07 09:41 CST", source: "https://stockanalysis.com/etf/voo/history/", sourceLabel: "StockAnalysis / Tiingo · VOO 同源历史收盘" },
  { name: "10Y 美债", close: "4.69%", day: "+6bp", week: "+1bp", month: "+21bp", summary: "油价推升长端", tone: "down", session: "08/06 Treasury 官方日值；2Y 4.25%", checkedAt: "08/07 09:41 CST", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · 官方同源日值" },
  { name: "DXY", close: "99.76", day: "+0.08%", week: "−0.10%", month: "−1.08%", summary: "非农前轻微反弹", tone: "flat", session: "08/06 美元指数日线收盘", checkedAt: "08/07 09:41 CST", source: "https://www.investing.com/indices/usdollar-historical-data", sourceLabel: "Investing.com 美国站 · DXY 同源日线", contextSource: "https://www.fx678.com/" },
  { name: "现货黄金", close: "$4,252.47", day: "+0.13%", week: "+3.63%", month: "+2.29%", summary: "高位震荡守强", tone: "up", session: "08/06 XAU/USD 美国站日线收盘", checkedAt: "08/07 09:41 CST", source: "https://www.investing.com/currencies/xau-usd-historical-data", sourceLabel: "Investing.com 美站日线；月基准同站中文历史页", contextSource: "https://www.fx678.com/" },
  { name: "WTI", close: "$78.13", day: "+3.87%", week: "−6.53%", month: "+13.98%", summary: "协议疑虑促反弹", tone: "up", session: "08/06 WTI 近月历史日线收盘", checkedAt: "08/07 09:41 CST", source: "https://www.investing.com/commodities/crude-oil-historical-data", sourceLabel: "Investing.com · WTI 近月同源日线（非 CME 结算）", contextSource: "https://www.fx678.com/" },
  { name: "BTC", close: "$64,303.60", day: "−0.54%", week: "−0.72%", month: "+0.43%", summary: "风险收缩中回落", tone: "down", session: "08/06 BTC/USD 24 小时日线收盘", checkedAt: "08/07 09:41 CST", source: "https://www.investing.com/crypto/bitcoin/historical-data", sourceLabel: "Investing.com · BTC/USD 同源日线" },
] as const;

export const events = [
  { window: "previous" as EventWindow, time: "04:00", category: "市场", impact: "高", title: "油价和长债收益率反弹，美股连续第二日小幅下跌", detail: "S&P 500 下跌 0.2%至 7,709.96，道指下跌 0.9%至 53,885.10，纳指综合下跌 0.1%至 26,348.35。SPY、QQQ、VOO 可审计常规时段涨跌分别为 −0.16%、−0.37%和 −0.17%。", source: "https://apnews.com/article/stock-market-dow-warner-dow-jones-b13b60e192e74e6dc6ab222dc296b5d2", sourceLabel: "Associated Press · market close" },
  { window: "previous" as EventWindow, time: "20:30", category: "生产率", impact: "中", title: "Q2 非农生产率增长 1.4%，单位劳工成本增长 1.3%", detail: "产出增长 1.7%、工时增长 0.3%；过去四季度生产率增长 2.2%、单位劳工成本增长 1.4%。效率改善有助吸收工资成本，但单季数据不足以抵消油价和服务价格风险。", source: "https://www.bls.gov/news.release/prod2.nr0.htm", sourceLabel: "U.S. BLS · official release" },
  { window: "previous" as EventWindow, time: "20:30", category: "就业", impact: "中", title: "初请失业金小幅升至 19.9 万", detail: "初请较前周增加 1,000，仍处历史低位，说明裁员压力有限。与服务业就业分项收缩并存，劳动力市场更接近低招聘、低解雇，而非快速恶化。", source: "https://www.dol.gov/agencies/eta/ui-claims", sourceLabel: "U.S. Department of Labor · official claims data" },
  { window: "previous" as EventWindow, time: "收盘", category: "财报反应", impact: "高", title: "SanDisk 强劲业绩仍未跨过高预期门槛", detail: "SNDK 常规时段收跌约 6.81%。财报事实仍然强劲，但环比收入增长约三分之二来自涨价、消费业务环比下滑，使市场转向评估周期持续性而非只看当季利润。", source: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", sourceLabel: "SEC 财报事实；StockAnalysis 收盘反应" },
  { window: "today" as EventWindow, time: "20:30", category: "就业", impact: "高", title: "美国 7 月非农就业、失业率与平均时薪", detail: "今晚第一定价锚。就业和工资同步偏强将推升 2Y/10Y、美元并压制 QQQ；就业温和降温且失业率稳定更利于软着陆；若就业骤弱，则先交易降息、随后转向衰退风险。", source: "https://www.bls.gov/schedule/news_release/empsit.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "today" as EventWindow, time: "22:00", category: "美联储", impact: "中", title: "里士满联储主席 Barkin 炉边谈话", detail: "安排在非农发布后约 90 分钟，可能成为官员对就业数据的首轮公开解读。鹰派解读会放大利率与美元的第二波波动。", source: "https://nabe.com/NABE/Events/Event_Display.aspx?EventKey=WEBAUG7&WebsiteKey=91b9e16d-e6fe-4f31-a4af-02c194225c32", sourceLabel: "NABE · official event" },
  { window: "today" as EventWindow, time: "08/08 03:00", category: "信贷", impact: "低", title: "美联储公布 6 月消费者信贷", detail: "数据可辅助判断信用卡与非循环信贷是否支撑消费，但通常影响低于非农和 CPI。", source: "https://www.federalreserve.gov/releases/g19/current/", sourceLabel: "Federal Reserve · official release" },
  { window: "future" as EventWindow, time: "08/12 20:30", category: "通胀", impact: "高", title: "美国 7 月 CPI 与实际收入", detail: "油价前期回落有利于总体通胀，但核心服务与住房分项决定市场能否延续利率下行交易。高于预期将直接压缩高估值科技股估值。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 20:30", category: "通胀", impact: "高", title: "美国 7 月 PPI", detail: "生产端价格将检验 ISM 服务价格升温是否具有广度；超预期会强化通胀黏性并抬升短端利率。", source: "https://data.bls.gov/schedule/2026/08_sched_list.htm", sourceLabel: "U.S. BLS · official calendar" },
  { window: "future" as EventWindow, time: "08/13 21:00", category: "公司", impact: "中", title: "SanDisk 投资者日", detail: "重点跟踪 NAND 供需、NBM 合同、数据中心 SSD、资本开支与回购执行，验证财报高毛利率和涨价驱动能否延续。", source: "https://investor.sandisk.com/", sourceLabel: "SanDisk Investor Relations" },
  { window: "future" as EventWindow, time: "08/14 20:30", category: "消费", impact: "高", title: "美国 7 月零售销售", detail: "未来七天窗口末端的重要增长数据。强消费叠加高通胀会推升收益率；消费骤弱则增加盈利与衰退担忧。", source: "https://www.census.gov/retail/index.html", sourceLabel: "U.S. Census Bureau · official release center" },
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
  { category: "中东 / 能源", date: "08/06", impact: "WTI、通胀、航运与美债", title: "霍尔木兹方案执行障碍浮现，油价重新反弹", detail: "拟议方案允许伊朗管理进入海湾的船只，但航运业指出收费可能与美国制裁和保险条款冲突。协议可执行性下降，令 WTI 近月日线反弹 3.87%。", source: "https://gcaptain.com/shipping-industry-sees-major-obstacles-to-irans-hormuz-control-plan/", sourceLabel: "Reuters via gCaptain" },
  { category: "日本 / 外汇", date: "08/06", impact: "DXY、日元、美债与套息交易", title: "日元干预后部分回吐，市场等待美伊协议与美国非农", detail: "美元兑日元在六周低位附近企稳，说明联合干预的冲击尚未完全消退。日元再次快速走弱可能重新触发干预预期，并影响日本机构的美债配置。", source: "https://www.reuters.com/world/asia-pacific/yen-dollar-drift-iran-deal-concerns-payroll-jitters-2026-08-06/", sourceLabel: "Reuters" },
  { category: "亚洲科技", date: "08/06", impact: "SNDK、SKHY、MU 与半导体估值", title: "存储财报后的高预期落差扩散至亚洲科技股", detail: "SanDisk 与 Western Digital 强劲财报未能满足更高预期，亚洲科技指数受到 AI 投资回报与存储周期担忧拖累。对 SKHY、MU 的影响更偏估值与周期映射，不等同于公司基本面出现新披露。", source: "https://www.domenicadelcorriere.it/en/Economy/714780-stocks-diverge-with-earnings-tech-in-focus.html", sourceLabel: "AFP market report" },
  { category: "北美经济", date: "08/06", impact: "全球增长、加元与周期股", title: "加拿大服务业连续第二个月收缩，投入价格反而继续上升", detail: "加拿大 7 月服务业 PMI 由 47.1回升至 49.1，但仍低于荣枯线；新业务连续第三个月收缩，投入价格指数由 61.2升至 64.0。增长偏弱与成本上升并存，是全球滞胀风险的旁证。", source: "https://www.reuters.com/world/americas/canadas-services-pmi-edges-up-sector-remains-contraction-2026-08-06/", sourceLabel: "Reuters" },
  { category: "全球债市", date: "08/06", impact: "美债、黄金、成长股估值", title: "油价反弹把通胀风险重新传导至长期国债", detail: "美国 Q2 生产率改善本应缓和成本压力，但 WTI 反弹和初请仍低推动 10 年期美债官方收益率升至 4.69%。长端上行会直接压缩高久期成长股估值，并提高黄金持有成本。", source: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve", sourceLabel: "U.S. Treasury · official rates" },
  { category: "美日政策", date: "08/06", impact: "日元、美债与全球套息交易", title: "联合干预余波未消，美元兑日元仍处六周低位附近", detail: "市场继续评估美日联合买入日元的持续性。若日元再度快速贬值，日本可能需要更多美元流动性；使用美联储 FIMA 工具可降低直接抛售美债的压力，但不能替代日本国内政策正常化。", source: "https://www.reuters.com/world/asia-pacific/yen-dollar-drift-iran-deal-concerns-payroll-jitters-2026-08-06/", sourceLabel: "Reuters" },
] as const;

export const stockNews = [
  { ticker: "SNDK", title: "财报后收跌 6.81%，市场从利润转向周期持续性", detail: "公司收入、毛利率与现金流均强，但约三分之二环比增长来自涨价，消费收入环比下降 32%。8 月 13 日投资者日将成为下一验证点。", source: "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm", label: "SEC · earnings release" },
  { ticker: "SPCX", title: "限售解禁窗口开启，实际出售规模仍不可确认", detail: "首份上市后财报显示业务增长与 AI 资本开支同时激增。解禁只代表可售供给增加，不代表股份已经售出；本期不对实际抛售规模作推测。", source: "https://www.channelnewsasia.com/business/spacexs-first-quarterly-results-public-company-beat-expectations-ai-costs-hit-stock-6299041", label: "Reuters via CNA" },
  { ticker: "AMD", title: "数据中心收入翻倍，Q3 收入指引继续加速", detail: "Q2 收入同比增长 50%至 $11.536B，数据中心收入 $6.72B；公司预计 Q3 收入约 $13B、上下浮动 $300M，非 GAAP 毛利率约 56%。执行风险转向 AI 系统交付与竞争。", source: "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/q22026991.htm", label: "SEC · AMD Q2 earnings release" },
  { ticker: "PLTR", title: "美国商业收入增长 149%，全年收入指引升至约 $8.15B", detail: "Q2 总收入 $1.94B、同比增长 93%，美国商业收入 $764M、美国政府收入 $809M；调整后自由现金流 $1.22B。业务兑现强，但高增长持续性与估值仍需分开判断。", source: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm", label: "SEC · Palantir Q2 earnings release" },
  { ticker: "MU", title: "SanDisk 财报强化存储景气，也提高周期见顶敏感度", detail: "MU 最近一季收入 $41.46B、调整后自由现金流 $18.3B，Q4 收入指引 $50B±$1B；SanDisk 财报显示存储涨价仍强，同时提醒投资者关注价格贡献、库存和新增供给。", source: "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/a2026q3ex991-pressrelease.htm", label: "SEC · Micron FY2026 Q3 release" },
  { ticker: "INTC / MSFT / AAPL / AMZN / TSLA", title: "本期无同等级 SEC 或公司 IR 重大新公告", detail: "宏观利率、油价和非农前仓位调整是更可验证的共同驱动；不使用未经证实的供应链传闻解释个股单日波动。", source: "https://apnews.com/article/stock-market-dow-warner-dow-jones-b13b60e192e74e6dc6ab222dc296b5d2", label: "Associated Press · market close" },
] as const;

export const fedPolicy = {
  currentRange: "3.50%—3.75%",
  bias: "维持限制性 · 加息风险高于降息",
  checkedAt: "08/07 11:14 CST",
  nextMeeting: "09/15—09/16（含经济预测）",
  summary: "7 月 FOMC 以 9 比 3维持利率不变，三名反对者主张加息 25bp。官方表述仍把高于 2%目标的通胀视为主要问题；Cook 明确表示必要时准备加息。当前没有足够官方证据支持近期降息，降息路径需要就业显著恶化并伴随核心通胀持续回落。",
  drivers: [
    { direction: "hike", directionLabel: "支持加息", signal: "偏强", title: "通胀仍显著高于目标", detail: "Cook 表示通胀风险高于就业风险，若反通胀停滞将支持加息；7 月 FOMC 也有三票主张立即加息 25bp。", source: "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm", sourceLabel: "Federal Reserve · Cook speech" },
    { direction: "cut", directionLabel: "支持降息", signal: "尚待确认", title: "招聘降温但裁员仍低", detail: "服务业就业分项已转为收缩、ADP 招聘放缓，但初请仍仅 19.9万、失业率此前稳定。需要连续疲弱的非农与失业率上升，才能形成可靠降息依据。", source: "https://www.bls.gov/schedule/news_release/empsit.htm", sourceLabel: "U.S. BLS · employment calendar" },
    { direction: "neutral", directionLabel: "缓冲因素", signal: "偏鸽", title: "生产率吸收部分工资成本", detail: "Q2 非农生产率年化增长 1.4%，单位劳工成本仅增长 1.3%。若这种组合延续，经济可在不显著加息的情况下消化部分工资压力。", source: "https://www.bls.gov/news.release/prod2.nr0.htm", sourceLabel: "U.S. BLS · productivity release" },
  ],
  catalysts: [
    { date: "08/07 20:30", event: "7 月非农就业报告", detail: "就业、失业率、工资与前值修订共同决定劳动市场方向。", hawkish: "就业和工资明显偏强，失业率稳定或下降。", dovish: "就业显著低于趋势、失业率上升且工资放缓。", source: "https://www.bls.gov/schedule/news_release/empsit.htm", sourceLabel: "BLS" },
    { date: "08/12 20:30", event: "7 月 CPI", detail: "核心服务、住房和商品价格是关键，不只看能源拉动的总体数字。", hawkish: "核心通胀环比再加速，广度扩大。", dovish: "核心服务持续降温，住房与商品同步回落。", source: "https://www.bls.gov/schedule/news_release/cpi.htm", sourceLabel: "BLS" },
    { date: "08/13 20:30", event: "7 月 PPI", detail: "观察生产端成本是否向核心 PCE 传导。", hawkish: "核心中间品与服务价格继续上升。", dovish: "生产端价格全面回落、前值下修。", source: "https://www.bls.gov/schedule/news_release/ppi.htm", sourceLabel: "BLS" },
    { date: "09/15—09/16", event: "FOMC 与经济预测", detail: "将公布利率决定及最新经济预测，是下一次正式政策决策窗口。", hawkish: "通胀预测上修、点阵图抬高或实际加息。", dovish: "就业预测转弱、通胀下修并释放未来降息条件。", source: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", sourceLabel: "Federal Reserve" },
  ],
} as const;

export const signals = {
  options: [{ ticker: "本期", text: "截至 08/07 09:41，未取得覆盖全部关注标的、带历史基准且可审计的完整期权逐笔数据；不把新闻摘要、单笔成交量或社交媒体截图定义为期权异动。" }],
  ratings: [{ ticker: "本期", text: "未取得投行原始报告或至少两家高可信来源交叉确认的重大机构评级变动；聚合站目标价变化不作为事实写入。" }],
};

export const sources = [
  ["Federal Reserve · speeches RSS", "https://www.federalreserve.gov/feeds/speeches.xml"],
  ["Federal Reserve · July FOMC statement", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"],
  ["Federal Reserve · FOMC calendar", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"],
  ["U.S. Treasury · daily rates", "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/"],
  ["BLS · Q2 productivity", "https://www.bls.gov/news.release/prod2.nr0.htm"],
  ["BLS August 2026 calendar", "https://data.bls.gov/schedule/2026/08_sched_list.htm"],
  ["Department of Labor · claims", "https://www.dol.gov/agencies/eta/ui-claims"],
  ["SEC · SanDisk FY2026 Q4", "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm"],
] as const;
