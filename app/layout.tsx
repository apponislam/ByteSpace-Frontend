import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
    themeColor: "#0052FE",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://bytespace-frontend-indol.vercel.app"),
    title: {
        default: "ByteSpace — Modern E-Learning & Digital Course Platform",
        template: "%s | ByteSpace",
    },
    description: "Unlock your creativity and level up your skills with hundreds of interactive online courses in UI/UX design, web development, marketing, and business taught by top industry creators.",
    applicationName: "ByteSpace",
    authors: [{ name: "ByteSpace Team", url: "https://bytespace-frontend-indol.vercel.app" }],
    generator: "Next.js",
    keywords: ["ByteSpace", "e-learning", "online courses", "UI/UX design courses", "web development", "Figma tutorials", "digital marketing", "creators marketplace", "learn to code", "digital skills", "tech education"],
    referrer: "origin-when-cross-origin",
    creator: "ByteSpace",
    publisher: "ByteSpace",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "ByteSpace — Modern E-Learning & Digital Course Platform",
        description: "Unlock your creativity, gain valuable knowledge, and grow your career with our curated selection of interactive courses.",
        url: "https://bytespace-frontend-indol.vercel.app",
        siteName: "ByteSpace",
        images: [
            {
                url: "/home/Hero/left1.png",
                width: 1200,
                height: 630,
                alt: "ByteSpace - Level Up Your Skills",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ByteSpace — Modern E-Learning & Digital Course Platform",
        description: "Unlock your creativity, gain valuable knowledge, and grow your career with our curated selection of interactive courses.",
        images: ["/home/Hero/left1.png"],
        creator: "@bytespace",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.svg",
    },
    category: "education",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${poppins.className} ${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col font-sans" cz-shortcut-listen="true">
                {children}
            </body>
        </html>
    );
}
