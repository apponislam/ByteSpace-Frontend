import React from "react";
import type { Metadata } from "next";
import OpenCookiesButton from "@/components/OpenCookiesButton";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read ByteSpace's privacy policy to understand how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
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
                    <h1 className="font-clash text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="mt-4 text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">Last updated: September 29, 2026. Please read our policy regarding how we collect, use, and safeguard your information.</p>
                </div>
            </section>

            {/* Basic & Normal Content Body */}
            <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl space-y-10 text-base leading-relaxed">
                {/* Introduction */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">1. Introduction</h2>
                    <p>Welcome to ByteSpace. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our platform and tells you about your privacy rights.</p>
                </section>

                {/* Information We Collect */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">2. Information We Collect</h2>
                    <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                        <li>
                            <strong>Identity Data:</strong> Name, username, or similar identifiers.
                        </li>
                        <li>
                            <strong>Contact Data:</strong> Email address, phone number, and billing address.
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser type, device information, and time zone settings.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how you use our website, courses, and learning resources.
                        </li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">3. How We Use Your Data</h2>
                    <p>We use your personal data for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                        <li>To register you as a new student or user on ByteSpace.</li>
                        <li>To deliver courses, process payments, and provide customer support.</li>
                        <li>To send important updates, security alerts, and service announcements.</li>
                        <li>To improve our website, products, and overall user experience.</li>
                    </ul>
                </section>

                {/* Cookies */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">4. Cookies & Tracking</h2>
                    <p>We use cookies to distinguish you from other users and customize your experience. You can choose to enable or disable optional cookies through your settings.</p>
                    <div className="pt-2">
                        <OpenCookiesButton />
                    </div>
                </section>

                {/* Data Security */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">5. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, accessed in an unauthorized way, altered, or disclosed.</p>
                </section>

                {/* Your Rights */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">6. Your Legal Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your data.</p>
                </section>

                {/* Contact Us */}
                <section className="space-y-4">
                    <h2 className="font-clash text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">7. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
                        <a href="mailto:support@bytespace.com" className="text-[#003BE2] underline font-medium">
                            support@bytespace.com
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
}
