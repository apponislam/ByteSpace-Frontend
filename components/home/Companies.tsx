import React from "react";
import Image from "next/image";

export default function Companies() {
    const logos = [
        { src: "/home/companies/icon1.svg", alt: "Logoipsum 1", width: 167, height: 41 },
        { src: "/home/companies/icon2.svg", alt: "Logoipsum 2", width: 168, height: 41 },
        { src: "/home/companies/icon3.svg", alt: "Logoipsum 3", width: 170, height: 41 },
        { src: "/home/companies/icon4.svg", alt: "Logoipsum 4", width: 167, height: 41 },
        { src: "/home/companies/icon5.svg", alt: "Logoipsum 5", width: 167, height: 41 },
    ];

    return (
        <section className="w-full bg-[#F8FAFC] py-10 sm:py-14 border-y border-zinc-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between gap-8 md:gap-10 lg:gap-14">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center flex-1 min-w-30 sm:min-w-35">
                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 sm:h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
