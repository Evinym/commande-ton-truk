import React, { Component } from 'react';

import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="nav-extended">
         <div className="nav-wrapper">
           <a href="#!" className="brand-logo">Logo</a>
           
         </div>
         <div className="nav-content">
           
           <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
             <i className="material-icons">add</i>
           </a>
         </div>
       </nav>      
      </div>
    );
  }
}

export default Navbar;