"use client";

import React from "react";
import { Video } from "lucide-react";

export default function LessonsTab() {
  const modules = [
    {
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-zinc-700">
      <div>
        <h3 className="font-bold text-xl sm:text-2xl text-zinc-950 tracking-tight">
          Explore the Modules
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
          Immerse yourself in the course content as we break down each module into comprehensive lessons,
          providing practical insights and hands-on experiences.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight mb-4">
          Lesson List
        </h4>
        <div className="flex flex-col gap-5">
          {modules.map((mod, index) => (
            <div key={index} className="flex items-start gap-3.5 sm:gap-4">
              <div className="size-11 sm:size-12 rounded-2xl bg-[#D4FB20] flex items-center justify-center shrink-0 mt-0.5">
                <Video className="size-5 sm:size-6 text-black" />
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold text-sm sm:text-base text-zinc-950 leading-tight">
                  {mod.title}
                </h5>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight">
          Lesson Content
        </h4>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
          Engage with each lesson through captivating video content, detailed textual explanations, and
          interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg sm:text-xl text-zinc-950 tracking-tight mb-4">
          Lesson Progress Tracking
        </h4>
        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal mb-5">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        <div className="w-full border border-zinc-200 rounded-2xl p-5 sm:p-6 bg-white shadow-xs">
          <span className="text-xs text-zinc-500 font-medium">Learning Progress</span>
          <div className="font-clash font-bold text-3xl sm:text-4xl text-zinc-950 mt-1">
            55%
          </div>
          <div className="w-full h-2.5 bg-zinc-100 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-[#D4FB20] rounded-full transition-all duration-500"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
