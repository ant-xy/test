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
      {/* <div class="absolute bottom-10 z-0 w-1/12 bg-fixed bg-gradient-to-b from-fuchsia-400 to-blue-700 rounded-full aspect-square"></div> */}
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
