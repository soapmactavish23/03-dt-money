import axios from "axios";

export const api = axios.create({
  baseURL: "https://house-software.com.br/dt-money-api",
});
