export const dynamic = "force-static";

import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { amdReport } from "../report-data";

export const metadata: Metadata = { title: "AMD 2026 Q2 财报深度分析｜华尔街晨报", description: "拆解 AMD 数据中心增长、毛利率、AI 系统交付与下一季指引。" };
export default function AmdReportPage() { return <EarningsAnalysis report={amdReport} />; }
