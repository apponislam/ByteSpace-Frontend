import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

export interface CourseCardProps {
    id?: string | number;
    image?: string;
    title?: string;
    author?: {
        name: string;
        href?: string;
    };
    lessonsCount?: number | string;
    duration?: string;
    commentsCount?: number | string;
    rating?: number | string;
    level?: string;
    enrolledStudents?: {
        avatars?: string[];
        count?: string | number;
    };
    price?: number | string;
    pricePeriod?: string;
    href?: string;
    className?: string;
}

export default function CourseCard({
    image = "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    title = "Learn Figma from Basic",
    author = { name: "purepearl studio", href: "/creators/purepearl" },
    lessonsCount = "17 Lessons",
    duration = "2 hours 16 mins",
    commentsCount = "59 Comments",
    rating = 4.5,
    level = "Beginner",
    enrolledStudents = {
        avatars: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"],
        count: "26+",
    },
    price = 25,
    pricePeriod = "lifetime",
    href = "/courses/learn-figma-from-basic",
    className = "",
}: CourseCardProps) {
    const formattedLessons = typeof lessonsCount === "number" ? `${lessonsCount} Lessons` : lessonsCount;
    const formattedComments = typeof commentsCount === "number" ? `${commentsCount} Comments` : commentsCount;
    const formattedPrice = typeof price === "number" ? `$${price}` : price.startsWith("$") ? price : `$${price}`;

    return (
        <div className={`group w-full bg-white rounded-[32px] border border-zinc-200/80 p-4 sm:p-5 flex flex-col justify-between font-satoshi shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
            <div>
                <div className="relative w-full aspect-video rounded-[22px] overflow-hidden bg-zinc-100">
                    <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1 sm:gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-zinc-700 shadow-xs whitespace-nowrap">{formattedLessons}</span>
                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-zinc-700 shadow-xs whitespace-nowrap">{duration}</span>
                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-zinc-700 shadow-xs whitespace-nowrap">{formattedComments}</span>
                    </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                    <Link href={href} title={title} className="flex-1 min-w-0 group-hover:text-[#0052FE] transition-colors">
                        <h3 title={title} className="font-sans font-semibold text-[20px] leading-snug tracking-tight text-zinc-950 truncate">
                            {title}
                        </h3>
                    </Link>

                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                        <span className="text-zinc-600 font-semibold text-sm sm:text-base">{rating}</span>
                        <Star className="size-4 fill-zinc-300 text-zinc-300" />
                    </div>
                </div>

                <p className="mt-1 text-sm text-zinc-500 font-normal">
                    by{" "}
                    <Link href={author.href || "#"} className="text-[#0052FE] hover:underline font-medium">
                        {author.name}
                    </Link>
                </p>

                <div className="mt-5 flex items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3F4F6] text-zinc-700 text-xs sm:text-sm font-medium">
                        <BarChart2 className="size-3.5 text-zinc-600" />
                        <span>{level}</span>
                    </div>

                    {enrolledStudents?.avatars && enrolledStudents.avatars.length > 0 && (
                        <div className="flex items-center">
                            {enrolledStudents.avatars.slice(0, 4).map((avatar, idx) => (
                                <div key={idx} style={{ zIndex: idx + 1 }} className={`relative size-8 rounded-full overflow-hidden ${idx > 0 ? "-ml-3" : ""}`}>
                                    <img src={avatar} alt="Student" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {enrolledStudents.count && (
                                <div style={{ zIndex: 10 }} className="relative -ml-3 size-8 rounded-full bg-[#D4FB20] text-black text-xs font-bold flex items-center justify-center  shrink-0">
                                    {enrolledStudents.count}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 pt-2 flex items-baseline">
                <span className="font-clash font-bold text-2xl sm:text-3xl text-[#0052FE] tracking-tight">{formattedPrice}</span>
                <span className="text-zinc-500 text-xs sm:text-sm font-normal ml-1">/{pricePeriod}</span>
            </div>
        </div>
    );
}
