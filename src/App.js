import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Conozcanos from './pages/Conozcanos';
import Clasificados from './pages/clasificados';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' exact element={<Home />} />
          <Route exact path='/conozcanos' element={<Conozcanos />} />
          <Route exact path='/clasificados' element={<Clasificados />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*v*/