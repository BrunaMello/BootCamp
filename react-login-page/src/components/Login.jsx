import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <div>
            <form className="form">
                <Input
                type="text"
                placeholder="Username"
                />
                <Input
                type="password"
                placeholder="Password"
                />
                {props.isRegistered === false && <Input
                    type="password"
                    placeholder="Password"
                />}
                <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
            </form>
        </div>
    )
}

export default Login;