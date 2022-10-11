(() => {
  global.WebSocket = require("ws");
  require("es6-promise").polyfill();
  require("isomorphic-fetch");
})();

const DISABLE_OFFLINE = process.env.DISABLE_OFFLINE || true;
const getClient = (token, disableOffline) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  const AUTH_TYPE = require("aws-appsync").AUTH_TYPE;
  const AWSAppSyncClient = require("aws-appsync").default;

  const GRAPHQL_API_URL =
    "https://wdczy2p5kffuthngzafxbfbbjq.appsync-api.ap-northeast-1.amazonaws.com/graphql";

  const REGION = process.env.REGION || "ap-northeast-1";

  const client = new AWSAppSyncClient({
    url: GRAPHQL_API_URL,
    region: REGION,
    auth: {
      type: AUTH_TYPE.AWS_LAMBDA,
      token: "7AlRrFd3EDazpZfBewFXY6naouLfQhlB",
    },
    disableOffline: DISABLE_OFFLINE,
  });
  return client;
};
module.exports = getClient;
