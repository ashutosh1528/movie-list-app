import '../scss/movieCard.scss';
import MovieType from '../types/Movie.type';

const MovieCard = ({ poster_path, vote_average }: MovieType) => {
  return (
    <div className="movieCard__container">
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="movieTitle" width={'100%'} height={'100%'} />
      <span className="movieCard__rating">{vote_average}/10</span>
    </div>
  );
};

export default MovieCard;
