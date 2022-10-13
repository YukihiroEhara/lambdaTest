/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const getClient = require("../utils/get-gql-client").getClient;
const gql = require("graphql-tag");
const utils = require("../utils/utils");
const jwt = require("jsonwebtoken");

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const token = event.request.headers.authorization;

  //   console.log("TOKEN", token);

  const jwtSecret = utils.JWTSecret;
  const decode = jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return decoded;
    }
    return decoded;
  });

  //   console.log("DECODE", decode);

  //新しいパスワード
  const newPassword = event.arguments.resetPassword;
  const newPasswordHash = utils.encryptSha256Safe(newPassword, decode.user_id);

  //updateUserでPassword更新
  const client = getClient(token);
  const passwordChange = () => {
    return new Promise(function (resolve, reject) {
      const mutation = gql(`
         mutation updateUser {
           updateUser(input: {id: "${decode.user_id}", password_hash: "${newPasswordHash}"}) {
             password_hash
           }
       }
     `);
      client.hydrated().then(function (client) {
        client
          .mutate({ mutation: mutation })
          .then(function logData(data) {
            resolve(data.data);
          })
          .catch(console.error);
      });
    });
  };

  const res = await passwordChange();
  console.log(res);
  let error;
  let success;

  if (res.updateUser) {
    success = "パスワード変更完了";
  } else {
    error = "パスワードの変更ができませんでした";
  }

  return {
    errorMessage: error,
    successMessage: success,
  };
};
