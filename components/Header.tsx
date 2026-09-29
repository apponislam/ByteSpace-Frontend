"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Creators", href: "/creators" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled || mobileMenuOpen ? "bg-[#0047FF]/85 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,15,80,0.3)] border-b border-white/15 h-16 sm:h-20 md:h-22" : "bg-transparent border-b border-transparent h-20 sm:h-24 md:h-30"}`}
        >
            <div className="container mx-auto h-full px-4 sm:px-6 flex items-center justify-between relative">
                <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg py-1 transition-transform duration-200 active:scale-95" onClick={() => setMobileMenuOpen(false)}>
                    <div className="relative flex items-center justify-center">
                        <Image src="/logo.svg" alt="ByteSpace Logo" width={32} height={36} priority className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-6 sm:h-7 md:h-8" : "h-7 sm:h-8 md:h-9"}`} />
                    </div>
                    <span className={`font-clash font-bold tracking-tight text-white transition-all duration-300 ${scrolled ? "text-lg sm:text-xl md:text-2xl" : "text-xl sm:text-2xl md:text-[26px]"}`}>ByteSpace</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <Link href="/login" className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200">
                        Sign In
                    </Link>

                    <Link href="/register" className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200">
                        Join Us
                    </Link>

                    <Link href="/cart" aria-label="Shopping Cart" className="p-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full">
                        <ShoppingBag className="size-5 sm:size-6 stroke-[1.8]" />
                    </Link>
                </div>

                <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
                    <Link href="/cart" aria-label="Shopping Cart" className="p-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-95" onClick={() => setMobileMenuOpen(false)}>
                        <ShoppingBag className="size-5 stroke-[1.8]" />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer active:scale-95"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="size-6 transition-transform duration-200" /> : <Menu className="size-6 transition-transform duration-200" />}
                    </button>
                </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 pointer-events-none ${scrolled ? "opacity-100" : "opacity-0"}`} />

            {mobileMenuOpen && <div className="fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)} />}

            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#0047FF]/95 backdrop-blur-2xl border-b border-white/20 px-5 sm:px-6 py-6 flex flex-col gap-5 shadow-2xl text-white transition-all duration-300 origin-top ${mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
            >
                <nav className="flex flex-col gap-1.5">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-white transition-colors py-2.5 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15 flex items-center justify-between">
                            <span>{link.name}</span>
                            <ChevronRight className="size-4 text-white/50" />
                        </Link>
                    ))}
                    <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-white transition-colors py-2.5 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <ShoppingBag className="size-4 stroke-[1.8]" />
                            <span>Cart</span>
                        </div>
                        <ChevronRight className="size-4 text-white/50" />
                    </Link>
                </nav>

                <div className="h-px w-full bg-white/15 my-0.5" />

                <div className="flex flex-col gap-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-center w-full py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 active:scale-[0.99] transition-all">
                        Sign In
                    </Link>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="text-center w-full py-3 rounded-full bg-[#D4FB20] text-black text-sm font-semibold hover:bg-[#c3ea1a] active:scale-[0.99] transition-all shadow-md shadow-[#D4FB20]/20">
                        Join Us
                    </Link>
                </div>
            </div>
        </header>
    );
}
