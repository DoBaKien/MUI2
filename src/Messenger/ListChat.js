import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Img1 from "../imgs/1.jpg";
import "./Mess.css"
function ListChat() {
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
          <CardContent
            sx={{
              display: { xl: "block", md: "block", sm: "none", xs: "none" },
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Đỗ Bá Kiên
            </Typography>
            <div className="chatlist">
              Thực ra đây cũng là vấn đề của rất nhiều người. Bản thân mình khi
              chưa có kinh nghiệm về mấy cái này thì thường hay lạm dụng jquery
              để check các case. Tuy nhiên sau khi phát hiện ra 1 số thuộc tính
              với cách sử dụng vô cùng đơn giản thì mình đã quăng jquery ra sau
              đầu ngay và luôn. Bây giờ cùng đi vào bài viết
            </div>
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

export default ListChat;
