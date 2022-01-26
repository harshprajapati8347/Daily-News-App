import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
  

const useStyles = makeStyles((theme) => ({
  component: {
    marginBottom: 20,
    boxShadow: "0 2px 5px 0 rgb(0 0 0/16%),0 2px 10px 0 rgb(0 0 0/12%)",
  },
  container: {
    padding: 8,
    paddingBottom: "4px !important",
  },
  image: {
    height: 268,
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  rightContainer: {
    margin: "5px 0 0 -25px !important",
    display: "flex",
    flexDirection: "column !important",
    "@media (max-width:600px)": {
      margin: "5px 0 !important",
    },
    "@media (max-width: 1536px) and (min-width: 600px)": {
      paddingLeft: "15px !important", 
    },
  },
  title: {
    color: "#44444d",
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 27,
  },
  author: {
    fontSize: 12,
    color: "#808290",
    lineHeight: 22,
  },
  description: {
    lineHeight: 22,
    color: "#44444d",
    marginTop: 5,
  },
  publisher: {
    fontSize: 12,
    marginTop: "auto",
    marginBottom: 10,
    "&  > ": {
      textDecoration: "none",
      color: "#000",
      fontWeight: 900,
    },
  },
}));

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.component}>
        <CardContent className={classes.container}>
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <img src={article.url} alt="img" className={classes.image} />
            </Grid>
            <Grid
              className={classes.rightContainer}
              item
              lg={7}
              md={7}
              sm={7}
              xs={12}
            >
              <Typography className={classes.title}>{article.title}</Typography>
              <Typography className={classes.author}>
                <b>short</b> by {article.author} /{" "}
                {new Date(article.timestamp).toDateString()}
              </Typography>
              <Typography className={classes.description}>
                {article.description}
              </Typography>
              <Typography className={classes.publisher}>
                Read more at{" "}
                <a href={article.url} target="_blank" rel="noreferrer">
                  {article.publisher}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Article;
