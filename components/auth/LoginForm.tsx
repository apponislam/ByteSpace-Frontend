"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    void data;
  };

  return (
    <div className="w-full max-w-[540px] bg-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl">
      <span className="text-[#0052FE] text-xs sm:text-sm font-semibold tracking-wide">
        Sign In
      </span>
      <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-zinc-900 tracking-tight mt-1 leading-tight">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs sm:text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="designer@example.com"
            {...register("email")}
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-zinc-900 text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none transition-all ${
              errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-zinc-200 focus:ring-2 focus:ring-[#0052FE]/30 focus:border-[#0052FE]"
            }`}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs sm:text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-zinc-900 text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none transition-all ${
              errors.password
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-zinc-200 focus:ring-2 focus:ring-[#0052FE]/30 focus:border-[#0052FE]"
            }`}
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-11 sm:h-12 px-8 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t border-zinc-200" />
        <span className="flex-shrink mx-4 text-xs text-zinc-400 font-medium">or</span>
        <div className="flex-grow border-t border-zinc-200" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="size-12 sm:size-14 rounded-2xl border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer"
        >
          <svg className="size-5 fill-[#1877F2]" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="size-12 sm:size-14 rounded-2xl border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer"
        >
          <svg className="size-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-xs sm:text-sm text-zinc-500 mt-8">
        New user?{" "}
        <Link href="/register" className="text-[#0052FE] hover:underline font-semibold">
          Create an account
        </Link>
      </div>
    </div>
  );
}
