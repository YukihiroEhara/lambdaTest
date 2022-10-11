/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const getClient = require("./get-gql-client");
const gql = require("graphql-tag");
(async () => {
  const getUser = /* GraphQL */ gql(`
   query GetUser($id: ID!) {
     getUser(id: $id) {
       id
       name
     }
   }
 `);

  const token = "custom-authorize";
  const client = getClient(token);
  const fetchData = function () {
    return new Promise(function (resolve, reject) {
      //   client.hydrated().then(function (client) {
      client
        .query({
          query: getUser,
          variables: {
            id: "03f8110b-40c8-179a-0e9d-4184a29d8725",
            fetchPolicy: "network-only",
          },
        }) //Uncomment for AWS Lambda
        .then(function logData(data) {
          // console.log(util.inspect(data.data, { depth: 6 }));
          resolve(data.data);
        })
        .catch(console.error);
      //   });
    });
  };
  console.log("QUERY", await fetchData());
  return {
    data: fetchData(),
  };
})();
