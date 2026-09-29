"use client";

import React from "react";

export default function OpenCookiesButton() {
    const handleOpenCookies = () => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("open-cookie-settings"));
        }
    };

    return (
        <button
            type="button"
            onClick={handleOpenCookies}
            className="px-6 py-2.5 rounded-full bg-[#003BE2] text-white font-semibold text-sm hover:bg-[#002eb3] transition-colors shadow-sm cursor-pointer"
        >
            Open Cookies Settings
        </button>
    );
}
