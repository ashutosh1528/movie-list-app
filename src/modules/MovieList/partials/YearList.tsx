import useGetYearWiseMovieList from 'services/useGetYearWiseMovieList';
import useVisibility from '../useTest';
import MovieCard from '../components/MovieCard';
import '../scss/yearList.scss';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import MovieType from '../types/Movie.type';

const YearList = ({ year }: { year: string }) => {
  const [visible, refx] = useVisibility<HTMLDivElement>(100, year === '2012');
  const filterSelected = useSelector((state: RootState) => state?.filter?.selectedFilter);
  const { isLoading, isSuccess, isFetching, data: moviesList } = useGetYearWiseMovieList({ year, isVisible: true });
  const [movieToShow, setMoviesToShow] = useState<MovieType[]>([]);

  useEffect(() => {
    if (isSuccess && (moviesList?.results || [])?.length > 0) {
      if (filterSelected === -1) {
        setMoviesToShow(moviesList?.results || []);
      } else {
        setMoviesToShow((moviesList?.results || [])?.filter((movie) => movie.genre_ids.includes(filterSelected)));
      }
    }
  }, [isFetching, moviesList, filterSelected, isSuccess]);

  const getUI = useCallback(() => {
    if (movieToShow?.length > 0)
      return (
        <div>
          <div className="yearList__year">{year}</div>
          <div className="yearList__container__movies">
            {movieToShow?.map((movie) => {
              return <MovieCard {...movie} />;
            })}
          </div>
        </div>
      );
    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return <></>;
  }, [movieToShow, isLoading, year]);

  return <div ref={refx}>{getUI()}</div>;
};

export default YearList;
