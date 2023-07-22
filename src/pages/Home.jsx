import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../index';

const Home = () => {
  const { isAuthenticated} = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  };


  return (
    <div>
      Home
    </div>
  )
}

export default Home
