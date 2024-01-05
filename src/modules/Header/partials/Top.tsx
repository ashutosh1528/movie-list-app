/* eslint-disable react-hooks/exhaustive-deps */
import Heading from 'assets/Heading.svg';
import SearchIcon from 'assets/SearchIcon.svg';
import CorssIcon from 'assets/CrossIcon.svg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSearchQuery } from '@redux/movie.slice';

const Top = () => {
  const dispatch = useDispatch();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchQuery) dispatch(handleSearchQuery(searchQuery));
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(searchInputValue), 500);
    return () => clearTimeout(timer);
  }, [searchInputValue]);

  useEffect(() => {
    if (isInputVisible) inputRef.current?.focus();
  }, [isInputVisible]);

  const handleInputVisible = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsInputVisible(true);
  };

  const handleInputHide = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsInputVisible(false);
    setSearchInputValue('');
    dispatch(handleSearchQuery(''));
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="header__container__top">
      <img src={Heading} alt="MOVIEFIX" height={36} width={140} />
      {!isInputVisible && <img src={SearchIcon} alt="searchIcon" height={16} width={16} onClick={handleInputVisible} />}
      {isInputVisible && (
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <input
            value={searchInputValue}
            onChange={handleSearchInput}
            ref={inputRef}
            className="header__input"
            onFocus={(e) => e.stopPropagation()}
            placeholder="Search ..."
          />
          <img src={CorssIcon} alt="crossIcon" height={16} width={16} onClick={handleInputHide} />
        </div>
      )}
    </div>
  );
};

export default Top;
