import React from "react";
import { styled } from "@mui/system";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TextBlock = styled("div")({
  width: 600,
});

const QueryButton = styled(Button)({
  display: "block",
  margin: "0 auto",
});

const TokenCheck = () => {
  const navigate = useNavigate();
  return (
    <TextBlock>
      <Typography align="center">
        Tokenが有効ならこのページが見れます。
      </Typography>
      <QueryButton
        type="submit"
        variant="contained"
        onClick={() => navigate("/top")}
      >
        top
      </QueryButton>
    </TextBlock>
  );
};

export default TokenCheck;
