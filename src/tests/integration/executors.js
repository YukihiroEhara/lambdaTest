const aws = require("aws-sdk");
const util = require("util");
const lambda = new aws.Lambda({
  region: "ap-northeast-1",
  // region: process.env.REGION || "ap-northeast-1",
});

const getClient = require("../../get-gql-client").getClient;

exports.executeLambda = function (event, functionName) {
  // console.log(event.httpMethod, event.path);
  return new Promise(function (resolve, reject) {
    const params = {
      FunctionName: `${functionName}`,
      InvocationType: "RequestResponse",
      Payload: new Buffer(JSON.stringify(event)),
    };
    lambda.invoke(params, function (err, data) {
      if (err) {
        console.log(util.inspect(err, { depth: 6, colors: true }));
        reject();
      } else {
        // console.log(util.inspect(data, { depth: 6, colors: true }));
        resolve(JSON.parse(data.Payload));
      }
    });
  });
};

exports.executeAppsync = function (token, query) {
  return new Promise(function (resolve, reject) {
    const client = getClient(token);
    client
      .query({ query: query })
      .then(function logData(data) {
        resolve(data.data);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};
