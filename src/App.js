import "./App.css";
import Leftbar from "./Components/Leftbar";
import Navbar from "./Components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import AddPost from "./Components/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Leftbar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
