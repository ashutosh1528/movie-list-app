import GenreType from "modules/Header/types/Genre.type";
import { useQueryUtility } from "./useQueryUtility";

type GetGenreListPayloadType = {
  language: string;
};

type GetGenreListResponseType = {
  genres: GenreType[]
}

const useGetGenreList = () => {
  const tranformFunction = (data: GetGenreListResponseType) => {
    const allGenre = {
      id: -1,
      name: 'All',
    };
    if (data?.genres?.length > 1) {
      data?.genres?.splice(0, 0, { ...allGenre });
    }
    return data;
  }
  return useQueryUtility<GetGenreListPayloadType, GetGenreListResponseType>({
    url: 'genre/movie/list',
    payload: {
      language: 'en',
    },
    queryConfig: {
      staleTime: Infinity,
      enabled: true,
    },
    tranformFunction,
  });
}

export default useGetGenreList;