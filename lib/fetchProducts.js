export async function fetchProducts() {
  try {
    const res = await fetch("/data/products.json");
    if (!res.ok) throw new Error("Failed to load products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // or return an empty array [] if needed
  }
}
