import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import {Toaster} from "react-hot-toast"
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
