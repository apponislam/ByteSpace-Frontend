"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, BarChart2, Star, Users, Play, Check, Copy } from "lucide-react";
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
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [videoBottom, setVideoBottom] = useState<number | null>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const shareMenuRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
                setIsShareOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleShare = async () => {
        const currentUrl = typeof window !== "undefined" ? window.location.href : "";
        const shareText = `Check out ${title} on ByteSpace`;

        if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
            try {
                await navigator.share({
                    title,
                    text: shareText,
                    url: currentUrl,
                });
                return;
            } catch (err: unknown) {
                if ((err as Error)?.name === "AbortError") {
                    return;
                }
                setIsShareOpen((prev) => !prev);
            }
        } else {
            setIsShareOpen((prev) => !prev);
        }
    };

    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareToSocial = (platform: "facebook" | "whatsapp" | "twitter" | "linkedin" | "telegram") => {
        const currentUrl = typeof window !== "undefined" ? window.location.href : "";
        const text = `Check out ${title} on ByteSpace`;
        let targetUrl = "";

        switch (platform) {
            case "facebook":
                targetUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
                break;
            case "whatsapp":
                targetUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${currentUrl}`)}`;
                break;
            case "twitter":
                targetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`;
                break;
            case "linkedin":
                targetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
                break;
            case "telegram":
                targetUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`;
                break;
        }

        if (targetUrl) {
            window.open(targetUrl, "_blank", "noopener,noreferrer");
            setIsShareOpen(false);
        }
    };

    return (
        <div className="relative w-full flex flex-col bg-white">
            <div
                className="absolute top-0 inset-x-0 bg-[#003BE2] pointer-events-none z-0 transition-[height] duration-150 ease-out"
                style={{
                    height: videoBottom ? `${videoBottom}px` : undefined,
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            >
                {!videoBottom && <div className="w-full h-180 sm:h-200 md:h-220 lg:h-235" />}
            </div>

            <div className="relative z-10 w-full pt-32.5 sm:pt-37.5 md:pt-40 pb-16 sm:pb-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="max-w-3xl">
                            <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">{title}</h1>
                            <p className="mt-2 text-white/90 text-sm sm:text-base md:text-lg font-normal">Unlock the Power of Digital Creation with Expert Guidance</p>
                            <p className="mt-3 text-sm text-white/80 font-normal">
                                by{" "}
                                <Link href={authorHref} className="text-white hover:text-[#D4FB20] font-semibold underline underline-offset-4 transition-colors">
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

                        <div className="relative self-start shrink-0" ref={shareMenuRef}>
                            <button type="button" onClick={handleShare} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#c3ea1a] text-black font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md cursor-pointer">
                                <Share2 className="size-4 text-black" />
                                <span>Share</span>
                            </button>

                            {isShareOpen && (
                                <div className="absolute right-0 mt-3 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl border border-zinc-200/80 p-3 z-50">
                                    <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-zinc-400 uppercase">Share this course</div>

                                    <div className="mt-1 flex flex-col gap-1">
                                        <button type="button" onClick={() => shareToSocial("whatsapp")} className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 hover:bg-[#25D366]/10 hover:text-[#128C7E] transition-colors cursor-pointer w-full text-left">
                                            <span className="size-7 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.586 1.761.884 2.79.885h.002c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.022-.475-1.697-.703-2.784-2.433-2.869-2.546-.084-.114-.689-.918-.689-1.752 0-.834.437-1.246.593-1.417.156-.172.341-.215.455-.215.114 0 .228.001.328.006.105.005.247-.04.386.294.144.349.493 1.205.536 1.293.043.088.072.191.014.306-.057.115-.086.186-.171.286-.086.1-.18.223-.257.3-.086.086-.176.18-.076.352.1.172.443.731.952 1.184.655.583 1.207.764 1.379.85.172.086.272.072.373-.043.101-.115.437-.508.552-.682.115-.174.23-.145.387-.087.157.058.995.469 1.166.555.171.086.286.129.328.201.043.072.043.419-.101.824z" />
                                                </svg>
                                            </span>
                                            <span>WhatsApp</span>
                                        </button>

                                        <button type="button" onClick={() => shareToSocial("facebook")} className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-colors cursor-pointer w-full text-left">
                                            <span className="size-7 rounded-full bg-[#1877F2]/15 flex items-center justify-center text-[#1877F2] shrink-0">
                                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </span>
                                            <span>Facebook</span>
                                        </button>

                                        <button type="button" onClick={() => shareToSocial("twitter")} className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 hover:bg-black/5 hover:text-black transition-colors cursor-pointer w-full text-left">
                                            <span className="size-7 rounded-full bg-black/10 flex items-center justify-center text-zinc-950 shrink-0">
                                                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </span>
                                            <span>X (Twitter)</span>
                                        </button>

                                        <button type="button" onClick={() => shareToSocial("linkedin")} className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors cursor-pointer w-full text-left">
                                            <span className="size-7 rounded-full bg-[#0A66C2]/15 flex items-center justify-center text-[#0A66C2] shrink-0">
                                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </span>
                                            <span>LinkedIn</span>
                                        </button>

                                        <button type="button" onClick={() => shareToSocial("telegram")} className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 hover:bg-[#229ED9]/10 hover:text-[#229ED9] transition-colors cursor-pointer w-full text-left">
                                            <span className="size-7 rounded-full bg-[#229ED9]/15 flex items-center justify-center text-[#229ED9] shrink-0">
                                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.323-.62.323l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.843.913z" />
                                                </svg>
                                            </span>
                                            <span>Telegram</span>
                                        </button>
                                    </div>

                                    <div className="mt-2 pt-2 border-t border-zinc-100">
                                        <button type="button" onClick={handleCopyLink} className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-zinc-50 hover:bg-zinc-100 text-zinc-900 transition-colors cursor-pointer">
                                            <span className="flex items-center gap-2">
                                                <Copy className="size-4 text-zinc-500" />
                                                <span>Copy Link</span>
                                            </span>
                                            {copied ? (
                                                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                                                    <Check className="size-3.5" />
                                                    <span>Copied</span>
                                                </span>
                                            ) : (
                                                <span className="text-[11px] text-zinc-400">Click to copy</span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        <div className="lg:col-span-8 flex flex-col">
                            <div ref={videoRef} className="relative w-full aspect-16/10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-zinc-900 shadow-2xl border-4 border-white group">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                                    alt="Course Video Preview"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                                    <button type="button" aria-label="Play Course Preview" className="size-16 sm:size-20 rounded-full bg-white/75 hover:bg-white backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
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
                                            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive ? "bg-[#D4FB20] text-black shadow-xs" : "bg-[#F4F4F6] text-zinc-700 hover:bg-zinc-200"}`}
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
