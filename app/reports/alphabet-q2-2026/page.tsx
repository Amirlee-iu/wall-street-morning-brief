import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { alphabetReport } from "../report-data";

export const metadata: Metadata = {
  title: "Alphabet 2026 Q2 财报深度分析｜华尔街晨报",
  description: "拆解 Alphabet 搜索、Google Cloud、投资收益、AI 资本开支与自由现金流。",
};

export default function AlphabetReportPage() {
  return <EarningsAnalysis report={alphabetReport} />;
}
