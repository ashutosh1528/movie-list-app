import Header from 'modules/Header';
import MovieList from 'modules/MovieList';
import './app.scss';

const App = () => {
  return (
    <div className="mainContianer">
      <Header />
      <MovieList />
    </div>
  );
};

export default App;
