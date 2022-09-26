import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

const GeneralContainer = styled.div`
  background-color: #f80039;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  overflow-y: auto;
  position: relative;
  padding: 0px 10px;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 100%;
  justify-content: flex-end;
`;

const NavbarLinks = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  left: 26px;
  font-family: Georgia, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: white;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
    3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
    6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5),
    9px 0 18px #ffd500, 11px 0 18px #806a00, 12px 2px 18px rgba(77, 66, 0, 0.5),
    12px 0 30px #d4ff00, 14px 0 30px #6a8000, 15px 2px 30px rgba(64, 77, 0, 0.5),
    15px 0 45px #80ff00, 17px 0 45px #408000, 17px 2px 45px rgba(38, 77, 0, 0.5);
`;

const SignIn = styled.div`
  font-family: Georgia, serif;
  font-weight: 700;
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 200px;
`;

const Language = styled.div`
  font-family: Georgia, serif;
  font-weight: 700;
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 100px;
  color: white;
`;
const DarkMode = styled.span`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 0px;
  color: white;
`;

const Landing = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {user ? (
        <section>
          {/* Second Navbar */}
          <GeneralContainer>
            <NavbarContainer>
              <Logo>
                <Link className="NavLinks" to="/">
                  EriDating
                </Link>
              </Logo>
              <NavbarLinks>
                <Link className="NavLinks" to="/">
                  Members
                </Link>
                <Link className="NavLinks" to="/Matches">
                  Matches
                </Link>
                <Link className="NavLinks" to="/Search">
                  Search
                </Link>
                <Link className="NavLinks" to="/Message">
                  Message
                </Link>
                <Link className="NavLinks" to="/Activity">
                  Activity
                </Link>
                <Button
                  className="NavLinks"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <AccountCircleIcon className="NavLinks" />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    <Link className="NavLinks" to="/Account">
                      Account
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="NavLinks" to="/Account/Settings">
                      Profile Settings
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="NavLinks" to="" onClick={handleLogout}>
                      LOG OUT
                    </Link>
                  </MenuItem>
                </Menu>
              </NavbarLinks>
            </NavbarContainer>
          </GeneralContainer>
        </section>
      ) : (
        <section>
          {/* This is the first and intro page */}
          <GeneralContainer>
            <NavbarContainer>
              <Logo>EriDating</Logo>
              <SignIn>
                <Link className="login-link" to="/login">
                  Log In
                </Link>
              </SignIn>
              <Language>Language</Language>
              <DarkMode>
                <Brightness4OutlinedIcon />
              </DarkMode>
            </NavbarContainer>
          </GeneralContainer>
        </section>
      )}
    </>
  );
};

export default Landing;
