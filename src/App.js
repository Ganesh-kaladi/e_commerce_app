import React from 'react';
import './App.css';
import { Homepage } from './pages/home';
import { Route, Routes } from 'react-router-dom';
import { Cartpage } from './pages/cart';
import { Favoritepage } from './pages/favorite';
import { Loginpage } from './pages/loginAuth.js/login';

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/cart' element={<Cartpage />} />
    <Route path='/favorite' element={<Favoritepage />} />
    <Route path='/login/auth' element={<Loginpage />} />
   </Routes>
   </>
  );
}
 
export default App;
