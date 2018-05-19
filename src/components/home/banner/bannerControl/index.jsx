import React, { Component } from 'react'

export default class BannerControl extends Component {
    // constructor(props) {
    //     super(props)
    // }
    handleClick(i) {
        var option = i - this.props.nowLocal;
        this.props.turn(option)
    }
    render() {
        let controlNode = [];
        let {item, count, nowLocal} = this.props;
        for (var i = 0; i < count; i++) {
            controlNode[i] = (
                <li key={i} className={'s-slide-banner' + (i === nowLocal ? ' active' : '')} onClick={this.handleClick.bind(this, i)}>
                    <div className="clip">
                        <img src={item[i].src} alt={item[i].alt}/>
                    </div>
                </li>
            )
        }
        return (
            <ul className="clearfix pika-thumbs">
                {controlNode}
            </ul>
        )
    }
}
