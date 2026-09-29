import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Companies() {
    const logos = [
        { src: "/home/companies/icon1.svg", alt: "Logoipsum 1", width: 167, height: 41, href: "#" },
        { src: "/home/companies/icon2.svg", alt: "Logoipsum 2", width: 168, height: 41, href: "#" },
        { src: "/home/companies/icon3.svg", alt: "Logoipsum 3", width: 170, height: 41, href: "#" },
        { src: "/home/companies/icon4.svg", alt: "Logoipsum 4", width: 167, height: 41, href: "#" },
        { src: "/home/companies/icon5.svg", alt: "Logoipsum 5", width: 167, height: 41, href: "#" },
    ];

    // Duplicate logos for seamless infinite loop
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="w-full bg-[#F8FAFC] py-10 sm:py-14 border-y border-zinc-100 overflow-hidden">
            <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex items-center gap-12 sm:gap-16 w-max animate-[marquee_25s_linear_infinite] hover:paused">
                    {marqueeLogos.map((logo, index) => (
                        <Link key={index} href={logo.href} className="flex items-center justify-center shrink-0 w-36 sm:w-44 cursor-pointer group">
                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 sm:h-9 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200 select-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
