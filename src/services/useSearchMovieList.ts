import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieType from "modules/MovieList/types/Movie.type";

type Response = {
  page: number,
  total_pages: number,
  total_results: number,
  results: MovieType[],
}

const useSearchMovieList = ({ query }: { query: string }) => {
  return useInfiniteQuery<Response, unknown, InfiniteData<Response>, QueryKey, { currentPage: number, totalPages: number }>({
    queryKey: [query, '/search/movie'],
    initialPageParam: { currentPage: 0, totalPages: 0 },
    enabled: !!query,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async ({ pageParam, direction }) => {
      console.log(direction, pageParam);
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?page=${pageParam?.currentPage + 1}&api_key=2dca580c2a14b55200e784d157207b4d&query=${query}`
      );
      return data.data;
    },
    getPreviousPageParam: (data) => data?.page !== 1 ?  { currentPage: data?.page, totalPages: data?.total_pages} : undefined,
    getNextPageParam: (data) => data?.page !== data?.total_pages ?  { currentPage: data?.page, totalPages: data?.total_pages} : undefined,
  })
};

export default useSearchMovieList;