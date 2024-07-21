import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  variable: '--font-fira-code',
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
