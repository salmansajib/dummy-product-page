import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
