import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { amazonReport } from "../report-data";

export const metadata: Metadata = {
  title: "AMZN 2026 Q2 财报深度分析｜华尔街晨报",
  description: "从 AWS、营业利润、Anthropic 投资收益与自由现金流拆解 Amazon 2026 年第二季度财报。",
};

export default function AmazonReportPage() {
  return <EarningsAnalysis report={amazonReport} />;
}
