import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    background: "#f44336",
    color: "#fff",
    height: 48,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  text: {
    fontSize: 14,
    paddingLeft: 50,
    fontWeight: "300",
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
});

const HeaderInfo = () => {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.text}>
          For the best experience use <b>inshorts</b> app on your smartphone
        </Typography>
        <Box style={{ marginLeft: "auto" }}>
          <img src={appleStore} className={classes.logo} alt="AppleStore" />
          <img src={googleStore} className={classes.logo} alt="GoogleStore" />
        </Box>
      </Box>
    </>
  );
};

export default HeaderInfo;
