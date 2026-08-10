export const dynamic = "force-static";

import type { Metadata } from "next";
import { EarningsAnalysis } from "../EarningsAnalysis";
import { microsoftReport } from "../report-data";

export const metadata: Metadata = {
  title: "MSFT FY2026 Q4 财报深度分析｜华尔街晨报",
  description: "从 Azure、商业订单、利润质量与 AI 资本回报拆解 Microsoft 2026 财年第四季度财报。",
};

export default function MicrosoftReportPage() {
  return <EarningsAnalysis report={microsoftReport} />;
}
