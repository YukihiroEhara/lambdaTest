import React from "react";
import { styled } from "@mui/system";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Amplify, { API } from "aws-amplify";
import { testFunc } from "../graphql/queries";
import awsmobile from "../aws-exports";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenCheckQuery } from "../utils/queries";

Amplify.configure(awsmobile);
const JwtBlock = styled("div")({
  width: 600,
});
const QueryBlock = styled("div")({
  marginTop: 50,
  width: "100%",
});

const QueryButton = styled(Button)({
  display: "block",
  margin: "0 auto",
});

const Top = () => {
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken");
  const userId = localStorage.getItem("userId");
  const groupId = localStorage.getItem("groupId");
  const userName = localStorage.getItem("userName");

  //   localStorage.setItem(
  //     "token",
  //     // "aaaaaa"
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJEQGdtYWlsLmNvbSIsInVzZXJfaWQiOiIwM2Y4MTEwYi00MGM4LTE3OWEtMGU5ZC00MTg0YTI5ZDg3MjUiLCJncm91cF9pZCI6Ijc3M2U1Y2NjLTc4YmYtNzM1My1mZWY0LTkyNDQ0Nzc0MTJhMyIsIm5hbWUiOiJ1c2VyRCIsInRva2VuVHlwZSI6InJlZnJlc2giLCJpYXQiOjE2NjQyNzIyMTgsImV4cCI6MTY2Njg2NDIxOH0.chhqkIOhLBmC9Hm1A8y3dsyyVw40mMk1Nv8ipu7SWlY"
  //   );
  const token = localStorage.getItem("token");
  const testQuery = async (token) => {
    const query = await API.graphql({
      query: testFunc,
      variables: {
        id: userId,
      },
      authMode: "AWS_LAMBDA",
      authToken: token,
    });
    console.log(query);
    return query;
  };

  return (
    <>
      <JwtBlock>
        <Typography>以下ユーザーでログイン中</Typography>
        <Typography>{`sessionToken:${token}`}</Typography>
        <Typography>{`refreshToken:${refreshToken}`}</Typography>
        <Typography>{`userId:${userId}`}</Typography>
        <Typography>{`groupId:${groupId}`}</Typography>
        <Typography>{`userName:${userName}`}</Typography>
      </JwtBlock>
      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          // onClick={async () => await testQuery(token)}
          onClick={async () => await tokenCheckQuery(testQuery, navigate)}
        >
          Test Query
        </QueryButton>
      </QueryBlock>

      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          onClick={() => localStorage.removeItem("token")}
        >
          token delete
        </QueryButton>
      </QueryBlock>
      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          onClick={() => console.log(localStorage.getItem("token"))}
        >
          token check
        </QueryButton>
      </QueryBlock>
      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          onClick={() => navigate("/login")}
        >
          login page
        </QueryButton>
      </QueryBlock>
      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          onClick={() => navigate("/tokencheck")}
        >
          token check page
        </QueryButton>
      </QueryBlock>
      <QueryBlock>
        <QueryButton
          type="submit"
          variant="contained"
          onClick={() => navigate("/passwordreset")}
        >
          password reset
        </QueryButton>
      </QueryBlock>
    </>
  );
};

export default Top;
