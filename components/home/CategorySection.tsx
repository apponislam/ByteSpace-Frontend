"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/course";

export default function CategorySection() {
    const [selected, setSelected] = useState("Featured");

    const row1 = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"];

    const row2 = ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"];

    const row3 = ["Productivity", "Web Development", "Data Science", "Cooking"];

    const displayCourses = useMemo(() => {
        if (selected === "Featured") {
            return coursesData.slice(0, 6);
        }

        const target = selected.toLowerCase();
        const filtered = coursesData.filter((course) => {
            const cat = course.category?.toLowerCase() || "";
            const title = course.title?.toLowerCase() || "";
            return cat.includes(target) || target.includes(cat) || title.includes(target);
        });

        if (filtered.length > 0) {
            return filtered.slice(0, 6);
        }

        // Return up to 6 courses as fallback fallback
        return coursesData.slice(0, 6);
    }, [selected]);

    return (
        <section className="w-full bg-white py-20 sm:py-28 font-satoshi">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="font-clash font-bold text-3xl sm:text-5xl md:text-6xl text-center tracking-tight text-black leading-[1.12]">
                    Discover Your Passion,
                    <br />
                    Build Your Skills
                </h2>

                <p className="mt-5 text-center text-sm sm:text-base text-zinc-500 mx-auto leading-relaxed font-normal">
                    At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br className="hidden sm:inline" /> fields, from technology to the arts, and make a difference in your career and life.
                </p>

                <div className="mt-12 sm:mt-14 w-full flex flex-col items-center gap-3.5">
                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                        {row1.map((cat) => {
                            const isActive = selected === cat;
                            return (
                                <button key={cat} type="button" onClick={() => setSelected(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${isActive ? "bg-[#D4FB20] text-black shadow-sm font-semibold" : "bg-[#F3F4F6] text-zinc-700 hover:bg-[#E5E7EB]"}`}>
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                        {row2.map((cat) => {
                            const isActive = selected === cat;
                            return (
                                <button key={cat} type="button" onClick={() => setSelected(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${isActive ? "bg-[#D4FB20] text-black shadow-sm font-semibold" : "bg-[#F3F4F6] text-zinc-700 hover:bg-[#E5E7EB]"}`}>
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                        {row3.map((cat) => {
                            const isActive = selected === cat;
                            return (
                                <button key={cat} type="button" onClick={() => setSelected(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${isActive ? "bg-[#D4FB20] text-black shadow-sm font-semibold" : "bg-[#F3F4F6] text-zinc-700 hover:bg-[#E5E7EB]"}`}>
                                    {cat}
                                </button>
                            );
                        })}
                        <Link href="/courses" className="text-[#0052FE] hover:text-blue-700 font-medium text-sm px-3 py-2 transition-colors inline-flex items-center cursor-pointer">
                            + More
                        </Link>
                    </div>
                </div>

                <div className="w-full mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {displayCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
