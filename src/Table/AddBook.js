import { Box, Stack } from "@mui/material";
import { Navbar } from "../component/Navbar";
import { Sidebar } from "../component/Sidebar";
import AddUI from "./AddUI";
function AddBook({ mode, setMode }) {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar  />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar setMode={setMode} mode={mode} />
        <Box sx={{ flex: { xl: 6, md: 10, sm: 20, xs: 6 }, height:1000 }}>
            <AddUI/>
        </Box>
     
      </Stack>
    </Box>
  );
}

export default AddBook;
