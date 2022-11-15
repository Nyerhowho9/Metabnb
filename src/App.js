import React from 'react';
import Header from './components/header';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home'


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
