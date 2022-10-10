import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Ava from "../imgs/1.jpg";

function List({ tit }) {
  const Chap = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F5F5F5",
    padding: 20,
    textAlign: "center",
    margin: 5,
    fontSize: 20,
    borderRadius: 15,
  }));
  return (
    <Box sx={{ textAlign: "center", marginTop: 3 }}>
      <Typography variant="h3">{tit}</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {Array.from(Array(50)).map((_, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Chap
              elevation={4}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={Ava}
                  sx={{ float: "left", marginRight: 2 }}
                />
                Name users {index}
              </Box>
              <IconButton aria-label="delete" size="large">
                <MoreHorizIcon />
              </IconButton>
            </Chap>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default List;
