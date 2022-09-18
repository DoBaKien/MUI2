import {
  Avatar,
  Box,
  Card,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
  AvatarGroup,
  Tooltip,
  styled,
  Stack,
} from "@mui/material";
import React from "react";
import Img2 from "../imgs/2.jpg";
import Img1 from "../imgs/1.jpg";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Map from "./Map";

const Icon = styled(IconButton)(({ theme }) => ({
  background: "none",
  color: "primary",
  position: "absolute",
  top: 500,
  left: 160,
  [theme.breakpoints.up("sm")]: {
    marginLeft: "320px",
    top: 510,
  },
}));

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
    justifyContent:"end"
  },
}));
const CardLeft = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
  [theme.breakpoints.up("sm")]: {
    marginRight: "9%",
    width: "45%",
    float: "left",
    marginTop: 10,
    marginBottom: 10,
  },
}));
const CardRight = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
  [theme.breakpoints.up("sm")]: {
    marginRight: "9%",
    width: "45%",
    marginTop: 10,
    marginBottom: 10,
  },
}));

export const Content = () => {
  return (
    <Box flex={4}>
      <Card sx={{ marginTop: 2 }}>
        <CardMedia
          component="img"
          height="300px"
          image={Img2}
          alt="Paella dish"
        />
        <CardContent style={{ float: "left" }}>
          <CardMedia
            component="img"
            height="150px"
            image={Img1}
            alt="Paella dish"
          />
          <Icon color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <Tooltip title="Choose Image" placement="left">
              <PhotoCamera fontSize="large" />
            </Tooltip>
          </Icon>
        </CardContent>
        <CardContent>
          <Typography variant="h5" component="div">
            Đỗ Bá Kiên
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            100 Followers
          </Typography>
          <AvatarGroup
            total={100}
            sx={{ mb: 1.5, position: "absolute", marginLeft: "160px" }}
          >
            <Avatar alt="Remy Sharp" src={Img1} />
            <Avatar alt="Travis Howard" src={Img1} />
            <Avatar alt="Cindy Baker" src={Img1} />
            <Avatar alt="Agnes Walker" src={Img1} />
            <Avatar alt="Trevor Henderson" src={Img1} />
          </AvatarGroup>
        </CardContent>
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
            <StackContact
              direction="row"
              mt={0.5}
              gap={5}
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
              <Map />
            </Typography>
            <Typograph variant="body" component="div" style={{ marginTop: 10 }}>
              <div><span>Email: </span> asdjasd@gmail.com</div>
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
              <Typography
                variant="h5"
                component="div"
                style={{ float: "left" }}
              >
                CONTACTS
              </Typography>
              <Stack
                direction="row"
                mt={0.5}
                gap={5}
                style={{ justifyContent: "end" }}
              >
                <FacebookIcon color="primary" />
                <GitHubIcon color="secondary" />
                <TwitterIcon color="success" />
                <InstagramIcon color="error" />
              </Stack>
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
