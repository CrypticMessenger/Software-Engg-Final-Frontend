import logo from "./../logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
    <div>saf</div>
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
