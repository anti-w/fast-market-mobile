import { client } from "./client";

export const createCategory = async (marketId, data) => {
  try {
    const newCategory = await client.post(`/category/${marketId}/create`, {
      name: data.name,
      order: data.order,
      icon: data.icon,
    });

    return newCategory;
  } catch (error) {
    console.log(error);
  }
};
