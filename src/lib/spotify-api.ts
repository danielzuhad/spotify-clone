import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/me",
});
