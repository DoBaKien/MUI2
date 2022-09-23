import { Box, Stack} from "@mui/material";
import { Sidebar } from "./component/Sidebar";
import { Feed } from "./component/Feed";
import { Rightbar } from "./component/Rightbar";
import { Navbar } from "./component/Navbar";
import Add from "./component/Add";

function App({mode,setMode}) {
  
  return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar color="black"/>
        <Stack direction="row"  justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed/>
          <Rightbar sx={{ display: { xs: "none", sm: "block" } }}/>
        </Stack>
        <Add />
      </Box>
 
  );
}

export default App;
