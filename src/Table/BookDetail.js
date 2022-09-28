import { useEffect, useState } from "react";
import Axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ViewListIcon from "@mui/icons-material/ViewList";

function BookDetail({ id }) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);
  const url = "http://localhost:3001/books/";

  const Chap = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F5F5F5",
    padding: 20,
    textAlign: "center",
    margin: 5,
    fontSize:20,
    borderRadius: 15,
  }));

  const Geners = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F5F5F5",
    padding: 2,
    textAlign: "center",
    fontSize: 20,
    margin: 5,
    borderRadius: 15,
  }));

  useEffect(() => {
    Axios.get(url + id).then((res) => {
      setName(res.data.name);
      setDetails(res.data.details);
      setRating(res.data.rating);
      setImage(res.data.pic);
      setSelected(res.data.selected);
    });
  }, [id]);

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        flex: { xl: 6, md: 10, sm: 20, xs: 6 },
      }}
    >
      <Card>
        <CardContent
          style={{ float: "left" }}
          sx={{ paddingLeft: { xl: 0, md: 0, sm: 0, xs: 8 } }}
        >
          <CardMedia
            component="img"
            height="330px"
            image={image}
            alt="Paella dish"
            style={{border:"1px solid black"}}
          />
        </CardContent>
        <CardContent>
          <Typography variant="h4" component="div">
            {name}
          </Typography>
          <Rating value={rating} readOnly sx={{ marginBottom: 2 }} />
          <Typography variant="h6">{t("Author")}: Gosho Aoyama</Typography>
          <Typography variant="h6">{t("Artist")}: Gosho Aoyama</Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography sx={{ mb: 1.5, marginTop: 1 }} variant="h6">
              {t("Geners")}:
            </Typography>
            <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
              <Grid container spacing={{ xs: 1 }} columns={{ xs: 3 }}>
                {selected.map((valu, index) => (
                  <Grid key={index}>
                    <Geners elevation={4}>{valu}</Geners>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>

          <Typography variant="h6">
            {t("Publication")}: 1994, ONGOING
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            {details}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: 5 }}>
        <ViewListIcon fontSize="large" sx={{ float: "left" }} />
        <Typography variant="h5" sx={{ marginLeft: 2 }}>
          {t("CHAPTERS")}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Array.from(Array(50)).map((_, index) => (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Chap elevation={4}>Chap {index}</Chap>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BookDetail;
