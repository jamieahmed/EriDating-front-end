import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// import service
import * as authService from "./services/authService";
import * as profileService from "../src/services/profileService";
import * as profileDetailsService from "./services/profileDetailsService";

// login staff
import Signup from "./pages/authentication/Signup/Signup";
import Login from "./pages/authentication/Login/Login";
import Landing from "../src/pages/Landing/Landing/Landing";
import ChangePassword from "./pages/authentication/ChangePassword/ChangePassword";

// other pages
import Navbar from "./pages/Navbar/Navbar";
import MemberDetails from "./pages/Landing/MainPages/MemberDetails";
import Matches from "./pages/Landing/MainPages/Matches";
import Search from "./pages/Landing/MainPages/Search";
import Message from "./pages/Landing/MainPages/Message";
import Activity from "./pages/Landing/MainPages/Activity";
import Account from "./pages/Landing/MainPages/Account/Account";
import ProfileDetails from "./pages/Landing/MainPages/Account/ProfileDetails";
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

  /// adding profile details
  const [AddProfileDetail, setAddProfileDetail] = useState([]);
  const [profileDetails, setProfileDetails] = useState([]);

  const handleAddProfileDetails = async (newProfileDetailsData) => {
    const newProfileDetails = await profileDetailsService.create(
      newProfileDetailsData
    );
    setAddProfileDetail([...AddProfileDetail, newProfileDetails]);
  };

  useEffect(() => {
    const fetchAllProfileDetails = async () => {
      const profileDetailsData = await profileDetailsService.getAll();
      setProfileDetails(profileDetailsData);
    };
    fetchAllProfileDetails();
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles();
      setProfiles(profileData);
    };
    fetchProfiles();
  }, []);
  console.log(profiles);
  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} profiles={profiles} />} />
        <Route path="profile/id">
          <Route path=":id" element={<MemberDetails profiles={profiles} />} />
        </Route>
        <Route path="/Matches" element={<Matches user={user} />} />
        <Route path="/Search" element={<Search user={user} />} />
        <Route path="/Message" element={<Message user={user} />} />
        <Route path="/Activity" element={<Activity user={user} />} />
        <Route
          path="/Account"
          element={
            <Account
              user={user}
              profileDetails={profileDetails}
              handleAddProfileDetails={handleAddProfileDetails}
            />
          }
        />
        <Route
          path="/my-account/add-profile-details"
          element={<ProfileDetails user={user} />}
        />
        <Route path="/Account/Settings" element={<Settings user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/Settings/accountmanagement/changePassword"
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
