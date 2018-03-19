import React, { Component } from 'react';
import Navbar from "./Navbar";
import data from "./Data";
import Card from "./Card";
import Basket from "./Basket"
import './App.css';


class App extends Component {
  state = { 
    cartData : []
  }
  

  sendToArray = product =>{
    let {cartData} = this.state;
    //On vérifie si le produit existe déjadans le tableau
    let index = cartData.indexOf(product);
    
    if (index === -1){
    this.setState({
      cartData : [...this.state.cartData, product]
      //les trois points sont de l'ES6 pour dire qu'en plus de ce qu'il y a dans le tableau, on va rajouter product
    })
  }else{
    //incrémente le nombre 
    cartData[index].nb++;
    //créé une clé total et lui donne la valeur du prix multiplié par le nombre de produits
    cartData[index].total = cartData[index].price * cartData[index].nb;
    this.setState({
      cartData: [...cartData]
    })
  }
  };

delete = (el, i) =>{
  let {cartData} = this.state;
  // si la clé nombre est supérieure a 1 
  if (cartData[i].nb > 1) {
    // tu décrémente la valeur de la clé nombre 
    cartData[i].nb --;
    //tu recalcul le total 
    cartData[i].total = cartData[i].nb * cartData[i].price;
  }else{
    //sinon tu me retire juste l'élément à supprimer 
    cartData.splice(i, 1);
  }
  //tu mets à jour la state
  this.setState({
    cartData: [...cartData]
  })
}


  render() {
    console.log(this.state.cartData)
    return (
      <div>
        <Navbar/>
        <div className="row">
        {data.map((el,i)=>{
          return(
            <Card key={i}
             name={el.name}
             price={el.price}
             description={el.description}
             img={el.img}
             alt={el.name}
             onClick={() =>this.sendToArray(el)}/>
          )
        })}
        </div>
        <ul className="collection">
        {this.state.cartData.map((el,i)=>{
          return(
            <Basket key={i}
            img={el.img}
            name={el.name}
            nb={el.nb}
            total={!el.total ? el.price : el.total}
            initDelete ={()=>this.delete(el, i)}
            />
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;