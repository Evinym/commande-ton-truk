import React, { Component } from 'react';

class componentName extends Component {
    state={
        Nbr:[20, 18, 50, 70, 12],
        ticketBought:[]
    }

    reduire =()=>{
        let {Nbr, ticketBought }= this.state;
        let sendToArray= Nbr.splice(Nbr.length-1,1);
        this.setState({
            Nbr: [...Nbr],
            ticketBought:[...ticketBought, sendToArray]            
        })
        if(ticketBought.length === 4){
            alert("5 billet restant")
        }
    }
    render() {
        return (
            <div>
                <p>nombre de {this.state.Nbr} tickets</p>
                <button onClick={this.reduire}>utuliser</button>                 
            </div>
        );
    }
}

export default componentName;