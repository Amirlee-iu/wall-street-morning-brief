import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { metaReport } from "../report-data";

export const metadata: Metadata = {
  title: "Meta 2026 Q2 财报深度分析｜华尔街晨报",
  description: "拆解 Meta 广告增长、法律费用、AI 资本开支、自由现金流与下一季指引。",
};

export default function MetaReportPage() {
  return <EarningsAnalysis report={metaReport} />;
}
