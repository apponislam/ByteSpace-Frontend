import React from "react";
import type { Metadata } from "next";
import CourseHero from "@/components/courses/CourseHero";
import CourseList from "@/components/courses/CourseList";

export const metadata: Metadata = {
  title: "Courses - ByteSpace",
  description: "Find your next course and level up your skills with ByteSpace.",
};

export default function CoursesPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <CourseHero />
      <CourseList />
    </div>
  );
}
