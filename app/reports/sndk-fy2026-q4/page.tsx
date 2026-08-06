import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { sandiskReport } from "../report-data";

export const metadata: Metadata = {
  title: "SNDK FY2026 Q4 财报深度分析｜华尔街晨报",
  description: "从 NAND 定价、数据中心增长、利润质量、现金流与资本配置拆解 SanDisk 2026 财年第四季度财报。",
};

export default function SandiskReportPage() {
  return <EarningsAnalysis report={sandiskReport} />;
}
