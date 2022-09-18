import App from "./App";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./Login";
function All() {
   
  return (
    <>
      <Routes>
        <Route path="/Home" element={<App />} />
        <Route path="/content" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default All;
