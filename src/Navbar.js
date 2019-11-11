import React ,{Component} from 'react';



class Navbar extends Component{
    render() {
        return (
            <div>
   
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">SignUp/SignIn</a></li>
                <li>  <input type="text" placeholder="Search.."/> </li>
              </ul>
            </div>
        );
    }
}

export default Navbar;