"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const column1 = [
        { name: "Featured Courses", href: "/courses" },
        { name: "Featured Categories", href: "/categories" },
        { name: "Business", href: "/categories/business" },
        { name: "IT", href: "/categories/it" },
        { name: "Design", href: "/categories/design" },
    ];

    const column2 = [
        { name: "Development", href: "/categories/development" },
        { name: "Marketing", href: "/categories/marketing" },
        { name: "Photography", href: "/categories/photography" },
        { name: "Finance", href: "/categories/finance" },
        { name: "Sport", href: "/categories/sport" },
    ];

    const column3 = [
        { name: "Become a Creator", href: "/creators/apply" },
        { name: "Affiliate Program", href: "/affiliate" },
        { name: "Contact", href: "/contact" },
        { name: "Help", href: "/help" },
        { name: "About", href: "/about" },
    ];

    return (
        <footer className="w-full bg-white pt-16 pb-12 font-satoshi font-normal">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                    <div className="flex flex-col">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <Image src="/logo.svg" alt="ByteSpace Logo" width={32} height={32} className="h-8 w-auto object-contain" />
                            <span className="font-clash font-bold text-2xl tracking-tight text-black">ByteSpace</span>
                        </Link>

                        <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">Stay Up to date with our latest features and releases by joining our newsletter.</p>

                        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <input type="email" placeholder="Enter your email" required className="w-full sm:w-[320px] px-5 py-3 rounded-full border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors font-normal" />
                            <button type="submit" className="rounded-full bg-[#D4FB20] text-black font-normal px-8 py-3 text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-sm cursor-pointer">
                                Search
                            </button>
                        </form>

                        <p className="mt-4 text-xs text-zinc-500 leading-normal font-normal">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 pt-2">
                        <div className="flex flex-col gap-4">
                            {column1.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm text-zinc-600 hover:text-black transition-colors font-normal">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            {column2.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm text-zinc-600 hover:text-black transition-colors font-normal">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            {column3.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm text-zinc-600 hover:text-black transition-colors font-normal">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 mt-16 mb-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-normal">
                    <p>© 2023 ByteSpace All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-black transition-colors font-normal">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-black transition-colors font-normal">
                            Terms of Service
                        </Link>
                        <button
                            type="button"
                            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new Event("open-cookie-settings"))}
                            className="hover:text-black transition-colors cursor-pointer font-normal"
                        >
                            Cookies Settings
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
