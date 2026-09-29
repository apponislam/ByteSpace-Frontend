import React from "react";
import type { Metadata } from "next";
import AffiliateClient from "@/components/affiliate/AffiliateClient";

export const metadata: Metadata = {
    title: "Affiliate Program",
    description: "Join the ByteSpace affiliate partner network. Monetize your content, share premium tech courses, and earn up to 30% recurring commissions.",
};

export default function AffiliatePage() {
    return <AffiliateClient />;
}
