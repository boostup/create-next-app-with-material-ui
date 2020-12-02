import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  demoClassname: {
    color: "red",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={classes.demoClassname}
        >
          Next.js v5-alpha example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
