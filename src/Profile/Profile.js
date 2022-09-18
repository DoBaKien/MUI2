import { Box, Stack, ThemeProvider } from "@mui/material";
import { Sidebar } from "../component/Sidebar";
import { Content } from "./Content";
import { Navbar } from "../component/Navbar";
import { createTheme } from "@mui/material";
import { useState } from "react";

function Profile() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar color="black" />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode}/>
          <Content />
          <Box ></Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Profile;
