import { client } from "./client";

export const createMarket = async (marketName) => {
  try {
    const { data } = await client.post("/market/create", {
      name: marketName,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
