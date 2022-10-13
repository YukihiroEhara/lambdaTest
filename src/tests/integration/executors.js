const aws = require("aws-sdk");
const util = require("util");
const lambda = new aws.Lambda({
  // region: "ap-northeast-1",
  region: process.env.REGION || "ap-northeast-1",
});
const { Amplify, API } = require("aws-amplify");
const awsmobile = require("../../aws-exports").awsmobile;
Amplify.configure(awsmobile);

exports.executeFunction = function (event, app) {
  return new Promise(function (resolve, reject) {
    return resolve(app.handler(event));
  });
};

exports.executeLambda = function (event) {
  return new Promise(function (resolve, reject) {
    const params = {
      FunctionName: `repumanebackend-${process.env.environment}-${event.filedName}`,
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
exports.executeAppsync = function (event) {
  const query = eval(
    `require("../../customGraphql/customGraphql").${event.fieldName}`
  );
  const token = event.request.headers.authorization;
  console.log(890, event.arguments);
  return new Promise(function (resolve, reject) {
    API.graphql({
      query: query,
      variables: event.arguments,
      authMode: "AWS_LAMBDA",
      authToken: token,
    })
      .then((val) => {
        resolve(val.data[event.fieldName]);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
