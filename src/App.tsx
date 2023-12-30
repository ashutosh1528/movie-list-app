import Header from 'modules/Header';
import './app.scss';

const App = () => {
  return (
    <div className="mainContianer">
      <Header />
      {/* <div>
        {Array(10)
          .fill(0)
          .map((i) => (
            <div
              style={{
                height: 100,
                padding: 20,
                margin: 10,
                backgroundColor: 'red',
              }}
            >
              Box
            </div>
          ))}
      </div> */}
      {/* <div
        style={{ height: 100, padding: 20, margin: 10, backgroundColor: 'red' }}
      >
        Box
      </div> */}
    </div>
  );
};

export default App;
