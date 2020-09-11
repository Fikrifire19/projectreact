import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="p-3">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
