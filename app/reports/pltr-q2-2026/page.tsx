import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { palantirReport } from "../report-data";

export const metadata: Metadata = { title: "PLTR 2026 Q2 财报深度分析｜华尔街晨报", description: "拆解 Palantir 商业与政府业务增长、现金流、指引与估值风险。" };
export default function PalantirReportPage() { return <EarningsAnalysis report={palantirReport} />; }
