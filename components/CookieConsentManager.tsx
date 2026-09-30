"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Cookie, Settings, Check, X, Info, Lock } from "lucide-react";

export interface CookiePreferences {
    essential: boolean; // Always true
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
    timestamp?: string;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
};

export default function CookieConsentManager() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showBanner, setShowBanner] = useState<boolean>(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(() => {
        if (typeof window !== "undefined") {
            try {
                const stored = localStorage.getItem("bytespace_cookie_preferences");
                if (stored) return JSON.parse(stored);
            } catch {}
        }
        return DEFAULT_PREFERENCES;
    });
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    useEffect(() => {
        // Check stored preferences for banner visibility
        try {
            const stored = localStorage.getItem("bytespace_cookie_preferences");
            if (!stored) {
                const timer = setTimeout(() => setShowBanner(true), 1000);
                return () => clearTimeout(timer);
            }
        } catch {
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        // Event listener for opening settings from Footer or Privacy Policy
        const handleOpenSettings = () => {
            setIsOpen(true);
        };

        window.addEventListener("open-cookie-settings", handleOpenSettings);
        return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
    }, []);

    const savePreferences = (newPrefs: CookiePreferences) => {
        const payload = {
            ...newPrefs,
            essential: true,
            timestamp: new Date().toISOString(),
        };
        setPreferences(payload);
        try {
            localStorage.setItem("bytespace_cookie_preferences", JSON.stringify(payload));
        } catch (e) {
            console.error("Failed to save cookie preferences:", e);
        }
        setShowBanner(false);
        setIsOpen(false);
        showToast("Cookie preferences updated successfully!");
    };

    const handleAcceptAll = () => {
        const allPrefs = {
            essential: true,
            analytics: true,
            functional: true,
            marketing: true,
        };
        savePreferences(allPrefs);
    };

    const handleRejectNonEssential = () => {
        const essentialOnly = {
            essential: true,
            analytics: false,
            functional: false,
            marketing: false,
        };
        savePreferences(essentialOnly);
    };

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    };

    return (
        <>
            {/* Notification Toast */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-100 bg-zinc-900 text-white text-xs sm:text-sm px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 border border-zinc-700 animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <Check className="w-4 h-4 text-[#D4FB20]" />
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Bottom Cookie Banner for First-Time Visitors */}
            {showBanner && !isOpen && (
                <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 font-satoshi">
                        <div className="flex items-start gap-3 max-w-3xl">
                            <div className="p-2.5 bg-[#D4FB20]/20 text-black rounded-xl shrink-0 mt-0.5">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-clash font-bold text-base text-zinc-900">We respect your privacy</h4>
                                <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. You can manage your preferences at any time.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
                            <button type="button" onClick={() => setIsOpen(true)} className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors border border-zinc-200 flex items-center gap-1.5 cursor-pointer">
                                <Settings className="w-4 h-4" />
                                Preferences
                            </button>
                            <button type="button" onClick={handleRejectNonEssential} className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors border border-zinc-200 cursor-pointer">
                                Reject Optional
                            </button>
                            <button type="button" onClick={handleAcceptAll} className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#D4FB20] text-black hover:bg-[#c3ea1a] transition-all cursor-pointer shadow-sm">
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cookie Settings Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-90 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-satoshi">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <div className="p-2 bg-[#D4FB20]/30 text-black rounded-xl shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-clash font-bold text-base sm:text-lg text-zinc-900 leading-tight">Cookie Preference Center</h3>
                                    <p className="text-[11px] sm:text-xs text-zinc-500">Manage how cookies are used on ByteSpace</p>
                                </div>
                            </div>
                            <button type="button" onClick={() => setIsOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer shrink-0" aria-label="Close">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 flex-1">
                            <div className="p-3.5 sm:p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-600 leading-relaxed flex items-start gap-2.5">
                                <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                                <p>When you visit ByteSpace, we store and retrieve information on your browser using cookies. You can choose not to allow some types of cookies, but blocking them may impact your site experience.</p>
                            </div>

                            {/* Cookie Category Cards */}
                            <div className="space-y-3 sm:space-y-4">
                                {/* Essential */}
                                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="space-y-1">
                                            <h5 className="font-bold text-sm text-zinc-900 leading-tight">Strictly Necessary Cookies</h5>
                                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-200 text-zinc-700 inline-flex items-center gap-1 w-fit">
                                                <Lock className="w-3 h-3 shrink-0" /> Always Active
                                            </span>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-not-allowed opacity-60 shrink-0 mt-0.5" aria-label="Always active lock indicator">
                                            <div className="w-10 h-5.5 bg-zinc-900 rounded-full"></div>
                                            <div className="absolute right-0.5 w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-normal">These cookies are essential for the website to function, enabling security, account authentication, and core platform operations. They cannot be disabled.</p>
                                </div>

                                {/* Analytics */}
                                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                        <h5 className="font-bold text-sm text-zinc-900 leading-tight">Performance &amp; Analytics Cookies</h5>
                                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                                            <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} className="sr-only peer" />
                                            <div className="w-10 h-5.5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4.5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-zinc-900"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-normal">Help us understand how visitors interact with our courses and pages by collecting anonymous aggregate usage data, enabling continuous performance improvements.</p>
                                </div>

                                {/* Functional */}
                                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                        <h5 className="font-bold text-sm text-zinc-900 leading-tight">Functional Cookies</h5>
                                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                                            <input type="checkbox" checked={preferences.functional} onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })} className="sr-only peer" />
                                            <div className="w-10 h-5.5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4.5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-zinc-900"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-normal">Enable enhanced functionality and personalization, such as remembering your course progress, video playback settings, and interface preferences.</p>
                                </div>

                                {/* Marketing */}
                                <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                        <h5 className="font-bold text-sm text-zinc-900 leading-tight">Marketing &amp; Targeting Cookies</h5>
                                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                                            <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} className="sr-only peer" />
                                            <div className="w-10 h-5.5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4.5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-zinc-900"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-normal">Used to deliver relevant recommendations and advertisements tailored to your learning interests across our partner network.</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-zinc-100 bg-zinc-50/50 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                            <button type="button" onClick={handleRejectNonEssential} className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-medium text-zinc-700 hover:bg-zinc-200/60 transition-colors cursor-pointer text-center border border-zinc-200 sm:border-transparent">
                                Reject Non-Essential
                            </button>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                                <button type="button" onClick={handleAcceptAll} className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-medium border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer text-center">
                                    Accept All
                                </button>
                                <button type="button" onClick={() => savePreferences(preferences)} className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-[#D4FB20] text-black hover:bg-[#c3ea1a] transition-all cursor-pointer shadow-sm text-center">
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
