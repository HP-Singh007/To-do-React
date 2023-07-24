import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import { server } from "../index";
import { toast } from 'react-hot-toast';
import '../styles/Login.css';
import {Context} from "../index"

const Login = () => {
  const {isAuthenticated ,setIsAuthenticated,setIsLoading} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const {data}=await axios.post(`${server}/users/login`,
        {
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setIsLoading(false);
    } 

    catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }

  if(isAuthenticated) return <Navigate to="/To-do-React/" />

  return (
    <div className='loginBg'>
      <form onSubmit={submitHandler}>
        <div className="login">

          <h1>Login</h1>

          <input
            type="email"
            name="email"
            id="mail"
            placeholder='Email'
            value={email}
            required="true"
            onChange={(e) => { setEmail(e.target.value) }} />

          <input
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            required="true"
            onChange={(e) => { setPassword(e.target.value) }} />

          <button id="loginBtn" type='submit'>LOG IN</button>
          <p>Don't have Account? <Link to="/To-do-React/register" id="signupLink">Sign Up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
