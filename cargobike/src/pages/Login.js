import "../Registration.css";
import React, { useState, useEffect, useRef } from "react";
import { auth } from "../components/firebase/Firebase";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom"; // <--- import `withRouter`. We will use this in the bottom of our file.
import { useHistory } from "react-router";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import lottie from "lottie-web";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Firma
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://www.groningenbereikbaar.nl/uploads/bestanden/82d59ab4-4181-55ff-b7cc-47c8ad9f897d/3096664547/SV%202020%200305%20Groningen%20Bereikbaar%20e%20cargobike-2004.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#796FF6",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#796FF6",
    height: "40px",
    borderRadius: "8px",
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Login() {
  const [user, setUser] = useState(null);
  const [username] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);


  useEffect(() => {
    
    if(value === 0){
        
    laatAfbeeldingzien().destroy();
    laatAfbeeldingzien();
    }

    if(value === 1){
    laatAfbeeldingzien2().destroy();
    laatAfbeeldingzien2();
    }

    if(value === 2){
    laatAfbeeldingzien3().destroy();
    laatAfbeeldingzien3();
    }
    
  }, [value]);

  const handleChange = (event, newValue) => {
    
    setValue(newValue);

    

    if(newValue === 0){
        
    laatAfbeeldingzien().destroy();
    laatAfbeeldingzien();
    }

    if(newValue === 1){
    laatAfbeeldingzien2().destroy();
    laatAfbeeldingzien2();
    }

    if(newValue === 2){
    laatAfbeeldingzien3().destroy();
    laatAfbeeldingzien3();
    }
    
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          console.log("succes ingelogd " + authUser.displayName);
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  

  // useEffect(() => {
  //   laatAfbeeldingzien();
      
    
  // }, []);

  const laatAfbeeldingzien = () => {
    return lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      name: "Ondernemer",
      autoplay: true,
      aspectRatio: 1,
      animationData: require("../img/lottie/deliver.json"),
    });
  }
  const laatAfbeeldingzien2 = () => {
    return lottie.loadAnimation({
      container: container1.current,
      renderer: "svg",
      loop: true,
      name: "Bezorger",
      autoplay: true,
      aspectRatio: 1,
      animationData: require("../img/lottie/man.json"),
    });
  }

  const laatAfbeeldingzien3 = () => {
    return lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      name: "Monteur",
      autoplay: true,
      aspectRatio: 1,
      animationData: require("../img/lottie/mechanic.json"),
    });
  }

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container1.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     aspectRatio: 1,
  //     animationData: require("../img/lottie/man.json"),
  //   });
  // });

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container2.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     aspectRatio: 1,
  //     animationData: require("../img/lottie/mechanic.json"),
  //   });
  // });

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(
      (error) => history.push("/Login")
      // event.preventDefault(),
      // alert('E-mail adres of wachtwoord komt niet overeen'),
    );
    history.push("/OndDashboard");
  };

  const signInBezorger = () => {
    history.push("/BezDashboard");
  }
  
  const signInMonteur = () => {
    history.push("/MonDashboard");
  }

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClick = () => {
    history.push("/Onboarding");
  };
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <AppBar position="relative" color="white">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Ondernemer" {...a11yProps(0)} />
                <Tab label="Bezorger" {...a11yProps(1)} />
                <Tab label="Monteur" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <div className="lottieContainer">
                <div className="container" ref={container}></div>
              </div>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mailadres"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Wachtwoord"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ingelogd blijven"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signIn}
                >
                  Inloggen
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Wachtwoord vergeten?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={handleClick} variant="body2">
                      {"Nog geen account? Registreer nu!"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </TabPanel>



            <TabPanel value={value} index={1}>
              <div className="lottieContainer">
              {/* {laatAfbeeldingzien()} */}
                <div className="container1" ref={container1}></div>
              </div>

              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mailadres"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Wachtwoord"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ingelogd blijven"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signInBezorger}
                >
                  Inloggen
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Wachtwoord vergeten?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={handleClick} variant="body2">
                      {"Nog geen account? Registreer nu!"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </TabPanel>

            <TabPanel value={value} index={2}>
            <div className="lottieContainer">
              <div className="container2" ref={container2}></div>
              </div>

              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mailadres"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Wachtwoord"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ingelogd blijven"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signInMonteur}
                >
                  Inloggen
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Wachtwoord vergeten?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={handleClick} variant="body2">
                      {"Nog geen account? Registreer nu!"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Login);