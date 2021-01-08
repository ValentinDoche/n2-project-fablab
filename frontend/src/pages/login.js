import React from "react";
import LoginForm from "../components/loginForm";
import './login.css'
import Logo from '../assets/img/logo.svg'

class Login extends React.Component{
    render() {
        return(
            <div className={'login'}>
                <div className={'login-box'}>
                    <img src={Logo} alt={"Logo IOTY"}/>
                    <LoginForm />
                </div>
            </div>
        )
    }
}
export default Login
