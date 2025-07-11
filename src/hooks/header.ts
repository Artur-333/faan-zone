import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { ApiRoutes } from '@/services/constants';

export const useHeader = () => {
  const { data, error, isLoading } = useSWR(ApiRoutes.HEADER, fetcher);

const tables = data?.tables.length > 0? data.tables : [];

  return {
    data: error || isLoading ? [] : data,
    isLoading,
    isError: error,
    tables
  };
};