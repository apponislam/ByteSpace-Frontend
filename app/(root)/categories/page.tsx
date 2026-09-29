import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
    Code,
    Palette,
    TrendingUp,
    Server,
    Briefcase,
    Camera,
    PlaySquare,
    Music,
    DollarSign,
    Utensils,
    Activity,
    Layers,
    ArrowRight,
} from "lucide-react";
import { categoriesData, getCoursesByCategory } from "@/data/category";

export const metadata: Metadata = {
    title: "Browse Course Categories",
    description: "Explore all learning categories on ByteSpace including design, web development, IT, marketing, photography, and business.",
};

const iconMap: Record<string, React.ElementType> = {
    Code,
    Palette,
    TrendingUp,
    Server,
    Briefcase,
    Camera,
    PlaySquare,
    Music,
    DollarSign,
    Utensils,
    Activity,
};

export default function CategoriesPage() {
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
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 backdrop-blur-sm border border-white/15">
                        <Layers className="size-3.5 text-[#D4FB20]" />
                        Course Catalog
                    </span>
                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
                        Explore All Categories
                    </h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                        Discover top-rated online courses curated across in-demand disciplines. Find the craft that matches your passion and career goals.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categoriesData.map((cat) => {
                        const Icon = iconMap[cat.icon] || Code;
                        const coursesCount = getCoursesByCategory(cat.slug).length;

                        return (
                            <Link
                                key={cat.slug}
                                href={`/categories/${cat.slug}`}
                                className="group p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="size-13 rounded-2xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center group-hover:bg-[#0052FE] group-hover:text-white transition-colors">
                                            <Icon className="size-6" />
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200/70 text-zinc-700">
                                            {coursesCount} {coursesCount === 1 ? "Course" : "Courses"}
                                        </span>
                                    </div>

                                    <h3 className="font-clash font-bold text-xl sm:text-2xl text-zinc-900 group-hover:text-[#0052FE] transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs font-semibold text-[#0052FE] group-hover:text-black transition-colors">
                                    <span>Browse {cat.name}</span>
                                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
