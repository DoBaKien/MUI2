
import { useParams } from "react-router-dom";

import { Box, Stack } from "@mui/material";
import { Navbar } from "../component/Navbar";
import { Sidebar } from "../component/Sidebar";
import BookDetail from "./BookDetail";
function Books({ mode, setMode }) {
  const { id } = useParams();
  return (
    <Box>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar color="black" />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode} />
          <BookDetail id ={id}/>
          <Box></Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Books;
