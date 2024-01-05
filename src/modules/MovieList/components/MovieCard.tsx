import '../scss/movieCard.scss';
import MovieType from '../types/Movie.type';
import NoPoster from 'assets/NoPoster.jpg';

const MovieCard = ({ poster_path, vote_average, title, overview }: MovieType) => {
  if (!title) return null;
  return (
    <div className="movieCard__container" key={`${title}-${overview?.slice(0, 20) || ''}`}>
      <div className="movieCard__container__inner">
        <div className="movieCard__container__front">
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="movieTitle"
            width={'100%'}
            height={'100%'}
            onError={(e) => {
              e.currentTarget.src = NoPoster;
            }}
          />
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
