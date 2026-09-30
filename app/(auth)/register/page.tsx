import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import AuthVisual from "@/components/auth/AuthVisual";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
    title: "Create an Account",
    description: "Create your ByteSpace account to start learning from expert creators and building digital skills.",
};

export default function RegisterPage() {
    return (
        <div className="w-full flex-1 flex flex-col justify-between p-4 sm:p-6 lg:p-10">
            <div className="container mx-auto w-full">
                <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg p-1 transition-transform duration-200 active:scale-95">
                    <Image src="/logo.svg" alt="ByteSpace Logo" width={34} height={38} priority className="h-8 sm:h-9 w-auto object-contain" />
                    <span className="font-clash font-bold tracking-tight text-white text-xl sm:text-2xl">ByteSpace</span>
                </Link>
            </div>

            <div className="container mx-auto w-full flex-1 flex items-center justify-center my-6 sm:my-8 lg:my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14 w-full">
                    <div className="flex justify-center w-full">
                        <AuthVisual title="Sign in with ease" subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge." />
                    </div>

                    <div className="flex justify-center lg:justify-end w-full">
                        <RegisterForm />
                    </div>
                </div>
            </div>

            <div className="container mx-auto w-full" />
        </div>
    );
}
