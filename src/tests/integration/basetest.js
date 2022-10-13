const test = async function (app, override, execute) {
  let event = require("./basecase/case").event;

  event = override(event);
  const res = await execute(event, app);
  // const res = await execute(event, functionName);
  return res;
};

process.on("unhandledRejection", (up) => {
  throw up;
});

exports.test = test;

// lambdatest-dev-login