import useGetGenreList from 'services/useGetGenreList';
import FilterChip from '../components/FilterChip';
import '../scss/filter.scss';

const Filter = () => {
  const { isLoading, isSuccess, data: genreList } = useGetGenreList();

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
