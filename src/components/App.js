import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Register/Register";
import Navbar from "./Navbar/Navbar";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Group from "./GroupView/Group";
import Favourites from "./Favourites/Favourites";
import UserProvider from "./Providers/userProvider";
import GroupThreadView from "./GroupView/GroupThreadView";
import ApprovalRequest from "./Navbar/ApprovalRequest";
import JoiningRequest from "./Navbar/JoiningRequest";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>

          <Navbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/group-info" element={<Group />} />
              <Route path="/group-thread-view" element={<GroupThreadView />} />
              <Route path="/approval-request" element={<ApprovalRequest />} />
              <Route path="/joining-request" element={<JoiningRequest />} />
            </Routes>
          </Navbar>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
