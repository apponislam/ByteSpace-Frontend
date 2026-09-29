"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Filter, BarChart2, Shapes, ListFilter, ChevronDown, Check, UserPlus } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { Creator } from "@/data/creator";
import { Course } from "@/data/course";

interface CreatorDetailsViewProps {
    creator: Creator;
    courses: Course[];
}

export default function CreatorDetailsView({ creator, courses }: CreatorDetailsViewProps) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(creator.followersCount);

    const [selectedLevel, setSelectedLevel] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSort, setSelectedSort] = useState("Most relevant");

    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const levelRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (levelRef.current && !levelRef.current.contains(event.target as Node)) {
                setIsLevelOpen(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setIsCategoryOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const levelOptions = ["All", "Beginner", "Intermediate", "Advanced"];
    const categoryOptions = ["All", "UI/UX Design", "Development", "Marketing", "Animation", "Social Media", "Drawing & Painting"];
    const sortOptions = ["Most relevant", "Highest rated", "Price: Low to High"];

    const handleFollowToggle = () => {
        if (isFollowing) {
            setIsFollowing(false);
            setFollowersCount((prev) => Math.max(0, prev - 1));
        } else {
            setIsFollowing(true);
            setFollowersCount((prev) => prev + 1);
        }
    };

    const filteredCourses = useMemo(() => {
        let result = [...courses];

        if (selectedLevel !== "All") {
            result = result.filter((c) => c.level === selectedLevel);
        }

        if (selectedCategory !== "All") {
            result = result.filter((c) => {
                const cat = c.category?.toLowerCase() || "";
                return cat.includes(selectedCategory.toLowerCase());
            });
        }

        if (selectedSort === "Highest rated") {
            result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
        } else if (selectedSort === "Price: Low to High") {
            result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
        }

        return result;
    }, [courses, selectedLevel, selectedCategory, selectedSort]);

    return (
        <div className="w-full flex flex-col bg-white">
            <section className="relative w-full bg-[#003BE2] pt-32.5 sm:pt-37.5 md:pt-40 pb-12 sm:pb-16 md:pb-20">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
                        <div className="relative size-24 sm:size-28 md:size-32 rounded-2xl overflow-hidden bg-white/10 shrink-0 border border-white/20 shadow-xl">
                            <Image src={creator.avatar} alt={creator.name} fill priority sizes="128px" className="object-cover" />
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="font-clash text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{creator.name}</h1>
                                <span className="px-3 py-1 rounded-full bg-[#D4FB20] text-black text-xs font-semibold">{creator.role}</span>
                            </div>

                            <p className="mt-1 text-sm sm:text-base text-white/80 font-normal">{creator.tagline}</p>

                            <div className="mt-4 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-4xl space-y-2">
                                <p>{creator.bio}</p>
                                {creator.bioSecondary && <p>{creator.bioSecondary}</p>}
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                                    <div className="px-4 sm:px-5 py-2 rounded-full bg-white text-zinc-900 font-semibold text-xs sm:text-sm shadow-xs">{courses.length} Products</div>

                                    <div className="px-4 sm:px-5 py-2 rounded-full bg-white text-zinc-900 font-semibold text-xs sm:text-sm shadow-xs">{followersCount} Followers</div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleFollowToggle}
                                    className={`inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md cursor-pointer ${
                                        isFollowing ? "bg-white text-zinc-900 hover:bg-zinc-100" : "bg-[#D4FB20] hover:bg-[#c3ea1a] text-black"
                                    }`}
                                >
                                    {isFollowing ? (
                                        <>
                                            <Check className="size-4" />
                                            <span>Following</span>
                                        </>
                                    ) : (
                                        <>
                                            <UserPlus className="size-4" />
                                            <span>Follow</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-10 sm:py-14 md:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedLevel("All");
                                    setSelectedCategory("All");
                                    setSelectedSort("Most relevant");
                                }}
                                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer"
                            >
                                <Filter className="size-4 text-zinc-700" />
                                <span>Filter</span>
                            </button>

                            <div ref={levelRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsLevelOpen(!isLevelOpen);
                                        setIsCategoryOpen(false);
                                        setIsSortOpen(false);
                                    }}
                                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer ${selectedLevel !== "All" ? "ring-2 ring-[#003BE2]/20 border-[#003BE2]" : ""}`}
                                >
                                    <BarChart2 className="size-4 text-zinc-700" />
                                    <span>{selectedLevel === "All" ? "Level" : selectedLevel}</span>
                                    <ChevronDown className={`size-3.5 text-zinc-500 transition-transform duration-200 ${isLevelOpen ? "rotate-180" : ""}`} />
                                </button>

                                {isLevelOpen && (
                                    <div className="absolute left-0 mt-2 w-44 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-2 z-30 border border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
                                        {levelOptions.map((level) => (
                                            <button
                                                key={level}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedLevel(level);
                                                    setIsLevelOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${selectedLevel === level ? "bg-[#003BE2]/10 text-[#003BE2] font-semibold" : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900"}`}
                                            >
                                                <span>{level}</span>
                                                {selectedLevel === level && (
                                                    <span className="size-1.5 rounded-full bg-[#003BE2]" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div ref={categoryRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCategoryOpen(!isCategoryOpen);
                                        setIsLevelOpen(false);
                                        setIsSortOpen(false);
                                    }}
                                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer ${selectedCategory !== "All" ? "ring-2 ring-[#003BE2]/20 border-[#003BE2]" : ""}`}
                                >
                                    <Shapes className="size-4 text-zinc-700" />
                                    <span>{selectedCategory === "All" ? "Category" : selectedCategory}</span>
                                    <ChevronDown className={`size-3.5 text-zinc-500 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} />
                                </button>

                                {isCategoryOpen && (
                                    <div className="absolute left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-2 z-30 border border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
                                        {categoryOptions.map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    setIsCategoryOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${selectedCategory === cat ? "bg-[#003BE2]/10 text-[#003BE2] font-semibold" : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900"}`}
                                            >
                                                <span>{cat}</span>
                                                {selectedCategory === cat && (
                                                    <span className="size-1.5 rounded-full bg-[#003BE2]" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div ref={sortRef} className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSortOpen(!isSortOpen);
                                    setIsLevelOpen(false);
                                    setIsCategoryOpen(false);
                                }}
                                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer"
                            >
                                <ListFilter className="size-4 text-zinc-700" />
                                <span>{selectedSort}</span>
                                <ChevronDown className={`size-3.5 text-zinc-500 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isSortOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-2 z-30 border border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => {
                                                setSelectedSort(option);
                                                setIsSortOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${selectedSort === option ? "bg-[#003BE2]/10 text-[#003BE2] font-semibold" : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900"}`}
                                        >
                                            <span>{option}</span>
                                            {selectedSort === option && (
                                                <span className="size-1.5 rounded-full bg-[#003BE2]" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
