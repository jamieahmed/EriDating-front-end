import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";

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
      {/* landing page */}
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} handleLogout={handleLogout} />}
        />
        {/* singup */}
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* login */}
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* profiles */}
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />

        {/* change password */}
        <Route
          path="/changePassword"
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
