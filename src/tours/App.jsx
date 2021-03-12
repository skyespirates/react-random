import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
const url = "https://course-api.com/react-tours-project";
function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const deleteItem = (id) => {
    const Tours = tours.filter((tour) => tour.id !== id);
    setTours(Tours);
  };
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />;
      </div>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar color="primary" position="static">
        <Toolbar>
          <MenuIcon edge="start" />
          <Typography variant="h6" noWrap>
            Tours
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        className={classes.header}
        variant="h3"
        align="center"
        gutterBottom
        noWrap
      >
        Tours
      </Typography>
      <Tours tours={tours} deleteItem={deleteItem} />
    </>
  );
}

export default App;
