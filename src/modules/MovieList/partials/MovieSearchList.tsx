/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from '@redux/store';
import { useCallback, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import useSearchMovieList from 'services/useSearchMovieList';
import MovieCard from '../components/MovieCard';
import '../scss/movieSearchList.scss';

const MovieSearchList = () => {
  const query = useSelector((state: RootState) => state?.movie?.searchQuery);
  const observer = useRef<IntersectionObserver>();
  const { isLoading, data, hasNextPage, isFetching, fetchNextPage } = useSearchMovieList({ query });
  const movieList = useMemo(() => (data ? data?.pages?.flatMap((i) => i.results) : []), [data]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, isFetching, hasNextPage]
  );

  if (isLoading) {
    return <div>Loading movies ...</div>;
  }
  return (
    <div className="movieSearchList__container__movies">
      {movieList.map((movie, idx) => (
        <div ref={movieList.length === idx + 1 ? lastElementRef : null}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieSearchList;
