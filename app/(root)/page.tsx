import React from "react";
import type { Metadata } from "next";
import HeroArea from "@/components/home/HeroArea";
import Companies from "@/components/home/Companies";
import CategorySection from "@/components/home/CategorySection";
import ExloreSection from "@/components/home/ExloreSection";
import GrowthSection from "@/components/home/GrowthSection";
import UnlockSection from "@/components/home/UnlockSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export const metadata: Metadata = {
    title: "ByteSpace — Modern E-Learning & Digital Course Platform",
    description: "Unlock your creativity and level up your skills with hundreds of interactive online courses in UI/UX design, web development, marketing, and business taught by top industry creators.",
};

export default function Home() {
    return (
        <>
            <HeroArea />
            <Companies />
            <CategorySection />
            <ExloreSection />
            <GrowthSection />
            <UnlockSection />
            <TestimonialSection />
        </>
    );
}
