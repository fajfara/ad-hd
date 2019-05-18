import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './scss/main.scss';

// Components import
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="main">
        <Route path="/" exact component={ Home } />
      </div>
    </Router>
  );
}

export default App;
