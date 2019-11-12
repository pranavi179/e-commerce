// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router ,Route, Link } from "react-router-dom";


// import Register from './component/register.js';
// import Login from './component/login.js';
// import Home from './component/home.js';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       {/* <ul>
//             <li>
//             <h1>ajkhkdjh</h1>
//             <h1>ajkhkdjh</h1>
//             <h1>ajkhkdjh</h1>
//             </li>
//         </ul> */}
        
//         {/* <Home />
//         <Login />
//         <Register /> */}

// <Router>
//         <div>
//             <ul>
//               <li> 
//                 <Route exact path="/" component={Home}/></li>
//               <li> 
//                  <Route  path="/login" component={Login}/>
// </li>
//               <li>
//               <Route path="/register" component={Register}/>

//               </li>
//                 {/* <li>
//                     <Link Exact to = "/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to = "/"></Link>
//                 </li>
//                 <li>
//                     <Link to = "/"></Link>
//                 </li> */}
//             </ul>
//         </div>
//         </Router>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import SignInForm from './component/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
