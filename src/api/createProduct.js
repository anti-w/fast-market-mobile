import { client } from "./client";

export const createProduct = async (categoryId, productData) => {
  try {
    const { data } = await client.post(`/product/${categoryId}/create`, {
      name: productData.name,
      description: productData.description,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
