import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
// import StickyFooter from "./footer";
import Album from "./portfolio";

function App() {
  return (
    <div>
      {/* <Button color="secondary">Hello World</Button> */}
      <Album />
      {/* <StickyFooter /> */}
    </div>
  );
}

export default App;
