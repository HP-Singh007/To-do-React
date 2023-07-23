import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import { Toaster } from "react-hot-toast"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import axios from "axios";
import { Context, server } from "./index";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
function App() {
  const {setIsAuthenticated ,setIsLoading,isLoading} = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then((res) => {
      setIsLoading(false);
      setIsAuthenticated(true);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error.response.data.message);
      setIsAuthenticated(false);
    })
  },[])
  return (
    <Router>
      <Navbar />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
