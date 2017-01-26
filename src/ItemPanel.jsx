import React, { Component } from 'react';
import './App.css';


class ItemPanel extends Component {

  render(){
    return(
      <div className="panel panel-default item-container">
        <div className="panel-heading item-heading">{this.props.title}</div>
        <div className="panel-body item-body">
          <img src={this.props.img} />
          <div className="time-left">
            00:00:{this.props.timeLeft}
          </div>
          <div className="dollar-amount">
            ${(this.props.dollarAmount/100).toFixed(2)}
          </div>
          <div className="user">
            {this.props.user}
          </div>
          <button className="btn btn-warning"
                  onClick={(e) => this.props.bid(this.props.index)}>
            Bid now
          </button>
        </div>
      </div>
    )
  }
}

export default ItemPanel;
