import React, { useState } from 'react'
import { Link } from "react-router-dom"
import '../styles/Register.css'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { server } from '../index';

const Register = () => {
  //useStates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
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
    }

    catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='registerBg'>
      <form onSubmit={submitHandler}>
        <div className="register">

          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => { setName(e.target.value) }} />
            
          <input
            type="email"
            name="email"
            id="mail"
            placeholder='Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />

          <input
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
            
          <input
            type="password"
            name="Cpassword"
            id="Cpassword"
            placeholder='Confirm Password'
            value={cPassword}
            onChange={(e) => { setCPassword(e.target.value) }} />

          <button id="registerBtn" type='submit'>Sign Up</button>
          <p>Already have Account? <Link to="/" id="signupLink">Log In</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register
