"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";

export default function Home() {
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
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-md space-y-2 group"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-[14px]">{product.description}</p>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
