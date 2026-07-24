import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /exhibit991\.htm/);
  assert.match(html, /q226earningsrelease\.htm/);
  assert.match(html, /European Central Bank/);
  assert.match(html, /Reuters via CNA/);
  assert.match(html, /影响路径/);
});
