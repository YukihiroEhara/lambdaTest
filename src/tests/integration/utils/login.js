const executeLambda = require("../executors").executeLambda;
const event = require("../basecase/case").event;
const functionName = "loginDev-dev";

exports.login = function (email, password) {
    
  event.arguments.email_address = email;
  event.arguments.password_hash = password;
  const res = executeLambda(event, functionName);
  return res;
};
