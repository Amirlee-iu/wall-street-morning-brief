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
  assert.match(html, /exhibit991\.htm/);
  assert.match(html, /q226earningsrelease\.htm/);
  assert.match(html, /U\.S\. Census \/ HUD/);
  assert.match(html, /美伊连续第二日暂停攻击/);
  assert.match(html, /影响路径/);
});

test("renders detailed earnings analysis from official filings", async () => {
  const [tesla, intel] = await Promise.all([
    render("/reports/tsla-q2-2026"),
    render("/reports/intc-q2-2026"),
  ]);
  const teslaHtml = await tesla.text();
  const intelHtml = await intel.text();

  assert.match(teslaHtml, /收入强，盈利质量弱/);
  assert.match(teslaHtml, /Tesla 2026 Q2 Form 10-Q/);
  assert.match(intelHtml, /经营修复强劲/);
  assert.match(intelHtml, /Intel Q2 earnings release/);
});

test("renders the issue archive and immutable issue page", async () => {
  const archive = await render("/archive");
  const [issue, latestIssue] = await Promise.all([
    render("/issues/2026-07-24-am"),
    render("/issues/2026-07-27-am"),
  ]);
  const archiveHtml = await archive.text();
  const issueHtml = await issue.text();
  const latestIssueHtml = await latestIssue.text();

  assert.match(archiveHtml, /往期归档/);
  assert.match(archiveHtml, /2026-07-24-am/);
  assert.match(archiveHtml, /2026-07-27-am/);
  assert.match(issueHtml, /存档版 · 第 001 期/);
  assert.match(issueHtml, /国际重磅新闻/);
  assert.match(latestIssueHtml, /存档版 · 第 002 期/);
  assert.match(latestIssueHtml, /美国 6 月耐用品订单/);
});
