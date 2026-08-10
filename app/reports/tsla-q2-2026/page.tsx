export const dynamic = "force-static";

import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { teslaReport } from "../report-data";

export const metadata: Metadata = {
  title: "TSLA 2026 Q2 财报深度分析｜华尔街晨报",
  description: "从收入结构、利润质量、资本开支与自由现金流拆解 Tesla 2026 年第二季度财报。",
};

export default function TeslaReportPage() {
  return <EarningsAnalysis report={teslaReport} />;
}
