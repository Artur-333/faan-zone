import { fetcher } from "@/lib/fetcher";
import { ApiRoutes } from "@/services/constants";
import { usePathname } from "next/navigation";
import useSWR from "swr";

interface ReturnProps {
  data: Array<any>;
  error: any;
  isLoading: boolean;
}

export const useBanners = (): ReturnProps => {
  const pathname = usePathname();

  const locale =
    pathname.split("/").find((el) => el === "hy" || el === "en") || "";
  const {
    data: banners,
    error,
    isLoading,
  } = useSWR(ApiRoutes.BANNER + "?locale=" + locale, fetcher);

  const data = isLoading || error ? {} : banners;

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
