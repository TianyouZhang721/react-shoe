import React from 'react'

import './style.css'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        this.setState({
            index: i
        })
    }
    render() {
        var nav = [
            {
                'name': '首页',
                'index': 0
            },
            {
                'name': '资讯',
                'index': 1
            },
            {
                'name': '扫货',
                'index': 2
            },
            {
                'name': '装备',
                'index': 3
            },
            {
                'name': '社区',
                'index': 4
            },
            {
                'name': 'APP',
                'index': 5
            }
        ]
        var navList = nav.map(n => {
            return (
                <li key={n.index}>
                    <a className={this.state.index === n.index ? 'active': ''} onClick={this.handleClick.bind(this, n.index)}>{n.name}</a>
                </li>
            )
        })
        return (
            <div>
                <header className="header-wrap">
                    <div className="header clearfix">
                        <div className="logo">
                            <a></a>
                        </div>
                        <nav className="nav">
                            <ul className="nav-list">
                                {navList}
                            </ul>
                        </nav>
                        <div className="nav-right">
                            <div className="nav-logout">
                                <a>
                                    <img src={require('./img/devise_search.png')} alt=""/>
                                </a>
                                <a className="btn-login">登录</a>
                                <a className="btn-register">注册</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}