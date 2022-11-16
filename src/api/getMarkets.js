import { client } from "./client";

export const getMarkets = async () => {
  const markets = await client.get("/market/read");
  return markets;
};
