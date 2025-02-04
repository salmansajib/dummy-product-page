import React from "react";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className=" bg-neutral-50 w-full px-3">
      <div className="container mx-auto flex items-center justify-between h-[100px]">
        <h1 className="text-2xl font-bold mb-5">Products</h1>
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
