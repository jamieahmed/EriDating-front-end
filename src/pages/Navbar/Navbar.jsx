import React from "react";
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
  padding: 10px;
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
`;

const SignIn = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 156px;
`;

const Language = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 86px;
`;
const DarkMode = styled.span`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 0px;
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
                      My account
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="NavLinks" to="Settings">
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
