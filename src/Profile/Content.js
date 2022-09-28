import {
  Avatar,
  Box,
  Card,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
  Tooltip,
  styled,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import Img2 from "../imgs/2.jpg";
import Img1 from "../imgs/1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Map from "./Map";
import { useTranslation } from "react-i18next";

const Typograph = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    float: "left",
  },
}));
const Typograp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    float: "left",
  },
}));
const StackContact = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    justifyContent: "end",
  },
}));
const CardLeft = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
  [theme.breakpoints.up("sm")]: {
    marginRight: "4%",
    width: "46%",
    float: "left",
    marginBottom: 10,
  },
}));
const CardRight = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
  [theme.breakpoints.up("sm")]: {
    width: "49%",
    marginTop: 20,
    marginBottom: 10,
  },
}));

export const Content = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flex: { xl: 6, md: 10, sm: 20, xs: 6 } }}>
      <Card sx={{ marginTop: 2 }}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          height="300px"
          style={{ width: "100%", padding: 0 }}
        >
          <input hidden accept="image/*" type="file" />
          <Tooltip title="Changle Cover" placement="bottom">
            <CardMedia
              component="img"
              height="300px"
              image={Img2}
              alt="Paella dish"
            />
          </Tooltip>
        </IconButton>
        <Card sx={{ paddingLeft: { xl: 0, md: 0, sm: 0, xs: 8 } }}>
          <CardContent style={{ float: "left" }}>
            <IconButton color="primary" style={{ padding: 0 }}>
              <CardMedia
                component="img"
                height="150px"
                image={Img1}
                alt="Paella dish"
              />

              <Tooltip title="Changle Avatar" placement="right">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  style={{
                    backgroundColor: "lightgray",
                    position: "absolute",
                    top: 120,
                    left: 125,
                  }}
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
            </IconButton>
          </CardContent>
          <CardContent style={{ float: "left" }}>
            <Typography variant="h5" component="div">
              Đỗ Bá Kiên
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              100 {t("Followers")}
            </Typography>

            <Stack direction="row">
              <Avatar
                alt="Remy Sharp"
                src={Img1}
                sx={{ width: { sm: 40, xs: 24 }, height: { sm: 40, xs: 24 } }}
              />
              <Avatar
                alt="Travis Howard"
                src={Img1}
                sx={{ width: { sm: 40, xs: 24 }, height: { sm: 40, xs: 24 } }}
              />
              <Avatar
                alt="Cindy Baker"
                src={Img1}
                sx={{ width: { sm: 40, xs: 24 }, height: { sm: 40, xs: 24 } }}
              />
              <Avatar
                alt="Agnes Walker"
                src={Img1}
                sx={{ width: { sm: 40, xs: 24 }, height: { sm: 40, xs: 24 } }}
              />
              <Avatar
                alt="Trevor Henderson"
                src={Img1}
                sx={{ width: { sm: 40, xs: 24 }, height: { sm: 40, xs: 24 } }}
              />
            </Stack>
          </CardContent>
          <CardContent sx={{ textAlign: { sm: "right", xs: "left" } }}>
            <Button variant="contained" startIcon={<EditIcon />}>
              {t("Edit Profile")}
            </Button>
          </CardContent>
        </Card>
      </Card>

      <Box>
        <CardLeft variant="outlined">
          <CardContent>
            <Typograph variant="h5" component="div" style={{ float: "left" }}>
              ABOUT ME
            </Typograph>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ textAlign: "end" }}
            >
              WEB DESIGN
            </Typography>
            <Typography
              variant="body2"
              component="div"
              style={{ marginTop: 10 }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardLeft>

        <CardRight variant="outlined">
          <CardContent>
            <Typograp variant="h5" component="div">
              CONTACTS
            </Typograp>
            <StackContact direction="row" mt={0.5} gap={5}>
              <FacebookIcon color="primary" />
              <GitHubIcon color="secondary" />
              <TwitterIcon color="success" />
              <InstagramIcon color="error" />
            </StackContact>
            <Typography
              variant="body2"
              component="div"
              style={{ marginTop: 10 }}
            >
              <Map />
            </Typography>
            <Typograph variant="body" component="div" style={{ marginTop: 10 }}>
              <div>
                <span>Email: </span> asdjasd@gmail.com
              </div>
            </Typograph>
            <Typograph
              variant="body"
              component="div"
              style={{ marginTop: 10, textAlign: "end" }}
            >
              +84 1236789
            </Typograph>
          </CardContent>
        </CardRight>

        <CardLeft variant="outlined">
          <CardContent>
            <Typograph variant="h5" component="div" style={{ float: "left" }}>
              EXPERIENCE
            </Typograph>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ textAlign: "end" }}
            >
              occupation - Design
            </Typography>
            <Typography
              variant="body2"
              component="div"
              style={{ marginTop: 10 }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardLeft>
        <Box>
          <CardRight variant="outlined">
            <CardContent>
              <Typograp variant="h5" component="div" style={{ float: "left" }}>
                CONTACTS
              </Typograp>
              <StackContact
                direction="row"
                mt={0.5}
                gap={2}
                style={{ justifyContent: "end" }}
              >
                <FacebookIcon color="primary" />
                <GitHubIcon color="secondary" />
                <TwitterIcon color="success" />
                <InstagramIcon color="error" />
              </StackContact>
              <Typography
                variant="body2"
                component="div"
                style={{ marginTop: 10 }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardRight>
          <CardRight variant="outlined">
            <CardContent>
              <Typograph variant="h5" component="div" style={{ float: "left" }}>
                EXPERIENCE
              </Typograph>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ textAlign: "end" }}
              >
                occupation - Design
              </Typography>
              <Typography
                variant="body2"
                component="div"
                style={{ marginTop: 10 }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardRight>
        </Box>
      </Box>
    </Box>
  );
};
