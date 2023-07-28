import Table from './components/Table/Table';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Table/>
    </div>
  );
}

export default App;
