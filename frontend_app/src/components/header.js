import * as React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import './header.css'

class Header extends React.Component {
    render() {
        return(
            <header>

                <div className="navbar-fixed">
                    <nav className="navbar white">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo grey-text text-darken-4">Home</a>
                            <ul id="nav-mobile" className="right">
                                <li>
                                    <a href="#!" data-target="notification" className="dropdown-trigger waves-effect grey-text text-darken-4">
                                        <i className="material-icons">notifications</i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="waves-effect grey-text text-darken-4">
                                        <i className="material-icons">logout</i>
                                    </a>
                                </li>
                            </ul>
                            <a href="#!" data-target="sidenav-left" className="sidenav-trigger left">
                                <i className="material-icons black-text">menu</i>
                            </a>
                        </div>
                    </nav>
                </div>

                <ul id="sidenav-left" className="sidenav sidenav-fixed">
                    <li><a href="/" className="logo-container">My IOT APP</a></li>
                </ul>
            </header>
        )
    }
}

export default Header;
