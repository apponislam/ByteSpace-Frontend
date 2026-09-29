import React from "react";
import type { Metadata } from "next";
import HelpClient from "@/components/help/HelpClient";

export const metadata: Metadata = {
    title: "Help Center & FAQ",
    description: "Find instant answers to common questions about course access, certificates, billing, refunds, and account management on ByteSpace.",
};

export default function HelpPage() {
    return <HelpClient />;
}
