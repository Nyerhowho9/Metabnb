import React from 'react';
import Header from './components/header';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home'
import Placetostay from './pages/placetostay';


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/places' element={<Placetostay/>} />

        Placetostay
      </Routes>
    </div>
  );
}

export default App;
