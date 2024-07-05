import axios from "axios";

const URL = "https://sweet-worthy-wren.ngrok-free.app";

export const Instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
