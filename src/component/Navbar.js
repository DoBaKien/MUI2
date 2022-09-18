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
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
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
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handle = () => {
    navigate("/login");
  };
  const Search = styled("div")(({ theme }) => ({
    background: "skyblue",
    color: "black",
    padding: "0 10px ",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const handleHome=()=>{
    navigate("/home");
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} onClick={handleHome}>
          Bee Tech
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} onClick={handleHome}/>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
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
            onClick={(e) => setOpen(true)}
          />
        </Icon>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={Img1} />
          <Typography>Kien</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handle}>Logout</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </AppBar>
  );
};
