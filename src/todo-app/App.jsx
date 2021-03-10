import React, { useState } from "react";
import { ControlPointOutlined, HighlightOff, Delete } from "@material-ui/icons";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";

const data = [
  { id: 1, do: "Reading" },
  { id: 2, do: "Writing" },
  { id: 3, do: "Swimming" },
];

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(data);
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime().toString(),
      do: text,
    };
    setText("");
    console.log(text);
    setTodos([...todos, todo]);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ControlPointOutlined />
          <Typography variant="h6" color="inherit" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h4" align="center">
          Todo App
        </Typography>
        {show && (
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setText(e.target.value)}
              label="Add Todo"
              variant="outlined"
              fullWidth
            />
          </form>
        )}
        <List component="nav" aria-label="main mailbox folders">
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <IconButton onClick={() => handleDelete(todo.id)}>
                <Delete />
              </IconButton>
              <ListItemText>{todo.do}</ListItemText>
            </ListItem>
          ))}
        </List>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={() => setShow(!show)}>
            {show ? (
              <HighlightOff fontSize="large" />
            ) : (
              <ControlPointOutlined fontSize="large" />
            )}
          </IconButton>
        </div>
      </Container>
    </>
  );
}

export default App;
