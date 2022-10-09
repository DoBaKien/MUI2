import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Navbar } from "../component/Navbar";

import ListFriend from "./ListFriend";
import { Side } from "./Side";
import Img1 from "../imgs/1.jpg";

import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import MenuIcon from "@mui/icons-material/Menu";
import "./Mess.css";
import Chat from "./Chat";

function Mess({ mode, setMode }) {
  const [show, setShow] = useState(false);

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
    marginRight: 10,
    [theme.breakpoints.up("lg")]: {
      justifyContent: "end",
    },
  }));

  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ overflow: "hidden" }}
    >
      <Navbar color="black" />
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
            flex: { xl: 2, md: 2, sm: 6, xs: 4 },
          }}
        >
          <Stack direction="row" spacing={2} sx={{ overflowX: "scroll" }}>
            {Array.from(Array(10)).map((_, index) => (
              <Avatar
                alt="online"
                key={index}
                src={Img1}
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
            ))}
          </Stack>
          <Stack
            spacing={0.5}
            sx={{
              marginTop: 1,
              overflowY: "scroll",
              height: window.innerHeight - 140,
            }}
          >
            {Array.from(Array(10)).map((_, index) => (
              <ListFriend key={index} />
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            flex: { xl: 6, md: 10, sm: 20, xs: 6 },
            height: window.innerHeight - 66,
          }}
        >
          <Box>
            <CardRight variant="outlined">
              <CardContent
                sx={{
                  float: "left",
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
