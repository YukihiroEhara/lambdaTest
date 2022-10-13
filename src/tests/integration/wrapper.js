const { test } = require("./basetest");

function FunctionFactory(execute) {
  this.execute = execute;
}

FunctionFactory.prototype.login = async function (email, password) {
  function override(event) {
    event.arguments.email_address = email;
    event.arguments.password_hash = password;
    event.arguments.domain = "http://localhost:3000"
    event.fieldName = "loginTest";
    event.request.headers.authorization = "custom-authorized";
    return event;
  }
  const app = require("../../functions/login/index");
  const res = await test(app, override, this.execute);
  //   console.log(res);
  return res;
};

FunctionFactory.prototype.queryTest = async function (token, userData) {
  function override(event) {
    event.arguments.id = userData.userId;
    event.fieldName = "testFunc";
    event.request.headers.authorization = token;
    return event;
  }
  const app = require("../../functions/testQuery/index");
  const res = await test(app, override, this.execute);
  return res;
};

exports.FunctionFactory = FunctionFactory;
