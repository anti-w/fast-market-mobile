import { client } from "./client";

export const createCategory = async (marketId, name, order, icon) => {
  try {
    const { data } = await client.post(`/category/${marketId}/create`, {
      name,
      order,
      icon,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
