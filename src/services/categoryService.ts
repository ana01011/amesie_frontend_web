import { Category } from "../types";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://76.13.17.48:8001/api/categories/");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data;
};