"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function Home() {
  const dispatch = useDispatch();

  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="bg-slate-50 min-h-screen pb-10 px-3">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-teal-100 px-[1.5rem] py-[2rem] rounded-md space-y-3 group border border-teal-200/50"
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  quality={80}
                  placeholder="blur"
                  blurDataURL={product.blurDataUrl}
                  className="w-full h-[13rem] object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="text-lg flex items-center justify-between">
                <h2 className="font-semibold">{product.name}</h2>
                <h3 className="font-semibold">${product.price}</h3>
              </div>

              <p className="text-[14px]">{product.description}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-gray-900 font-semibold text-slate-50 px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
