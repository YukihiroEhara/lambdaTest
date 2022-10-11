import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { passwordResetTest, loginTest } from "../graphql/queries";
import awsmobile from "../aws-exports";
import { login } from "../utils/login";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { passwordReset } from "../utils/passwordReset";
import { tokenCheckQuery } from "../utils/queries";

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

// const passwordResetFunc = async (token, ...args) => {
//   console.log(token);
//   const query = await API.graphql({
//     query: passwordResetTest,
//     variables: {
//       resetPassword: args[0],
//     },
//     authMode: "AWS_LAMBDA",
//     // authToken: "custom-authorized",
//     authToken: token,
//   });
//   console.log(query);
//   return query;
// };

const PasswordReset = () => {
  const [resetPasswordError, setResetPasswordError] = useState();
  const [confirmResetPasswordError, setConfirmResetPasswordError] = useState();

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    // console.log(data);
    setResetPasswordError();
    setConfirmResetPasswordError();
    if (data.reset_password !== data.confirm_reset_password) {
      setResetPasswordError("入力されたパスワードが一致しません");
      setConfirmResetPasswordError("入力されたパスワードが一致しません");
      return;
    }
    // tokenCheckQuery(passwordResetFunc, navigate, data.reset_password);
    const res = await passwordReset(data.reset_password, navigate);
    if (res === "パスワード変更完了") {
      alert(res);
      navigate("/top");
    } else {
      alert(res);
    }
  };

  return (
    <LoginArea>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <LoginInputBlock>
          <Controller
            name={"reset_password"}
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
          {errors.reset_password && (
            <ErrorText>{errors.reset_password.message}</ErrorText>
          )}
          {resetPasswordError !== null && (
            <ErrorText>{resetPasswordError}</ErrorText>
          )}
        </LoginInputBlock>
        <LoginInputBlock>
          <Controller
            name={"confirm_reset_password"}
            control={control}
            rules={{
              required: "入力必須です",
            }}
            render={({ field }) => (
              <TextField
                id="filled-basic"
                label="confirm_password"
                variant="filled"
                style={{ margin: "0 auto" }}
                {...field}
              />
            )}
          />
          {errors.confirm_reset_password && (
            <ErrorText>{errors.confirm_reset_password.message}</ErrorText>
          )}
          {confirmResetPasswordError !== null && (
            <ErrorText>{confirmResetPasswordError}</ErrorText>
          )}
        </LoginInputBlock>
        <Button type="submit" variant="contained">
          password Reset
        </Button>
      </form>
    </LoginArea>
  );
};

export default PasswordReset;
