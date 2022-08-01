import axios from "axios";

const api = axios.create({
  baseURL: "https://devsomething.ru/",
  timeout: 20000,
});

export default api;
