import React from "react";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className="fixed top-0 z-50 bg-neutral-50/50 backdrop-blur-md w-full px-3">
      <div className="container mx-auto flex items-center justify-between h-[80px]">
        <h1 className="text-2xl font-bold mb-5">Products</h1>
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
