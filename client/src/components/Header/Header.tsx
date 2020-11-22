import React from "react";
import styles from "./Header.module.css";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Link
          component="button"
          color="inherit"
          variant="body2"
          href="https://github.com/eghove/bad-email-detector/blob/master/README.md"
        >
          About
        </Link>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
