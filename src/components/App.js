import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Register/Register";
import Navbar from "./Navbar/Navbar";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Favourites from "./Favourites/Favourites";
import UserProvider from "./Providers/userProvider";
import GroupThreadView from "./GroupView/GroupThreadView";
import ApprovalRequest from "./Navbar/ApprovalRequest";
import JoiningRequest from "./Navbar/JoiningRequest";
import GroupThreadsList from "./GroupView/GroupThreadsList";
import { SearchGroups } from "./SearchGroups/SearchGroups";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main data-testid="allRoutes">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>

          <Navbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/favourites" element={<Favourites />} /> */}
              <Route path="/searchGroups" element={<SearchGroups />} />
              <Route path="/group-info" element={<GroupThreadsList />} />
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
