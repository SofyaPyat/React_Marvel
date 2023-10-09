import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import '../../style/style.scss';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <RandomChar/>
    </div>
  );
}

export default App;
