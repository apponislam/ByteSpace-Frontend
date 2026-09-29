"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Filter, BarChart2, Shapes, ListFilter, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/course";

const categoryPills = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

interface CourseListProps {
    searchQuery?: string;
    heroCategory?: string;
}

export default function CourseList({ searchQuery = "", heroCategory = "Courses" }: CourseListProps) {
    const [activeCategory, setActiveCategory] = useState("Featured");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLevel, setSelectedLevel] = useState("All");
    const [selectedSort, setSelectedSort] = useState("Most relevant");

    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const levelRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (levelRef.current && !levelRef.current.contains(event.target as Node)) {
                setIsLevelOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [showCategoryPills, setShowCategoryPills] = useState(true);

    const levelOptions = ["All", "Beginner", "Intermediate", "Advanced"];
    const sortOptions = ["Most relevant", "Highest rated", "Newest", "Price: Low to High"];

    const filteredCourses = useMemo(() => {
        let result = [...coursesData];

        // Filter by Hero Search Query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            result = result.filter(
                (course) =>
                    course.title.toLowerCase().includes(query) ||
                    course.category.toLowerCase().includes(query) ||
                    course.author.name.toLowerCase().includes(query) ||
                    course.level.toLowerCase().includes(query)
            );
        }

        // Filter by Hero Dropdown Category
        if (heroCategory !== "Courses") {
            const target = heroCategory.toLowerCase();
            result = result.filter((course) => {
                const cat = course.category?.toLowerCase() || "";
                return cat.includes(target) || target.includes(cat);
            });
        }

        // Filter by Category Pills
        if (activeCategory !== "Featured") {
            result = result.filter((course) => {
                const cat = course.category?.toLowerCase() || "";
                const target = activeCategory.toLowerCase();
                return cat.includes(target) || target.includes(cat);
            });
        }

        // Filter by Level
        if (selectedLevel !== "All") {
            result = result.filter((course) => course.level === selectedLevel);
        }

        // Sorting
        if (selectedSort === "Highest rated") {
            result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
        } else if (selectedSort === "Price: Low to High") {
            result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
        }

        return result;
    }, [searchQuery, heroCategory, activeCategory, selectedLevel, selectedSort]);

    const itemsPerPage = 12;
    const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
    const currentCourses = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedLevel("All");
                                setActiveCategory("Featured");
                                setCurrentPage(1);
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
                                                setCurrentPage(1);
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

                        <button
                            type="button"
                            onClick={() => {
                                setShowCategoryPills((prev) => !prev);
                            }}
                            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer ${showCategoryPills ? "ring-2 ring-[#003BE2]/20 border-[#003BE2]" : ""}`}
                        >
                            <Shapes className="size-4 text-zinc-700" />
                            <span>Category</span>
                        </button>
                    </div>

                    <div ref={sortRef} className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setIsSortOpen(!isSortOpen);
                                setIsLevelOpen(false);
                            }}
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-200 bg-white text-xs sm:text-sm font-medium text-zinc-800 hover:bg-zinc-50 active:scale-95 transition-all shadow-2xs cursor-pointer"
                        >
                            <ListFilter className="size-4 text-zinc-700" />
                            <span>{selectedSort}</span>
                            <ChevronDown className={`size-3.5 text-zinc-500 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isSortOpen && (
                            <div className="absolute right-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-2 z-30 border border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
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

                {showCategoryPills && (
                    <div className="mt-6 sm:mt-8 overflow-x-auto no-scrollbar py-1">
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
                            {categoryPills.map((pill) => {
                                const isActive = activeCategory === pill;
                                return (
                                    <button
                                        key={pill}
                                        type="button"
                                        onClick={() => {
                                            if (isActive) {
                                                // Clicking active category pill again resets category & hides pills row
                                                setActiveCategory("Featured");
                                                setShowCategoryPills(false);
                                            } else {
                                                setActiveCategory(pill);
                                            }
                                            setCurrentPage(1);
                                        }}
                                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${isActive ? "bg-[#D4FB20] text-black font-semibold shadow-xs" : "bg-[#F4F4F6] text-zinc-700 hover:bg-zinc-200/80 font-medium"}`}
                                    >
                                        {pill}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {currentCourses.length > 0 ? (
                    <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {currentCourses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 py-16 text-center flex flex-col items-center justify-center bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
                        <p className="text-zinc-800 font-semibold text-lg">No courses found matching &quot;{searchQuery}&quot;</p>
                        <p className="text-zinc-500 text-sm mt-1">Try searching for a different keyword or clearing filters.</p>
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
                                <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`size-10 sm:size-11 rounded-full text-sm font-semibold transition-all cursor-pointer ${isCurrent ? "bg-[#D4FB20] text-black shadow-xs" : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 active:scale-95"}`}>
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
    );
}
