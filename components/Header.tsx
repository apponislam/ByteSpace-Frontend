"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[120px] w-full bg-transparent">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg py-1 transition-transform duration-200 active:scale-95"
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="ByteSpace Logo"
              width={32}
              height={36}
              priority
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/sign-in"
            className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="p-1.5 text-white/90 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
          >
            <ShoppingBag className="size-6 stroke-[1.8]" />
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="p-1.5 text-white"
          >
            <ShoppingBag className="size-6 stroke-[1.8]" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[120px] left-0 right-0 bg-[#0047FF]/95 backdrop-blur-xl border-b border-white/15 px-6 py-8 flex flex-col gap-6 shadow-2xl text-white">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-white transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="h-px w-full bg-white/15 my-1" />

          <div className="flex flex-col gap-4">
            <Link
              href="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center w-full py-3 rounded-full border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center w-full py-3 rounded-full bg-[#D4FB20] text-black font-semibold hover:bg-[#c3ea1a] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
