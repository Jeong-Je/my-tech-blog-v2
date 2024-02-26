import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from "@/components/layouts/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeong Tech Blog 🔥",
  description: "공부한 내용을 정리하는 개인 블로그입니다.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div>
            <header>
              <Nav />
            </header>
            <main>{children}</main>
          </div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
