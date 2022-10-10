import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Side } from "../Messenger/Side";
import Item from "./Item";
import List from "./List";

function Body({ mode, setMode }) {
  const {t}= useTranslation();
    const [tit, setTit]= useState(`${t("All Friends")}`)
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Side setMode={setMode} mode={mode} />
        <Box sx={{ flex: { xl: 2, md: 2, sm: 8, xs: 4 }}}>
          <Item setTit={setTit}/>
        </Box>
        <Box
          sx={{
            flex: { xl: 6, md: 10, sm: 20, xs: 6 },
            height: window.innerHeight,
            overflow:"auto"
          }}
        ><List tit={tit}/></Box>
      </Stack>
    </Box>
  );
}

export default Body;
