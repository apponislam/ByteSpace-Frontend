"use client";

import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function HeroArea() {
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
        <section className="relative w-full overflow-hidden bg-[#0052FE] pt-32.5 lg:pt-37.5">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            />

            <div className="absolute -left-10 lg:left-0 top-[20%] w-40 sm:w-55 lg:w-66.75 pointer-events-none select-none z-10">
                <Image src="/home/Hero/left1.png" alt="Decorative Shape" width={267} height={387} priority className="w-full h-auto" />
            </div>

            <div className="absolute left-4 sm:left-12 lg:left-24 top-[46%] w-25 sm:w-35 lg:w-44.25 pointer-events-none select-none z-10">
                <Image src="/home/Hero/left2.png" alt="Decorative Shape" width={177} height={176} priority className="w-full h-auto" />
            </div>

            <div className="absolute -left-12 sm:-left-6 lg:left-0 bottom-0 w-50 sm:w-70 lg:w-86.5 pointer-events-none select-none z-10">
                <Image src="/home/Hero/left3.png" alt="Decorative Shape" width={346} height={343} priority className="w-full h-auto" />
            </div>

            <div className="absolute -right-8 lg:right-0 top-[18%] w-32.5 sm:w-45 lg:w-53.25 pointer-events-none select-none z-10">
                <Image src="/home/Hero/right1.svg" alt="Decorative Shape" width={213} height={372} priority className="w-full h-auto" />
            </div>

            <div className="absolute right-6 sm:right-14 lg:right-28 top-[44%] w-27.5 sm:w-37.5 lg:w-47.5 pointer-events-none select-none z-10">
                <Image src="/home/Hero/right2.svg" alt="Decorative Shape" width={190} height={189} priority className="w-full h-auto" />
            </div>

            <div className="absolute -right-10 lg:right-0 bottom-4 w-45 sm:w-62.5 lg:w-79.25 pointer-events-none select-none z-10">
                <Image src="/home/Hero/right3.png" alt="Decorative Shape" width={317} height={332} priority className="w-full h-auto" />
            </div>

            <div className="container relative mx-auto px-4 z-20 flex flex-col items-center">
                <h1 className="text-center font-bold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] max-w-4xl">
                    Get Access to Hundreds
                    <br />
                    Courses Available
                </h1>

                <p className="mt-5 sm:mt-6 text-center text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

                <div className="mt-8 sm:mt-10 w-full max-w-xl">
                    <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 bg-white/0 p-1">
                        <div className="relative flex-1">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-zinc-400 stroke-2" />
                            <input type="text" placeholder="Course, topic, creator" className="w-full h-14 pl-13 pr-6 rounded-full bg-white text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base font-normal shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-[#D4FB20]" />
                        </div>
                        <button type="submit" className="h-14 px-8 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md shadow-black/10 shrink-0 cursor-pointer">
                            Search
                        </button>
                    </form>
                </div>

                <div className="relative w-full max-w-4xl mt-12 sm:mt-16 flex justify-center items-end min-h-115 sm:min-h-130 lg:min-h-145">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-137.5 sm:w-200 lg:w-250 pointer-events-none select-none z-0">
                        <Image src="/home/Hero/centerbackshpae.svg" alt="Center Back Halo" width={1149} height={442} priority className="w-full h-auto object-contain" />
                    </div>

                    <div className="relative z-10 w-95 sm:w-135 lg:w-180.5 flex justify-center pointer-events-none select-none">
                        <Image src="/home/Hero/centerman.svg" alt="ByteSpace Student" width={722} height={515} priority className="w-full h-auto object-contain drop-shadow-2xl" />
                    </div>

                    <div className="absolute top-[16%] sm:top-[20%] left-2 sm:left-10 lg:left-14 z-20 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl animate-in fade-in duration-300">
                        <h4 className="font-bold text-zinc-900 text-xs sm:text-sm">UI/UX Design</h4>
                        <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-0.5">200 Courses &bull; 1000+ Students</p>
                    </div>

                    <div className="absolute top-[22%] sm:top-[24%] right-2 sm:right-8 lg:right-12 z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-xl w-45 sm:w-52.5 animate-in fade-in duration-300">
                        <span className="text-[11px] sm:text-xs font-semibold text-zinc-500">Learning Progress</span>
                        <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">55%</div>
                        <div className="w-full bg-zinc-100 rounded-full h-2 mt-2.5 overflow-hidden">
                            <div className="bg-[#D4FB20] h-full rounded-full w-[55%]" />
                        </div>
                    </div>

                    <div className="absolute bottom-[10%] sm:bottom-[14%] left-0 sm:left-4 lg:left-8 z-20 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl animate-in fade-in duration-300">
                        <h4 className="font-bold text-zinc-900 text-xs sm:text-sm tracking-tight leading-none">Happy Students</h4>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 mt-1">
                            <span>4.5</span>
                            <span className="text-zinc-400 font-normal">(240)</span>
                            <Star className="size-3.5 fill-amber-400 text-amber-400 shrink-0" />
                        </div>
                        <div className="flex items-center mt-2.5">
                            {studentAvatars.map((avatar, idx) => (
                                <div key={idx} style={{ zIndex: idx + 1 }} className={`relative size-6 sm:size-7 rounded-full overflow-hidden shrink-0 ${idx > 0 ? "-ml-2" : ""}`}>
                                    <img src={avatar} alt="Student" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div style={{ zIndex: 10 }} className="relative -ml-2 size-6 sm:size-7 rounded-full bg-[#D4FB20] text-black text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">
                                2K+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
