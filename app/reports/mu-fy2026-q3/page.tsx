import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { micronReport } from "../report-data";

export const metadata: Metadata = { title: "MU FY2026 Q3 财报深度分析｜华尔街晨报", description: "拆解 Micron 存储景气、现金流、资本开支与周期风险。" };
export default function MicronReportPage() { return <EarningsAnalysis report={micronReport} />; }
