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
 
   const client = getClient();
   const fetchData = function () {
     return new Promise(function (resolve, reject) {
       client
         .query({
           query: getUser,
           variables: {
             id: event.arguments.id,
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
   
   return objData
 };
 