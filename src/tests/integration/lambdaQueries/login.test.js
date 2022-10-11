// const executeLambda = require("../executors").executeLambda;
const login = require("../utils/login").login;

describe("Login Lambda Test", () => {
  jest.setTimeout(15000);
  it("Login successed", async () => {
    const email = "userD@gmail.com";
    const password = "11112222";

    const res = await login(email, password);

    expect(res.email).toBe("userD@gmail.com");
    expect(res.userId).toBe("03f8110b-40c8-179a-0e9d-4184a29d8725");
    expect(res.groupId).toBe("773e5ccc-78bf-7353-fef4-9244477412a3");
    expect(res.name).toBe("userD");
    expect(res.status).toBe("success");
    expect(res.sessionToken).toBeDefined();
    expect(res.refreshToken).toBeDefined();
  });
  it("Email input failure", async () => {
    const email = "userD@gmail.co";
    const password = "11112222";

    const res = await login(email, password);
    expect(res.emailError).toBe("アドレスが間違っています");
  });
  it("Password address input failure", async () => {
    const email = "userD@gmail.com";
    const password = "1111222";

    const res = await login(email, password);
    expect(res.passwordError).toBe("ユーザーもしくはパスワードが間違ってます");
  });
  it("Not confirmed", async () => {
    const email = "userF@gmail.com";
    const password = "11111111";
    const res = await login(email, password);
    // console.log(res);
    expect(res.confirmedError).toBe("email認証をしてください");
  });
  it("Different domain", async () => {
    const email = "userE@gmail.com";
    const password = "11111111";
    const res = await login(email, password);
    // console.log(res);
    expect(res.passwordError).toBe("ユーザーもしくはパスワードが間違ってます");
  });
});
