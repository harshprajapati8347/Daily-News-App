import "./App.css";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Header from "./components/Header";
import HeaderInfo from "./components/HeaderInfo";
import Articles from "./components/Articles";

const useStyles = makeStyles({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0 auto",
    "@media(max-width:900px)": {
      width: "75%",
    },
    "@media(max-width:600px)": {
      width: "85%",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <HeaderInfo />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
