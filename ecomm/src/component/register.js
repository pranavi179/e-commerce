import React , { Component } from 'react';
// import Modal from './component/modal.js';
import '../App.css'; 



export default class Register extends Component{
    constructor(props) {
        super(props);
        this.state= {   username: '' , password: ''}
    }
    render() {
        return(
            // <Navbar />
            <div>
                {/* <Modal> */}
                <div class="card-panel teal lighten-2">
                    {/* <div class = "container"> */}
                    <h1>Register</h1></div>
                    <ul id="tabs-swipe-demo" class="tabs">
                    <li class="tab col s3"><a href="#test-swipe-1">Register</a></li>
                    <li class="tab col s3"><a class="active" href="#test-swipe-2">Login</a></li>
  
  </ul>
  <div id="test-swipe-1" class="col s12 blue">Register</div>
  <div id="test-swipe-2" class="col s12 red">Login</div>
                  


                    {/* </div> */}
                   
            

                
                {/* </Modal> */}
            </div>
            
            // <nav className = "register" >
            // <h1>erfsdf</h1> 
            // </nav>
        );
    }
}
