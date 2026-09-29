import React from "react";
import type { Metadata } from "next";
import CreatorListView from "@/components/creators/CreatorListView";

export const metadata: Metadata = {
    title: "Meet Our Creators",
    description: "Discover top educators, designers, and innovators sharing their knowledge and creating world-class courses on ByteSpace.",
};

export default function CreatorsPage() {
    return <CreatorListView />;
}
