import '../styles/Loading.css'
import React, { useContext} from 'react'
import { Context } from '../index'
import loader from '../images/loader.png'

const Loader = () => {
    const {isLoading} = useContext(Context);
  return (
    <div id='loading' style={{display: isLoading?"flex":"none"}}>
      <img src={loader} alt="loading..." id="loadingLogo" />
    </div>
  )
}

export default Loader
