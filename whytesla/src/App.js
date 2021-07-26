import React from 'react';

import './App.css';

//components
import Header from "./components/Header"
import Home from "./components/Home"
import ProfitCalculator from "./components/ProfitCalculator"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ProfitCalculator" component={ProfitCalculator} />
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
