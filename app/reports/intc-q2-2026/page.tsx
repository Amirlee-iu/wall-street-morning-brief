import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { intelReport } from "../report-data";

export const metadata: Metadata = {
  title: "INTC 2026 Q2 财报深度分析｜华尔街晨报",
  description: "拆解 Intel 2026 年第二季度的经营修复、会计口径、现金流和 Foundry 风险。",
};

export default function IntelReportPage() {
  return <EarningsAnalysis report={intelReport} />;
}
