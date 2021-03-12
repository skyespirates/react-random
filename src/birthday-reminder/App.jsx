import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import { data } from "./data";
import People from "./People";
function App() {
  const people = data;
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">B-R</Typography>
        </Toolbar>
      </AppBar>
      <People people={people} />
    </>
  );
}

export default App;
