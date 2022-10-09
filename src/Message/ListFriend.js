import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Img1 from "../imgs/1.jpg";
function ListFriend() {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
        <CardActionArea>
          <CardContent style={{ float: "left" }}>
            <CardMedia
              component="img"
              height="90"
              image={Img1}
              alt="green iguana"
            />
          </CardContent>
          <CardContent sx={{display: { xl: "block", md: "block", sm: "none", xs: "none" },}}>
            <Typography gutterBottom variant="h5" component="div">
              Đỗ Bá Kiên
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"end"}
            >
              2h
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ListFriend;
