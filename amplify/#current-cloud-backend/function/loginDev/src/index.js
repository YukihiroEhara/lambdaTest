/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const getClient = require("get-gql-client");
 const gql = require("graphql-tag");
 const utils = require("utils");
 const jwt = require("jsonwebtoken");
 
 exports.handler = async (event) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
 
   const getEmail = /* GraphQL */ gql(`
      query GetUserByEmailAddress($email_address: String!) {
        getUserByEmailAddress(email_address: $email_address) {
          items {
            email_address
            password_hash
            confirmed
            groupUsersId
            id
            name
            group {
              original_domain
              }
            }
          }
        }
      `);
 
   const client = getClient();
   const fetchData = function () {
     return new Promise(function (resolve, reject) {
       client.hydrated().then(function (client) {
         console.log("event", JSON.stringify(event));
         client
           .query({
             query: getEmail,
             variables: {
               email_address: event.arguments.email_address,
               fetchPolicy: "network-only",
             },
           }) //Uncomment for AWS Lambda
           .then(function logData(data) {
             resolve(data.data);
           })
           .catch((e) => {
             console.log("ERROR", e);
           });
       });
     });
   };
 
   const query = await fetchData();
   const userData = query.getUserByEmailAddress.items;

   const url = event.request.headers.origin
   const eventDomain = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
 
   const domainFilter = () => {
     let userObj = {
       confirmed: true,
     };
     userData.length > 0 &&
       userData.map((ud) => {
         const original_domain = ud.group.original_domain;
         if (original_domain === eventDomain) {
           userObj.email = ud.email_address;
           userObj.password_hash = ud.password_hash;
           userObj.inputPassword = event.arguments.password_hash;
           userObj.confirmed = ud.confirmed;
           userObj.userId = ud.id;
           userObj.groupId = ud.groupUsersId;
           userObj.name = ud.name;
           userObj.domain = original_domain
         }
       });
     return userObj;
   };
 
   const login = () => {
     const res = domainFilter();
 
     if (!res.confirmed) {
       return {
         confirmedError: "email認証をしてください",
       };
     }
     // addressの簡易ハンドリング
     if (userData.length === 0) {
       return {
         emailError: "アドレスが間違っています",
       };
     }
     // passwordのハンドリング
     if (
       res.password_hash !==
       utils.encryptSha256Safe(res.inputPassword, res.userId, res.domain)
     ) {
       return {
         passwordError: "ユーザーもしくはパスワードが間違ってます",
       };
     }
     // JWTを発行
     const jwtUserData = {
       email: res.email,
       user_id: res.userId,
       group_id: res.groupId,
       name: res.name,
     };
 
     const jwtSecret = utils.JWTSecret;
 
     const sessionTokenPayload = jwtUserData;
 
     sessionTokenPayload.tokenType = "session";
     const sessionTokenOptions = {
       algorithm: "HS256",
       expiresIn: "60s",
     };
 
     const sessionToken = jwt.sign(
       sessionTokenPayload,
       jwtSecret,
       sessionTokenOptions
     );
 
     const refreshTokenPayload = jwtUserData;
     sessionTokenPayload.tokenType = "refresh";
     const refreshTokenOptions = {
       algorithm: "HS256",
       expiresIn: "120s",
     };
     const refreshToken = jwt.sign(
       refreshTokenPayload,
       jwtSecret,
       refreshTokenOptions
     );
 
     const responseBody = {
       status: "success",
       sessionToken: sessionToken,
       refreshToken: refreshToken,
       email: res.email,
       userId: res.userId,
       groupId: res.groupId,
       name: res.name,
     };
 
    // return JSON.stringify(responseBody);
     return responseBody;
   };
 
   const responseData = login()

   console.log(responseData)
   return responseData
 };