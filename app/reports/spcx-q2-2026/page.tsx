import { EarningsAnalysis } from "../EarningsAnalysis";
import { spacexReport } from "../report-data";

export default function SpaceXQ22026ReportPage() {
  return <EarningsAnalysis report={spacexReport} />;
}
