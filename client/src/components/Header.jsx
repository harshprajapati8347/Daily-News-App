import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Menu } from "@mui/icons-material";

import logo from "../assets/logo.png"

const useStyles = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },
  menu: {
    color: "#000",
  },

  logo: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
  },
});

const Header = () => {
  const classes = useStyles();
    return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Menu className={classes.menu} />
          <img src={logo} alt="inshorts_logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
