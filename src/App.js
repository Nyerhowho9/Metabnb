import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
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
