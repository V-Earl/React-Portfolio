import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
// import StickyFooter from "./footer";
import Album from "./components/Portfolio";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Routes /> */}
      </ThemeProvider>
      <Album />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Album />
//       {/* <StickyFooter /> */}
//     </div>
//   );
// }

export default App;
