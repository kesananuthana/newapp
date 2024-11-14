import React from 'react';
import { BrowserRouter,Routes, Route,Navigate  } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import Nav from './Components/Nav/Nav.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
