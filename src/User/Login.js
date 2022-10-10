import {
  Box,
  FormControl,
  MenuItem,
  Select,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import UI from "./UI";
import Logo from "../imgs/logo.png";
import axios from "axios"
function Login({ mode }) {
  const BoxLogin = styled(Box)(({ theme }) => ({
    width: "500px",
    borderRadius: 10,
    position: "absolute",
    top: 200,
    right: 200,
    backgroundColor: "red",
    boxShadow: "1px 1px 1px 5px #AAA",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%",
      boxShadow: "none",
    },
  }));

  const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "black" : "#F0F2F5",
  }));

  const { t, i18n } = useTranslation();
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    localStorage.setItem("lng", event.target.value);
    console.log(event.target.value);
    return i18n.changeLanguage(event.target.value);
  };


 
  return (
    <BoxContainer color={"text.primary"}>
      <Box style={{ width: "100%", height: "790px" }}>
        <Box>
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
          sx={{ display: { xs: "none", lg: "block" } }}
          style={{ top: 120, left: 10, position: "absolute" }}
        >
          <img alt="logo" src={Logo} width="800" height={300} />
          <Typography
            variant="h3"
            color="text.primary"
            style={{ fontFamily: "Arial", textAlign: "center" }}
          >
            {t("CONNECTING PEOPLE")}
          </Typography>
        </Box>
        <BoxLogin>
          <UI mode={mode} />
        </BoxLogin>
      </Box>
    </BoxContainer>
  );
}

export default Login;
