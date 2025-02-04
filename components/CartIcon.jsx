"use client";

import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function CartIcon() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <div className="relative">
      <ShoppingCart className="cursor-pointer" size={32} />
      {totalItems > 0 && (
        <span
          className={`${
            totalItems > 10 ? "size-8" : "size-6"
          } absolute -top-4 -right-2 bg-gray-900 text-gray-50 text-[14px] font-semibold flex items-center justify-center rounded-full`}
        >
          {totalItems > 10 ? "10+" : totalItems}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
