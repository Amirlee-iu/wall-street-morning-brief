import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "华尔街晨报｜美股决策驾驶舱",
  description: "前一交易日、今天与未来 7 天的美股宏观事件、财报和自选股情报。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
