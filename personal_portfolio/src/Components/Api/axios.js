import axios from "axios";
// const apiUrl = import.meta.env.VITE_API_URL;

const axiosBase = axios.create({
  baseURL: "https://portfoliobackend.birhann.com/api",
});

export default axiosBase;
