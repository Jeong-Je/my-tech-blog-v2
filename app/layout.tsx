import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeong Tech Blog 🔥",
  description: "공부한 내용을 정리하는 개인 블로그입니다.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="kr">
      <body
        className={`mx-auto antialiased min-h-screen max-lg:mx-5 bg-light-bg dark:bg-zinc-800 text-slate-900 dark:text-slate-50 ${space_grotesk.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div>
            <header>
              <Nav />
            </header>
            <main className="">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
