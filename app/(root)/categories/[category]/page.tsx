import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { categoriesData, getCategoryBySlug, getCoursesByCategory } from "@/data/category";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    return categoriesData.map((cat) => ({
        category: cat.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = await params;
    const cat = getCategoryBySlug(category);

    const title = cat ? `${cat.name} Courses` : "Category Courses";
    const description = cat?.description || "Browse top-rated online courses in this category on ByteSpace.";

    return {
        title,
        description,
    };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const cat = getCategoryBySlug(category);

    if (!cat) {
        // If not found in primary categories, check if any course has this category
        const courses = getCoursesByCategory(category);
        if (courses.length === 0) {
            notFound();
        }
    }

    const categoryName = cat?.name || category.charAt(0).toUpperCase() + category.slice(1);
    const categoryDesc = cat?.description || `Explore our curated selection of ${categoryName} courses taught by expert creators.`;
    const courses = getCoursesByCategory(category);

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
                    {/* Breadcrumbs */}
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/75 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="size-3 text-white/50" />
                        <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                        <ChevronRight className="size-3 text-white/50" />
                        <span className="text-white font-semibold">{categoryName}</span>
                    </div>

                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
                        {categoryName} Courses
                    </h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                        {categoryDesc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4FB20] text-black text-xs sm:text-sm font-semibold shadow-sm">
                        <span>{courses.length} {courses.length === 1 ? "Course" : "Courses"} available</span>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex-1">
                {/* Back to all categories link */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-[#0052FE] transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        All Categories
                    </Link>

                    <span className="text-xs sm:text-sm text-zinc-500">
                        Showing {courses.length} {courses.length === 1 ? "result" : "results"}
                    </span>
                </div>

                {courses.length === 0 ? (
                    <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-zinc-200">
                        <h3 className="font-clash text-xl font-bold text-zinc-900">No courses found</h3>
                        <p className="text-sm text-zinc-600 mt-2">We don&apos;t have courses in this category yet. Check back soon!</p>
                        <Link
                            href="/courses"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold px-6 py-2.5 text-sm hover:bg-[#c3ea1a] transition-all"
                        >
                            Browse All Courses
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                )}

                {/* Explore other categories pill bar */}
                <div className="mt-16 pt-10 border-t border-zinc-200">
                    <h4 className="font-clash font-bold text-lg text-zinc-900 mb-4">Explore More Categories</h4>
                    <div className="flex flex-wrap gap-2.5">
                        {categoriesData
                            .filter((c) => c.slug !== category.toLowerCase())
                            .map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/categories/${c.slug}`}
                                    className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs sm:text-sm font-medium transition-colors"
                                >
                                    {c.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
