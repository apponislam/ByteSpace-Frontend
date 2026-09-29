"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Video, Award, MessageSquare, Check } from "lucide-react";
import { Course } from "@/data/course";
import { CartItem, addToCart, getStoredCart, CART_UPDATED_EVENT } from "@/lib/cart";

interface CourseSidebarProps {
  course?: Course;
  price?: number;
  pricePeriod?: string;
}

export default function CourseSidebar({
  course,
  price = 25,
  pricePeriod = "lifetime",
}: CourseSidebarProps) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      const cart = getStoredCart();
      const courseId = course?.id || "course-bda";
      const courseSlug = course?.slug || "build-digital-asset";
      setInCart(cart.some((item) => item.id === courseId || item.slug === courseSlug));
    };

    checkCart();
    window.addEventListener(CART_UPDATED_EVENT, checkCart);
    window.addEventListener("storage", checkCart);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, checkCart);
      window.removeEventListener("storage", checkCart);
    };
  }, [course]);

  const handleEnroll = () => {
    const item: CartItem = {
      id: course?.id || "course-bda",
      slug: course?.slug || "build-digital-asset",
      title: course?.title || "Build Digital Asset: A Comprehensive Guide",
      category: course?.category || "Creative Marketing",
      instructor: course?.author?.name || "PurePearl Studio",
      price: course?.price ?? price,
      image: course?.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    };
    addToCart(item);
    setInCart(true);
  };

  const previewLessons = [
    { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ];

  const includes = [
    { icon: FileText, label: "Learning Resources" },
    { icon: Video, label: "Quality Lesson Videos" },
    { icon: Award, label: "Certificate of Completion" },
    { icon: MessageSquare, label: "Private Consultation" },
  ];

  const actualPrice = course?.price ?? price;
  const actualPeriod = course?.pricePeriod ?? pricePeriod;
  const authorName = course?.author?.name || "PurePearl Studio";
  const authorAvatar = course?.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80";
  const authorHref = course?.author?.href || "/creators/purepearl";

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-zinc-100 flex flex-col gap-6">
      <div>
        <h3 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight">
          112 Lessons (24 hours)
        </h3>

        <div className="mt-4 flex flex-col gap-3">
          {previewLessons.map((lesson) => (
            <div
              key={lesson.number}
              className="flex items-center justify-between text-xs sm:text-sm text-zinc-700"
            >
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="text-zinc-400 font-medium shrink-0">{lesson.number}</span>
                <span className="truncate hover:text-[#0052FE] transition-colors cursor-pointer">
                  {lesson.title}
                </span>
              </div>
              <span className="text-[#0052FE] font-medium shrink-0">{lesson.duration}</span>
            </div>
          ))}
          <p className="text-xs text-zinc-400 font-medium mt-1">99 more videos</p>
        </div>

        <p className="mt-5 text-xs text-zinc-500 leading-relaxed font-normal">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="mt-5 flex items-baseline gap-1">
          <span className="font-clash font-bold text-3xl sm:text-4xl text-[#0052FE] tracking-tight">
            ${actualPrice}
          </span>
          <span className="text-zinc-500 text-sm font-normal">/{actualPeriod}</span>
        </div>

        <button
          type="button"
          onClick={handleEnroll}
          className="mt-4 w-full h-12 sm:h-13 rounded-full bg-[#D4FB20] hover:bg-[#c3ea1a] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm cursor-pointer"
        >
          {inCart ? (
            <>
              <Check className="size-5 text-black stroke-[2.5]" />
              <span>Added to Cart &bull; View</span>
            </>
          ) : (
            <span>Enroll Now</span>
          )}
        </button>
      </div>

      <div className="border-t border-zinc-100 pt-5">
        <h4 className="font-bold text-sm sm:text-base text-zinc-950 mb-3.5">
          This course include
        </h4>
        <div className="flex flex-col gap-3">
          {includes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700">
                <Icon className="size-4 text-[#0052FE] shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-zinc-100 pt-5">
        <div className="flex items-center gap-3">
          <div className="relative size-11 rounded-full overflow-hidden shrink-0 bg-zinc-200">
            <Image
              src={authorAvatar}
              alt={authorName}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="font-bold text-sm text-zinc-900 leading-tight">
              {authorName}
            </h5>
            <span className="text-xs text-zinc-500">Professional Creator</span>
          </div>
        </div>

        <p className="mt-3 text-xs text-zinc-500 leading-relaxed font-normal">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href={authorHref}
          className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
