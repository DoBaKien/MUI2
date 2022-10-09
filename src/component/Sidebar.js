import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTranslation } from "react-i18next";
import MessageIcon from "@mui/icons-material/Message";

export const Sidebar = ({ mode, setMode }) => {
  const { t } = useTranslation();
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
  const handlePhoto = () => {
    navigate("/photos");
  };
  const handlePhoto2 = () => {
    navigate("/photos2");
  };
  return (
    <Box sx={{ flex: { xl: 1, md: 2, sm: 2, xs: 1 } }}>
      <Box p={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleHome}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={t("Home")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlePage}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={t("Page")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleChart}>
                <ListItemIcon>
                  <LeaderboardIcon />
                </ListItemIcon>
                <ListItemText primary={t("Chart")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleMessage}>
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary={t("Message")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlePhoto2}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={t("Friend")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlePhoto}>
                <ListItemIcon>
                  <InsertPhotoIcon />
                </ListItemIcon>
                <ListItemText primary={t("Photo")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={t("Setting")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handle}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={t("Profile")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ModeNightIcon />
                </ListItemIcon>
                <Switch
                  onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box flex={0.1} sx={{ display: { lg: "none", xs: "block" } }}>
        <Box position="fixed">
          <List style={{ width: "50px" }}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleHome}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemIcon>
                  <ArticleIcon onClick={handlePage} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleChart}>
                <ListItemIcon>
                  <LeaderboardIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleMessage}>
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlePhoto}>
                <ListItemIcon>
                  <InsertPhotoIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handle}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <IconButton
                sx={{ ml: 1 }}
                onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
                color="inherit"
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
