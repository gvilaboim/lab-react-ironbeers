import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router';
import Beers from './Beers';
import  SingleBeer  from './SingleBeer';
import CreateBeer from './CreateBeer'
import RandomBeer from './RandomBeer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
     <Route path={'/'} element={<HomePage/>}></Route>
     <Route path={'/beers'} element={<Beers/>}></Route>
     <Route path={'/beers/:id'} element={<SingleBeer/>}></Route>
     <Route path={'/random-beer'} element={<RandomBeer/>}></Route>
     <Route path={'/new-beer'} element={<CreateBeer/>}></Route>
     </Routes>
      
    </div>
  );
}

export default App;
