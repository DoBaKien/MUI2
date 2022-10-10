import {
  Box,
  Button,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../imgs/logo.png";
import PasswordCheck from "./PasswordCheck";

function Register({ mode }) {
  const [bg, setBg] = useState("#2C2C2C");
  useEffect(() => {
    if (mode === "dark") {
      setBg("#2C2C2C");
    } else {
      setBg("#F5F5F5");
    }
  }, [mode]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/register", {
        firstName:"dasd",
        lastName:"sadasd",
        phoneNumber:  userName,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { t, i18n } = useTranslation();
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    localStorage.setItem("lng", event.target.value);
    console.log(event.target.value);
    return i18n.changeLanguage(event.target.value);
  };

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box sx={{ position: "absolute" }}>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            value={age}
            onChange={handleChange}
            autoWidth
            sx={{ height: 50 }}
          >
            <MenuItem value="">{t("Language")}</MenuItem>
            <MenuItem value="en">{t("English")}</MenuItem>
            <Tooltip title="Vietnamese" value="vn" placement="right">
              <MenuItem>Tiếng Việt</MenuItem>
            </Tooltip>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          flex: 1,
          height: window.innerHeight,
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img alt="logo" src={Logo} width="40%" height={180} />

        <Box style={{ backgroundColor: bg, textAlign: "center", width: 600 }}>
          <Typography variant="h3">{t("Register")}</Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              style={{ marginTop: 20 }}
              label={t("First Name")}
              variant="outlined"
              fullWidth
            />
            <TextField
              style={{ marginTop: 20 }}
              label={t("Last Name")}
              variant="outlined"
              fullWidth
            />
            <TextField
              style={{ marginTop: 20 }}
              label={t("User Name")}
              variant="outlined"
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label={t("Password")}
              variant="outlined"
              fullWidth
              style={{ marginTop: 20, marginBottom: 10 }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordCheck password={password} />
            <Box
              sx={{ marginTop: 5, display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ fontSize: 20, width: "80%" }}
              >
                {t("sign up")}
              </Button>
            </Box>
          </form>
          <Box
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            <Link component="button" variant="body2">
              {t("Already have account?")}
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontSize: 20, width: "50%", marginTop: 2 }}
          >
            {t("log in")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
