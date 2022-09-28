import { Box } from "@mui/material";
import React from "react";
import { Post } from "./Post";
export const Feed = () => {
  return (
    <Box sx={{ flex: { xl: 5, md: 10, sm: 20, xs: 10 } }}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
