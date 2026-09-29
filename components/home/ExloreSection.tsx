import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExloreSection() {
    const paths = [
        {
            name: "Design",
            icon: "/home/explore/icon1.svg",
            href: "/categories/design",
        },
        {
            name: "Development",
            icon: "/home/explore/icon2.svg",
            href: "/categories/development",
        },
        {
            name: "IT & Software",
            icon: "/home/explore/icon3.svg",
            href: "/categories/it-software",
        },
        {
            name: "Business",
            icon: "/home/explore/icon4.svg",
            href: "/categories/business",
        },
        {
            name: "Marketing",
            icon: "/home/explore/icon5.svg",
            href: "/categories/marketing",
        },
        {
            name: "Photography",
            icon: "/home/explore/icon6.svg",
            href: "/categories/photography",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 font-satoshi">
            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-80 rounded-full pointer-events-none select-none blur-[110px] opacity-30 animate-glow-drift-2"
                style={{
                    background: "radial-gradient(circle, rgba(0, 82, 254, 0.15) 0%, rgba(212, 251, 32, 0.15) 60%, transparent 100%)",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-tight text-zinc-950">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <p className="mt-4 text-center text-sm sm:text-base text-zinc-500 leading-relaxed font-normal max-w-2xl">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                <div className="mt-12 sm:mt-14 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {paths.map((path) => (
                        <Link
                            key={path.name}
                            href={path.href}
                            className="group bg-white/90 backdrop-blur-xs rounded-[26px] border border-zinc-200/90 p-6 flex flex-col items-center justify-center gap-5 aspect-square hover:border-[#0052FE]/40 hover:shadow-[0_12px_32px_rgba(0,82,254,0.08)] hover:-translate-y-1.5 active:scale-95 transition-all duration-300"
                        >
                            <div className="relative size-14 sm:size-16 flex items-center justify-center">
                                <Image
                                    src={path.icon}
                                    alt={path.name}
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                                />
                            </div>

                            <span className="font-semibold text-sm sm:text-base text-zinc-900 text-center group-hover:text-[#0052FE] transition-colors">
                                {path.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
