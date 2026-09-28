import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Get access to hundreds of courses available",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
