import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
function Tour({ tour, deleteItem }) {
  const classes = useStyles();
  const [more, setMore] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={tour.image}
          title={tour.name}
        />
        <CardContent style={{ flexGrow: "1" }}>
          <div className={classes.headline}>
            <Typography
              style={{ lineHeight: "32px" }}
              gutterBottom
              variant="button"
            >
              {tour.name}
            </Typography>
            <Chip color="primary" label={tour.price} />
          </div>
          <Typography variant="caption">
            {more ? tour.info : `${tour.info.substring(0, 200)}...`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => setMore(!more)}>
            {more ? "show less" : "more"}
          </Button>
          <Button size="small" onClick={() => deleteItem(tour.id)}>
            delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Tour;
