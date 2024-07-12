import '../styles/Register.css'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom"
import { toast } from 'react-hot-toast';
import { Context, server } from '../index';
import axios from 'axios';

const Register = () => {
  //useStates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const { setIsLoading, setIsAuthenticated, isAuthenticated,theme } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (password !== cPassword) {
        return toast.error("Password Doesn't Matches");
      }
      setIsLoading(true);
      const { data } = await axios.post(`${server}/users/new`,
        {
          name,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsLoading(false);
      setIsAuthenticated(true);
    }

    catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
      setIsAuthenticated(false);
    }
  }
  if (isAuthenticated) { return <Navigate to="/To-do-React/" /> }
  return (
    <div className='registerBg' id={!theme?'registerNormal':''}>
      <form onSubmit={submitHandler}>
        <div className="register" id={!theme?'regFormNormal':''}>

          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder='Name'
            value={name}
            required="true"
            onChange={(e) => { setName(e.target.value) }} />

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

          <input
            type="password"
            name="Cpassword"
            id="Cpassword"
            placeholder='Confirm Password'
            value={cPassword}
            required="true"
            onChange={(e) => { setCPassword(e.target.value) }} />

          <button id="registerBtn" type='submit'>Sign Up</button>
          <p>Already have Account? <Link to="/To-do-React/login" id="loginLink">Log In</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register
