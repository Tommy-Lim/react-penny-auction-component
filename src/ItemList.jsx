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
          timeLeft: 0,
          dollarAmount: 599,
          user: "billybob",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: "$10 Shell Gift Card",
          timeLeft: 1,
          dollarAmount: 200,
          user: "billybob",
          img: "/img/$10 Shell Gift Card.jpg"
        },
        {
          title: "$50 Walmart Gift Card",
          timeLeft: 10,
          dollarAmount: 20,
          user: "billybob",
          img: "/img/$50 Walmart Gift Card.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeLeft: 10,
          dollarAmount: 172,
          user: "billybob",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "250 Voucher Bids",
          timeLeft: 0,
          dollarAmount: 30,
          user: "billybob",
          img: "/img/250 Voucher Bids.jpg"
        },
        {
          title: "50 Voucher Bids",
          timeLeft: 10,
          dollarAmount: 600,
          user: "billybob",
          img: "/img/50 Voucher Bids.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeLeft: 10,
          dollarAmount: 798,
          user: "billybob",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "Canon Pixma MG Series Wireless Printer",
          timeLeft: 0,
          dollarAmount: 5475,
          user: "billybob",
          img: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
          title: "Cuisinart Convection Bread Maker",
          timeLeft: 10,
          dollarAmount: 487,
          user: "billybob",
          img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
          title: 'Discrete "Hide a Key" Sprinkler Head',
          timeLeft: 10,
          dollarAmount: 123,
          user: 'billybob',
          img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
          title: "Ultra-Soft 1800 Series Sheet Set",
          timeLeft: 10,
          dollarAmount: 342,
          user: "billybob",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: 'iPad Pro 9.7" 32GB WiFi',
          timeLeft: 10,
          dollarAmount: 234,
          user: "billybob",
          img: '/img/iPad Pro 9.7" 32GB WifFi.jpg'
        }
      ]
    }
  }

  render(){
    return(
      <div className="container container-all">
        {this.getItems()}
      </div>
    );
  }

  getItems(){
    return this.state.items.map((item, index) =>
      <ItemPanel
        title={item.title}
        timeLeft={item.timeLeft}
        dollarAmount={item.dollarAmount}
        user={item.user}
        img={item.img}
        bid={this.bid.bind(this)}
        scope={this}
        index={index}/>
    );
  }

  bid(index){
    if(this.state.items[index].timeLeft==0){
      //do nothing
    } else{
      // increment price
      var newPrice = this.state.items[index].dollarAmount +1;
      var newItems = this.state.items;
      newItems[index].dollarAmount++;
      this.setState({items: newItems});

      // reset timeLeft
      newItems[index].timeLeft = 10;
      this.setState({items: newItems});
    }

  }


}

export default ItemList;
