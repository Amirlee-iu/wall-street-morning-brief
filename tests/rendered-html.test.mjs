import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Wall Street briefing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>华尔街晨报｜美股决策驾驶舱<\/title>/);
  assert.match(html, /跨资产收盘/);
  assert.match(html, /财报时间线/);
  assert.match(html, /国际重磅新闻/);
});

test("renders verified earnings links and international sources", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /直达财报/);
  assert.match(html, /财报分析/);
  assert.match(html, /往期归档/);
  assert.match(html, /msft-ex99_1\.htm/);
  assert.match(html, /a8-kex991q3202606272026\.htm/);
  assert.match(html, /amzn-20260630xex991\.htm/);
  assert.match(html, /7 月 ISM 制造业 PMI 升至 55\.6/);
  assert.match(html, /美伊重启谈判/);
  assert.match(html, /影响路径/);
  assert.match(html, /08\/05 04:30/);
  assert.match(html, /油价急跌释放估值压力/);
});

test("renders detailed earnings analysis from official filings", async () => {
  const [tesla, intel, microsoft, apple, amazon] = await Promise.all([
    render("/reports/tsla-q2-2026"),
    render("/reports/intc-q2-2026"),
    render("/reports/msft-fy2026-q4"),
    render("/reports/aapl-fy2026-q3"),
    render("/reports/amzn-q2-2026"),
  ]);
  const teslaHtml = await tesla.text();
  const intelHtml = await intel.text();
  const microsoftHtml = await microsoft.text();
  const appleHtml = await apple.text();
  const amazonHtml = await amazon.text();

  assert.match(teslaHtml, /收入强，盈利质量弱/);
  assert.match(teslaHtml, /Tesla 2026 Q2 Form 10-Q/);
  assert.match(intelHtml, /经营修复强劲/);
  assert.match(intelHtml, /Intel Q2 earnings release/);
  assert.match(microsoftHtml, /云与订单双强/);
  assert.match(microsoftHtml, /Microsoft FY2026 Q4 earnings release/);
  assert.match(appleHtml, /利润率含一次性关税退款/);
  assert.match(appleHtml, /Apple FY2026 Q3 earnings release/);
  assert.match(amazonHtml, /现金流和会计收益敲响警钟/);
  assert.match(amazonHtml, /Amazon Q2 2026 earnings release/);
});

test("renders the issue archive and immutable issue page", async () => {
  const archive = await render("/archive");
  const [issue, secondIssue, thirdIssue, morningIssue, fifthIssue, latestIssue] = await Promise.all([
    render("/issues/2026-07-24-am"),
    render("/issues/2026-07-27-am"),
    render("/issues/2026-07-29-am"),
    render("/issues/2026-07-31-am"),
    render("/issues/2026-07-31-pm"),
    render("/issues/2026-08-04-am"),
  ]);
  const archiveHtml = await archive.text();
  const issueHtml = await issue.text();
  const secondIssueHtml = await secondIssue.text();
  const thirdIssueHtml = await thirdIssue.text();
  const morningIssueHtml = await morningIssue.text();
  const fifthIssueHtml = await fifthIssue.text();
  const latestIssueHtml = await latestIssue.text();

  assert.match(archiveHtml, /往期归档/);
  assert.match(archiveHtml, /2026-07-24-am/);
  assert.match(archiveHtml, /2026-07-27-am/);
  assert.match(archiveHtml, /2026-07-29-am/);
  assert.match(archiveHtml, /2026-07-31-am/);
  assert.match(archiveHtml, /2026-07-31-pm/);
  assert.match(archiveHtml, /2026-08-04-am/);
  assert.match(issueHtml, /存档版 · 第 001 期/);
  assert.match(issueHtml, /国际重磅新闻/);
  assert.match(secondIssueHtml, /存档版 · 第 002 期/);
  assert.match(secondIssueHtml, /美国 6 月耐用品订单/);
  assert.match(thirdIssueHtml, /存档版 · 第 003 期/);
  assert.match(thirdIssueHtml, /FOMC 第二日会议/);
  assert.match(morningIssueHtml, /存档版 · 第 004 期/);
  assert.match(morningIssueHtml, /就业成本指数/);
  assert.match(fifthIssueHtml, /存档版 · 第 005 期/);
  assert.match(fifthIssueHtml, /芝加哥商业景气指数/);
  assert.match(latestIssueHtml, /存档版 · 第 006 期/);
  assert.match(latestIssueHtml, /SpaceX 上市后首份财报电话会/);
});
