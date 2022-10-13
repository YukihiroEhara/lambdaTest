const aws = require("aws-sdk");
const util = require("util");
const lambda = new aws.Lambda({
  // region: "ap-northeast-1",
  region: process.env.REGION || "ap-northeast-1",
});
const Amplify = require("aws-amplify");
exports.executeFunction = function (event, app) {
  return new Promise(function (resolve, reject) {
    // function callback(arg, data, resolve) {
    //   console.log(util.inspect(data, { depth: 6, colors: true }));
    //   resolve(data);
    // }

    return resolve(app.handler(event));
  });
};

exports.executeLambda = function (event, functionName) {
  console.log(1000, "check");
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

exports.executeAppsync = function (event) {
  const query = eval(
    `require("../customGraphql/customGraphql").${event.fieldName}`
  );

  const token = event.request.headers.authorization;

  return new Promise(function (resolve, reject) {
    Amplify.API.graphql({
      query: query,
      variables: {
        email_address: event.arguments.email_address,
        password_hash: event.arguments.password_hash,
      },
      authMode: "AWS_LAMBDA",
      authToken: token,
    })
      .then((val) => {
        resolve(val);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
