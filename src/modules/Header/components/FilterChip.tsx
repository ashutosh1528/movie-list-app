import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { setSelectedFilter } from '@redux/filter.slice';
import { FilterChipType } from '../types/FilterChip.type';
import '../scss/filterChip.scss';

const FilterChip = ({ name, id }: FilterChipType) => {
  const dispatch = useDispatch();
  const selectedFilterId = useSelector((state: RootState) => state.filter.selectedFilter);

  const handleChipClick = () => {
    dispatch(setSelectedFilter(id));
  };

  if (name)
    return (
      <button className={`filterChip${selectedFilterId === id ? '--selected' : ''}`} onClick={handleChipClick}>
        {name}
      </button>
    );
  return null;
};

export default FilterChip;
