import React from "react";
import styles from "./Summary.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

type SummaryProps = {
  summaryTitle: string;
  summaryText: string;
};

const Summary = ({ summaryTitle, summaryText }: SummaryProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {summaryTitle}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {summaryText}
            </Typography>
            <Link
              variant="subtitle1"
              href="https://github.com/eghove/bad-email-detector/blob/master/README.md"
            >
              Learn more...
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Summary;
