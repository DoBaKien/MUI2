import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Rating,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
function AddUI() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [rating, setRating] = useState(5);
  const [genres, setGenres] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [selected, setSelected] = useState([]);
  const theme = useTheme();
  const [pic, setPic] = useState("");
  const {t} = useTranslation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      details: details,
      rating: rating,
      selected: selected,
      pic: pic,
    };

    swal(`${("Success")}`, `${t("You successfully added the book")}`,"success");

    // fetch("http://localhost:3001/books", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    setDetailError(false);
    setNameError(false);
  };

  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((data) => data.json())
      .then((data) => setGenres(data));
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setSelected(value);
  };

  const onChangeImg = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onLoad = (fileString) => {
    setPic(fileString);
  };
  var a= t("Name")
  var b= t("Details")
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        {t("Create a new book")}
      </Typography>
      <Box>
        <form id="myForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack
            sx={{
              flexDirection: { xl: "row", md: "row", sm: "none", xs: "none" },
            }}
          >
            <Box
              flex={1}
              style={{
                float: "left",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <IconButton
                style={{
                  position: "absolute",
                  color: "black",
                  backgroundColor: "lightgray",
                }}
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={onChangeImg}
                />
                <Tooltip title="Choose Image" placement="left">
                  <PhotoCamera fontSize="large" />
                </Tooltip>
              </IconButton>
              <Box sx={{ width: 400, marginLeft: 8 }}>
                <Button component="label">
                  {pic && (
                    <img alt="" src={pic} width="100%" height="100%"></img>
                  )}
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={onChangeImg}
                  />
                </Button>
              </Box>
            </Box>

            <Box pb={2} flex={1} sx={{ marginTop: 10 }}>
              <TextField
                style={{ marginBottom: "20px" }}
                label={a}
                variant="standard"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                error={nameError}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">{t("Geners")}</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {genres.map((name) => (
                    <MenuItem
                      key={name.id}
                      value={name.genre}
                      style={getStyles(name, personName, theme)}
                    >
                      {name.genre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                style={{ marginTop: "20px", marginBottom: "20px" }}
                label={b}
                variant="standard"
                fullWidth
                multiline
                onChange={(e) => setDetails(e.target.value)}
                error={detailError}
              />

              <Rating
                value={rating}
                onChange={(e) => setRating(~~e.target.value)}
              />
              <Box
                sx={{ marginTop: 5, justifyContent: "center", display: "flex" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontSize: 20, width: 300 }}
                >
                  {t("Add")}
                </Button>
              </Box>
            </Box>
          </Stack>
        </form>
      </Box>
      <Box sx={{ width: 100, height: 232, bottom: 0 }}></Box>
    </Container>
  );
}

export default AddUI;
