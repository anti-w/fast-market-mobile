import { client } from "./client";

export const getProducts = async (categoryId) => {
  try {
    const productsByCategory = await client.get(`/product/${categoryId}/read`);
    return productsByCategory;
  } catch (error) {
    console.log("Error getProducts");
  }
};
