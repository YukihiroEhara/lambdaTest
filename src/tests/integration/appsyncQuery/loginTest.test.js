const gql = require("graphql-tag");
const executeAppsync = require("../executors").executeAppsync;
const login = require("../utils/login").login;

describe("loginTest Query", () => {
  jest.setTimeout(15000);
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

    try {
      const res = await executeAppsync(userData.sessionToken, query);
    } catch (e) {
      console.log(1, e);
    }
  });
});
