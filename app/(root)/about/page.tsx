import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us - ByteSpace",
    description: "Learn more about ByteSpace, our mission to empower digital creators, and our high-impact online courses.",
};

export default function AboutPage() {
    return (
        <div className="w-full flex flex-col min-h-screen bg-white font-satoshi text-zinc-800">
            {/* Hero Section */}
            <section className="relative w-full bg-[#003BE2] overflow-hidden pt-35 sm:pt-40 md:pt-48 pb-16 sm:pb-20">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 backdrop-blur-sm border border-white/15">
                        Our Story & Mission
                    </span>
                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
                        Empowering Creators & Learners Worldwide
                    </h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                        ByteSpace is built for ambitious individuals who want to master in-demand digital crafts through project-first learning led by top industry practitioners.
                    </p>
                </div>
            </section>

            {/* Mission & Story */}
            <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16 sm:space-y-20">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className="lg:col-span-6">
                        <span className="text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider">Who We Are</span>
                        <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mt-2 leading-snug">
                            Bridging the gap between theory and industry craft.
                        </h2>
                        <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
                            Founded with a simple premise: learning to design, code, market, and build digital assets shouldn&apos;t be gatekept behind outdated curricula.
                        </p>
                        <p className="mt-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
                            At ByteSpace, instructors aren&apos;t just teachers; they are active builders, agency leads, and creative technologists sharing real-world workflows that get results.
                        </p>
                    </div>

                    <div className="lg:col-span-6 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="size-11 rounded-2xl bg-[#D4FB20] text-black flex items-center justify-center shrink-0 font-bold">
                                    <BookOpen className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-base">Practical Curriculum</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">Every course centers on tangible projects you can showcase in your personal portfolio.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-11 rounded-2xl bg-[#0052FE] text-white flex items-center justify-center shrink-0 font-bold">
                                    <Users className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-base">Creator First</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">We give top practitioners the tools and fair royalties to teach what they love.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-11 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shrink-0 font-bold">
                                    <Award className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-base">Verified Outcomes</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">Structured modules designed to fast-track career transitions and freelance client acquisition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Numbers */}
                <section className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4FB20]">50K+</div>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">Active Learners</p>
                        </div>
                        <div>
                            <div className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-white">200+</div>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">Expert Courses</p>
                        </div>
                        <div>
                            <div className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4FB20]">40+</div>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">Verified Creators</p>
                        </div>
                        <div>
                            <div className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-white">4.8★</div>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">Average Rating</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-6">
                    <h3 className="font-clash text-2xl sm:text-3xl font-bold text-zinc-900">
                        Ready to start learning?
                    </h3>
                    <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
                        Explore our curated selection of courses and take your digital skills to the next level today.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold px-7 py-3.5 text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md cursor-pointer"
                        >
                            Browse Courses <ArrowRight className="size-4" />
                        </Link>
                        <Link
                            href="/creators"
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-900 font-semibold px-7 py-3.5 text-sm hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer"
                        >
                            Meet Creators
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
