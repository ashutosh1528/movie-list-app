import YearList from './partials/YearList';
import './scss/index.scss';

const MovieList = () => {
  const arr = Array.from({ length: 116 }, (_, i) => i + 1908);
  return (
    <div className="movieList__container">
      {arr.map((year) => (
        <YearList year={year?.toString()} />
      ))}
    </div>
  );
};

export default MovieList;
