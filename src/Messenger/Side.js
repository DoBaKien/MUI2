import {
  Box,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import VideocamIcon from "@mui/icons-material/Videocam";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
export const Side = ({ mode, setMode }) => {
  const navigate = useNavigate();

  const handleLog = () => {
    navigate("/");
  };
  const handleFriend = () => {
    navigate("/friend");
  };
  const handleMessenger = () => {
    navigate("/messenger");
  };

  const { i18n } = useTranslation();
  const [a, setA] = useState("eng");

  useEffect(() => {
    localStorage.setItem("lng", a);
  }, [a]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lng) => {
    setA(lng);
    setAnchorEl(null);
    return i18n.changeLanguage(lng);
  };

  return (
    <Box
      sx={{
        flex: { xl: 0.3, md: 0.5, sm: 1.5, xs: 1 },
        display: { xl: "block", md: "block", sm: "none", xs: "none" },
      }}
    >
      <Box position="fixed" style={{ marginLeft: 3 }}>
        <List style={{ width: "20px" }}>
          <ListItem disablePadding>
            <Tooltip title="Home" placement="right">
              <IconButton onClick={handleMessenger}>
                <HomeIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </ListItem>

          <ListItem disablePadding>
            <IconButton onClick={handleFriend}>
              <GroupIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton>
              <VideocamIcon fontSize="large" />
            </IconButton>
          </ListItem>

          <ListItem disablePadding>
            <IconButton onClick={handleClick}>
              <LanguageIcon fontSize="large" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleClose("eng")}>English</MenuItem>
              <MenuItem onClick={() => handleClose("vn")}>Tiếng Việt</MenuItem>
            </Menu>
          </ListItem>

          <ListItem disablePadding sx={{ marginTop: window.innerHeight - 745 }}>
            <IconButton>
              <PersonIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton>
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>

          <ListItem disablePadding>
            <IconButton
              onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {mode === "dark" ? (
                <Brightness7Icon fontSize="large" />
              ) : (
                <Brightness4Icon fontSize="large" />
              )}
            </IconButton>
          </ListItem>
          <ListItem disablePadding onClick={handleLog}>
            <IconButton>
              <LogoutIcon fontSize="large" />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
