import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import DisplayBeer from './pages/DisplayBeer';
import { useState } from 'react';

function App() {
  const [beers, setBeers] = useState([])
  
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/beers' element={<Beers beers={beers} setBeers={setBeers}/>}/>
  <Route path='/randombeer' element={<RandomBeer/>}/>
  <Route path='/newbeer' element={<NewBeer/>}/>
  <Route path='/beers/:beerId' element={<DisplayBeer/>}/>
</Routes>
    </div>
  );
} 

export default App;
