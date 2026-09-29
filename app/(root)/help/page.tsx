"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, BookOpen, CreditCard, UserCheck, Award, HelpCircle, ChevronDown, Mail, ArrowRight } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        {
            icon: BookOpen,
            title: "Course Access",
            description: "Video player issues, lesson downloads, and access permissions.",
        },
        {
            icon: CreditCard,
            title: "Billing & Refunds",
            description: "Payment methods, invoices, subscription tiers, and refund policy.",
        },
        {
            icon: UserCheck,
            title: "Account & Profile",
            description: "Password reset, email changes, two-factor auth, and notifications.",
        },
        {
            icon: Award,
            title: "Certificates",
            description: "Earning course completion badges and sharing to LinkedIn.",
        },
    ];

    const faqs: FAQItem[] = [
        {
            question: "How do I access my enrolled courses?",
            answer: "Once you purchase or enroll in a course, it will immediately appear in your user dashboard under 'My Courses'. You can stream all video lessons, access attached resources, and track your progress at any time.",
        },
        {
            question: "Do courses come with lifetime access?",
            answer: "Yes! All courses purchased on ByteSpace include lifetime access to current lessons and all future curriculum updates published by the instructor.",
        },
        {
            question: "What is your refund policy?",
            answer: "We offer a 30-day money-back guarantee on all eligible courses. If you are not satisfied with the content, you can request a full refund through your account settings or by contacting support within 30 days of purchase.",
        },
        {
            question: "Can I download course lessons for offline viewing?",
            answer: "While primary video streaming is optimized through our web player, downloadable resources (such as Figma files, project code repositories, worksheets, and asset bundles) are fully available to download.",
        },
        {
            question: "How do I contact an instructor?",
            answer: "Each course features a dedicated Q&A and community discussion tab where you can post questions directly to the instructor and engage with other students enrolled in the course.",
        },
        {
            question: "How can I become an instructor on ByteSpace?",
            answer: "We are always looking for talented creators! Check out our Creators directory or reach out directly through our creator onboarding program to apply to publish courses on ByteSpace.",
        },
    ];

    const filteredFaqs = searchQuery.trim() ? faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) : faqs;

    return (
        <div className="w-full flex flex-col min-h-screen bg-white font-satoshi text-zinc-800">
            {/* Hero Section */}
            <section className="relative w-full bg-[#003BE2] overflow-hidden pt-35 sm:pt-40 md:pt-48 pb-16 sm:pb-20">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 backdrop-blur-sm border border-white/15">Support & Knowledge Base</span>
                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">How can we help you?</h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">Find answers to common questions about courses, payments, account management, and learning on ByteSpace.</p>

                    {/* Quick Search Bar */}
                    <div className="mt-8 w-full max-w-lg">
                        <div className="relative text-zinc-900">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-zinc-400 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for answers (e.g. refund, access, certificate)..."
                                className="w-full h-14 pl-13 pr-6 rounded-full bg-white placeholder:text-zinc-400 text-sm sm:text-base font-normal shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-[#D4FB20]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16 sm:space-y-20">
                {/* Categories Grid */}
                <section>
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <span className="text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider">Browse by Topic</span>
                        <h2 className="font-clash text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">Explore Help Categories</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {categories.map((cat, i) => {
                            const Icon = cat.icon;
                            return (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md transition-all group">
                                    <div className="size-11 rounded-xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center mb-4 group-hover:bg-[#0052FE] group-hover:text-white transition-colors">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="font-bold text-zinc-900 text-base">{cat.title}</h3>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">{cat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider mb-1">
                            <HelpCircle className="size-4" />
                            <span>Frequently Asked Questions</span>
                        </div>
                        <h2 className="font-clash text-2xl sm:text-3xl font-bold text-zinc-900">Quick Answers to Common Questions</h2>
                    </div>

                    {filteredFaqs.length === 0 ? (
                        <div className="p-8 text-center bg-zinc-50 rounded-2xl border border-zinc-200">
                            <p className="text-zinc-600 text-sm">No answers matching &ldquo;{searchQuery}&rdquo;</p>
                            <button type="button" onClick={() => setSearchQuery("")} className="mt-2 text-xs font-semibold text-[#0052FE] hover:underline cursor-pointer">
                                Clear search
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredFaqs.map((faq, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div key={idx} className="border border-zinc-200 rounded-2xl overflow-hidden bg-white transition-colors">
                                        <button type="button" onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-zinc-900 text-sm sm:text-base hover:bg-zinc-50/75 transition-colors cursor-pointer">
                                            <span>{faq.question}</span>
                                            <ChevronDown className={`size-4 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-zinc-900" : ""}`} />
                                        </button>
                                        {isOpen && <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">{faq.answer}</div>}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* Contact Support Banner */}
                <section className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <span className="text-xs sm:text-sm font-bold text-[#D4FB20] uppercase tracking-wider">Still Need Help?</span>
                            <h3 className="font-clash text-2xl sm:text-3xl font-bold text-white mt-1">Our support team is here for you</h3>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">Can&apos;t find what you are looking for? Reach out to our customer care team and we&apos;ll get back to you within 24 hours.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <a href="mailto:support@bytespace.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold px-6 py-3 text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md cursor-pointer">
                                <Mail className="size-4" />
                                Email Support
                            </a>
                            <Link href="/courses" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white font-semibold px-6 py-3 text-sm hover:bg-white/20 active:scale-95 transition-all border border-white/15 cursor-pointer">
                                Browse Courses <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
