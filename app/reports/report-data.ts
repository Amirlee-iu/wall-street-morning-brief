export type EarningsReport = {
  ticker: string;
  company: string;
  quarter: string;
  publishedAt: string;
  verdict: string;
  score: number;
  scoreLabel: string;
  thesis: string;
  metrics: readonly {
    label: string;
    value: string;
    change: string;
    tone: "positive" | "negative" | "neutral";
  }[];
  sections: readonly {
    title: string;
    lead: string;
    points: readonly string[];
  }[];
  positives: readonly string[];
  risks: readonly string[];
  watchItems: readonly string[];
  sources: readonly {
    label: string;
    url: string;
  }[];
  disclaimer: string;
};

export const teslaReport: EarningsReport = {
  ticker: "TSLA",
  company: "特斯拉",
  quarter: "2026 年第二季度",
  publishedAt: "2026-07-22 美股盘后",
  verdict: "收入强，盈利质量弱，资本开支进入高压期",
  score: 42,
  scoreLabel: "财报质量评分",
  thesis:
    "本季度的核心矛盾是“业务规模扩张”与“每美元收入的利润和现金回报下降”同时发生。收入、交付和经营现金流都增长，但营业利润率降至 1.4%，资本开支跃升至 $5.79B，使自由现金流转负。短期估值重新定价的关键，不是收入是否增长，而是 AI、Robotaxi、Cybercab 与制造投资何时能转化为可验证的高回报现金流。",
  metrics: [
    { label: "总收入", value: "$28.24B", change: "同比 +26%", tone: "positive" },
    { label: "营业利润率", value: "1.4%", change: "同比 −269bp", tone: "negative" },
    { label: "非 GAAP EPS", value: "$0.33", change: "同比 −18%", tone: "negative" },
    { label: "经营现金流", value: "$4.70B", change: "同比 +85%", tone: "positive" },
    { label: "资本开支", value: "$5.79B", change: "同比 +142%", tone: "negative" },
    { label: "自由现金流", value: "−$1.09B", change: "上季 +$1.44B", tone: "negative" },
  ],
  sections: [
    {
      title: "一、增长来自哪里",
      lead: "收入增长是真实的，但增长结构并不等同于利润增长。",
      points: [
        "汽车业务收入 $20.52B，同比增长 23%；能源业务收入 $3.14B，同比增长 13%；服务及其他业务收入 $4.58B，同比增长 50%。",
        "季度汽车交付量达到 480,126 辆，同比增长约 25%；能源储能部署为 13.5GWh，说明车辆与储能规模仍在扩张。",
        "服务及其他业务成为结构亮点，但其利润贡献尚不足以抵消汽车平均售价、监管积分收入下降及研发费用上升带来的压力。",
      ],
    },
    {
      title: "二、利润为什么跟不上收入",
      lead: "营业利润仅 $398M，同比下降 57%，是本季最重要的质量信号。",
      points: [
        "总毛利率为 16.8%，低于上季 21.1%；汽车毛利率剔除监管积分后为 16.3%，也低于上季 19.2%。",
        "经营费用同比增长 47%至 $4.35B，主要受到 AI 与其他研发项目、股权激励及销售管理费用推动。",
        "GAAP 净利润 $1.11B 看似稳定，但其中包括约 $1.01B 的 SpaceX 股权投资未实现收益；因此营业利润比净利润更能反映本季核心经营状况。",
      ],
    },
    {
      title: "三、现金流与投资周期",
      lead: "现金流转负并非经营现金流崩塌，而是投资强度突然上升。",
      points: [
        "经营现金流增至 $4.70B，但资本开支升至 $5.79B，最终形成 −$1.09B 自由现金流。",
        "现金、现金等价物及短期投资为 $43.52B，环比减少约 $1.22B；当前流动性充足，但持续高投入会提高未来季度的兑现要求。",
        "投资覆盖 Cybercab、Robotaxi、Optimus、AI 算力、储能、太阳能和半导体制造。项目组合庞大，意味着执行、投产节奏与资本回报存在更高不确定性。",
      ],
    },
    {
      title: "四、市场应如何解读",
      lead: "这是一份“战略叙事继续推进，但财务兑现暂时退后”的财报。",
      points: [
        "乐观情景：Robotaxi、Cybercab 与储能规模化速度快于预期，当前资本开支转化为新收入和高毛利软件收入。",
        "中性情景：收入继续增长，但汽车价格竞争与投入维持高位，营业利润率在低位停留更久。",
        "悲观情景：新项目投产延迟、监管限制或需求回落，使自由现金流连续为负，市场进一步压缩远期成长溢价。",
      ],
    },
  ],
  positives: [
    "收入、交付量和经营现金流均实现明显同比增长。",
    "服务及其他业务收入增长 50%，业务结构正在变得更分散。",
    "现金与短期投资仍超过 $43B，短期融资压力有限。",
  ],
  risks: [
    "营业利润率仅 1.4%，核心汽车业务的价格与成本压力仍大。",
    "资本开支同比增长 142%，自由现金流转负。",
    "净利润受到非经营性未实现收益影响，不能只看 EPS 判断经营质量。",
    "Robotaxi、Cybercab、Optimus 等项目的商业化节奏与监管结果仍存在显著不确定性。",
  ],
  watchItems: [
    "未来两季汽车毛利率（剔除监管积分）能否稳定在 16%以上。",
    "自由现金流何时重新转正，以及季度资本开支是否继续高于 $5B。",
    "FSD 订阅、Robotaxi 城市扩张与无人化运营的可验证数据。",
    "Cybercab、Semi、Optimus 和储能产能爬坡是否按计划执行。",
  ],
  sources: [
    { label: "SEC · Tesla Q2 shareholder update", url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/exhibit991.htm" },
    { label: "SEC · Tesla 2026 Q2 Form 10-Q", url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049270/tsla-20260630.htm" },
  ],
  disclaimer:
    "本报告基于 Tesla 向 SEC 提交的财报材料，由模型进行结构化解读。评分与情景分析属于编辑性判断，不构成投资建议或目标价预测。",
};

export const intelReport: EarningsReport = {
  ticker: "INTC",
  company: "英特尔",
  quarter: "2026 年第二季度",
  publishedAt: "2026-07-23 美股盘后",
  verdict: "经营修复强劲，但资本密集度和会计口径差异不可忽视",
  score: 71,
  scoreLabel: "财报质量评分",
  thesis:
    "英特尔的核心经营表现明显改善：收入增长 25%，毛利率和营业利润率大幅修复，数据中心业务增长 59%，Q3 指引也偏强。但 $11.0B 的 GAAP 净亏损和 −$8.42B 的调整后自由现金流说明，投资者必须把经营业务、非经营会计项目和制造扩张现金支出分开观察。",
  metrics: [
    { label: "收入", value: "$16.13B", change: "同比 +25%", tone: "positive" },
    { label: "非 GAAP 毛利率", value: "41.8%", change: "同比 +12.1ppt", tone: "positive" },
    { label: "非 GAAP EPS", value: "$0.42", change: "上年 −$0.10", tone: "positive" },
    { label: "DCAI 收入", value: "$6.3B", change: "同比 +59%", tone: "positive" },
    { label: "经营现金流", value: "$7.01B", change: "同比显著改善", tone: "positive" },
    { label: "调整后自由现金流", value: "−$8.42B", change: "上年 −$1.05B", tone: "negative" },
  ],
  sections: [
    {
      title: "一、经营修复的含金量",
      lead: "收入、毛利率与营业利润率同步改善，说明本季并非单纯依靠成本削减。",
      points: [
        "收入 $16.13B，同比增长 25%；GAAP 毛利率从 27.5%升至 40.4%，非 GAAP 毛利率从 29.7%升至 41.8%。",
        "GAAP 营业利润率达到 11.1%，上年同期为 −24.7%；非 GAAP 营业利润率达到 17.2%。",
        "研发与管理费用下降，同时产量、良率、周期时间和产品组合改善，共同带来经营杠杆。",
      ],
    },
    {
      title: "二、增长由数据中心主导",
      lead: "AI 相关计算需求是本季度最强驱动，但分部收入不能简单相加。",
      points: [
        "数据中心与 AI 业务收入 $6.3B，同比增长 59%；客户端计算与物理 AI 收入 $8.9B，同比增长 13%。",
        "Intel Foundry 分部收入 $5.8B，同比增长 31%，但其中包含大量内部交易；本季度内部抵销为 $5.5B，因此不能把分部增长直接等同于外部代工客户突破。",
        "18A-P 进入风险生产、部分 Panther Lake 使用 18A 进入高量制造，是执行层面的积极信号，但外部客户量产和盈利能力仍需后续验证。",
      ],
    },
    {
      title: "三、为什么 GAAP 亏损仍高达 $11B",
      lead: "GAAP 净亏损主要不是来自本季主营业务亏损。",
      points: [
        "公司录得 $1.80B GAAP 营业利润，但“利息及其他净额”项目为 −$12.58B，使归属于英特尔的 GAAP 净亏损达到 $11.03B。",
        "官方财报给出的非 GAAP 净利润为 $2.2B、非 GAAP EPS 为 $0.42。巨大的口径差要求投资者阅读调整桥接表，而不能仅比较两个 EPS。",
        "本报告不对 −$12.58B 非经营项目的全部构成做超出官方披露的推断；判断持续盈利能力时，应优先跟踪营业利润、毛利率与现金流。",
      ],
    },
    {
      title: "四、现金流是下一阶段约束",
      lead: "经营现金流改善明显，但制造扩张与交易支出吞噬了现金。",
      points: [
        "季度经营现金流为 $7.01B，但调整后自由现金流为 −$8.42B，显著差于上年同期 −$1.05B。",
        "英特尔正扩大设备、洁净室、基板与先进制程投入；高资本密集度会让盈利修复与股东现金回报之间出现时间差。",
        "Q3 收入指引 $15.8B–$16.8B，非 GAAP 毛利率 42%、非 GAAP EPS $0.38。指引验证点是收入维持的同时，毛利率能否继续改善且现金消耗收窄。",
      ],
    },
  ],
  positives: [
    "收入增长 25%，为十五年来最强季度增速之一。",
    "数据中心与 AI 收入增长 59%，毛利率和营业利润率大幅修复。",
    "Q3 收入与利润指引显示需求和良率改善具有一定延续性。",
  ],
  risks: [
    "调整后自由现金流为 −$8.42B，制造扩张对流动性的消耗非常高。",
    "Foundry 分部包含大量内部收入，外部客户进展仍需独立验证。",
    "GAAP 与非 GAAP 口径差异巨大，非经营项目可能造成利润表高波动。",
    "18A、14A 和外部代工客户的量产执行仍是长期估值的关键不确定性。",
  ],
  watchItems: [
    "DCAI 增速能否保持，以及服务器 CPU 供给限制是否缓解。",
    "非 GAAP 毛利率能否达到 Q3 指引的 42%。",
    "调整后自由现金流何时收窄并恢复正值。",
    "18A 外部客户设计定案、量产和 Foundry 外部收入披露。",
  ],
  sources: [
    { label: "Intel IR · Q2 2026 results", url: "https://www.intc.com/news-events/press-releases/detail/1776/intel-reports-second-quarter-2026-financial-results" },
    { label: "SEC · Intel Q2 earnings release", url: "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm" },
  ],
  disclaimer:
    "本报告基于 Intel 官方财报和 SEC 文件，由模型进行结构化解读。评分与情景分析属于编辑性判断，不构成投资建议或目标价预测。",
};
