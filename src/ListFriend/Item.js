import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import { useTranslation } from "react-i18next";

function Item({setTit}) {
  const {t} = useTranslation()
  return (
    <Box>
      <Card sx={{ borderRadius: 3, marginBottom: 3, marginTop: 3 }}>
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ float: "left", marginRight: 2 }}>
              <PersonAddAlt1Icon
                fontSize="large"
                sx={{ height: 50, color: "#43BDD9" }}
              />
            </Box>
            <Box
              sx={{
                height: 50,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="text.primary">
                {t("Add Friend")}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ borderRadius: 3 }}>
        <CardActionArea onClick={() => setTit(`${t("All Friends")}`)}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ float: "left", marginRight: 2 }}>
              <GroupIcon
                fontSize="large"
                sx={{ height: 50, color: "#43BDD9" }}
              />
            </Box>
            <Box
              sx={{
                height: 50,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="text.primary">
                {t("All Friends")}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ borderRadius: 3, marginTop: 3 }}>
        <CardActionArea onClick={() => setTit(`${t("All Groups")}`)}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ float: "left", marginRight: 2 }}>
              <GroupsIcon
                fontSize="large"
                sx={{ height: 50, color: "#43BDD9" }}
              />
            </Box>
            <Box
              sx={{
                height: 50,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="text.primary">
                {t("All Groups")}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Item;
