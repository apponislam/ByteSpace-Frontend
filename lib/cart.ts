export interface CartItem {
    id: string;
    slug: string;
    title: string;
    category: string;
    instructor: string;
    price: number;
    image: string;
}

const CART_STORAGE_KEY = "bytespace_cart";
export const CART_UPDATED_EVENT = "bytespace_cart_updated";
export const OPEN_CART_EVENT = "bytespace_open_cart";

export function getStoredCart(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
        const data = localStorage.getItem(CART_STORAGE_KEY);
        if (!data) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function saveCart(items: CartItem[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, { detail: items }));
    } catch (err) {
        console.error("Failed to save cart to localStorage", err);
    }
}

export function addToCart(item: CartItem): { added: boolean; alreadyExists: boolean } {
    if (typeof window === "undefined") return { added: false, alreadyExists: false };
    const current = getStoredCart();
    const exists = current.some((c) => c.id === item.id || c.slug === item.slug);

    if (exists) {
        // Trigger cart open even if already in cart
        window.dispatchEvent(new CustomEvent(OPEN_CART_EVENT));
        return { added: false, alreadyExists: true };
    }

    const updated = [item, ...current];
    saveCart(updated);
    window.dispatchEvent(new CustomEvent(OPEN_CART_EVENT));
    return { added: true, alreadyExists: false };
}

export function removeFromCart(id: string): void {
    const current = getStoredCart();
    const updated = current.filter((item) => item.id !== id && item.slug !== id);
    saveCart(updated);
}
