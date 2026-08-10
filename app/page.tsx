export const dynamic = "force-static";

import type { Metadata } from "next";
import { MarketBriefing } from "./MarketBriefing";

export const metadata: Metadata = {
  title: "华尔街晨报｜美股决策驾驶舱",
  description: "聚合美股宏观事件、财报、自选股新闻与跨资产风险信号的中文晨报。",
};

export default function Home() {
  return <MarketBriefing />;
}
