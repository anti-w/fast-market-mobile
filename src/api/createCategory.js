import { client } from "./client";

export const createCategory = async (marketId, category) => {
  try {
    const { data } = await client.post(`/category/${marketId}/create`, {
      name: category.name,
      order: Number(category.order),
      icon: category.icon,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
