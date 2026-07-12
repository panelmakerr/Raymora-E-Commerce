import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, qty: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size) => {
        const items = get().items;
        const idx = items.findIndex(
          (i) => i.productId === product.id && i.size === size
        );
        if (idx > -1) {
          const copy = [...items];
          copy[idx].quantity += 1;
          set({ items: copy });
        } else {
          set({ items: [...items, { productId: product.id, product, size, quantity: 1 }] });
        }
      },

      removeItem: (productId, size) => {
        set({ items: get().items.filter((i) => !(i.productId === productId && i.size === size)) });
      },

      updateQuantity: (productId, size, qty) => {
        if (qty <= 0) {
          get().removeItem(productId, size);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId && i.size === size ? { ...i, quantity: qty } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => get().items.reduce((t, i) => t + i.product.price * i.quantity, 0),

      getCount: () => get().items.reduce((c, i) => c + i.quantity, 0),
    }),
    { name: "raymora-cart" }
  )
);
