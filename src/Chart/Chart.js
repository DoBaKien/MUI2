import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../component/Navbar";
import { Sidebar } from "../component/Sidebar";
import { LineC } from "./LineC";
import PieC from "./PieC";
import { UserData } from "./Data";
import BarC from "./BarC";

function Chart({ setMode, mode }) {
  const data = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const [userData, setUserData] = useState(data);
  console.log(setUserData);
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar color="black" />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar setMode={setMode} mode={mode} />
        <Box
          sx={{
            flex: { xl: 6, md: 10, sm: 20, xs: 6 }, height:727
          }}
        >
          <Box>
            <Stack
              sx={{
                flexDirection: { xl: "row", md: "row", sm: "none", xs: "none" },
              }}
              justifyContent="space-evenly"
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  width: { xl: "45%", md: "45%", sm: "90%", xs: "90%" },
                  marginTop: 5,
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: { xl: "50%", md: "60%", sm: "90%", xs: "90%" },
                  }}
                >
                  <PieC />
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  width: { xl: "45%", md: "45%", sm: "90%", xs: "90%" },
                  marginTop: 5,
                }}
              >
                <LineC chartData={userData} />
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: { xl: "row", md: "row", sm: "none", xs: "none" },
              }}
              justifyContent="space-evenly"
            >
              <Box
                sx={{
                  marginTop: 5,
                  backgroundColor: "white",
                  width: { xl: "45%", md: "45%", sm: "90%", xs: "90%" },
                }}
              >
                <BarC chartData={userData} />
              </Box>
              <Box
                sx={{
                  marginTop: 5,
                  backgroundColor: "white",
                  width: { xl: "45%", md: "45%", sm: "90%", xs: "90%" },
                }}
              >
                <LineC chartData={userData} />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chart;
