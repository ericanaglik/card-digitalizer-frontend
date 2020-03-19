import React from 'react';
import Landing from './Landing'
import LogIn from './LogIn'
import NavBar from './NavBar'
import SignUp from './SignUp'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <NavBar/>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
