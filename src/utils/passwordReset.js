import Amplify, { API } from "aws-amplify";
import awsmobile from "../aws-exports";
// const jwt = require("jsonwebtoken");
import { tokenCheckQuery } from "../utils/queries";
import { passwordResetTest } from "../graphql/queries";
Amplify.configure(awsmobile);

const passwordResetFunc = async (token, ...args) => {
  const query = await API.graphql({
    query: passwordResetTest,
    variables: {
      resetPassword: args[0],
    },
    authMode: "AWS_LAMBDA",
    authToken: token,
  });
  return query;
};

export const passwordReset = async (resetPassword, navigate) => {
  const res = await tokenCheckQuery(passwordResetFunc, navigate, resetPassword);
  console.log(res.data.passwordResetTest.successMessage);
  return res.data.passwordResetTest.successMessage;
};
