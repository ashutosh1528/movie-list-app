import MovieType from "modules/MovieList/types/Movie.type";
import { useQueryUtility } from "./useQueryUtility";

type GetYearWiseMoiveListPayloadType = {
  primary_release_year: number;
  page: number;
  'vote_count.gte': number;
};

type GetYearWiseMoiveListResponseType = {
  page: number,
  results: MovieType[],
  total_pages: number,
  total_results: number,
}

const useGetYearWiseMovieList = ({ year, isVisible }: { year: string, isVisible: boolean }) => {
  return useQueryUtility<GetYearWiseMoiveListPayloadType, GetYearWiseMoiveListResponseType>({
    url: 'discover/movie',
    payload: {
      primary_release_year: parseInt(year, 10),
      page: 1,
      "vote_count.gte": 100,
    },
    queryConfig: {
      staleTime: Infinity,
      enabled: isVisible && !Number.isNaN(parseInt(year, 10)),
    },
  });
}

export default useGetYearWiseMovieList;