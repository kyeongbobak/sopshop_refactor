import axios from "axios";

const URL = "https://openmarket.weniv.co.kr";

export const Instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
