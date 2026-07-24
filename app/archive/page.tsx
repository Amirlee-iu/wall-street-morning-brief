import type { Metadata } from "next";
import { archivedIssues } from "./archive-data";

export const metadata: Metadata = {
  title: "往期归档｜华尔街晨报",
  description: "按日期回看华尔街晨报的盘后总结与盘前展望。",
};

export default function ArchivePage() {
  return (
    <main className="archive-shell">
      <nav className="archive-nav">
        <a href="/">← 返回最新一期</a>
        <span>WALL STREET DAILY BRIEF</span>
      </nav>
      <header className="archive-hero">
        <p className="eyebrow">PERMANENT EDITION ARCHIVE</p>
        <h1>往期归档</h1>
        <p>每次更新都会保留一份完整、不可变的报纸快照，可按日期回看当时的行情、事件、新闻与判断。</p>
      </header>
      <section className="archive-list" aria-label="华尔街晨报往期列表">
        {archivedIssues.map((issue) => (
          <a className="archive-card" href={issue.href} key={issue.id}>
            <div className="archive-date">
              <strong>{issue.publishedAt.slice(5, 10).replace("-", ".")}</strong>
              <span>{issue.publishedAt.slice(0, 4)}</span>
            </div>
            <div className="archive-copy">
              <div><span>{issue.edition}</span><b>{issue.issue}</b></div>
              <h2>{issue.title}</h2>
              <p>{issue.summary}</p>
            </div>
            <div className="archive-stance">
              <small>当期判断</small>
              <strong>{issue.stance}</strong>
              <span>阅读整期 →</span>
            </div>
          </a>
        ))}
      </section>
      <p className="archive-note">归档自 2026-07-24 起建立；更早期数没有完整快照，因此不做推测性补录。</p>
    </main>
  );
}
