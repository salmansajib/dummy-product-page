"use client";

import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

function Products() {
  const dispatch = useDispatch();

  const { data: products, error, isError, isLoading } = useProducts();

  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));

      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        ariaLive: "polite",
        draggable: true,
        closeButton: true,
        hideProgressBar: false,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);

      toast.error("Failed to add product to cart. Please try again.", {
        position: "top-right",
        autoClose: 2000,
        ariaLive: "assertive", // Stronger accessibility notice
        draggable: true,
        closeButton: true,
        hideProgressBar: false,
      });
    }
  };

  if (isLoading)
    return (
      <div className="min-h-screen grid place-content-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#111827"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (isError) return <p>Error loading products: {error.message}</p>;

  return (
    <main className="container mx-auto pt-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-teal-100 px-[1.5rem] py-[2rem] rounded-lg space-y-4 group border border-teal-200/50"
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
                className="w-full h-[13rem] object-cover group-hover:scale-110 transition-all duration-200"
              />
            </div>

            <div className=" flex items-center justify-between">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <h3 className="font-semibold font-mono text-[16px]">
                ${product.price}
              </h3>
            </div>

            <p className="text-[14px]">{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-gray-900 font-semibold text-slate-50 px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
