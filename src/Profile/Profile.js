import { Box, Stack } from "@mui/material";
import { Sidebar } from "../component/Sidebar";
import { Content } from "./Content";
import { Navbar } from "../component/Navbar";


function Profile({ mode, setMode }) {

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar color="black" />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar setMode={setMode} mode={mode} />
        <Content />
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default Profile;
