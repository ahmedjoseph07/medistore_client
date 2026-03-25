import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Medistore",
  description: "A OTC Medicine Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
