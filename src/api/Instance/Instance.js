import axios from "axios";

const URL = "https://sweet-worthy-wren.ngrok-free.app/api/v1";

export const Instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
