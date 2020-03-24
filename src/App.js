import React from 'react';
import Landing from './Landing'
import LogIn from './LogIn'
import NavBar from './NavBar'
import SignUp from './SignUp'
import SubmitCard from './SubmitCard'
import Dashboard from './Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <NavBar/>
    <Route path="/" exact component={Landing} />
    <Route path="/login" exact component={Dashboard} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/submit" exact component={SubmitCard} />

    </BrowserRouter>
    </div>
  );
}

export default App;
