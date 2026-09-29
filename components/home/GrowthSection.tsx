"use client";

import React from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";

export default function GrowthSection() {
    const studentAvatars = [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
    ];

    const creatorFeatures = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

    return (
        <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
            {/* Top-Left Lime Accent: #CBFC01 at 60% opacity */}
            <div
                className="absolute -top-24 -left-32 w-162.5 h-162.5 rounded-full pointer-events-none select-none blur-[90px] animate-glow-drift-1"
                style={{
                    background: "radial-gradient(circle, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.23) 53%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />

            {/* Top-Right Blue Accent: #003BE2 at 8% opacity */}
            <div
                className="absolute top-[10%] -right-24 w-150 h-150 rounded-full pointer-events-none select-none blur-[100px] animate-glow-drift-2"
                style={{
                    background: "radial-gradient(circle, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0) 100%)",
                }}
            />

            {/* Bottom-Left Lime Accent: #CBFC01 at 40% opacity */}
            <div
                className="absolute bottom-[5%] -left-28 w-150 h-150 rounded-full pointer-events-none select-none blur-[90px] animate-glow-drift-2 [animation-delay:2s]"
                style={{
                    background: "radial-gradient(circle, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.23) 53%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />

            {/* Bottom-Right Blue Accent: #003BE2 at 24% opacity */}
            <div
                className="absolute -bottom-24 -right-28 w-175 h-175 rounded-full pointer-events-none select-none blur-[110px] animate-glow-drift-1 [animation-delay:1.5s]"
                style={{
                    background: "radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.12) 53%, rgba(0, 59, 226, 0.03) 75%, rgba(0, 59, 226, 0) 100%)",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col gap-24 sm:gap-32 lg:gap-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                            Your Path to Professional
                            <br />
                            Growth Starts Here!
                        </h2>

                        <p className="mt-5 sm:mt-6 text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        <div className="flex items-center gap-8 sm:gap-12 mt-8 sm:mt-10">
                            <div className="hover:scale-105 transition-transform duration-200 cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0052FE] tracking-tight">12K</div>
                                <div className="text-sm sm:text-base font-medium text-[#64748B] mt-1">Students</div>
                            </div>

                            <div className="hover:scale-105 transition-transform duration-200 cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0052FE] tracking-tight">70+</div>
                                <div className="text-sm sm:text-base font-medium text-[#64748B] mt-1">Courses</div>
                            </div>

                            <div className="hover:scale-105 transition-transform duration-200 cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0052FE] tracking-tight">16</div>
                                <div className="text-sm sm:text-base font-medium text-[#64748B] mt-1">Creators</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-w-140 mx-auto min-h-105 sm:min-h-125 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-[58%] sm:w-[62%] z-10 pointer-events-none select-none drop-shadow-xl animate-hero-float-gentle">
                            <Image src="/home/growth/peson1back.svg" alt="Course Card" width={373} height={384} priority className="w-full h-auto object-contain" />
                        </div>

                        <div className="absolute top-2 sm:top-4 right-0 sm:right-4 w-[28%] sm:w-[32%] z-0 pointer-events-none select-none animate-hero-float [animation-delay:1s]">
                            <Image src="/home/growth/person1icon1.png" alt="Shape" width={216} height={216} priority className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-20 w-[84%] sm:w-[88%] mt-12 sm:mt-16 ml-auto pointer-events-none select-none">
                            <Image src="/home/growth/person1.svg" alt="Student with laptop" width={703} height={688} priority className="w-full h-auto object-contain" />
                        </div>

                        <div className="absolute top-[42%] -right-2.5 sm:-right-3.75 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/80 w-42.5 sm:w-50 animate-hero-float-reverse hover:scale-105 transition-transform cursor-default">
                            <span className="text-[11px] sm:text-xs font-semibold text-zinc-500">Learning Progress</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">55%</div>
                            <div className="w-full bg-zinc-100 rounded-full h-2 mt-2.5 overflow-hidden">
                                <div className="bg-[#D4FB20] h-full rounded-full w-[55%] transition-all duration-1000 ease-out" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                    <div className="order-2 lg:order-1 relative w-full max-w-140 mx-auto min-h-110 sm:min-h-130 flex items-center justify-center">
                        <div className="absolute top-[28%] right-2 sm:right-6 w-[28%] sm:w-[32%] z-0 pointer-events-none select-none animate-hero-float-gentle">
                            <Image src="/home/growth/person2icon1.png" alt="Shape" width={217} height={216} priority className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 w-[78%] sm:w-[82%] mx-auto pointer-events-none select-none">
                            <Image src="/home/growth/person2.svg" alt="Creator with tablet" width={579} height={719} priority className="w-full h-auto object-contain" />
                        </div>

                        <div className="absolute top-[8%] left-[2%] sm:left-[4%] z-20 bg-[#0052FE] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-blue-400/30 w-37.5 sm:w-42.5 animate-hero-float hover:scale-105 transition-transform cursor-default">
                            <div className="text-[11px] sm:text-xs text-white/90 font-medium">Total Revenue</div>
                            <div className="text-[9px] text-white/60 font-normal">July 1-28</div>
                            <div className="text-lg sm:text-xl font-bold text-white mt-1">$120.29</div>
                            <div className="w-full bg-white/20 rounded-full h-1.5 mt-2.5 overflow-hidden">
                                <div className="bg-[#D4FB20] h-full rounded-full w-[70%]" />
                            </div>
                        </div>

                        <div className="absolute top-[32%] left-[2%] sm:left-[4%] z-20 bg-[#0052FE] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-blue-400/30 w-37.5 sm:w-42.5 animate-hero-float-reverse [animation-delay:1.2s] hover:scale-105 transition-transform cursor-default">
                            <div className="text-[11px] sm:text-xs text-white/90 font-medium">Year to Date</div>
                            <div className="text-[9px] text-white/60 font-normal">2023</div>
                            <div className="text-lg sm:text-xl font-bold text-white mt-1">$1,200.38</div>
                            <div className="mt-2">
                                <span className="bg-[#D4FB20] text-black text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">+12$</span>
                            </div>
                        </div>

                        <div className="absolute bottom-[16%] sm:bottom-[18%] right-[3%] sm:right-[6%] lg:right-[8%] z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-slate-100 animate-hero-float [animation-delay:2s] hover:scale-105 transition-transform cursor-default">
                            <h4 className="font-bold text-zinc-900 text-sm sm:text-base leading-tight">Happy Students</h4>
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                                <span>4.5</span>
                                <span className="text-zinc-400 font-normal text-xs">(240)</span>
                                <Star className="size-3.5 fill-[#FFB800] text-[#FFB800]" />
                            </div>
                            <div className="flex items-center mt-3">
                                {studentAvatars.map((avatar, idx) => (
                                    <div key={idx} style={{ zIndex: idx + 1 }} className={`relative size-7 sm:size-8 rounded-full overflow-hidden ${idx > 0 ? "-ml-3 sm:-ml-3.5" : ""}`}>
                                        <Image src={avatar} alt="Student" fill sizes="32px" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div style={{ zIndex: 10 }} className="relative -ml-3 sm:-ml-3.5 size-7 sm:size-8 rounded-full bg-[#D4FB20] text-black text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                                    2K+
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                            Create & Manage
                            <br />
                            Courses Easily.
                        </h2>

                        <p className="mt-5 sm:mt-6 text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                            <strong className="font-semibold text-zinc-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        <ul className="mt-8 sm:mt-10 space-y-4">
                            {creatorFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3.5 text-base sm:text-lg font-medium text-[#0F172A] hover:translate-x-1.5 transition-transform duration-200 cursor-default">
                                    <div className="size-5 sm:size-6 rounded-full bg-[#0052FE] flex items-center justify-center shrink-0 text-white shadow-sm">
                                        <Check className="size-3.5 sm:size-4 stroke-3" />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
