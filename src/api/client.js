import axios from "axios";

export const client = axios.create({
  baseURL: "https://fast-market-server-production.up.railway.app",
});
