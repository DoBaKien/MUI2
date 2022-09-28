import App from "./App";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./User/Login";
import { createTheme } from "@mui/material";
import React, { useState } from "react";
import Table from "./Table/Table";
import Books from "./Table/Book";
import AddBook from "./Table/AddBook";

function All() {
  const [mode, setMode] = useState("dark");

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
        <Route path="/login" element={<Login/>} />
        <Route path="/page" element={<Table setMode={setMode} mode={mode} />} />
        <Route path="/page/:id" element={<Books setMode={setMode} mode={mode}/>} />
        <Route path="/addbook" element={<AddBook setMode={setMode} mode={mode}/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default All;
