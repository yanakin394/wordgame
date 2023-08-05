import Table from './pages/Table/Table';
import Game from './pages/Game/Game';
import Header from './components/Header/Header';
import './style/App.scss';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header> 
      <main>
        <Home/>
        <Game/>
        <Table/>
      </main>
    </div>
  );
}

export default App;
