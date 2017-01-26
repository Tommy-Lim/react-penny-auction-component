import React, { Component } from 'react';
import './App.css';
import ItemPanel from './ItemPanel'
import Navbar from './Navbar'



class ItemList extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          title: "Ultra-Soft 1800 Series Sheet Set",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob"
        }
      ]
    }
  }

  render(){
    return(
      <div>
        {this.getItems()}
      </div>
    );
  }

  getItems(){
    return this.state.items.map(item =>
      <ItemPanel
        title={item.title}
        timeLeft={item.timeLeft}
        dollarAmount={item.dollarAmount}
        user={item.user}/>
    );
  }


}

export default ItemList;
