import FilterChip from '../components/FilterChip';
import { FilterChipType } from '../types/FilterChip.type';
import '../scss/filter.scss';

const Filter = () => {
  const filterArray: FilterChipType[] = [
    {
      id: -1,
      name: 'All',
      isSelected: true,
    },
    {
      id: 28,
      name: 'Action',
      isSelected: false,
    },
    {
      id: 12,
      name: 'Adventure',
      isSelected: false,
    },
    {
      id: 16,
      name: 'Animation',
      isSelected: false,
    },
    {
      id: 35,
      name: 'Comedy',
      isSelected: false,
    },
    {
      id: 80,
      name: 'Crime',
      isSelected: false,
    },
    {
      id: 99,
      name: 'Documentary',
      isSelected: false,
    },
    {
      id: 18,
      name: 'Drama',
      isSelected: false,
    },
    {
      id: 10751,
      name: 'Family',
      isSelected: false,
    },
    {
      id: 14,
      name: 'Fantasy',
      isSelected: false,
    },
    {
      id: 36,
      name: 'History',
      isSelected: false,
    },
    {
      id: 27,
      name: 'Horror',
      isSelected: false,
    },
    {
      id: 10402,
      name: 'Music',
      isSelected: false,
    },
    {
      id: 9648,
      name: 'Mystery',
      isSelected: false,
    },
    {
      id: 10749,
      name: 'Romance',
      isSelected: false,
    },
    {
      id: 878,
      name: 'Science Fiction',
      isSelected: false,
    },
    {
      id: 10770,
      name: 'TV Movie',
      isSelected: false,
    },
    {
      id: 53,
      name: 'Thriller',
      isSelected: false,
    },
    {
      id: 10752,
      name: 'War',
      isSelected: false,
    },
    {
      id: 37,
      name: 'Western',
      isSelected: false,
    },
  ];
  return (
    <div className="filter__container">
      {filterArray.map((filter) => (
        <FilterChip {...filter} key={`${filter.name}-${filter.id}`} />
      ))}
    </div>
  );
};

export default Filter;
