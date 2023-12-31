import useGetYearWiseMovieList from 'services/useGetYearWiseMovieList';
import useVisibility from '../useTest';
import MovieCard from '../components/MovieCard';
import '../scss/yearList.scss';

const YearList = ({ year }: { year: string }) => {
  const [visible, refx] = useVisibility<HTMLDivElement>(100, year === '2012');
  const { isLoading, data: moviesList } = useGetYearWiseMovieList({ year, isVisible: true });

  const getUI = () => {
    if (visible || (moviesList?.results || [])?.length > 0)
      return (
        <div>
          <div className="yearList__year">{year}</div>
          <div className="yearList__container__movies">
            {moviesList?.results?.map((movie) => {
              return <MovieCard {...movie} />;
            })}
          </div>
        </div>
      );
    if (visible && isLoading) {
      return <div>Loading ...</div>;
    }
    return <></>;
  };
  return <div ref={refx}>{getUI()}</div>;
};

export default YearList;
