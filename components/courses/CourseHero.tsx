"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

interface CourseHeroProps {
    onSearch?: (query: string) => void;
    onCategoryChange?: (category: string) => void;
}

export default function CourseHero({ onSearch, onCategoryChange }: CourseHeroProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Courses");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const categories = ["Courses", "Design", "Development", "Data Science", "Marketing", "Business"];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    };

    return (
        <section className="relative w-full bg-[#003BE2] overflow-hidden pt-35 sm:pt-40 md:pt-47.5 pb-16 sm:pb-20 md:pb-24">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">Find Your Next Course</h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mt-8 sm:mt-10 w-full max-w-xl">
                    <div className="relative flex items-center w-full bg-white rounded-full px-5 py-3 sm:py-3.5 shadow-md transition-shadow focus-within:ring-2 focus-within:ring-[#D4FB20]">
                        <Search className="size-5 text-zinc-400 shrink-0 mr-3" />
                        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" className="w-full bg-transparent text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base outline-none" />
                    </div>

                    <div ref={dropdownRef} className="relative w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full sm:w-auto h-11 sm:h-12 px-6 rounded-full bg-[#D4FB20] hover:bg-[#c3ea1a] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shrink-0 transition-all active:scale-95 shadow-md cursor-pointer"
                        >
                            <span>{selectedCategory}</span>
                            <ChevronDown className={`size-4 text-black transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 sm:right-0 mt-2 w-full sm:w-44 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-zinc-100">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => handleCategorySelect(category)}
                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${selectedCategory === category ? "bg-zinc-100 text-black font-semibold" : "text-zinc-700 hover:bg-zinc-50"}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
