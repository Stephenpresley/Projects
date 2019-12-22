import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Footer from './Footer';
import Favorites from './Favorites';

//Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/favorites' component={Favorites}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
