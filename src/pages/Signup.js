import React from 'react';
import Template from "../components/Template";
import signupImg from '../assets/signup.jpg'

const Signup = ({setIsLoggedIn}) =>{
    return (
        <Template
          title="Start coding with millions for free at sortvision.com"
          desc1="Build talents that last a lifetime."
          desc2="Secure your career's future through education"
          image={signupImg}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;