"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface AuthVisualProps {
    title: string;
    subtitle: string;
}

export default function AuthVisual({ title, subtitle }: AuthVisualProps) {
    const studentAvatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
    ];

    return (
        <div className="flex flex-col justify-center w-full max-w-[552px] py-2">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
                <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-md font-normal">{subtitle}</p>
            </div>

            <div className="relative w-full max-w-[552px] aspect-[552/585] mt-6 sm:mt-10 select-none">
                <div className="absolute left-[5.0%] top-[15.2%] w-[67.4%] z-10 pointer-events-none drop-shadow-xl">
                    <Image src="/auth/authbackcard.svg" alt="Build Digital Product Card" width={372} height={383} priority className="w-full h-auto object-contain" />
                </div>

                <div className="absolute left-[25.1%] top-[0%] w-[67.4%] z-20 pointer-events-none drop-shadow-2xl">
                    <Image src="/auth/authfrontcard.svg" alt="Big Data Course Card" width={372} height={383} priority className="w-full h-auto object-contain" />
                </div>

                <div className="absolute left-[9.9%] top-[2.4%] w-[26.6%] z-30 pointer-events-none drop-shadow-md">
                    <Image src="/auth/icon1.svg" alt="Torus Shape" width={147} height={147} priority className="w-full h-auto object-contain" />
                </div>

                <div className="absolute left-[45.8%] top-[74.3%] w-[46.7%] z-30 bg-[#D4FB20] text-black rounded-[16px] p-3 sm:p-3.5 shadow-2xl">
                    <h4 className="font-bold text-black text-xs sm:text-sm tracking-tight leading-none">Happy Students</h4>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-black mt-1">
                        <span>4.5</span>
                        <span className="text-[#4F4F4F] font-normal text-[11px] sm:text-xs">(240)</span>
                        <Star className="size-3 sm:size-3.5 fill-[#003BE2] text-[#003BE2]" />
                    </div>
                    <div className="flex items-center mt-2 sm:mt-2.5">
                        {studentAvatars.map((avatar, idx) => (
                            <div key={idx} style={{ zIndex: idx + 1 }} className={`relative size-6 sm:size-7 rounded-full overflow-hidden shrink-0 ${idx > 0 ? "-ml-1.5 sm:-ml-2" : ""}`}>
                                <img src={avatar} alt="Student" className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div style={{ zIndex: 10 }} className="relative -ml-1.5 sm:-ml-2 size-6 sm:size-7 rounded-full bg-[#242528] text-[#F5F5F6] text-[8px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">
                            2K+
                        </div>
                    </div>
                </div>

                <div className="absolute left-[68.1%] top-[54.8%] w-[31.9%] z-40 pointer-events-none drop-shadow-lg">
                    <Image src="/auth/icon2.svg" alt="Ribbon Shape" width={176} height={176} priority className="w-full h-auto object-contain" />
                </div>

                <div className="absolute left-[0%] top-[67.7%] w-[34.2%] z-20 pointer-events-none drop-shadow-lg">
                    <Image src="/auth/icon3.svg" alt="Cone Shape" width={189} height={189} priority className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
}
