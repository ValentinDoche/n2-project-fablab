import React from "react";

class LoginForm extends React.Component{

    submitHandler = (event) => {

    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <label>Username</label>
                <input
                    type={"text"}
                    placeholder={"My Username"}
                />
                <label>Password</label>
                <input
                    type={"password"}
                    placeholder={"••••••••••"}
                />
                <button type={"submit"}>SUBMIT</button>
            </form>
        )
    }
}
export default LoginForm
