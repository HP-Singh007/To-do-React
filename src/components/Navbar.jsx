import '../styles/Navbar.css'
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context, server } from '../index'
import { toast } from 'react-hot-toast'
import {UserCircle2} from "lucide-react"
import { ClipboardCheck } from 'lucide-react';
import axios from 'axios'

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async () => {
    const { data } = await axios.get(`${server}/users/logout`, {
      withCredentials: true,
    });
    toast.success(data.message);
    setIsAuthenticated(false);
  }


  return (
    <nav>
      
      <div id="leftSide" className='navComp'>
        <span className='navItem'><ClipboardCheck size={40} color='yellow'/></span>
        <h2 className='navItem'>ToDo</h2>
      </div>

      <div id="rightSide" className='navComp'>
        <Link to="/To-do-React/" className="navItem navLink"><UserCircle2 size={30} color="white" /></Link>

        {isAuthenticated ?
          (<button onClick={logoutHandler} className="navItem navLink">Logout</button>)
          :
          (<Link to="/To-do-React/login" className="navItem navLink">Login</Link>)
        }
      </div>

    </nav>
  )
}

export default Navbar
