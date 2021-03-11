import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
function App() {
  const classes = useStyles();
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar color="primary" position="static">
        <Toolbar>
          <MenuIcon edge="start" />
          <Typography variant="h6" noWrap>
            tours
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        <Typography
          className={classes.header}
          variant="h3"
          align="center"
          gutterBottom
          noWrap
        >
          Tours
        </Typography>
        <Grid container justify="center" spacing={4}>
          {card.map((card) => (
            <Grid key={card} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://picsum.photos/200/300"
                  title="image title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    heading
                  </Typography>
                  <Typography>This is media card</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    view
                  </Button>
                  <Button size="small" color="default">
                    show
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
