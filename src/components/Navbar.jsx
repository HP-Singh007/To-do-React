import '../styles/Navbar.css'
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context, server } from '../index'
import { toast } from 'react-hot-toast'
import {UserCircle2} from "lucide-react"
import { ClipboardCheck } from 'lucide-react';
import axios from 'axios'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated,theme, setTheme } = useContext(Context);

  const logoutHandler = async () => {
    const { data } = await axios.get(`${server}/users/logout`, {
      withCredentials: true,
    });
    toast.success(data.message);
    setIsAuthenticated(false);
  }

  return (
    <nav id={!theme?'navNormal':''}>
      
      <div id="leftSide" className='navComp'>
        <span className='navItem'><ClipboardCheck size={40} color='yellow'/></span>
        <h2 className='navItem'>ToDo</h2>
      </div>

      <div id="rightSide" className='navComp'>
        <Link to="/To-do-React/" className="navItem navLink circleLogin"><UserCircle2 size={30} color="white" /></Link>

        {isAuthenticated ?
          (<button onClick={logoutHandler} className="navItem navLink" id={!theme?'navNormal':''}>Logout</button>)
          :
          (<Link to="/To-do-React/login" className="navItem navLink" id={!theme?'navNormal':''}>Login</Link>)
        }
        <FormGroup className="navItem" id='themeBtn'>
          <FormControlLabel control={<Switch defaultChecked color="secondary"/>} label="Theme" labelPlacement="bottom" onChange={(v)=>setTheme(v.target.checked)} />
        </FormGroup>
      </div>

    </nav>
  )
}

export default Navbar
