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
import Library from './Library';
import RickRoll from './RickRoll';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/search" element={<Searchpage trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path="/subscriptions" element={<Subscription trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/trending' element={<Trending trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/library' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/history' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/watchlater' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/likedvideos' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/yourvideos' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/showmore' element={<Library trending={"/trending"} subscriptions={"/subscriptions"} library={"/library"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
          <Route exact path='/dummy' element={<Dummy />} />
          <Route exact path="/videopage" element={<RickRoll />} />
          <Route exact path='/' element={<Homepage video={"/videopage"} trending={"/trending"} subscriptions={"/subscriptions"} history={"/history"} 
          yvids={"/yourvideos"} lvids={"/likedvideos"} wlater={"/watchlater"} smore={"/showmore"}
          />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
