import '../scss/movieCard.scss';
import MovieType from '../types/Movie.type';

const MovieCard = ({ poster_path, vote_average, title, overview }: MovieType) => {
  return (
    <div className="movieCard__container">
      <div className="movieCard__container__inner">
        <div className="movieCard__container__front">
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="movieTitle" width={'100%'} height={'100%'} />
        </div>
        <div className="movieCard__container__back">
          <div className="movieCard__back">
            <div className="movieCard__back__title">{title}</div>
            <div className="movieCard__back__overview">{overview}</div>
            <div className="movieCard__back__rating">{vote_average}/10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
