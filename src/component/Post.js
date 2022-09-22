import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Card,
  Avatar,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Checkbox,
  Box,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Img2 from "../imgs/2.jpg";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
export const Post = () => {
  const [data, setData] = useState("");
  const handle = (e) => {
    setData(e);
  };
  const imgAction = () => {
    setData("");
    console.log();
  };
  return (
    <>
      {data && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            paddingTop: 30,
            top: 60,
            left: 0,
            zIndex: 1,
          }}
        >
          <button
            onClick={() => {
              imgAction();
            }}
            style={{
              position: "absolute",
              top: 5,
              right: 15,
              background: "black",
              border: "none",
            }}
          >
            <DisabledByDefaultIcon
              fontSize="large"
              style={{ color: "white" }}
            ></DisabledByDefaultIcon>
          </button>
          <img
            alt=""
            src={Img2}
            style={{
              width: "auto",
              maxWidth: "85%",
              maxHeight: "85%",
              marginLeft: 20,
              marginTop:17
            }}
          />
          <Box
            sx={{
              marginTop: 2,
              width: 300,
              height: 300,
            }}
          >
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Kien Do"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </div>
      )}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Kien Do"
          subheader="September 14, 2016"
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          style={{ width: "100%", display: "block", cursor: "pointer" }}
          onClick={(image) => {
            handle(image.target.src);
          }}
        >
          <CardMedia
            component="img"
            height="20%"
            image={Img2}
            alt="Paella dish"
          />
        </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
