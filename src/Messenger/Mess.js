import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputBase,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
// import { Navbar } from "../component/Navbar";

import ListChat from "./ListChat";
import { Side } from "./Side";
import Img1 from "../imgs/1.jpg";

import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import MenuIcon from "@mui/icons-material/Menu";
import "./Mess.css";
import Chat from "./Chat";
import { useTranslation } from "react-i18next";

function Mess({ mode, setMode }) {
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const CardRight = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#4B4D4F" : "#D3D3D3",
    width: "99.8%",
  }));
  const Typograp = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      float: "left",
    },
  }));
  const StackContact = styled(Stack)(({ theme }) => ({
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
      marginTop: 0,
      marginRight: 0,
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#3A3B3C" : "#E8E8E8",
    borderRadius: 8,
    width: "90%",
    height: 40,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  }));

  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ overflow: "hidden" }}
    >
      {/* <Navbar color="black" /> */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Side setMode={setMode} mode={mode} />
        <Box
          sx={{
            overflowY: "scroll",
            overflow: "auto",
            flex: { xl: 2, md: 2, sm: 8, xs: 4 },
          }}
        >
          <Search>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: 22 }}
              fullWidth
              placeholder={t("Search...")}
            />
          </Search>

          <Stack
            spacing={0.5}
            sx={{
              marginTop: 1,
              overflowY: "scroll",
              height: window.innerHeight - 60,
            }}
          >
            {Array.from(Array(10)).map((_, index) => (
              <ListChat key={index} />
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            flex: { xl: 6, md: 10, sm: 20, xs: 6 },
            height: window.innerHeight - 8,
          }}
        >
          <Box>
            <CardRight variant="outlined">
              <CardContent
                sx={{
                  float: { xl: "left", md: "left", sm: "left", xs: "" },
                  width: { xl: "75%", md: "left", sm: "60%", xs: "100%" },
                }}
              >
                <Avatar
                  alt="Avatar"
                  src={Img1}
                  sx={{ float: "left", marginRight: 2 }}
                />
                <Typograp variant="h5" component="div">
                  Đỗ Bá Kiên
                </Typograp>
              </CardContent>

              <StackContact direction="row" gap={2}>
                <Tooltip title="Phone Call">
                  <IconButton size="large">
                    <LocalPhoneIcon color="success" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Video Call">
                  <IconButton size="large" color="secondary">
                    <VideocamIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Conversation details">
                  <IconButton size="large" onClick={() => setShow(!show)}>
                    <MenuIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </StackContact>
            </CardRight>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Chat />
          </Box>
        </Box>
        {show && (
          <Box
            flex={2}
            sx={{
              display: { xs: "none", lg: "block" },
              height: window.innerHeight - 66,
            }}
          ></Box>
        )}
      </Stack>
    </Box>
  );
}

export default Mess;
