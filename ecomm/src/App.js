import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route, Link } from "react-router-dom";


import Register from './component/register.js';
import Login from './component/login.js';
import Home from './component/home.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <ul>
            <li>
            <h1>ajkhkdjh</h1>
            <h1>ajkhkdjh</h1>
            <h1>ajkhkdjh</h1>
            </li>
        </ul> */}
        
        {/* <Home />
        <Login />
        <Register /> */}

<Router>
        <div>
            <ul>
              <li> 
                <Route exact path="/" component={Home}/></li>
              <li> 
                 <Route  path="/login" component={Login}/>
</li>
              <li>
              <Route path="/register" component={Register}/>

              </li>
                {/* <li>
                    <Link Exact to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/"></Link>
                </li>
                <li>
                    <Link to = "/"></Link>
                </li> */}
            </ul>
        </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
