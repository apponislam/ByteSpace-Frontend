import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            />
            <div className="relative z-10 w-full min-h-screen flex flex-col">{children}</div>
        </div>
    );
}
