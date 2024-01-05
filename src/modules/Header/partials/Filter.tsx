import useGetGenreList from 'services/useGetGenreList';
import FilterChip from '../components/FilterChip';
import '../scss/filter.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const Filter = () => {
  const query = useSelector((state: RootState) => state?.movie?.searchQuery);
  const { isLoading, isSuccess, data: genreList } = useGetGenreList();

  if (!!query) return null;

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isSuccess && (genreList?.genres || [])?.length > 0) {
    return (
      <div className="filter__container">
        {genreList?.genres?.map((filter, idx) => (
          <FilterChip {...filter} key={`${filter.name}-${String(filter.id)}-${idx}`} />
        ))}
      </div>
    );
  }
  return null;
};

export default Filter;
