import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar'
import SplashImage from './components/SplashImage/splashimage';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className="tableofcontents">
      <Navbar />
      <SplashImage />
      <Cards />
    </div>
  );
}

export default App;
