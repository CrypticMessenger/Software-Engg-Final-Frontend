import logo from "./../logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Register/Register";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <main>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>

      <Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>  

      </Navbar>
    </main>
    </BrowserRouter>
  );
}

export default App;
