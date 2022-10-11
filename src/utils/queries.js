import Amplify, { API } from "aws-amplify";
import { refreshTest } from "../graphql/queries";
import awsmobile from "../aws-exports";

Amplify.configure(awsmobile);

export const tokenCheckQuery = async (callback, navigate, ...args) => {
  let token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    return await callback(token, ...args);
  } catch (e) {
    const refresh = async () => {
      if (e.errors[0].name === "GraphQLError") {
        const caToken = "custom-authorized";
        const query = await API.graphql({
          query: refreshTest,
          variables: {
            refreshToken: refreshToken,
          },
          authMode: "AWS_LAMBDA",
          authToken: caToken,
        });

        return query.data.refreshTest;
      }
    };

    const res = await refresh();
    // console.log("再取得したSessionToken", res);

    //refreshTokenも期限切れてたらログインへリダイレクト
    if (res.refreshExpError === "expired") {
      navigate("/login");
      localStorage.removeItem("userName");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("groupId");
      alert("Session切れの為、再度ログインし直してください");

      return;
    }

    // sessionToken再登録
    if (res.refreshExpError === null) {
      localStorage.setItem("token", res.sessionToken);
    }
    let token = localStorage.getItem("token");
    console.log("再取得したTOKEN", token);

    return await callback(token, ...args);
  }
};
