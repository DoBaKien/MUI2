import { Box, Stack } from "@mui/material";
import { Sidebar } from "../component/Sidebar";
import ListBook from "./ListBook";
import { Navbar } from "../component/Navbar";
function Table({ mode, setMode }) {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar color="black" />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar setMode={setMode} mode={mode} />
        <Box sx={{ flex: { xl: 6, md: 10, sm: 20, xs: 6 } }}>
          <ListBook />
        </Box>
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default Table;
