import { RootState } from "@redux/store";
import MovieType from "modules/MovieList/types/Movie.type"

export const filterMoviesByFilter = (movieList: MovieType[], filterList: RootState['filter']['selectedFilters']) => {
  if (!movieList.length) return []; 
  if (filterList.length === 1 && filterList[0] === -1) return movieList;
  return movieList?.filter((movie) => movie.genre_ids.filter((filterId) => filterList.includes(filterId)).length > 0);
}