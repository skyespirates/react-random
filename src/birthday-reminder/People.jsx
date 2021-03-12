import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListSubheader,
} from "@material-ui/core";
import Person from "./Person";
function People({ people }) {
  return (
    <>
      <Typography style={{ margin: "40px auto" }} align="center" variant="h4">
        Birthday Reminder
      </Typography>
      <Container maxWidth="xs">
        <Paper>
          <List>
            <ListSubheader>{people.length} birthdays today</ListSubheader>
            {people.map((person) => (
              <Person key={person.id} data={person} />
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
}

export default People;
