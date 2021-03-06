import React, { Component } from 'react';
import Routers from './StudentManagement/Routing/Routers.js'
import AppHeader  from './StudentManagement/headers/AppHeader.js'
import AppFooter  from './StudentManagement/footers/AppFooter.js'

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