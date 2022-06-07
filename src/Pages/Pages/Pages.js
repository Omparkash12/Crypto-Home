import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';


const Pages = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Pages