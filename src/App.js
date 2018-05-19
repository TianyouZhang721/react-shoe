import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Banners from './components/home/banner'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banners/>
      </div>
    );
  }
}

export default App;
