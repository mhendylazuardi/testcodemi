import React, { Component } from 'react';

import './App.css';


import Navbar from './component/Navbar';

import Body from './component/Body';

class App extends Component {

  constructor (){
    super()

  }

  render() {
    return (
      <div>
        <Navbar/>
        <Body/>
      </div>
    );
  }
}

export default App;
