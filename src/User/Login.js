import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);

  const BoxLogin = styled(Box)(({ theme }) => ({
    width: "500px",
    borderRadius: 10,
    position: "absolute",
    top: 200,
    right: 200,
    boxShadow: "1px 1px 1px 5px #AAA",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%",
      boxShadow: "none",
    },
  }));

  const Input = styled(TextField)(({ theme }) => ({
    marginTop: 20,
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 300
    },
  }));

  const { t, i18n } = useTranslation();
  const [a, setA] = useState("");
  const handleChangeLng = (lng) => {
    setA(lng);
    return i18n.changeLanguage(lng);
  };
  useEffect(() => {
    localStorage.setItem("lng", a);
  }, [a]);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box style={{ width: "100%", height: "790px" }}>
        <Box>
          <Button onClick={() => handleChangeLng("en")}>English</Button>
          <Button onClick={() => handleChangeLng("vn")}>VietNam</Button>
        </Box>
        <Box
          sx={{ display: { xs: "none", lg: "block" } }}
          style={{ top: 200, left: 150, position: "absolute" }}
        >
          <Typography
            variant="h1"
            color="text.primary"
            style={{ fontFamily: "Optima", float: "left", color: "yellow" }}
          >
            BEE&nbsp;
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            style={{ fontFamily: "Optima" }}
          >
            TECH
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            style={{ fontFamily: "Optima" }}
          >
            SMART TECH - SMART LIFE
          </Typography>
        </Box>
        <BoxLogin style={{ height: 350 }}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box
              pb={2}
              style={{ justifyContent: "center", textAlign: "center" }}
            >
              <Input
                label={t("User Name")}
                variant="outlined"
                fullWidth
                // onChange={(e) => handleChangleUserName(e.target.value)}
                // error={userNameError}
              />

              <Input
                label={t("Password")}
                type={showPass ? "text" : "password"}
                // error={passwordError}
                variant="outlined"
                // onChange={(e) => handleChanglePassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Tooltip title={showPass ? "Show" : "Hidden"}>
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPass(!showPass)}>
                          {showPass ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
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
                sx={{ width: { xs: 300, lg: 400 } }}
                style={{
                  borderRadius: 5,
                  height: 50,
                  fontSize: 20,
                  backgroundColor: "#1976D2",
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
                height: 50,
                fontSize: 20,
                backgroundColor: "#1976D2",
              }}
            >
              {t("sign up")}
            </Button>
          </Box>
        </BoxLogin>
      </Box>
    </Box>
  );
}

export default Login;
