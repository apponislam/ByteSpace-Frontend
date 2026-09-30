import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden">
            {/* Ambient drifting glowing orbs */}
            <div
                className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none select-none blur-[100px] animate-glow-drift-1"
                style={{
                    background: "radial-gradient(circle, rgba(212, 251, 32, 0.28) 0%, rgba(212, 251, 32, 0.08) 50%, transparent 80%)",
                }}
            />
            {/* <div
                className="absolute -bottom-36 -right-36 w-150 h-150 rounded-full pointer-events-none select-none blur-[120px] animate-glow-drift-2"
                style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.06) 50%, transparent 80%)",
                }}
            /> */}
            <div
                className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none select-none blur-[130px] animate-hero-glow"
                style={{
                    background: "radial-gradient(circle, rgba(0, 150, 255, 0.2) 0%, transparent 70%)",
                }}
            />

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
