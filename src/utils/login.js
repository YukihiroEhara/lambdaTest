import Amplify, { API } from "aws-amplify";
import { loginTest } from "../graphql/queries";
import awsmobile from "../aws-exports";
import { useNavigate } from "react-router-dom";
// const jwt = require("jsonwebtoken");

Amplify.configure(awsmobile);

const fetchLoginUser = async (email, password, domain) => {
  console.log(email);
  console.log(password);
  const token = "custom-authorized";
  try {
    const query = await API.graphql({
      query: loginTest,
      variables: {
        email_address: email,
        password_hash: password,
      },
      authMode: "AWS_LAMBDA",
      authToken: token,
    });

    return query;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (
  email,
  password,
  setEmailError,
  setPasswordError,
  setConfirmedError,
  setLoading,
  navigate
) => {
  setLoading(true);

  const res = await fetchLoginUser(email, password, "dairitenA.com");
  console.log(res);
  const data = res.data.loginTest;
  console.log(data);
  localStorage.setItem("userName", data.name);
  localStorage.setItem("token", data.sessionToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  localStorage.setItem("userId", data.userId);
  localStorage.setItem("groupId", data.groupId);

  data.emailError !== null && setEmailError(data.emailError);
  data.passwordError !== null && setPasswordError(data.passwordError);
  data.confirmedError !== null && setConfirmedError(data.confirmedError);
  setLoading(false);
  if (localStorage.getItem("token") === data.sessionToken) {
    navigate("/top");
  }
};

// const secret = "6lN0CLISbEGHNCN80ZtMfzFPCmUE5UaF"; // 　一旦仮置き

export const checkAuth = () => {
  const token = localStorage.getItem("token") || "";
  if (!token) {
    console.log("token none");
    return {
      auth: false,
    };
  }

  // const decode = jwt.verify(token, secret, (err, decoded) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(decoded);
  // });
  // console.log(decode);
  console.log("checkAuthを通ってます");
  return { auth: true };
};
