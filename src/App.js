import React from 'react';
import Home from './Home';
import NavBar from './Navbar';
import AnimeDetails from './AnimeDetails';
import SearchAnime from './SearchAnime';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Switch>

            <Route exact path="/">     
              <Home />
            </Route>

            <Route path="/AnimeDetails:id">  
              <AnimeDetails />
            </Route>

            <Route path="/SearchAmine:searchkey">  
              <SearchAnime/>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
