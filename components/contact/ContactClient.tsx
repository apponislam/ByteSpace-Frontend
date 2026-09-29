"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowRight, ChevronDown, Check } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactClient() {
    const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "General Inquiry",
            message: "",
        },
    });

    const currentSubject = watch("subject");

    const topics = [
        { value: "General Inquiry", label: "General Inquiry", desc: "General questions and platform feedback" },
        { value: "Course Question", label: "Course Question", desc: "Curriculum, prerequisites, and learning materials" },
        { value: "Billing & Refunds", label: "Billing & Refunds", desc: "Payments, subscriptions, and refund requests" },
        { value: "Creator Partnership", label: "Creator Partnership", desc: "Publishing courses and instructor onboarding" },
        { value: "Technical Support", label: "Technical Support", desc: "Bug reports, video playback, and account issues" },
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

    const onSubmit = (data: ContactFormData) => {
        setSubmittedData(data);
    };

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
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 backdrop-blur-sm border border-white/15">Get in Touch</span>
                    <h1 className="font-clash text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">Contact Our Team</h1>
                    <p className="mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">Have a question about a course, partnership, or enterprise training? We&apos;re here to help you every step of the way.</p>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left Info Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <span className="text-xs sm:text-sm font-bold text-[#0052FE] uppercase tracking-wider">Reach Out</span>
                            <h2 className="font-clash text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">Let&apos;s talk about your goals</h2>
                            <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">Fill out the contact form and our support team will get back to you within 24 business hours.</p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                                <div className="size-10 rounded-xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center shrink-0">
                                    <Mail className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-sm">Email Us</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">support@bytespace.com</p>
                                    <p className="text-[11px] text-zinc-400 mt-0.5">Direct response within 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                                <div className="size-10 rounded-xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center shrink-0">
                                    <MapPin className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-sm">Headquarters</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">750 Innovation Way, Suite 400</p>
                                    <p className="text-[11px] text-zinc-400 mt-0.5">San Francisco, CA 94103</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                                <div className="size-10 rounded-xl bg-white border border-zinc-200 text-[#0052FE] flex items-center justify-center shrink-0">
                                    <Clock className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-sm">Support Hours</h4>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">Monday &ndash; Friday</p>
                                    <p className="text-[11px] text-zinc-400 mt-0.5">9:00 AM &ndash; 6:00 PM EST</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Help Card */}
                        <div className="p-6 rounded-2xl bg-zinc-900 text-white">
                            <h4 className="font-clash font-bold text-base text-white">Need an immediate answer?</h4>
                            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Browse our knowledge base for instant guidance on account access, refunds, and course streaming.</p>
                            <Link href="/help" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4FB20] hover:underline mt-3">
                                Visit Help Center <ArrowRight className="size-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
                        {submittedData ? (
                            <div className="py-12 flex flex-col items-center text-center">
                                <div className="size-16 rounded-full bg-[#D4FB20]/20 text-[#0052FE] flex items-center justify-center mb-4">
                                    <CheckCircle2 className="size-10 text-emerald-600" />
                                </div>
                                <h3 className="font-clash text-2xl font-bold text-zinc-900">Message Sent!</h3>
                                <p className="text-zinc-600 text-sm max-w-sm mt-2 leading-relaxed">
                                    Thank you, <strong className="text-zinc-900">{submittedData.name}</strong>. We have received your inquiry regarding <span className="font-semibold text-zinc-800">{submittedData.subject}</span> and will reply to <strong className="text-zinc-900">{submittedData.email}</strong> within 24 hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmittedData(null);
                                        reset();
                                    }}
                                    className="mt-6 rounded-full bg-zinc-100 text-zinc-800 font-semibold px-6 py-2.5 text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                                    <MessageSquare className="size-5 text-[#0052FE]" />
                                    <h3 className="font-clash text-xl font-bold text-zinc-900">Send Us a Message</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                                            Your Name <span className="text-red-500">*</span>
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
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Subject / Topic</label>
                                    <div ref={dropdownRef} className="relative text-zinc-900">
                                        <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#D4FB20] transition-all bg-white hover:bg-zinc-50/50 cursor-pointer" aria-haspopup="listbox" aria-expanded={dropdownOpen}>
                                            <span className="font-medium text-zinc-900">{currentSubject}</span>
                                            <ChevronDown className={`size-4 text-zinc-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-zinc-900" : ""}`} />
                                        </button>

                                        {dropdownOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-100 p-1.5 z-30 animate-in fade-in slide-in-from-top-1 duration-150">
                                                <div className="space-y-1" role="listbox">
                                                    {topics.map((t) => {
                                                        const isSelected = currentSubject === t.value;
                                                        return (
                                                            <button
                                                                key={t.value}
                                                                type="button"
                                                                onClick={() => {
                                                                    setValue("subject", t.value, { shouldValidate: true });
                                                                    setDropdownOpen(false);
                                                                }}
                                                                className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-colors cursor-pointer ${isSelected ? "bg-zinc-100/90 text-zinc-900 font-semibold" : "text-zinc-700 hover:bg-zinc-50"}`}
                                                                role="option"
                                                                aria-selected={isSelected}
                                                            >
                                                                <div>
                                                                    <div className="text-sm">{t.label}</div>
                                                                    <div className="text-[11px] text-zinc-500 font-normal">{t.desc}</div>
                                                                </div>
                                                                {isSelected && <Check className="size-4 text-[#0052FE] shrink-0" />}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <div className="text-zinc-900">
                                        <textarea rows={5} placeholder="Tell us what you need help with..." {...register("message")} className={`w-full px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-zinc-400 resize-none focus:outline-none ${errors.message ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-zinc-200 focus:ring-2 focus:ring-[#D4FB20]"}`} />
                                    </div>
                                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                                </div>

                                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold px-8 py-3.5 text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50">
                                    <Send className="size-4" />
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
