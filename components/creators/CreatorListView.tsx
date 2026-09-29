"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, BookOpen, Users, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { creatorsData } from "@/data/creator";

export default function CreatorListView() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const categoryPills = ["All", "UI/UX Design", "Development", "Marketing", "Animation", "Social Media", "Drawing & Painting"];

    const filteredCreators = useMemo(() => {
        let result = [...creatorsData];

        if (activeCategory !== "All") {
            result = result.filter((creator) => creator.category.toLowerCase() === activeCategory.toLowerCase());
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((creator) => creator.name.toLowerCase().includes(query) || creator.tagline.toLowerCase().includes(query) || creator.bio.toLowerCase().includes(query) || creator.category.toLowerCase().includes(query));
        }

        return result;
    }, [activeCategory, searchQuery]);

    const itemsPerPage = 6;
    const totalPages = Math.max(1, Math.ceil(filteredCreators.length / itemsPerPage));
    const currentCreators = filteredCreators.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="w-full flex flex-col bg-white">
            <section className="relative w-full bg-[#003BE2] pt-32.5 sm:pt-37.5 md:pt-40 pb-14 sm:pb-20 md:pb-24">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/15">
                        <span className="size-2 rounded-full bg-[#D4FB20]" />
                        <span>Empowering Creators Worldwide</span>
                    </div>

                    <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">Meet Our World-Class Creators</h1>

                    <p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">Learn directly from industry leaders, designers, developers, and visionaries shaping the digital future.</p>

                    <div className="mt-8 sm:mt-10 max-w-xl mx-auto relative">
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 size-5 text-zinc-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search creators by name, skill, or discipline..."
                                className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-full bg-white text-zinc-900 placeholder:text-zinc-400 text-xs sm:text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4FB20]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-10 sm:py-14 md:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar">
                        {categoryPills.map((pill) => {
                            const isActive = activeCategory === pill;
                            return (
                                <button
                                    key={pill}
                                    type="button"
                                    onClick={() => {
                                        setActiveCategory(pill);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${isActive ? "bg-[#D4FB20] text-black font-semibold shadow-xs" : "bg-[#F4F4F6] text-zinc-700 hover:bg-zinc-200/80 font-medium"}`}
                                >
                                    {pill}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {currentCreators.map((creator) => (
                            <div key={creator.id} className="group w-full bg-white rounded-[32px] border border-zinc-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <div className="flex items-start gap-4">
                                        <div className="relative size-16 sm:size-20 rounded-2xl overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200 shadow-xs">
                                            <Image src={creator.avatar} alt={creator.name} fill sizes="80px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-clash font-bold text-lg sm:text-xl text-zinc-950 truncate group-hover:text-[#003BE2] transition-colors">{creator.name}</h3>
                                            </div>

                                            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#D4FB20]/30 text-zinc-900 text-[11px] font-semibold">{creator.role}</span>

                                            <p className="mt-1 text-xs text-zinc-500 font-medium truncate">{creator.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">{creator.bio}</p>

                                    <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs sm:text-sm text-zinc-700">
                                        <div className="flex items-center gap-1.5 font-medium">
                                            <BookOpen className="size-4 text-zinc-400" />
                                            <span>{creator.productsCount} courses</span>
                                        </div>

                                        <div className="flex items-center gap-1.5 font-medium">
                                            <Users className="size-4 text-zinc-400" />
                                            <span>{creator.followersCount} followers</span>
                                        </div>

                                        <div className="flex items-center gap-1 font-semibold text-zinc-900">
                                            <Star className="size-4 fill-amber-400 text-amber-400" />
                                            <span>{creator.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-2">
                                    <Link href={`/creators/${creator.slug}`} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#D4FB20] hover:bg-[#c3ea1a] text-black font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-sm group-hover:shadow-md">
                                        <span>View Profile</span>
                                        <ArrowUpRight className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCreators.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-zinc-500 text-base sm:text-lg">No creators found matching &quot;{searchQuery}&quot;.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                    setCurrentPage(1);
                                }}
                                className="mt-4 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-2">
                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                aria-label="Previous Page"
                                className="size-10 sm:size-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                            >
                                <ChevronLeft className="size-4" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                const isCurrent = page === currentPage;
                                return (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() => setCurrentPage(page)}
                                        className={`size-10 sm:size-11 rounded-full text-sm font-semibold transition-all cursor-pointer ${isCurrent ? "bg-[#D4FB20] text-black shadow-xs" : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 active:scale-95"}`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            <button
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                aria-label="Next Page"
                                className="size-10 sm:size-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                            >
                                <ChevronRight className="size-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
