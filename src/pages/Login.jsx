import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { testFunc, loginTest } from "../graphql/queries";
import awsmobile from "../aws-exports";
import { login } from "../utils/login";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

Amplify.configure(awsmobile);

const LoginInputBlock = styled("div")({
  margin: "10px auto",
  display: "block",
});

const LoginArea = styled("div")({
  height: 300,
  width: 300,
  border: "1px solid black",
  borderRadius: 5,
  margin: "0 auto",
  position: "relative",
});

const ErrorText = styled("span")({
  color: "red",
  fontSize: 10,
  display: "block",
});

const LoadingText = styled("span")({
  color: "black",
  fontSize: 10,
  display: "block",
});

const LoadingBlock = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
});

const Loading = styled(ReactLoading)({});

const Login = () => {
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmedError, setConfirmedError] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data);
    setEmailError();
    setPasswordError();
    setConfirmedError();
    login(
      data.email,
      data.password,
      setEmailError,
      setPasswordError,
      setConfirmedError,
      setLoading,
      navigate
    );
  };

  return (
    <LoginArea>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        {loading && (
          <LoadingBlock>
            <Loading type={"spin"} color="black" />
            <LoadingText>Login中です...</LoadingText>
          </LoadingBlock>
        )}
        <LoginInputBlock>
          {confirmedError !== null && <ErrorText>{confirmedError}</ErrorText>}
          <Controller
            name={"email"}
            control={control}
            rules={{
              required: "入力必須です",
            }}
            render={({ field }) => (
              <TextField
                id="filled-basic"
                label="email"
                variant="filled"
                style={{ margin: "0 auto" }}
                {...field}
              />
            )}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          {emailError !== null && <ErrorText>{emailError}</ErrorText>}
        </LoginInputBlock>
        <LoginInputBlock>
          <Controller
            name={"password"}
            control={control}
            rules={{
              required: "入力必須です",
            }}
            render={({ field }) => (
              <TextField
                id="filled-basic"
                label="password"
                variant="filled"
                style={{ margin: "0 auto" }}
                {...field}
              />
            )}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          {passwordError !== null && <ErrorText>{passwordError}</ErrorText>}
        </LoginInputBlock>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </LoginArea>
  );
};

export default Login;
