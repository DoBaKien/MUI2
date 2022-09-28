import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  styled,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

var regUserName = /^[a-zA-Z0-9]{6,16}$/;
var regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const UI = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    console.log(userName);
    console.log(password);
  };
  const handleChangleUserName = (e) => {
    if (regUserName.test(e)) {
      setUserName(e);
      setUserNameError(false);
    } else {
      setUserName("");
      setUserNameError(true);
    }
  };

  const handleChanglePassword = (e) => {
    if (regpass.test(e)) {
      setPassword(e);
      setPasswordError(false);
    } else {
      setPassword("");
      setPasswordError(true);
    }
  };

  const Containers = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#2C2C2C" : "#F5F5F5",
  }));
  return (
    <Containers pb={2}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box>
          <TextField
            label={t("User Name")}
            variant="outlined"
            fullWidth
            className="asd"
            // sx={{ input: { color: "white" } }}
            style={{ marginTop: 20, borderColor: "red" }}
            onChange={(e) => handleChangleUserName(e.target.value)}
            error={userNameError}
          />

          <TextField
            label={t("Password")}
            style={{ marginTop: 20, marginBottom: 20 }}
            // sx={{ input: { color: "black" } }}
            fullWidth
            error={passwordError}
            type={showPass ? "text" : "password"}
            variant="outlined"
            onChange={(e) => handleChanglePassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <Tooltip title={showPass ? "Show" : "Hidden"}>
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                </Tooltip>
              ),
            }}
          />
        </Box>
        <Box style={{ justifyContent: "center", textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: { xs: 300, lg: 450 } }}
            style={{
              borderRadius: 5,
              height: 50,
              fontSize: 20,
              backgroundColor: "#1976D2",
              color: "white",
            }}
          >
            {t("log in")}
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
          {t("Forgotten password?")}
        </Link>
      </Box>
      <Box
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        <Button
          variant="contained"
          style={{
            width: 200,
            borderRadius: 5,
            color: "white",
            height: 50,
            fontSize: 20,
            marginBottom: 10,
            backgroundColor: "#1976D2",
          }}
        >
          {t("sign up")}
        </Button>
      </Box>
    </Containers>
  );
};
