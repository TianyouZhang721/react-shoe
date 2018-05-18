import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Banner from './components/home/banner'
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    let bannerList = [
      {
        src: require('./components/home/banner/img/1.jpg'),
        alt: 'image1'
      },
      {
        src: require('./components/home/banner/img/2.jpg'),
        alt: 'image2'
      },
      {
        src: require('./components/home/banner/img/3.jpg'),
        alt: 'image3'
      },
      {
        src: require('./components/home/banner/img/4.jpg'),
        alt: 'image4'
      },
      {
        src: require('./components/home/banner/img/5.jpg'),
        alt: 'image5'
      },
      {
        src: require('./components/home/banner/img/6.jpg'),
        alt: 'image6'
      }
    ]
    return (
      <div className="App">
        <Header />
        <Banner
          items={bannerList}
          speed={1.5}
          delay={4}
          pause={true}
          autoplay={true}
          dots={true}
          arrows={true}
        />
      </div>
    );
  }
}

export default App;
