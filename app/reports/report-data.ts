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

export const microsoftReport: EarningsReport = {
  ticker: "MSFT",
  company: "微软",
  quarter: "2026 财年第四季度",
  publishedAt: "2026-07-29 美股盘后",
  verdict: "云与订单双强，AI 投资开始兑现，但会计收益需剔除",
  score: 84,
  scoreLabel: "财报质量评分",
  thesis:
    "Azure 增长 43%、Microsoft Cloud 收入增长 27%，商业剩余履约义务达到 $678B，证明 AI 与云需求正在转化为收入和可见订单。GAAP EPS 同时受约 $3.2B Anthropic 投资收益影响，判断经营质量应优先看云收入、营业利润和订单，而不是只看 EPS。",
  metrics: [
    { label: "收入", value: "$90.0B", change: "同比 +18%", tone: "positive" },
    { label: "营业利润", value: "$40.6B", change: "同比 +18%", tone: "positive" },
    { label: "Azure", value: "+43%", change: "固定汇率 +42%", tone: "positive" },
    { label: "Microsoft Cloud", value: "$59.3B", change: "同比 +27%", tone: "positive" },
    { label: "商业 RPO", value: "$678B", change: "同比 +84%", tone: "positive" },
    { label: "GAAP EPS", value: "$4.81", change: "同比 +32%；含投资收益", tone: "neutral" },
  ],
  sections: [
    {
      title: "一、增长质量",
      lead: "云业务和订单同步增长，比单季 EPS 更能验证 AI 投入的商业回报。",
      points: [
        "Intelligent Cloud 收入 $39.3B、同比增长 32%；Azure 增长 43%，公司披露 Azure 年收入首次超过 $100B。",
        "Microsoft Cloud 收入 $59.3B、同比增长 27%；商业 RPO $678B、同比增长 84%，提高了未来收入可见度。",
        "Microsoft 365 Copilot 付费席位超过 3,000 万，AI 需求开始从算力消耗转向可观察的软件席位。",
      ],
    },
    {
      title: "二、利润需要怎样还原",
      lead: "核心经营增长强，但 GAAP 净利润并非全部来自主营业务。",
      points: [
        "GAAP 营业利润 $40.6B，同比增长 18%；GAAP 净利润 $35.77B，同比增长 31%。",
        "公司披露当季离散项目合计增加约 $0.27 每股收益，其中包括约 $3.2B Anthropic 投资收益。",
        "剔除指定离散项目后的非 GAAP EPS 为 $4.74、同比增长 23%，核心盈利仍强，但低于 GAAP 增速。",
      ],
    },
    {
      title: "三、结构分化与风险",
      lead: "AI 云业务掩盖了消费和游戏业务的疲弱。",
      points: [
        "Productivity and Business Processes 收入 $37.8B、增长 14%；More Personal Computing 收入 $12.9B、下降 4%。",
        "Xbox 内容与服务收入下降 10%，说明消费端并未同步受益于云与 AI 强势。",
        "未来估值取决于 Azure 增速、云利润率和资本开支折旧能否匹配，而不只是继续扩大投入。",
      ],
    },
  ],
  positives: ["Azure 与 Microsoft Cloud 同步加速。", "商业 RPO 增长 84%，订单可见度显著提高。", "Copilot 已形成可观察的付费席位规模。"],
  risks: ["资本开支、折旧与能源成本可能压低云利润率。", "投资收益会造成 GAAP EPS 波动。", "消费 PC 与 Xbox 业务仍弱。"],
  watchItems: ["Azure 增速能否维持 40%左右。", "云毛利率与资本开支/折旧节奏。", "RPO 转化为收入的速度。", "Copilot 付费席位与单位收入。"],
  sources: [
    { label: "SEC · Microsoft FY2026 Q4 earnings release", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm" },
  ],
  disclaimer: "本报告仅依据 Microsoft 提交 SEC 的官方财报材料。评分与判断属于模型分析，不构成投资建议；未披露项目不作推测。",
};

export const appleReport: EarningsReport = {
  ticker: "AAPL",
  company: "苹果",
  quarter: "2026 财年第三季度",
  publishedAt: "2026-07-30 美股盘后",
  verdict: "需求广泛回升，但利润率含一次性关税退款",
  score: 78,
  scoreLabel: "财报质量评分",
  thesis:
    "收入增长 16%，iPhone、Mac、服务和大中华区均有强劲表现，增长基础较广；但 50.1%的毛利率约受 2 个百分点关税退款支持，EPS 也获益 $0.11。下一季判断重点是剔除退款后的有机毛利率，以及内存和关税成本能否被产品组合与定价吸收。",
  metrics: [
    { label: "收入", value: "$109.42B", change: "同比 +16%", tone: "positive" },
    { label: "稀释 EPS", value: "$2.02", change: "同比 +29%；含 $0.11 退款", tone: "neutral" },
    { label: "iPhone", value: "$54.25B", change: "同比 +22%", tone: "positive" },
    { label: "服务", value: "$30.74B", change: "同比 +12%", tone: "positive" },
    { label: "大中华区", value: "$18.82B", change: "同比 +22%", tone: "positive" },
    { label: "毛利率", value: "50.1%", change: "约 +2ppt 来自关税退款", tone: "neutral" },
  ],
  sections: [
    {
      title: "一、需求是否真实改善",
      lead: "增长覆盖产品与地区，不是单一品类拉动。",
      points: [
        "iPhone 收入 $54.25B、同比增长约 22%；Mac 收入 $10.35B、增长约 29%。",
        "服务收入 $30.74B、增长约 12%；安装设备基数再创新高，为经常性收入提供基础。",
        "大中华区收入 $18.82B、同比增长约 22%，明显缓解此前最受关注的区域需求压力。",
      ],
    },
    {
      title: "二、利润率必须正常化观察",
      lead: "本季利润强，但一次性退款不可外推。",
      points: [
        "净利润 $29.79B，高于上年同期 $23.43B；稀释 EPS $2.02，同比增长 29%。",
        "公司明确披露关税退款为 EPS 增加 $0.11，并给毛利率带来约 2 个百分点有利影响。",
        "因此下一季度需把产品组合、定价与成本改善同一次性退款分开，不应直接年化本季 50.1%毛利率。",
      ],
    },
    {
      title: "三、后续矛盾",
      lead: "AI 产品执行与成本压力将接替本季退款成为定价主线。",
      points: [
        "iPad 收入 $6.19B、同比下降约 6%，是主要产品中唯一明显下滑项。",
        "官方已推出升级版 Siri AI 功能，但财报未单独披露 AI 收入，不能臆测其变现规模。",
        "内存成本、关税和新品定价将决定强劲收入能否继续转化为有机利润增长。",
      ],
    },
  ],
  positives: ["iPhone、Mac、服务与大中华区均实现双位数增长。", "安装设备基数创新高。", "资本开支远低于主要超大规模云厂商，现金流压力较小。"],
  risks: ["关税退款不可持续。", "内存与其他组件成本可能侵蚀毛利率。", "AI 功能的用户采用与商业化尚未单独披露。", "iPad 收入下滑。"],
  watchItems: ["剔除退款后的毛利率。", "服务收入增速与安装基数变现。", "大中华区和 iPhone 增速的延续性。", "Siri AI 功能的采用数据。"],
  sources: [
    { label: "SEC · Apple FY2026 Q3 earnings release", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm" },
  ],
  disclaimer: "本报告仅依据 Apple 提交 SEC 的官方财报材料。评分与判断属于模型分析，不构成投资建议；AI 收入等未披露数据不作推测。",
};

export const amazonReport: EarningsReport = {
  ticker: "AMZN",
  company: "亚马逊",
  quarter: "2026 年第二季度",
  publishedAt: "2026-07-30 美股盘后",
  verdict: "AWS 与经营利润强劲，但现金流和会计收益敲响警钟",
  score: 75,
  scoreLabel: "财报质量评分",
  thesis:
    "AWS 增长 37%、为 18 个季度最快，集团营业利润增长 43%，说明 AI 与云需求正在兑现；但过去 12 个月自由现金流由正转负，GAAP 净利润又主要受 $53.4B Anthropic 相关非经营收益推动。经营改善是真实的，报表净利润却不能直接代表可分配现金。",
  metrics: [
    { label: "净销售额", value: "$200.6B", change: "同比 +20%", tone: "positive" },
    { label: "营业利润", value: "$27.5B", change: "同比 +43%", tone: "positive" },
    { label: "AWS 销售额", value: "$42.2B", change: "同比 +37%", tone: "positive" },
    { label: "AWS 营业利润", value: "$16.6B", change: "上年 $10.2B", tone: "positive" },
    { label: "GAAP 净利润", value: "$62.6B", change: "含 $53.4B 非经营收益", tone: "neutral" },
    { label: "TTM 自由现金流", value: "−$7.6B", change: "上年 +$18.2B", tone: "negative" },
  ],
  sections: [
    {
      title: "一、经营增长来自哪里",
      lead: "云业务重新加速，同时零售三大区域均贡献增长。",
      points: [
        "AWS 销售额 $42.2B、增长 37%，为 18 个季度最快，并达到约 $169B 年化收入规模。",
        "北美销售额 $116.2B、增长 16%；国际销售额 $42.2B、增长 15%。",
        "集团营业利润 $27.5B，高于上年 $19.2B；AWS 营业利润 $16.6B，是最主要利润来源。",
      ],
    },
    {
      title: "二、为什么净利润不能直接看",
      lead: "GAAP EPS 的跃升主要不是主营经营利润形成。",
      points: [
        "GAAP 净利润 $62.6B、稀释 EPS $5.75，远高于上年 $18.2B和 $1.68。",
        "公司披露其他收入中包含约 $53.4B 税前收益，主要来自 Anthropic 投资估值变动。",
        "该收益可能随估值变化而反转；评价持续盈利能力应优先看营业利润和现金流。",
      ],
    },
    {
      title: "三、资本开支与现金流",
      lead: "AI 需求强，但为此付出的现金成本也在快速上升。",
      points: [
        "过去 12 个月经营现金流增长 33%至 $161.4B，但设备与物业购买增加约 $66.1B，主要用于 AI。",
        "TTM 自由现金流降至 −$7.6B，上年同期为 +$18.2B，资本开支已吞噬经营现金改善。",
        "Q3 指引为销售额 $197B—$202B、营业利润 $22.5B—$26.5B；指引中值与现金流兑现需同步验证。",
      ],
    },
  ],
  positives: ["AWS 增长 37%，为 18 个季度最快。", "集团营业利润增长 43%。", "北美、国际和 AWS 三大分部销售均实现双位数增长。"],
  risks: ["TTM 自由现金流转为负值。", "GAAP 净利润主要受 Anthropic 估值收益推动。", "AI、能源、内存与物流资本开支回报存在时滞。", "投资估值变动可能造成净利润高波动。"],
  watchItems: ["AWS 增速能否保持 35%以上。", "资本开支和 TTM 自由现金流何时改善。", "AWS 营业利润率。", "Q3 指引中值与零售利润率。"],
  sources: [
    { label: "SEC · Amazon Q2 2026 earnings release", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm" },
  ],
  disclaimer: "本报告仅依据 Amazon 提交 SEC 的官方财报材料。评分与判断属于模型分析，不构成投资建议；未披露项目不作推测。",
};
