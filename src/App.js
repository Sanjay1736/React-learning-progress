import React from 'react';
import { Routes ,Route} from 'react-router';

import './App.css';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Products/> } />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>}
        />
    </Routes>
  </>
  );
}

export default App;
