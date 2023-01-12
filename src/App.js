import { useState } from 'react';
import './App.css';
import Header from './Header';
import ReccomendedVideos from './ReccomendedVideos';
import Sidebar from './Sidebar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
