import React from "react";
import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the ByteSpace team for inquiries, course partnerships, technical assistance, or enterprise learning solutions.",
};

export default function ContactPage() {
    return <ContactClient />;
}
