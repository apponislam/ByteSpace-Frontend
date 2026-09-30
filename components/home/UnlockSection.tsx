import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UnlockSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0052FE] py-28 sm:py-28 font-satoshi">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            />

            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 sm:w-160 h-80 rounded-full pointer-events-none select-none blur-[100px] opacity-40 animate-glow-drift-1"
                style={{
                    background: "radial-gradient(circle, rgba(212, 251, 32, 0.35) 0%, rgba(0, 59, 226, 0.4) 60%, transparent 100%)",
                }}
            />

            <div className="absolute -left-10 lg:left-0 top-0 w-35 sm:w-47.5 lg:w-60 pointer-events-none select-none z-10 animate-hero-float-gentle">
                <Image src="/home/unlock/left1.png" alt="Decorative Shape" width={266} height={225} className="w-full h-auto" />
            </div>

            <div className="absolute left-10 sm:left-24 lg:left-36 top-[8%] w-20 sm:w-27.5 lg:w-35 pointer-events-none select-none z-10 animate-hero-float [animation-delay:0.8s]">
                <Image src="/home/unlock/left2.png" alt="Decorative Shape" width={177} height={176} className="w-full h-auto" />
            </div>

            <div className="absolute -left-6 sm:left-0 lg:left-0 bottom-[20%] w-17.5 sm:w-23.75 lg:w-30 pointer-events-none select-none z-10">
                <Image src="/home/unlock/left3.png" alt="Decorative Shape" width={140} height={189} className="w-full h-auto" />
            </div>

            <div className="absolute -left-8 sm:left-0 lg:left-4 bottom-0 w-40 sm:w-55 lg:w-70 pointer-events-none select-none z-10">
                <Image src="/home/unlock/left4.svg" alt="Decorative Shape" width={346} height={190} className="w-full h-auto" />
            </div>

            <div className="absolute right-12 sm:right-28 lg:right-40 top-[5%] w-22.5 sm:w-30 lg:w-37.5 pointer-events-none select-none z-10 animate-hero-float [animation-delay:1.2s]">
                <Image src="/home/unlock/right1.png" alt="Decorative Shape" width={190} height={189} className="w-full h-auto" />
            </div>

            <div className="absolute -right-8 lg:right-0 top-0 w-27.5 sm:w-37.5 lg:w-47.5 pointer-events-none select-none z-10 animate-hero-float-reverse">
                <Image src="/home/unlock/right2.png" alt="Decorative Shape" width={218} height={372} className="w-full h-auto" />
            </div>

            <div className="absolute -right-8 sm:right-0 lg:right-2 bottom-0 w-37.5 sm:w-52.5 lg:w-65 pointer-events-none select-none z-10">
                <Image src="/home/unlock/right3.png" alt="Decorative Shape" width={334} height={199} className="w-full h-auto" />
            </div>

            <div className="container relative mx-auto px-4 z-20 flex flex-col items-center">
                <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-center text-white leading-[1.15]">
                    Unlock Your Potential as a
                    <br className="hidden md:block" /> Creator with ByteSpace
                </h2>

                <p className="mt-6 text-center font-satoshi font-normal text-base md:text-[18px] text-white/80 leading-relaxed max-w-3xl">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course
                    on the ByteSpace Course Library.
                </p>

                <Link
                    href="/register"
                    className="mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-md shadow-black/15 cursor-pointer"
                >
                    Join as Creator
                </Link>
            </div>
        </section>
    );
}
