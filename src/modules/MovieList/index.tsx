import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import YearList from './partials/YearList';
import MovieSearchList from './partials/MovieSearchList';
import './scss/index.scss';

const MovieList = () => {
  const query = useSelector((state: RootState) => state?.movie?.searchQuery);

  if (!query) {
    const arr = Array.from({ length: 116 }, (_, i) => i + 1908);
    return (
      <div className="movieList__container">
        {arr.map((year) => (
          <YearList year={year?.toString()} />
        ))}
      </div>
    );
  }

  return <MovieSearchList />;
};

export default MovieList;
