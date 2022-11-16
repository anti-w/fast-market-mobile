import { client } from "./client";

export const getCategories = async (marketId) => {
  const categories = await client.get(`/category/${marketId}/read`);
  return categories;
};
