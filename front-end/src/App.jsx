import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RouterNavigator from "./components/Router";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <RouterNavigator />
      </BrowserRouter>
    </>
  );
}

export default App;
