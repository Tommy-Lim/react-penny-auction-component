import React, { Component } from 'react';
import './App.css';


class ItemPanel extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: "Ultra-Soft 1800 Series Sheet Set",
      timeLeft: "00:00:00",
      dollarAmount: "$5.99",
      user: "billybob"
    }
  }


  render(){
    return(
      <div className="panel panel-default item-container">
        <div className="panel-heading item-heading">{this.state.title}</div>
        <div className="panel-body item-body">
          <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
          <div className="time-left">
            {this.state.timeLeft}
          </div>
          <div className="dollar-amount">
            {this.state.dollarAmount}
          </div>
          <div className="user">
            {this.state.user}
          </div>
          <button className="btn btn-warning">Bid now</button>
        </div>
      </div>
    )
  }
}

export default ItemPanel
