import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing.jsx';
import Home from './Components/Home/Home.jsx';
import Nav from './Components/NavBar/Navbar.jsx'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Nav} />
        <Route path="/home" exact component={Home} />
      </div>
    </React.Fragment>
  )
}

export default App