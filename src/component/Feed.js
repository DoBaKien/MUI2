import { Box, styled } from "@mui/material";
import React from "react";
import {Post} from "./Post"
export const Feed = () => {
  const Boxx = styled(Box)(({ theme }) => ({
    flex:20,
    [theme.breakpoints.up("sm")]: {
      flex:5,
    },
  }));
  return <Boxx>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </Boxx>;
};
