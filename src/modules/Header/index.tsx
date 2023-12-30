import Filter from './partials/Filter';
import Heading from 'assets/Heading.svg';
import './scss/index.scss';

const Header = () => {
  return (
    <div className="header__container header__isSticky">
      <img src={Heading} alt="MOVIEFIX" height={36} width={140} />
      <Filter />
    </div>
  );
};

export default Header;
