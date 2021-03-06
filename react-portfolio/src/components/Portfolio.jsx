import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Project from "./Project";
import Footer from "./Footer";
import "../portfolio.css";
import projects from "../projects.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Valerie Earl
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              About Me
            </Typography>
            <Typography align="justify" color="textSecondary" paragraph>
              <p>
                Hello and Welcome! My name is Valerie Earl and I am currently an
                AML/ Compliance Analyst, soon to be Full Stack Web Developer.
                Although it has been challenging learning something completely
                different, I am enjoying the process of really stretching and
                pushing myself. So far, it has been an interesting ride but I am
                here to enjoy the journey and learn as much as I can.
              </p>
              <p>
                A few things that I enjoy in life are traveling and learning
                about other cultures, trying new foods, spending time with the
                people I love and hearing my daughter laugh. These days, I am
                just taking life as it comes and living by the motto that if it
                is to be, it will be.
              </p>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined">
                    <a href="https://github.com/V-Earl">GitHub</a>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    <a href="https://www.linkedin.com/in/valerie-earl-73504356">
                      LinkedIn
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Project
                  projectName={card.name}
                  // image={card.image}
                  link={card.appLink}
                  github={card.githubRepo}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
