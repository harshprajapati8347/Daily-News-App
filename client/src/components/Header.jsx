import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Menu } from "@mui/icons-material";

import logo from "../assets/logo.png";

const useStyles = makeStyles({
  header: {
    background: "#fff !important",
    height: 70,
  },
  menu: {
    color: "#000",
  },

  logo: {
    height: 45,
    width: 45,
    margin: "auto",
  },

  logoFont: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
    color: "#000",
    fontSize: 30,
    padding: 14,
    fontWeight: "bold",
    fontFamily: "Alegreya",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Menu className={classes.menu} />
          {/* <img src={logo} className={classes.logo} alt="logo"></img> */}
          <div className={classes.logoFont}>Daily News</div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
