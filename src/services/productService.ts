import { FoodProduct } from "../types";

export const getProducts = async (): Promise<FoodProduct[]> => {
  const res = await fetch("http://76.13.17.48:8001/api/products/");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  // adjust if API wraps response
  return data;
};