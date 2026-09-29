"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ReviewsTab() {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

  const ratingBars = [
    { stars: 5, count: 720, percent: 85 },
    { stars: 4, count: 120, percent: 50 },
    { stars: 3, count: 21, percent: 20 },
    { stars: 2, count: 12, percent: 10 },
    { stars: 1, count: 16, percent: 14 },
  ];

  const reviews = [
    {
      id: 1,
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      date: "a year ago",
      rating: 5,
      content:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      date: "a year ago",
      rating: 5,
      content:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      date: "a year ago",
      rating: 5,
      content:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      date: "a year ago",
      rating: 5,
      content:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  const ratingFilters = [
    { label: "All rating", value: "all" },
    { label: "5", value: 5 },
    { label: "4", value: 4 },
    { label: "3", value: 3 },
    { label: "2", value: 2 },
    { label: "1", value: 1 },
  ];

  return (
    <div className="flex flex-col gap-8 text-zinc-700">
      <div>
        <h3 className="font-bold text-xl sm:text-2xl text-zinc-950 tracking-tight">
          What Learners Are Saying
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
          Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
          transformative journey of mastering digital asset creation.
        </p>
      </div>

      <div className="w-full border border-zinc-200 rounded-2xl p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-xs">
        <div className="size-28 sm:size-32 rounded-2xl bg-[#D4FB20] flex flex-col items-center justify-center shrink-0 text-black">
          <span className="text-xs font-semibold">Ratings</span>
          <span className="font-clash font-bold text-3xl sm:text-4xl leading-tight">4.7</span>
        </div>

        <div className="flex-1 w-full flex flex-col gap-2.5">
          {ratingBars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-3 text-xs text-zinc-600">
              <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D4FB20] rounded-full"
                  style={{ width: `${bar.percent}%` }}
                />
              </div>

              <div className="flex items-center gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3.5 ${
                      i < bar.stars
                        ? "fill-zinc-800 text-zinc-800"
                        : "text-zinc-300"
                    }`}
                  />
                ))}
              </div>

              <span className="w-8 text-right font-medium shrink-0">{bar.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-base sm:text-lg text-zinc-950 tracking-tight mb-3">
          Individual Reviews:
        </h4>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {ratingFilters.map((filter) => {
            const isActive = selectedRating === filter.value;
            return (
              <button
                key={filter.label}
                type="button"
                onClick={() => setSelectedRating(filter.value as number | "all")}
                className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-black font-semibold shadow-xs"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {filter.value !== "all" && (
                  <Star className="size-3 fill-zinc-800 text-zinc-800" />
                )}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="border border-zinc-200/90 rounded-2xl p-5 sm:p-6 bg-white flex flex-col gap-3 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative size-10 rounded-full overflow-hidden shrink-0 bg-zinc-100">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-zinc-950 leading-tight">
                      {rev.name}
                    </h5>
                    <span className="text-xs text-zinc-500 font-normal">{rev.role}</span>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 font-normal">{rev.date}</span>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-zinc-800 text-zinc-800" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                &quot;{rev.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
