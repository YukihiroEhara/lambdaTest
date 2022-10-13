const FunctionFactory = require("../../wrapper").FunctionFactory;
exports.example = async function (execute) {
  const functionFactory = new FunctionFactory(execute);
  const email = "userD@gmail.com";
  const password = "11112222";
  const loginRes = await functionFactory.login(email, password);
  // AppSyncの返り値 loginRes.data.loginTest
  // Lambdaの返り値 loginRes

  const queryRes = await functionFactory.queryTest(
    loginRes.sessionToken,
    loginRes
  );

  console.log(222, queryRes);
};
