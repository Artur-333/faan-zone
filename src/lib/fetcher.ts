import { axiosInstance } from "@/services/instance";

export const fetcher = async (url: string) => axiosInstance.get(url)
  .then((res) => res.data)