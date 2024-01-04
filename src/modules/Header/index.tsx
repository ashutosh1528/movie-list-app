import Filter from './partials/Filter';
import Top from './partials/Top';
import './scss/index.scss';

const Header = () => {
  return (
    <div className="header__container header__isSticky">
      <Top />
      <Filter />
    </div>
  );
};

export default Header;
