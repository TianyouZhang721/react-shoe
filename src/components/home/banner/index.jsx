import React, { Component } from 'react'
import Banner from './banner'
import axios from 'axios'
export default class Banners extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }
        this.getBanner = this.getBanner.bind(this)
    }
    getBanner() {
        // axios.get('/index/getCarousel').then(data => {
        //     console.log(data)
        // })
        fetch('/index/getCarousel').then()
    }
    componentWillMount() {
        this.getBanner();
    }
    render() {
        let bannerList = [
            {
              src: require('./img/1.jpg'),
              alt: 'image1'
            },
            {
              src: require('./img/2.jpg'),
              alt: 'image2'
            },
            {
              src: require('./img/3.jpg'),
              alt: 'image3'
            },
            {
              src: require('./img/4.jpg'),
              alt: 'image4'
            },
            {
              src: require('./img/5.jpg'),
              alt: 'image5'
            },
            {
              src: require('./img/6.jpg'),
              alt: 'image6'
            }
          ]
        return (
            <Banner
            items={bannerList}
            speed={1.5}
            delay={4}
            pause={true}
            autoplay={true}
            dots={true}
            arrows={true}
            />
        )
    }
}