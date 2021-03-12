import React, { Component } from 'react';
import Template from './views/Template';
import Tabla from './views/Tabla';

class App extends Component {
  render() {    
    return (
    <Tabla />,
    <Template/>
    );
  }
}

export default App;
