import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - ByteSpace",
    description: "Review the Terms of Service and conditions governing the use of ByteSpace.",
};

export default function TermsOfServicePage() {
    return (
        <div className="w-full flex flex-col min-h-screen bg-white font-satoshi text-zinc-800">
            {/* Top Hero Section matching Courses Hero background style */}
            <section className="relative w-full bg-[#003BE2] overflow-hidden pt-35 sm:pt-40 md:pt-47.5 pb-16 sm:pb-20">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                    <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
                    <p className="mt-4 text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">Effective date: September 29, 2026. Please read these terms carefully before using ByteSpace.</p>
                </div>
            </section>

            {/* Basic & Normal Content Body */}
            <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl space-y-10 text-base leading-relaxed">
                {/* Agreement to Terms */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">1. Agreement to Terms</h2>
                    <p>By accessing or using ByteSpace, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                </section>

                {/* User Accounts */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">2. User Accounts</h2>
                    <p>When creating an account on ByteSpace, you must provide accurate and complete information. You are responsible for keeping your password secure and for all activities that occur under your account.</p>
                </section>

                {/* Course Purchases & Refunds */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">3. Purchases & Refunds</h2>
                    <p>All course purchases are subject to availability and acceptance. We offer a 30-day refund guarantee for eligible courses if you are not satisfied with your purchase.</p>
                </section>

                {/* Intellectual Property */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">4. Intellectual Property</h2>
                    <p>All content provided on ByteSpace, including course materials, text, graphics, logos, and video content, is the property of ByteSpace or its instructors and is protected by copyright and intellectual property laws.</p>
                </section>

                {/* Acceptable Use */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">5. Acceptable Use</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                        <li>Share your account credentials or course access with third parties.</li>
                        <li>Download, record, or re-distribute course materials without permission.</li>
                        <li>Use ByteSpace for any unlawful or unauthorized activity.</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">6. Limitation of Liability</h2>
                    <p>ByteSpace and its creators shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our services.</p>
                </section>

                {/* Contact Us */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">7. Contact Us</h2>
                    <p>
                        If you have any questions regarding these Terms of Service, please contact us at:{" "}
                        <a href="mailto:legal@bytespace.com" className="text-[#003BE2] underline font-medium">
                            legal@bytespace.com
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
}
