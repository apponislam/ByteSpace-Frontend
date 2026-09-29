"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DollarSign, Percent, TrendingUp, Share2, CheckCircle2, Sparkles, ShieldCheck, Send, ChevronDown, Check } from "lucide-react";

const affiliateSchema = z.object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    channelUrl: z.string().min(1, "Website or channel URL is required").url("Please enter a valid URL including https:// (e.g. https://youtube.com/@channel)"),
    audienceSize: z.string().min(1, "Please select an estimated audience size"),
});

type AffiliateFormData = z.infer<typeof affiliateSchema>;

export default function AffiliateClient() {
    const [submittedData, setSubmittedData] = useState<AffiliateFormData | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<AffiliateFormData>({
        resolver: zodResolver(affiliateSchema),
        defaultValues: {
            name: "",
            email: "",
            channelUrl: "",
            audienceSize: "1,000 – 10,000",
        },
    });

    const currentAudience = watch("audienceSize");

    const audienceOptions = [
        { value: "Under 1,000", label: "Under 1,000", desc: "Just getting started" },
        { value: "1,000 – 10,000", label: "1,000 – 10,000", desc: "Micro-influencer / Growing community" },
        { value: "10,000 – 50,000", label: "10,000 – 50,000", desc: "Established creator / Newsletter" },
        { value: "50,000 – 100,000", label: "50,000 – 100,000", desc: "High-reach content creator" },
        { value: "100,000+", label: "100,000+", desc: "Major publication / Large audience" },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = (data: AffiliateFormData) => {
        setSubmittedData(data);
    };

    const benefits = [
        {
            icon: Percent,
            title: "Up to 30% Commission",
            desc: "Earn industry-leading commission rates on every course purchase made through your unique link.",
        },
        {
            icon: TrendingUp,
            title: "60-Day Cookie Window",
            desc: "Receive credit for course sales even if your referrals purchase up to 60 days after clicking.",
        },
        {
            icon: Share2,
            title: "Ready-to-Use Creatives",
            desc: "Access pre-designed banners, promotional copy, and custom discount codes for your audience.",
        },
        {
            icon: DollarSign,
            title: "Reliable Monthly Payouts",
            desc: "Enjoy hassle-free automatic monthly payouts via PayPal or direct bank transfer on the 1st.",
        },
    ];

    const steps = [
        {
            step: "01",
            title: "Apply in 2 Minutes",
            desc: "Fill out our brief application form below. We review and approve qualified partners within 24 hours.",
        },
        {
            step: "02",
            title: "Share Courses & Links",
            desc: "Recommend courses you love to your community using your unique tracking links and promo banners.",
        },
        {
            step: "03",
            title: "Earn & Track Payouts",
            desc: "Monitor your conversions, impressions, and earnings in real time through our dedicated affiliate portal.",
        },
    ];

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
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 backdrop-blur-sm border border-white/15">
                        <Sparkles className="size-3.5 text-[#D4FB20]" />
                        Partner Program
                    </span>
                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">Earn by Sharing World-Class Courses</h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">Join the ByteSpace Affiliate Network. Monetize your content, empower your audience with practical tech skills, and earn up to 30% on every sale.</p>
                </div>
            </section>

            {/* Benefits Grid */}
            <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16 sm:space-y-20">
                <section>
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider">Why Partner With Us</span>
                        <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mt-1">Everything You Need to Succeed</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div key={i} className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md transition-all group">
                                    <div className="size-12 rounded-2xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center mb-5 group-hover:bg-[#0052FE] group-hover:text-white transition-colors">
                                        <Icon className="size-6" />
                                    </div>
                                    <h3 className="font-clash font-bold text-zinc-900 text-lg">{b.title}</h3>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">{b.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* How It Works Steps */}
                <section className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-14">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-xs sm:text-sm font-bold text-[#D4FB20] uppercase tracking-wider">Simple Process</span>
                        <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {steps.map((s, idx) => (
                            <div key={idx} className="relative space-y-3">
                                <div className="font-clash text-4xl sm:text-5xl font-bold text-[#D4FB20]/40">{s.step}</div>
                                <h3 className="font-clash font-bold text-lg text-white">{s.title}</h3>
                                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Application Form */}
                <section className="max-w-3xl mx-auto bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider mb-1">
                            <ShieldCheck className="size-4" />
                            <span>Quick Application</span>
                        </div>
                        <h2 className="font-clash text-2xl sm:text-3xl font-bold text-zinc-900">Apply to Become a Partner</h2>
                        <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-md mx-auto">Whether you run a blog, YouTube channel, newsletter, or social community, we&apos;d love to collaborate.</p>
                    </div>

                    {submittedData ? (
                        <div className="py-10 flex flex-col items-center text-center">
                            <div className="size-16 rounded-full bg-[#D4FB20]/20 flex items-center justify-center mb-4">
                                <CheckCircle2 className="size-10 text-emerald-600" />
                            </div>
                            <h3 className="font-clash text-2xl font-bold text-zinc-900">Application Received!</h3>
                            <p className="text-zinc-600 text-sm max-w-md mt-2 leading-relaxed">
                                Thank you, <strong className="text-zinc-900">{submittedData.name}</strong>. Our affiliate partnerships team is reviewing your profile and will email your affiliate portal access to <strong className="text-zinc-900">{submittedData.email}</strong> within 24 hours.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSubmittedData(null);
                                    reset();
                                }}
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-800 font-semibold px-6 py-2.5 text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
                            >
                                Submit Another Application
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="text-zinc-900">
                                    <input type="text" placeholder="Alex Smith" {...register("name")} className={`w-full px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-zinc-400 focus:outline-none ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-zinc-200 focus:ring-2 focus:ring-[#D4FB20]"}`} />
                                </div>
                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="text-zinc-900">
                                    <input type="email" placeholder="alex@example.com" {...register("email")} className={`w-full px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-zinc-400 focus:outline-none ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-zinc-200 focus:ring-2 focus:ring-[#D4FB20]"}`} />
                                </div>
                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                                    Website, Blog, or Primary Social Link <span className="text-red-500">*</span>
                                </label>
                                <div className="text-zinc-900">
                                    <input type="url" placeholder="https://youtube.com/@channel or blog URL" {...register("channelUrl")} className={`w-full px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-zinc-400 focus:outline-none ${errors.channelUrl ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-zinc-200 focus:ring-2 focus:ring-[#D4FB20]"}`} />
                                </div>
                                {errors.channelUrl && <p className="text-xs text-red-500 mt-1">{errors.channelUrl.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Estimated Audience Size</label>
                                <div ref={dropdownRef} className="relative text-zinc-900">
                                    <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#D4FB20] transition-all bg-white hover:bg-zinc-50/50 cursor-pointer" aria-haspopup="listbox" aria-expanded={dropdownOpen}>
                                        <span className="font-medium text-zinc-900">{currentAudience}</span>
                                        <ChevronDown className={`size-4 text-zinc-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-zinc-900" : ""}`} />
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-100 p-1.5 z-30 animate-in fade-in slide-in-from-top-1 duration-150">
                                            <div className="space-y-1" role="listbox">
                                                {audienceOptions.map((opt) => {
                                                    const isSelected = currentAudience === opt.value;
                                                    return (
                                                        <button
                                                            key={opt.value}
                                                            type="button"
                                                            onClick={() => {
                                                                setValue("audienceSize", opt.value, { shouldValidate: true });
                                                                setDropdownOpen(false);
                                                            }}
                                                            className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-colors cursor-pointer ${isSelected ? "bg-zinc-100/90 text-zinc-900 font-semibold" : "text-zinc-700 hover:bg-zinc-50"}`}
                                                            role="option"
                                                            aria-selected={isSelected}
                                                        >
                                                            <div>
                                                                <div className="text-sm">{opt.label}</div>
                                                                <div className="text-[11px] text-zinc-500 font-normal">{opt.desc}</div>
                                                            </div>
                                                            {isSelected && <Check className="size-4 text-[#0052FE] shrink-0" />}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {errors.audienceSize && <p className="text-xs text-red-500 mt-1">{errors.audienceSize.message}</p>}
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold py-3.5 text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50">
                                <Send className="size-4" />
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                        </form>
                    )}
                </section>
            </main>
        </div>
    );
}
