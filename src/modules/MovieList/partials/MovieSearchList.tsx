/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from '@redux/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import useSearchMovieList from 'services/useSearchMovieList';
import MovieCard from '../components/MovieCard';
import '../scss/movieSearchList.scss';

const MovieSearchList = () => {
  const query = useSelector((state: RootState) => state?.movie?.searchQuery);
  const { isLoading, data, hasNextPage, fetchNextPage } = useSearchMovieList({ query });
  const windowWidth = window.innerWidth;
  const MOVIE_CARD_WIDTH = 158;
  const MOVIE_CARD_PADDING = 16 * 2;
  const MOVIE_ROW_PADDING = 8 * 2;
  const TOTAL_WIDTH = MOVIE_CARD_WIDTH + MOVIE_CARD_PADDING + MOVIE_ROW_PADDING;
  const totalMoivesInRow = useMemo(() => Math.floor(windowWidth / TOTAL_WIDTH), [windowWidth]);

  const movieList = useMemo(() => {
    if (data) {
      const temp = data?.pages?.flatMap((i) => {
        return i.results;
      });
      return temp || [];
    }
    return [];
  }, [data]);

  const isItemLoaded = (index: number) => {
    const x = movieList?.[index * totalMoivesInRow + (totalMoivesInRow - 1)] || {};
    return Object.keys(x).length > 0;
  };
  const loadMoreItems = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return <div>Loading movies ...</div>;
  }

  return (
    <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={movieList.length + 1} loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <FixedSizeGrid
          className="List"
          height={window.innerHeight}
          width={window.innerWidth}
          columnWidth={TOTAL_WIDTH}
          rowHeight={260}
          rowCount={hasNextPage ? Math.ceil((movieList.length + 1) / totalMoivesInRow) : Math.ceil(movieList.length / totalMoivesInRow)}
          columnCount={totalMoivesInRow}
          itemData={movieList}
          overscanRowCount={5}
          onItemsRendered={({ visibleRowStartIndex, visibleColumnStartIndex, visibleRowStopIndex, overscanRowStopIndex, overscanRowStartIndex }) => {
            onItemsRendered({
              overscanStartIndex: overscanRowStartIndex,
              overscanStopIndex: overscanRowStopIndex,
              visibleStartIndex: visibleRowStartIndex,
              visibleStopIndex: visibleRowStopIndex,
            });
          }}
          ref={ref}
        >
          {({ data, style, columnIndex, rowIndex }) => (
            <div style={style}>
              <MovieCard {...(data?.[rowIndex * totalMoivesInRow + columnIndex] || {})} />
            </div>
          )}
        </FixedSizeGrid>
      )}
    </InfiniteLoader>
  );
};

export default MovieSearchList;
