import { Box, Stack, ThemeProvider } from "@mui/material";
import { Sidebar } from "./component/Sidebar";
import { Feed } from "./component/Feed";
import { Rightbar } from "./component/Rightbar";
import { Navbar } from "./component/Navbar";
import Add from "./component/Add";
import { createTheme } from "@mui/material";
import { useState } from "react";

function App() {
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
          <Sidebar setMode={setMode} mode={mode} />
          <Feed>
          </Feed>
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
