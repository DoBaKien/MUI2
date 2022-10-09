import {
  Avatar,
  Box,
  Chip,
  IconButton,
  InputBase,
  Stack,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import Img1 from "../imgs/1.jpg";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PetsIcon from "@mui/icons-material/Pets";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#3A3B3C" : "#F5F5F5",
    borderRadius: 8,
    width: "80%",
    height: 35,
  }));
  return (
    <Box>
      <Stack
        direction="column"
        sx={{ overflowY: "scroll", height: window.innerHeight - 200 }}
      >
        {Array.from(Array(20)).map((_, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Img1}
              sx={{ float: "left", marginTop: 1.5, marginRight: 1 }}
            />
            <Chip
              label="Chat Content"
              variant="outlined"
              key={index}
              color="primary"
              sx={{ width: 200, marginTop: 2 }}
            />
          </Box>
        ))}
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: 60,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" gap={1}>
          <Tooltip title="Attach a file">
            <IconButton>
              <ImageIcon color="success" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Gif">
            <IconButton color="secondary">
              <GifBoxIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Search>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Search>
        <Stack direction="row" gap={1}>
          <Tooltip title="Stickers">
            <IconButton color="secondary">
              <PetsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Emoji">
            <IconButton>
              <EmojiEmotionsIcon color="success" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Send Messenger">
            <IconButton>
              <SendIcon color="success" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  );
}

export default Chat;
