import React, { Component } from 'react';

import data from "./Data";

class Card extends Component {
    
  render() {
      const{name,alt, price,description,img, onClick} = this.props; 
    
    return (
        <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={alt}/>
         <span className="card-title">{name}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
        <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Card;