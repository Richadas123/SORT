import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) =>{
    return (
        <Template
          title="Welcome Back"
          desc1="Build talents that last a lifetime."
          desc2="Secure your career's future through education"
          image={loginImg}
          formtype="login"
          setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login;