import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { useTranslation } from "react-i18next";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Img1 from "../imgs/1.jpg";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handle = () => {
    navigate("/login");
  };
  const handle1 = () => {
    navigate("/content");
  };
  const Search = styled("div")(({ theme }) => ({
    background: "skyblue",
    color: "black",
    padding: "0 10px ",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const handleHome = () => {
    navigate("/home");
  };

  const { t, i18n } = useTranslation();
  const [age, setAge] = React.useState("");
  const [a, setA] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setA(event.target.value);
    localStorage.setItem("lng", event.target.value);
    console.log(event.target.value);
    return i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
          onClick={handleHome}
        >
          Bee Tech
        </Typography>
        <PetsIcon
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleHome}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            value={age}
            onChange={handleChange}
            autoWidth
            sx={{ height: 50 }}
          >
            <MenuItem value={a}>Language {a}</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="vn">VietNam</MenuItem>
          </Select>
        </FormControl>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={Img1}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
        </Icon>
        <UserBox
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar sx={{ width: 30, height: 30 }} src={Img1} />
          <Typography>Kien</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handle1}>{t("Profile")}</MenuItem>
        <MenuItem onClick={handle}>{t("Logout")}</MenuItem>
      </Menu>
    </AppBar>
  );
};
