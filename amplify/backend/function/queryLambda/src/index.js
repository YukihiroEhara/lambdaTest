/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const getClient = require("get-gql-client");
 const gql = require("graphql-tag");
 
 exports.handler = async (event) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
 
   const getUser = /* GraphQL */ gql(`
   query GetUser($id: ID!) {
     getUser(id: $id) {
       id
       name
     }
   }
 `);
 
   // const token = "custom-authorized!!";
   // const token = "custom-authorized";
   // const token = "7AlRrFd3EDazpZfBewFXY6naouLfQhlB";
   const client = getClient();
   const fetchData = function () {
     return new Promise(function (resolve, reject) {
       client
         .query({
           query: getUser,
           variables: {
             id: "03f8110b-40c8-179a-0e9d-4184a29d8725",
             fetchPolicy: "network-only",
           },
         }) //Uncomment for AWS Lambda
         .then(function logData(data) {
           resolve(data.data);
         })
         .catch(console.error);
     });
   };
 
   
   const query = await fetchData()
   console.log('QUERY!!!!',query.getUser.id)
   console.log('QUERY!!!', query.getUser.name)
   
   const objData = {
     id: query.getUser.id,
     name:query.getUser.name,
   }
   
   return {
     body: JSON.stringify(objData),
   };
 };
 