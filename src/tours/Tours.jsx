import React from "react";
import { Container, Grid } from "@material-ui/core";
import Tour from "./Tour";
import useStyles from "./styles";
function Tours({ tours, deleteItem }) {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Grid container justify="center" spacing={4}>
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} deleteItem={deleteItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Tours;
