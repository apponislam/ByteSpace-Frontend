"use client";

import React, { useState } from "react";
import CourseHero from "@/components/courses/CourseHero";
import CourseList from "@/components/courses/CourseList";

export default function CoursesClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [heroCategory, setHeroCategory] = useState("Courses");

    return (
        <div className="w-full flex flex-col min-h-screen bg-white">
            <CourseHero onSearch={setSearchQuery} onCategoryChange={setHeroCategory} />
            <CourseList searchQuery={searchQuery} heroCategory={heroCategory} />
        </div>
    );
}
