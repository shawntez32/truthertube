import { useState } from 'react';
import './App.css';
import Header from './Header';
import ReccomendedVideos from './ReccomendedVideos';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app___page'>
        <Sidebar />
        <ReccomendedVideos />        
      </div>
    </div>
  );
}

export default App;
