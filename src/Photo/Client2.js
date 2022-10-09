import { Box, Stack } from "@mui/material";
import { Sidebar } from "../component/Sidebar";
import { Navbar } from "../component/Navbar";

function Client2({ mode, setMode }) {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar color="black" />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar setMode={setMode} mode={mode} />
        <Box sx={{ flex: { xl: 6, md: 10, sm: 20, xs: 6 } }}>
          <h1>asd</h1>
        </Box>
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default Client2;
