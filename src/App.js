import Table from './pages/Table/Table';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Words from './components/Words/Words';
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
        <Words/>
        <Table/>
      </main>
    </div>
  );
}

export default App;
