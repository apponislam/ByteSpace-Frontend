import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clashdisplay/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/clashdisplay/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/clashdisplay/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clashdisplay/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
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
      className={`${poppins.className} ${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
