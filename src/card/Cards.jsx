import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { MoreVert, Favorite, Share } from "@material-ui/icons";

const item = [1, 2, 3];

function Cards() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Favorite />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Logo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {item.map((i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Card style={{ height: "100%" }}>
                <CardHeader
                  avatar={<Avatar>S</Avatar>}
                  action={
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  style={{ paddingTop: "56.25%" }}
                  image="https://source.unsplash.com/random"
                  title="title"
                />
                <CardContent>
                  <Typography variant="h5">Skyes Crawford</Typography>
                  <Typography variant="caption">Skyes Crawford</Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <Share />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
