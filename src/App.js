import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './scss/main.scss';

// Components import
import Home from "./pages/Home";
// import QuestionController from './components/QuestionController';

function App() {

  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={ Home } />
        <Route path="/question/:slug"/>
      </div>
    </Router>
  );
}

export default App;
