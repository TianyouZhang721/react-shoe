import  React, { Component } from 'react'

export default class BannerItem extends Component {
    constructor() {
        super()
    }
    render() {
        let {count, item} = this.props
        console.log(count)
        let width = 100 / count + '%'
        return (
            <li className="slider-item" style={{width: width}}>
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }
}
