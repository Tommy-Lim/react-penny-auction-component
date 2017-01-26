import React, { Component } from 'react';
import './App.css';
import ItemPanel from './ItemPanel'
import ItemList from './ItemList'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container container-all">
          <ItemPanel/>
          <ItemList/>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">$10 Shell Gift Card</div>
            <div className="panel-body item-body">
              <img src="/img/$10 Shell Gift Card.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">$50 Walmart Gift Card</div>
            <div className="panel-body item-body">
              <img src="/img/$50 Walmart Gift Card.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">15 Voucher Bids</div>
            <div className="panel-body item-body">
              <img src="/img/15 Voucher Bids.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">250 Voucher Bids</div>
            <div className="panel-body item-body">
              <img src="/img/250 Voucher Bids.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">50 Voucher Bids</div>
            <div className="panel-body item-body">
              <img src="/img/50 Voucher Bids.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">Canon Pixma MG Series Wireless Printer</div>
            <div className="panel-body item-body">
              <img src="/img/Canon Pixma MG Series Wireless Printer.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">Cuisinart Convection Bread Maker</div>
            <div className="panel-body item-body">
              <img src="/img/Cuisinart Convection Bread Maker.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">Discrete "Hide a Key" Sprinkler Head</div>
            <div className="panel-body item-body">
              <img src='/img/Discrete "Hide a Key" Sprinkler Head.jpg' />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">Ultra-Soft 1800 Series Sheet Set</div>
            <div className="panel-body item-body">
              <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>

          <div className="panel panel-default item-container">
            <div className="panel-heading item-heading">iPad Pro 9.7" 32GB WiFi</div>
            <div className="panel-body item-body">
              <img src='/img/iPad Pro 9.7" 32GB WifFi.jpg' />
              <div className="time-left">
                00:00:00
              </div>
              <div className="dollar-amount">
                $5.99
              </div>
              <div className="user">
                billybob
              </div>
              <button className="btn btn-warning">Bid now</button>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
