"use client";

import { useMemo, useRef, useState } from "react";
import * as currentIssueData from "./market-data";
import type { EventWindow } from "./market-data";
import { sitePath } from "./site-path";

export type MarketIssueData = Pick<
  typeof currentIssueData,
  "briefing" | "earnings" | "events" | "internationalNews" | "markets" | "signals" | "sources" | "stockNews" | "watchlist"
> & Partial<Pick<typeof currentIssueData, "fedPolicy">>;

const windows: { id: "all" | EventWindow; label: string }[] = [
  { id: "all", label: "总览" },
  { id: "previous", label: "前一交易日" },
  { id: "today", label: "今天" },
  { id: "future", label: "未来 7 天" },
];

const windowMeta: Record<EventWindow, { title: string; date: string }> = {
  previous: { title: "前一交易日", date: "周四 · 08/06" },
  today: { title: "今天", date: "周五 · 08/07" },
  future: { title: "未来 7 天", date: "08/08—08/14" },
};

const MOBILE_EXPORT_WIDTH = 540;

export function MarketBriefing({
  data = currentIssueData,
  issueLabel = "第 013 期",
}: {
  data?: MarketIssueData;
  issueLabel?: string;
}) {
  const paperRef = useRef<HTMLElement>(null);
  const { briefing, earnings, events, fedPolicy, internationalNews, markets, signals, sources, stockNews, watchlist } = data;
  const [activeWindow, setActiveWindow] = useState<"all" | EventWindow>("all");
  const [query, setQuery] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  const visibleNews = useMemo(() => {
    const normalized = query.trim().toUpperCase();
    if (!normalized) return stockNews;
    return stockNews.filter((item) => `${item.ticker} ${item.title} ${item.detail}`.toUpperCase().includes(normalized));
  }, [query, stockNews]);

  const activeWindows: EventWindow[] = activeWindow === "all" ? ["previous", "today", "future"] : [activeWindow];

  const showActionMessage = (message: string) => {
    setActionMessage(message);
    window.setTimeout(() => setActionMessage(""), 2400);
  };

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `华尔街晨报 · ${issueLabel}`,
          text: briefing.headline,
          url,
        });
        showActionMessage("已打开转发菜单");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        showActionMessage("链接已复制");
      } else {
        showActionMessage("请复制浏览器地址转发");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      showActionMessage("转发失败，请稍后重试");
    }
  };

  const handleExport = async () => {
    if (!paperRef.current || isExporting) return;

    setIsExporting(true);
    setActionMessage("正在生成手机长图…");

    const paper = paperRef.current;
    const previousExportMode = paper.dataset.exportMode;

    try {
      const { toBlob } = await import("html-to-image");
      paper.dataset.exportMode = "mobile";
      await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));

      const exportHeight = Math.ceil(paper.scrollHeight);
      const imageBlob = await toBlob(paper, {
        backgroundColor: "#f3efe4",
        cacheBust: true,
        width: MOBILE_EXPORT_WIDTH,
        height: exportHeight,
        pixelRatio: 2,
        style: {
          width: `${MOBILE_EXPORT_WIDTH}px`,
          height: `${exportHeight}px`,
          maxWidth: "none",
          margin: "0",
          overflow: "visible",
        },
        filter: (node) =>
          !(node instanceof HTMLElement && node.dataset.exportIgnore === "true"),
      });
      if (!imageBlob) throw new Error("Unable to create image");

      const link = document.createElement("a");
      const issueDate = briefing.updatedAt.slice(0, 10).replaceAll("/", "-");
      link.download = `wall-street-brief-${issueDate}-${issueLabel.replace(/\s/g, "")}.png`;
      link.href = URL.createObjectURL(imageBlob);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      showActionMessage("1080px 手机长图已导出");
    } catch {
      showActionMessage("导出失败，请刷新后重试");
    } finally {
      if (previousExportMode) paper.dataset.exportMode = previousExportMode;
      else delete paper.dataset.exportMode;
      setIsExporting(false);
    }
  };

  return (
    <main className="newspaper-shell" ref={paperRef}>
      <header className="masthead">
        <div className="masthead-topline">
          <span>WALL STREET DAILY BRIEF</span>
          <span>北京时间 · {briefing.updatedAt}</span>
          <div className="edition-links">
            <div className="edition-meta"><a href={sitePath("/archive")}>往期归档</a><span>{issueLabel}</span></div>
            <div className="masthead-actions" data-export-ignore="true">
              <button className="action-button" type="button" onClick={handleShare}>转发 ↗</button>
              <button className="action-button" type="button" onClick={handleExport} disabled={isExporting}>
                {isExporting ? "生成中…" : "导出手机长图 ↓"}
              </button>
              {actionMessage && <span className="action-feedback" role="status" aria-live="polite">{actionMessage}</span>}
            </div>
          </div>
        </div>
        <div className="masthead-grid">
          <div>
            <p className="eyebrow">{briefing.edition} · MARKET INTELLIGENCE</p>
            <h1>华尔街晨报</h1>
            <p className="deck">{briefing.headline}</p>
            <p className="summary">{briefing.summary}</p>
          </div>
          <div className="stance-block">
            <p>今日市场判断</p>
            <strong>{briefing.stance}</strong>
            <div className="score-row"><span>{briefing.score}</span><small>/ 100 · 风险偏好</small></div>
            <div className="score-track" aria-label={`风险偏好 ${briefing.score} 分`}><i style={{ width: `${briefing.score}%` }} /></div>
            <p className="fineprint">下次更新 {briefing.nextUpdate}</p>
          </div>
        </div>
      </header>

      <section className="market-board" aria-label="跨资产前一日收盘表现">
        <header className="market-board-heading">
          <div><h2>跨资产收盘</h2><p>前一交易日收盘价与区间表现</p></div>
          <div><b>数据核对至 {markets[0].checkedAt}</b><span>涨跌均为收盘至收盘；10Y 美债按基点</span></div>
        </header>
        <div className="market-grid">
        {markets.map((market) => (
          <article className="market-card" key={market.name}>
            <div className="market-title"><b>{market.name}</b><strong>{market.close}</strong></div>
            <p className={`market-summary ${market.tone}`}>{market.summary}</p>
            <dl className="return-row">
              <div><dt>前一日</dt><dd className={market.day.startsWith("+") ? "positive" : market.day.startsWith("−") ? "negative" : ""}>{market.day}</dd></div>
              <div><dt>过去一周</dt><dd className={market.week.startsWith("+") ? "positive" : market.week.startsWith("−") ? "negative" : ""}>{market.week}</dd></div>
              <div><dt>过去一月</dt><dd className={market.month.startsWith("+") ? "positive" : market.month.startsWith("−") ? "negative" : ""}>{market.month}</dd></div>
            </dl>
            <div className="market-meta"><span>{market.session}</span><span>核对 {market.checkedAt}</span></div>
            <div className="market-source">
              <a href={market.source} target="_blank" rel="noreferrer">{market.sourceLabel} ↗</a>
              {"contextSource" in market && market.contextSource && <a href={market.contextSource} target="_blank" rel="noreferrer">汇通财经解读 ↗</a>}
            </div>
          </article>
        ))}
        </div>
      </section>

      <nav className="section-tabs" aria-label="事件时间范围">
        {windows.map((item) => (
          <button key={item.id} className={activeWindow === item.id ? "active" : ""} onClick={() => setActiveWindow(item.id)}>
            {item.label}
          </button>
        ))}
        <span className="live-dot">已核对公开来源</span>
      </nav>

      <div className="main-grid">
        <section className={`timeline-grid ${activeWindows.length === 1 ? "single" : ""}`} aria-label="重要事件时间轴">
          {activeWindows.map((window) => (
            <article className="timeline-column" key={window}>
              <header><h2>{windowMeta[window].title}</h2><time>{briefing.windowDates?.[window] ?? windowMeta[window].date}</time></header>
              {events.filter((event) => event.window === window).map((event) => (
                <div className={`event ${event.impact === "高" ? "high" : ""}`} key={`${event.time}-${event.title}`}>
                  <div className="event-time">{event.time}</div>
                  <div>
                    <p className="event-kicker"><span>{event.category}</span> · {event.impact}影响</p>
                    <h3>{event.title}</h3>
                    <p>{event.detail}</p>
                    <a href={event.source} target="_blank" rel="noreferrer">{event.sourceLabel} ↗</a>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </section>

        <aside className="right-rail">
          <section className="rail-section">
            <div className="section-heading"><h2>财报时间线</h2><span>北京时间</span></div>
            <div className="earnings-list">
              {earnings.map((item) => (
                <div className="earning" key={item.ticker}>
                  <b>{item.ticker}</b>
                  <div><strong>{item.company}</strong><p>{item.focus}</p></div>
                  <div className="earning-meta">
                    <time>{item.date}</time>
                    <span>{item.status}</span>
                    {"reportUrl" in item && item.reportUrl && (
                      <a href={item.reportUrl} target="_blank" rel="noreferrer">直达财报 ↗</a>
                    )}
                    {"analysisUrl" in item && item.analysisUrl && (
                      <a className="analysis-link" href={sitePath(item.analysisUrl)}>财报分析 →</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </aside>
      </div>

      <section className="stock-news-section" aria-label="自选股要闻">
        <div className="stock-news-heading">
          <div>
            <p className="eyebrow">WATCHLIST NEWS</p>
            <h2>自选股要闻</h2>
          </div>
          <div className="stock-news-tools">
            <span>{visibleNews.length} 条更新</span>
            <label className="search-field stock-search">
              <span className="sr-only">筛选自选股新闻</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="输入代码筛选，例如 MU" />
            </label>
          </div>
        </div>
        <div className="stock-news-grid">
          {visibleNews.map((item) => (
            <article className="stock-news-card" key={`${item.ticker}-${item.title}`}>
              <span className="ticker-tag">{item.ticker}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href={item.source} target="_blank" rel="noreferrer">{item.label} · 英文原文 ↗</a>
            </article>
          ))}
          {visibleNews.length === 0 && <p className="empty">本期没有匹配的高重要度更新。</p>}
        </div>
      </section>

      <section className="international-section" aria-label="国际重磅新闻">
        <div className="international-heading">
          <div>
            <p className="eyebrow">GLOBAL MARKET MOVERS</p>
            <h2>国际重磅新闻</h2>
          </div>
          <p>前一日发生 · 只收录可能改变市场定价的重要事件</p>
        </div>
        <div className="international-grid">
          {internationalNews.map((item, index) => (
            <article key={`${item.category}-${item.title}`}>
              <div className="international-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="international-meta">
                <span>{item.category}</span>
                <time>{item.date}</time>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="international-impact"><b>影响路径</b>{item.impact}</div>
              <a href={item.source} target="_blank" rel="noreferrer">{item.sourceLabel} · 英文原文 ↗</a>
            </article>
          ))}
        </div>
      </section>

      {fedPolicy && (
        <section className="fed-policy-section" aria-label="美联储政策雷达">
          <div className="fed-policy-heading">
            <div>
              <p className="eyebrow">FED POLICY RADAR</p>
              <h2>美联储政策雷达</h2>
            </div>
            <div className="fed-policy-status">
              <span>当前联邦基金利率</span>
              <strong>{fedPolicy.currentRange}</strong>
              <b>{fedPolicy.bias}</b>
            </div>
          </div>
          <p className="fed-policy-summary">{fedPolicy.summary}</p>
          <div className="fed-driver-grid">
            {fedPolicy.drivers.map((driver) => (
              <article key={`${driver.direction}-${driver.title}`} className={`fed-driver ${driver.direction}`}>
                <div><span>{driver.directionLabel}</span><b>{driver.signal}</b></div>
                <h3>{driver.title}</h3>
                <p>{driver.detail}</p>
                <a href={driver.source} target="_blank" rel="noreferrer">{driver.sourceLabel} ↗</a>
              </article>
            ))}
          </div>
          <div className="fed-catalysts">
            <div className="section-heading"><h2>未来政策催化剂</h2><span>下一次 FOMC：{fedPolicy.nextMeeting}</span></div>
            {fedPolicy.catalysts.map((item) => (
              <article key={`${item.date}-${item.event}`}>
                <time>{item.date}</time>
                <div><h3>{item.event}</h3><p>{item.detail}</p></div>
                <dl><div><dt>偏鹰条件</dt><dd>{item.hawkish}</dd></div><div><dt>偏鸽条件</dt><dd>{item.dovish}</dd></div></dl>
                <a href={item.source} target="_blank" rel="noreferrer">{item.sourceLabel} ↗</a>
              </article>
            ))}
          </div>
          <p className="fed-policy-note">核对时间：{fedPolicy.checkedAt}。政策方向为模型基于官方公开资料的情景判断，不代表美联储承诺，也不使用未经核验的市场概率替代官方信息。</p>
        </section>
      )}

      <section className="secondary-grid">
        <article>
          <div className="section-heading"><h2>关注清单</h2><span>{watchlist.length} 个标的</span></div>
          <div className="watchlist">{watchlist.map((ticker) => <span key={ticker}>{ticker}</span>)}</div>
          <p className="note">后续新增代码会自动进入新闻、财报、评级与期权监测范围。</p>
        </article>
        <article>
          <div className="section-heading"><h2>期权异动</h2><span>谨慎解读</span></div>
          {signals.options.map((item) => <p className="signal" key={item.ticker}><b>{item.ticker}</b>{item.text}</p>)}
        </article>
        <article>
          <div className="section-heading"><h2>机构评级</h2><span>只收录可验证更新</span></div>
          {signals.ratings.map((item) => <p className="signal" key={item.ticker}><b>{item.ticker}</b>{item.text}</p>)}
        </article>
      </section>

      <footer>
        <div>
          <b>来源索引</b>
          {sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label}</a>)}
        </div>
        <p>{briefing.inference}</p>
      </footer>
    </main>
  );
}
