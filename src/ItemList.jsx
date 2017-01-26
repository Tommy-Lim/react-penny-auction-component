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
          user: "billybob",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: "$10 Shell Gift Card",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/$10 Shell Gift Card.jpg"
        },
        {
          title: "$50 Walmart Gift Card",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/$50 Walmart Gift Card.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "250 Voucher Bids",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/250 Voucher Bids.jpg"
        },
        {
          title: "50 Voucher Bids",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/50 Voucher Bids.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "Canon Pixma MG Series Wireless Printer",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
          title: "Cuisinart Convection Bread Maker",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
          title: 'Discrete "Hide a Key" Sprinkler Head',
          timeLeft: '00:00:00',
          dollarAmount: '$5.99',
          user: 'billybob',
          img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
          title: "Ultra-Soft 1800 Series Sheet Set",
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
          user: "billybob",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: 'iPad Pro 9.7" 32GB WiFi',
          timeLeft: "00:00:00",
          dollarAmount: "$5.99",
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
    return this.state.items.map(item =>
      <ItemPanel
        title={item.title}
        timeLeft={item.timeLeft}
        dollarAmount={item.dollarAmount}
        user={item.user}
        img={item.img}/>
    );
  }


}

export default ItemList;
