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
        <section className="w-full bg-white py-16 sm:py-24 font-satoshi">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-tight text-zinc-950">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <p className="mt-4 text-center text-sm sm:text-base text-zinc-500 leading-relaxed font-normal">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                <div className="mt-12 sm:mt-14 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {paths.map((path) => (
                        <Link key={path.name} href={path.href} className="group bg-white rounded-[26px] border border-zinc-200/90 p-6 flex flex-col items-center justify-center gap-5 aspect-square hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="relative size-14 sm:size-16 flex items-center justify-center">
                                <Image src={path.icon} alt={path.name} width={60} height={60} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <span className="font-medium text-sm sm:text-base text-zinc-900 text-center group-hover:text-[#0052FE] transition-colors">{path.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
