export const dynamic = "force-static";

import type { Metadata } from "next";
import { MarketBriefing, type MarketIssueData } from "../../MarketBriefing";
import * as snapshotIssue from "./snapshot-data";

export const metadata: Metadata = {
  title: "华尔街晨报｜2026-08-05 盘后版",
  description: "华尔街晨报第 007 期完整存档。",
};

export default function ArchivedIssuePage() {
  return (
    <MarketBriefing
      data={snapshotIssue as MarketIssueData}
      issueLabel="存档版 · 第 007 期"
    />
  );
}
