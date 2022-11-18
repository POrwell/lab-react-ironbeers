import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeers from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/beers' element={<Beers/>}/>
  <Route path='/randombeer' element={<RandomBeers/>}/>
  <Route path='/newbeer' element={<NewBeer/>}/>
</Routes>
    </div>
  );
} 

export default App;
