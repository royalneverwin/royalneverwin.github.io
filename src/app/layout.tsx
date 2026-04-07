import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "王新昊 | 3D 感知与模型效率",
  description: "王新昊的个人网站，聚焦自动驾驶三维感知、模型量化、知识蒸馏、模型剪枝与工程化落地。",
  keywords: "王新昊, 3D感知, 自动驾驶, 模型量化, 知识蒸馏, TensorRT, 北京大学",
  authors: [{ name: "王新昊" }],
  openGraph: {
    title: "王新昊 | 3D 感知与模型效率",
    description: "自动驾驶三维感知、模型压缩与工程化部署相关的个人主页与博客。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
