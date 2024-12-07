import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/About';
import Home from './components/Home';
import Offer from './components/offer';
import Compare from './components/Compare';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Routes> 

        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Compare' element={<Compare />}></Route>
        <Route path='Offer' element={<Offer />}></Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;