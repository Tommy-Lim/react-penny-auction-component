import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <ItemList/>
        </div>
      </div>
    );
  }
}

export default App;
