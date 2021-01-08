import './sidebar.css';
import React from 'react';
import logo from '../assets/img/logo.svg'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { NavLink} from "react-router-dom";

class Sidebar extends React.Component{
    render() {
        return(
            <div className={"sidebar"}>
                    <div className='navigation'>
                        <img src={logo} alt={"logo IOTY"}/>
                        <ul>
                            <li>
                                <NavLink to={"/"} exact>
                                    <span className={"icon"}><i className={"fa fa-home"} aria-hidden={"true"}></i></span>
                                    <span className={"title"}>Home</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink to={"/profile"} exact>
                                    <span className={"icon"}><i className={"fa fa-user"} aria-hidden={"true"}></i></span>
                                    <span className={"title"}>Profile</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink to={"/devices"} exact>
                                    <span className={"icon"}><i className={"fas fa-network-wired"} aria-hidden={"true"}></i></span>
                                    <span className={"title"}>My Devices</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink to={"/functionality"} exact>
                                    <span className={"icon"}><i className={"fas fa-tools"} aria-hidden={"true"}></i></span>
                                    <span className={"title"}>My Functionality</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink to={"/sign-out"} exact>
                                    <span className={"icon"}><i className={"fas fa-sign-out-alt"} aria-hidden={"true"}></i></span>
                                    <span className={"title"}>Sign Out</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                <div className={"toggle"} onClick={toggleMenu}></div>
            </div>
        )
        function toggleMenu(){
            let navigation = document.querySelector('.navigation')
            let toggle = document.querySelector('.toggle')
            let main = document.querySelector('main')
            navigation.classList.toggle('active')
            toggle.classList.toggle('active')
            main.classList.toggle('active')
        }
    }
}

export default Sidebar
