import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { appleReport } from "../report-data";

export const metadata: Metadata = {
  title: "AAPL FY2026 Q3 财报深度分析｜华尔街晨报",
  description: "从产品结构、服务、大中华区与关税退款拆解 Apple 2026 财年第三季度财报。",
};

export default function AppleReportPage() {
  return <EarningsAnalysis report={appleReport} />;
}
