import React, { useContext} from 'react'
import loader from '../images/loader.png'
import '../styles/Loading.css'
import { Context } from '../index'

const Loader = () => {
    const {isLoading} = useContext(Context);
  return (
    <div id='loading' style={{display: isLoading?"flex":"none"}}>
      <img src={loader} alt="loading..." id="loadingLogo" />
    </div>
  )
}

export default Loader
