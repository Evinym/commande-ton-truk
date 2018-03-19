import React, { Component } from 'react';



class Basket extends Component {
    
  render() {
    const { img, name, price, total , nb, initDelete } = this.props;
    return (
        <li className="collection-item avatar">
            <img src={img} alt="" className="circle" />
            <span className="title">{name}</span>
            <p><b>Prix: </b>{total} <br />
                <b>Nombre de produits: </b>{nb}
            </p>
            <a href="#!" className="secondary-content" onClick={initDelete}>
                <i className="material-icons">delete</i>
            </a>
        </li>
    );
}
}

export default Basket;