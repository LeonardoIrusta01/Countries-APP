import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing.jsx';
import Home from './Components/Home/Home.jsx';
import Nav from './Components/NavBar/Navbar.jsx'
import Country_Detail from './Components/Country_Detail/Country_Detail';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Nav} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/country_detail/:id3Code" exact component={Country_Detail} />
      </div>
    </React.Fragment>
  )
}

export default App