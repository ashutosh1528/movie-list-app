import { FilterChipType } from '../types/FilterChip.type';
import '../scss/filterChip.scss';

const FilterChip = ({ name, id, isSelected }: FilterChipType) => {
  if (name)
    return (
      <button className={`filterChip${isSelected ? '--selected' : ''}`}>
        {name}
      </button>
    );
  return null;
};

export default FilterChip;
