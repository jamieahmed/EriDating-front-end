import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing/Landing";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import Navbar from "./pages/Navbar/Navbar";
import MemberDetails from "./pages/Landing/MainPages/MemberDetails";
import Matches from "./pages/Landing/MainPages/Matches";
import Search from "./pages/Landing/MainPages/Search";
import Message from "./pages/Landing/MainPages/Message";
import Activity from "./pages/Landing/MainPages/Activity";
import Account from "./pages/Landing/MainPages/Account";
import Settings from "./pages/Landing/MainPages/Settings";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="member">
          <Route path=":id" element={<MemberDetails />} />
        </Route>
        <Route path="/Matches" element={<Matches user={user} />} />
        <Route path="/Search" element={<Search user={user} />} />
        <Route path="/Message" element={<Message user={user} />} />
        <Route path="/Activity" element={<Activity user={user} />} />
        <Route path="/Account" element={<Account user={user} />} />
        <Route path="/Settings" element={<Settings user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/Settings/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
