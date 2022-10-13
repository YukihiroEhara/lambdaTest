const example = require("./scenario/example/index").example;
const executors = require("./executors");
// const executeFunction = require("./executors").executeFunction;
// const executeLambda = require("./executors").executeLambda;
// const executeAppsync = require("./executors").executeAppsync

(async () => {
//    await example(executors.executeFunction);
  //  await example(executors.executeLambda);
   await example(executors.executeAppsync);
})();
