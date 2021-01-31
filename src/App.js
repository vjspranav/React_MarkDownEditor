import { useState } from "react";
//import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Filename" variant="outlined" />
      </form>
      <div className="container">
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
