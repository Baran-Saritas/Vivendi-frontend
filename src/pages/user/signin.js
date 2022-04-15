import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/user/userSlice";

export default function SignIn({ setState }) {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: undefined,
    password: undefined,
  });
  const handleState = (e) => {
    e.preventDefault();
    setState(false);
  };
  const handleClick = () => {
    const { email, password } = values;
    let err = { email: undefined, password: undefined };
    if (
      !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      )
    ) {
      err.email = "Enter a correct email!";
    } else {
      err.email = undefined;
    }
    if (password === "" || password.length < 6) {
      err.password = "Password length must be max 6 length";
    } else {
      err.password = undefined;
    }
    setErrors(err);
    if (!err.password && !err.email) {
      dispatch(signIn(values));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "40px !important",
        padding: "0 50px",
        marginTop: "20px !important",
      }}
    >
      <div>
        <TextField
          fullWidth
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          color="success"
          id="standard-mail-input"
          label="E-mail"
          variant="standard"
        />
        {errors.email && (
          <p className="err-p" style={{ margin: "5px 0" }}>
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <TextField
          fullWidth
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          color="success"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        {errors.password && (
          <p className="err-p" style={{ margin: "5px 0" }}>
            {errors.password}
          </p>
        )}
      </div>
      <Button onClick={handleClick} variant="contained" color="error">
        Login
      </Button>
      <Typography textAlign="center">
        Don't have account? Please{" "}
        <a href="#" onClick={handleState}>
          Sign in
        </a>
      </Typography>
    </Box>
  );
}
