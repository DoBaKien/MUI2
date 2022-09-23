import App from "./App";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./User/Login";
import { createTheme } from "@mui/material";
import React, { useState } from "react";

function All() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/Home" element={<App setMode={setMode} mode={mode} />} />
        <Route path="/content" element={<Profile setMode={setMode} mode={mode} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default All;
