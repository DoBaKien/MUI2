import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Select,
  FormControl,
  Tooltip,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { useTranslation } from "react-i18next";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Img1 from "../imgs/1.jpg";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Axios from "axios";

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
    navigate("/");
  };
  const handle1 = () => {
    navigate("/content");
  };
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#3A3B3C" : "#F5F5F5",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const handleHome = () => {
    navigate("/home");
  };

  const { t, i18n } = useTranslation();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    localStorage.setItem("lng", event.target.value);
    Axios.put(`http://localhost:3001/Language/1`, {
      lng: event.target.value,
    }).then((res) => {
      console.log(res);
    });
    return i18n.changeLanguage(event.target.value);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/Language/1").then((res) => {
      setAge(res.data.lng);
    });
  }, []);
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
          <TextField
            hiddenLabel
            variant="standard"
            placeholder={t("Search...")}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Search>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            value={age}
            defaultValue={age}
            onChange={handleChange}
            autoWidth
            sx={{ height: 50, color: "white" }}
          >
            <MenuItem value="en">{t("English")}</MenuItem>
            <Tooltip title="Vietnamese" value="vn" placement="right">
              <MenuItem>Tiếng Việt</MenuItem>
            </Tooltip>
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
