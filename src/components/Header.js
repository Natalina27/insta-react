import React, {Component} from 'react';
// 8.6K (gzipped: 3.4K)
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return(
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo"/>
                    </a>
                    <nav className="links">
                        <a href="#" className="menu__links"> FEED </a>
                        <a href="#" className="menu__links"> PROFILE </a>
                    </nav>
                </div>
            </header>
        )
    }

}
