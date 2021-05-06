import React from "react";
import useForm from "../../hooks/useForm";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { goToSignup } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import { signUp } from "../../services/user";

const SignupForm = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [form, onchange, clear] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: ""
  });

  const onsubmitForm = (event) => {
    event.preventDefault();
    console.log(form)
    signUp(form, clear, history)
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={onsubmitForm}>
            <TextField
              margin="normal"
              fullWidth
              id={"name"}
              label={"Name"}
              variant={"outlined"}
              name={"name"}
              value={form.name}
              onChange={onchange}
              autoComplete="name"
              autoFocus
              type={"name"}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              id={"email"}
              label={"E-mail"}
              variant={"outlined"}
              name={"email"}
              value={form.email}
              onChange={onchange}
              autoComplete="email"
              autoFocus
              type={"email"}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name={"password"}
              value={form.password}
              onChange={onchange}
              label={"Password"}
              type={"password"}
              id={"password"}
              autoComplete="current-password"
              required
            />
            <TextField
              margin="normal"
              fullWidth
              id={"nickname"}
              label={"Nickname"}
              variant={"outlined"}
              name={"nickname"}
              value={form.nickname}
              onChange={onchange}
              autoComplete="nickname"
              autoFocus
              type={"nickname"}
              required
            />
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
