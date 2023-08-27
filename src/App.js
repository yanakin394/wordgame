import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import {Home, Table, Error, Game} from './pages';

import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header/>
        </header> 
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path='/game' element={<Game/>}/>
          </Routes>
          <Routes>
            <Route path='/table' element={<Table/>}/>
          </Routes>
          <Routes>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
