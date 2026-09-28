"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  Check,
} from "lucide-react";
import AboutTab from "./AboutTab";
import LessonsTab from "./LessonsTab";
import ReviewsTab from "./ReviewsTab";
import CourseSidebar from "./CourseSidebar";
import { Course } from "@/data/course";

interface CourseDetailsViewProps {
  course?: Course;
}

export default function CourseDetailsView({ course }: CourseDetailsViewProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lesson" | "reviews">("about");
  const [copied, setCopied] = useState(false);
  const [videoBottom, setVideoBottom] = useState<number | null>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const title = course?.title || "Build Digital Asset: A Comprehensive Guide";
  const authorName = course?.author?.name || "purepearl studio";
  const authorHref = course?.author?.href || "/creators/purepearl";
  const level = course?.level || "Intermediate";
  const rating = course?.rating || 4.8;
  const price = course?.price || 25;
  const pricePeriod = course?.pricePeriod || "lifetime";

  const tabs = [
    { id: "about", label: "About" },
    { id: "lesson", label: "Lesson" },
    { id: "reviews", label: "Reviews" },
  ];

  useEffect(() => {
    const updatePosition = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const bottom = rect.bottom + window.scrollY + 48;
        setVideoBottom(bottom);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full flex flex-col bg-white">
      <div
        className="absolute top-0 inset-x-0 bg-[#003BE2] pointer-events-none z-0 transition-[height] duration-150 ease-out"
        style={{
          height: videoBottom ? `${videoBottom}px` : undefined,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "120px 120px",
        }}
      >
        {!videoBottom && (
          <div className="w-full h-[720px] sm:h-[800px] md:h-[880px] lg:h-[940px]" />
        )}
      </div>

      <div className="relative z-10 w-full pt-[130px] sm:pt-[150px] md:pt-[160px] pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {title}
              </h1>
              <p className="mt-2 text-white/90 text-sm sm:text-base md:text-lg font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-3 text-sm text-white/80 font-normal">
                by{" "}
                <Link
                  href={authorHref}
                  className="text-white hover:text-[#D4FB20] font-semibold underline underline-offset-4 transition-colors"
                >
                  {authorName}
                </Link>
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-semibold shadow-xs">
                  <BarChart2 className="size-4 text-[#003BE2]" />
                  <span>{level}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-semibold shadow-xs">
                  <Star className="size-4 fill-[#003BE2] text-[#003BE2]" />
                  <span>{rating} (172 reviews)</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-semibold shadow-xs">
                  <Users className="size-4 text-[#003BE2]" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#c3ea1a] text-black font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-black" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="size-4 text-black" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 flex flex-col">
              <div
                ref={videoRef}
                className="relative w-full aspect-[16/10] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-zinc-900 shadow-2xl border-4 border-white group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Course Video Preview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play Course Preview"
                    className="size-16 sm:size-20 rounded-full bg-white/75 hover:bg-white backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Play className="size-7 sm:size-8 fill-zinc-950 text-zinc-950 ml-1" />
                  </button>
                </div>
              </div>

              <div className="mt-20 sm:mt-24 md:mt-28 flex items-center gap-2 sm:gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#D4FB20] text-black shadow-xs"
                          : "bg-[#F4F4F6] text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 sm:mt-10">
                {activeTab === "about" && <AboutTab />}
                {activeTab === "lesson" && <LessonsTab />}
                {activeTab === "reviews" && <ReviewsTab />}
              </div>
            </div>

            <div className="lg:col-span-4 sticky top-24 sm:top-28">
              <CourseSidebar price={price} pricePeriod={pricePeriod} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
