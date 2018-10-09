import React, { Component } from 'react';
import Routers from './StudentManagement/Routers.js'
import AppHeader  from './StudentManagement/headers/AppHeader.js'
import AppFooter  from './StudentManagement/footers/AppFooter.js'
import {createStore} from 'redux'


//import client from 'client'
import './App.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state={teachers:[]}
  }

  render() 
  {
    return(
      <div className="App">
        <AppHeader></AppHeader>
        <Routers></Routers>
        <AppFooter></AppFooter>
      </div> 
    );
  }
}

export default App;