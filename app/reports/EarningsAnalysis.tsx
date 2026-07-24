import type { EarningsReport } from "./report-data";

export function EarningsAnalysis({ report }: { report: EarningsReport }) {
  return (
    <main className="analysis-shell">
      <nav className="analysis-nav">
        <a href="/">← 返回最新晨报</a>
        <a href="/archive">往期归档</a>
      </nav>

      <header className="analysis-hero">
        <div>
          <p className="eyebrow">EARNINGS INTELLIGENCE · MODEL ANALYSIS</p>
          <div className="analysis-title-row">
            <span>{report.ticker}</span>
            <h1>{report.company}财报分析</h1>
          </div>
          <p className="analysis-period">{report.quarter} · {report.publishedAt}</p>
          <h2>{report.verdict}</h2>
          <p>{report.thesis}</p>
        </div>
        <div className="analysis-score">
          <small>{report.scoreLabel}</small>
          <strong>{report.score}</strong>
          <span>/ 100</span>
          <i><b style={{ width: `${report.score}%` }} /></i>
        </div>
      </header>

      <section className="analysis-metrics" aria-label="核心财务指标">
        {report.metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small className={metric.tone}>{metric.change}</small>
          </article>
        ))}
      </section>

      <div className="analysis-body">
        <section className="analysis-sections">
          {report.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p className="analysis-lead">{section.lead}</p>
              <ul>
                {section.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <aside className="analysis-rail">
          <section>
            <h2>积极信号</h2>
            <ul className="positive-list">
              {report.positives.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h2>核心风险</h2>
            <ul className="risk-list">
              {report.risks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h2>下季验证清单</h2>
            <ol>
              {report.watchItems.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>
        </aside>
      </div>

      <footer className="analysis-footer">
        <div>
          <b>原始资料</b>
          {report.sources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>
          ))}
        </div>
        <p>{report.disclaimer}</p>
      </footer>
    </main>
  );
}
