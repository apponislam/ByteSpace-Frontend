import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCreatorBySlug, creatorsData, getCoursesByCreator } from "@/data/creator";
import CreatorDetailsView from "@/components/creators/CreatorDetailsView";

interface CreatorPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return creatorsData.map((creator) => ({
        slug: creator.slug,
    }));
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
    const { slug } = await params;
    const creator = getCreatorBySlug(slug) || getCreatorBySlug("purepearl") || creatorsData[0];

    return {
        title: `${creator.name} - Creator Profile | ByteSpace`,
        description: creator.bio,
    };
}

export default async function CreatorDetailPage({ params }: CreatorPageProps) {
    const { slug } = await params;
    const creator = getCreatorBySlug(slug) || getCreatorBySlug("purepearl") || creatorsData[0];

    if (!creator) {
        notFound();
    }

    const courses = getCoursesByCreator(creator.slug);

    return <CreatorDetailsView creator={creator} courses={courses} />;
}
