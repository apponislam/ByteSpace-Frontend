"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutTab() {
  const sneakPeakImages = [
    {
      url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
      alt: "Wireframing with sketches",
    },
    {
      url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
      alt: "Laptop design screen",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      alt: "Desktop workplace monitor",
    },
    {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      alt: "Mobile prototypes on phones",
    },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="flex flex-col gap-8 text-zinc-700">
      <div>
        <h3 className="font-bold text-xl sm:text-2xl text-zinc-950 tracking-tight">
          Description
        </h3>
        <div className="mt-4 flex flex-col gap-4 text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive
            course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience
            invites you to delve deep into the intricacies of crafting impactful digital content. From laying the
            groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously
            curated to empower you with the skills essential for navigating the dynamic landscape of digital asset
            creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
            concepts that form the backbone of digital asset creation. Understand the fundamental elements that
            constitute compelling digital content and gain proficiency in leveraging these elements to communicate
            effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances
            of design principles that drive impactful creations. Uncover the secrets behind effective visual
            communication, exploring color theory, typography, and layout strategies that elevate your digital assets
            to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
            these principles in practical scenarios.
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight mb-4">
          Sneak Peak
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {sneakPeakImages.map((item, index) => (
            <div
              key={index}
              className="relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/60"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight mb-4">
          Key Points
        </h4>
        <div className="flex flex-col gap-3">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 text-sm sm:text-base text-zinc-800">
              <CheckCircle2 className="size-5 text-[#0052FE] shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
