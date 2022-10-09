import { Box, IconButton, List, ListItem } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Side = ({ mode, setMode }) => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/content");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handlePage = () => {
    navigate("/page");
  };
  const handleChart = () => {
    navigate("/chart");
  };
  const handleMessage = () => {
    navigate("/message");
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
            <IconButton onClick={handleHome}>
              <HomeIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton onClick={handlePage}>
              <ArticleIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton onClick={handleChart}>
              <GroupIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton onClick={handleMessage}>
              <HomeIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton component="a" href="#home">
              <PersonIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton component="a" href="#home">
              <InsertPhotoIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton component="a" href="#home">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton onClick={handle}>
              <AccountBoxIcon fontSize="large" />
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
        </List>
      </Box>
    </Box>
  );
};
