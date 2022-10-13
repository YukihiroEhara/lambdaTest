const gql = require("graphql-tag");
const executeAppsync = require("../executors").executeAppsync;
const login = require("../utils/login").login;
const FunctionFactory = require("../wrapper").FunctionFactory;

exports.loginTest = describe("loginTest Query", () => {
  jest.setTimeout(30000);
  it("loginTest Query fetch data", async () => {
    const email = "userD@gmail.com";
    const password = "11112222";

    const userData = await login(email, password);

    const query = gql(`
    query TestFunc {
      testFunc(id: "${userData.userId}") {
        id
        name
      }
    }
  `);

    const res = await executeAppsync(userData.sessionToken, query);
    console.log(res);
    expect(res.testFunc.id).toBe(userData.userId);
    expect(res.testFunc.name).toBe(userData.name);
  });
  it("loginTest Query miss", async () => {
    const email = "userD@gmail.com";
    const password = "11112222";

    const userData = await login(email, password);
    const query = gql(`
    query TestFunc {
      testFunc(id: "${userData.groupId}") {
        id
        name
      }
    }
  `);

    expect(async () => {
      await executeAppsync(userData.sessionToken, query);
    }).toThrow(RangeError);
  });
});
