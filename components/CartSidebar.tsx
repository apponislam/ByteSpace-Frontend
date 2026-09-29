"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Loader2 } from "lucide-react";
import { CartItem, getStoredCart, removeFromCart as removeStoredItem, saveCart, CART_UPDATED_EVENT } from "@/lib/cart";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const emptySubscribe = () => () => {};

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    const [items, setItems] = useState<CartItem[]>([]);
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState("");
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    const handleClose = useCallback(() => {
        setCheckoutSuccess(false);
        setIsCheckingOut(false);
        onClose();
    }, [onClose]);

    // Sync with localStorage
    useEffect(() => {
        const syncCart = () => {
            setItems(getStoredCart());
        };

        syncCart();
        window.addEventListener(CART_UPDATED_EVENT, syncCart);
        window.addEventListener("storage", syncCart);

        return () => {
            window.removeEventListener(CART_UPDATED_EVENT, syncCart);
            window.removeEventListener("storage", syncCart);
        };
    }, []);

    // Lock body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleClose]);

    const removeItem = (id: string) => {
        removeStoredItem(id);
        setItems(getStoredCart());
    };

    const handleApplyPromo = (e: React.FormEvent) => {
        e.preventDefault();
        setPromoError("");
        if (promoCode.trim().toUpperCase() === "BYTE20") {
            setDiscount(0.2); // 20% discount
            setPromoApplied(true);
        } else if (!promoCode.trim()) {
            setPromoError("Please enter a code");
        } else {
            setPromoError("Invalid code. Try BYTE20");
        }
    };

    const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
    const discountAmount = subtotal * discount;
    const total = Math.max(0, subtotal - discountAmount);

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            setCheckoutSuccess(true);
            saveCart([]); // Clears cart in localStorage and updates header badge
        }, 850);
    };

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                onClick={handleClose}
                aria-hidden="true"
                className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-999 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Slide-out Panel */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Shopping Cart"
                className={`fixed top-0 right-0 bottom-0 h-screen w-full sm:w-115 max-w-full bg-white z-1000 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out font-satoshi text-zinc-800 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="p-5 sm:p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/50 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <ShoppingBag className="size-5 text-[#0052FE]" />
                        <h2 className="font-clash font-bold text-xl text-zinc-900">Your Cart</h2>
                        {!checkoutSuccess && (
                            <span className="px-2.5 py-0.5 rounded-full bg-zinc-200 text-zinc-700 text-xs font-semibold">
                                {items.length} {items.length === 1 ? "item" : "items"}
                            </span>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                        aria-label="Close cart"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Success View */}
                {checkoutSuccess ? (
                    <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
                        <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                            <Check className="size-8 stroke-[2.5]" />
                        </div>
                        <h3 className="font-clash font-bold text-2xl text-zinc-900">Enrollment Confirmed!</h3>
                        <p className="text-xs sm:text-sm text-zinc-600 max-w-xs mt-2 leading-relaxed">
                            Thank you for your purchase. You now have full lifetime access to your enrolled courses.
                        </p>

                        <div className="mt-6 w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs space-y-2.5 text-left">
                            <div className="flex justify-between items-center text-zinc-600">
                                <span>Status</span>
                                <span className="font-semibold text-emerald-600 flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Active &bull; Enrolled
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-zinc-600">
                                <span>Access Type</span>
                                <span className="font-medium text-zinc-800">Lifetime Streaming &amp; Resources</span>
                            </div>
                            <div className="flex justify-between items-center text-zinc-600 pt-2 border-t border-zinc-200/60 font-semibold">
                                <span className="text-zinc-900">Payment Status</span>
                                <span className="text-[#0052FE]">Paid</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleClose}
                            className="mt-6 w-full h-12 rounded-full bg-[#0052FE] hover:bg-[#003be2] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
                        >
                            Continue Learning
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Items Container */}
                        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="size-16 rounded-full bg-zinc-100 flex items-center justify-center mb-4 text-zinc-400">
                                        <ShoppingBag className="size-8" />
                                    </div>
                                    <h3 className="font-clash font-bold text-lg text-zinc-900">Your cart is empty</h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 max-w-xs mt-1 leading-relaxed">
                                        You haven&apos;t added any courses yet. Explore our library to level up your craft.
                                    </p>
                                    <Link
                                        href="/courses"
                                        onClick={handleClose}
                                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D4FB20] text-black font-semibold px-6 py-2.5 text-sm hover:bg-[#c3ea1a] transition-all cursor-pointer shadow-sm"
                                    >
                                        Browse Courses <ArrowRight className="size-4" />
                                    </Link>
                                </div>
                            ) : (
                                <div className="divide-y divide-zinc-100">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-start py-4 group">
                                            <Link
                                                href={`/courses/${item.slug}`}
                                                onClick={handleClose}
                                                className="relative size-18 rounded-xl overflow-hidden shrink-0 bg-zinc-100 border border-zinc-200"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="72px"
                                                    className="object-cover group-hover:scale-105 transition-transform"
                                                />
                                            </Link>

                                            <div className="flex-1 min-w-0">
                                                <span className="text-[11px] font-semibold text-[#0052FE] uppercase tracking-wider">
                                                    {item.category}
                                                </span>
                                                <Link
                                                    href={`/courses/${item.slug}`}
                                                    onClick={handleClose}
                                                    className="block font-medium text-zinc-900 text-sm hover:text-[#0052FE] transition-colors line-clamp-2 mt-0.5 leading-snug"
                                                >
                                                    {item.title}
                                                </Link>
                                                <p className="text-xs text-zinc-500 mt-1">By {item.instructor}</p>

                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="font-clash font-bold text-base text-zinc-900">
                                                        ${item.price}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-zinc-400 hover:text-red-500 p-1 rounded-md transition-colors cursor-pointer"
                                                        aria-label={`Remove ${item.title}`}
                                                    >
                                                        <Trash2 className="size-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer / Summary */}
                        {items.length > 0 && (
                            <div className="p-5 sm:p-6 border-t border-zinc-200 bg-zinc-50/75 space-y-4 shrink-0">
                                {/* Promo Code Form */}
                                <form onSubmit={handleApplyPromo} className="flex gap-2">
                                    <div className="relative flex-1 text-zinc-900">
                                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                                        <input
                                            type="text"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            placeholder="Promo code (try BYTE20)"
                                            className="w-full h-10 pl-9 pr-3 rounded-xl border border-zinc-200 bg-white text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#D4FB20]"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="h-10 px-4 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer shrink-0"
                                    >
                                        {promoApplied ? "Applied" : "Apply"}
                                    </button>
                                </form>

                                {promoApplied && (
                                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                                        <Check className="size-3.5" /> 20% discount code applied!
                                    </div>
                                )}
                                {promoError && (
                                    <div className="text-xs text-red-500 font-medium">
                                        {promoError}
                                    </div>
                                )}

                                {/* Calculation lines */}
                                <div className="space-y-1.5 text-xs text-zinc-600 border-t border-zinc-200/60 pt-3">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-zinc-900">${subtotal.toFixed(2)}</span>
                                    </div>
                                    {promoApplied && (
                                        <div className="flex justify-between text-emerald-600">
                                            <span>Discount (20%)</span>
                                            <span>-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between font-clash font-bold text-base text-zinc-900 pt-2 border-t border-zinc-200">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Checkout CTA */}
                                <button
                                    type="button"
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut}
                                    className="w-full h-12 rounded-full bg-[#D4FB20] text-black font-semibold text-sm hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 enabled:cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    {isCheckingOut ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin text-black" />
                                            <span>Processing Checkout...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Proceed to Checkout</span>
                                            <ArrowRight className="size-4" />
                                        </>
                                    )}
                                </button>

                                <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
                                    <ShieldCheck className="size-3.5 text-emerald-600" />
                                    <span>30-Day Money Back Guarantee &bull; Instant Access</span>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </aside>
        </>,
        document.body
    );
}
