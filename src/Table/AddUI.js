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
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useEffect, useState } from "react";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(details);
    console.log(rating);
    console.log(selected);
    console.log(pic);
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

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Create a new book
      </Typography>
      <Box>
        <form id="myForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px", justifyContent:"center", alignItems:"center" }}>
            <IconButton
              style={{
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
            {pic && <img alt="" src={pic} width="500px" height="300px"></img>}
          </div>

          <Box pb={2}>
            <TextField
              style={{ marginBottom: "20px" }}
              label="Name"
              variant="standard"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
              <Select
                fullWidth
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
              label="Detail"
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
          </Box>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddUI;
