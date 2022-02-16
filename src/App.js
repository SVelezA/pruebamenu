import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import conozcanos from './pages/conozcanos';
import clasificados from './pages/clasificados';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' exact component={Home} />
          <Route exact path='/conozcanos' component={conozcanos} />
          <Route exact path='/clasificados' component={clasificados} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*v*/