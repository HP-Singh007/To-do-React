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
import Edit from "./components/Edit";
function App() {
  const { setIsAuthenticated, setIsLoading } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then((res) => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error.response.data.message);
      setIsAuthenticated(false);
    })
  }, [setIsAuthenticated])
  return (
    <Router>
      <Navbar />
      <Loader />
      <Routes>
        <Route path="/To-do-React/" element={<Home />} />
        <Route path="/To-do-React/register" element={<Register />} />
        <Route path="/To-do-React/login" element={<Login />} />
      </Routes>
      <Edit />
      <Toaster />
    </Router>
  );
}

export default App;
