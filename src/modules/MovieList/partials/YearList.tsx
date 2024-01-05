import useGetYearWiseMovieList from 'services/useGetYearWiseMovieList';
import useVisibility from '../hooks/useIsVisible';
import MovieCard from '../components/MovieCard';
import '../scss/yearList.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import MovieType from '../types/Movie.type';
import { filterMoviesByFilter } from 'utils/filterMoviesByFilters';

const YearList = ({ year }: { year: string }) => {
  const currentElement = useRef<HTMLDivElement>(null);
  const [visible] = useVisibility<HTMLDivElement>({ offset: 280 * 5, currentElement, year });
  const { isLoading, isSuccess, isFetching, data: moviesList } = useGetYearWiseMovieList({ year, isVisible: visible });
  const selectedFilters = useSelector((state: RootState) => state?.filter?.selectedFilters);
  const [movieToShow, setMoviesToShow] = useState<MovieType[]>([]);

  useEffect(() => {
    if (isSuccess && (moviesList?.results || [])?.length > 0) {
      setMoviesToShow(filterMoviesByFilter(moviesList?.results || [], selectedFilters));
    }
  }, [isFetching, moviesList, selectedFilters, isSuccess]);

  const getUI = useCallback(() => {
    if (visible || movieToShow?.length > 0)
      return (
        <div>
          <div className="yearList__year">{movieToShow?.length > 0 && year}</div>
          <div className="yearList__container__movies">
            {movieToShow?.map((movie) => {
              return <MovieCard {...movie} />;
            })}
          </div>
        </div>
      );
    if (isLoading) {
      return <div style={{ height: 280 }}>Loading ...</div>;
    }
    return <></>;
  }, [movieToShow, isLoading, year, visible]);

  return (
    <div ref={currentElement} style={{ minHeight: isSuccess && movieToShow?.length === 0 && visible ? 0 : 280 }}>
      {getUI()}
    </div>
  );
};

export default YearList;
