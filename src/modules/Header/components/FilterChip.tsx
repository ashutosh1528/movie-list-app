import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { setSelectedFilter } from '@redux/filter.slice';
import GenreType from '../types/Genre.type';
import '../scss/filterChip.scss';
import { useMemo } from 'react';

const FilterChip = ({ name, id }: GenreType) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state: RootState) => state.filter.selectedFilters);
  const isFilterSelected = useMemo(() => {
    return selectedFilters.includes(id);
  }, [id, selectedFilters]);

  const handleChipClick = () => {
    if (isFilterSelected) {
      dispatch(setSelectedFilter({ id, isAlreadySelected: true }));
    } else {
      dispatch(setSelectedFilter({ id, isAlreadySelected: false }));
    }
  };

  if (name)
    return (
      <button className={`filterChip${isFilterSelected ? '--selected' : ''}`} onClick={handleChipClick}>
        {name}
      </button>
    );
  return null;
};

export default FilterChip;
