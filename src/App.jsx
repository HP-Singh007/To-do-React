import './App.css';
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { Context, server } from "./index";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import axios from "axios";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Edit from "./components/Edit";

function App() {
  const { setIsAuthenticated, setIsLoading } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    })
      .then((res) => {
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsAuthenticated(false);
      })
  }, [])

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
