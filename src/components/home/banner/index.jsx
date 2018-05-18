import  React, { Component } from 'react'
import BannerItem from './bannerItem'

import './style.css'
export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nowLocal: 0
        }
        this.pausePlay = this.pausePlay.bind(this)
        this.goPlay = this.goPlay.bind(this)
    }
    // 向前向后
    turn(n) {
        var _n = this.state.nowLocal + n;
        if (n < 0) {
            _n = _n + this.props.items.length
        }
        if (_n >= this.props.items.length) {
            _n = _n - this.props.items.length
        }
        this.setState({
            nowLocal: _n
        })
    }
    // 自动轮播
    goPlay() {
        if (this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1)
            }, this.props.delay * 1000)
        }
    }
    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag)
    }

    componentDidMount() {
        this.goPlay()
    }
    render() {
        var count = this.props.items.length
        var itemNodes = this.props.items.map((item, index) => {
            return <BannerItem item={item} count={count} key={'item' + index} />
        })
        return (
            <div className="slider"
            onMouseOver={this.props.pause ? this.pausePlay : null}
            onMouseOut={this.props.pause ? this.goPlay : null}
            >
                <ul style={{
                    width: this.props.items.length * 100 + '%',
                    left: -100 * this.state.nowLocal + '%',
                    transitionDuration: this.props.speed + 's'
                }}>
                    {itemNodes}
                </ul>
            </div>
        )
    }
}
Banner.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
};
Banner.autoPlayFlag = null;
