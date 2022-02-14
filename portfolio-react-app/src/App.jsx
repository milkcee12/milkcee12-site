import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Work from './components/Work';
import About from './components/About';

function App() {

  return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Work/>} />
        </Routes>
      </div>
  )
}

export default App;
