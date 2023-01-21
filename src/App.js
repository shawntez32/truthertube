import { useState } from 'react';
import './App.css';
import Header from './Header';
import ReccomendedVideos from './ReccomendedVideos';
import Sidebar from './Sidebar';
import { Routes, Route, HashRouter as Router  } from 'react-router-dom';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
import Dummy from './Dummy';
import Trending from './Trending';
import Subscription from './Subscription';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/search" element={<Searchpage trending={"/trending"} subscriptions={"/subscriptions"} />} />
          <Route exact path="/subscriptions" element={<Subscription trending={"/trending"} subscriptions={"/subscriptions"} />} />
          <Route exact path='/trending' element={<Trending trending={"/trending"} subscriptions={"/subscriptions"} />} />
          <Route exact path='/dummy' element={<Dummy />} />
          <Route exact path='/' element={<Homepage trending={"/trending"} subscriptions={"/subscriptions"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
