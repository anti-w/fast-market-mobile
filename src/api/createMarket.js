import { client } from "./client";

export const createMarket = async (marketName) => {
  try {
    const newMarket = await client.post("/market/create", {
      name: marketName,
    });

    return newMarket;
  } catch (error) {
    console.log(error);
  }
};
