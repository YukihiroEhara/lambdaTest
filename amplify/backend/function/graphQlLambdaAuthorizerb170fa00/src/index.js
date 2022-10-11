// This is sample code. Please update this to suite your schema

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const jwt = require("jsonwebtoken");
 const utils = require("utils");
 exports.handler = async (event) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
   const {
     authorizationToken,
     requestContext: { apiId, accountId },
   } = event;
   
   console.log('TOKEN',authorizationToken)
   
   const tokenCheck = () => {
     if (authorizationToken === "custom-authorized") {
       console.log("tokenCheck", "custom-authorizedで通ってくる");
       return [
         "Mutation.createEvent",
         "Mutation.updateEvent",
         "Mutation.deleteEvent",
         "Query.listEvent",
         `arn:aws:appsync:${process.env.AWS_REGION}:${accountId}:apis/${apiId}/types/company/fields/name`,
         `arn:aws:appsync:${process.env.AWS_REGION}:${accountId}:apis/${apiId}/types/user/fields/name`,
       ];
     } else if (authorizationToken === "7AlRrFd3EDazpZfBewFXY6naouLfQhlB") {
       console.log("tokenCheck", "7AlRrFd3EDazpZfBewFXY6naouLfQhlBで通ってくる");
       return [];
     } else if (authorizationTokenCheck()) {
       console.log("tokenCheck!", "authorizationTokenCheckで通ってくる");
       return [];
     } else {
       console.log("tokenCheck", "elseで通ってくる");
       return [
         "Mutation.createEvent",
         "Mutation.updateEvent",
         "Mutation.deleteEvent",
         "Query.getEvent",
         "Query.listEvent",
       ];
     }
   };
 
   const authorizationTokenCheck = () => {
     if (authorizationToken === "custom-authorized") {
       console.log("authorizationTokenCheck", "custom-authorizedで通ってくる");
       return true;
     } else if (authorizationToken === "7AlRrFd3EDazpZfBewFXY6naouLfQhlB") {
       console.log(
         "authorizationTokenCheck",
         "7AlRrFd3EDazpZfBewFXY6naouLfQhlBで通ってくる"
       );
       return true;
     } else if (
       authorizationToken !== "custom-authorized" &&
       authorizationToken !== "7AlRrFd3EDazpZfBewFXY6naouLfQhlB"
     ) {
       console.log("authorizationTokenCheck", "JWTで通ってくる");
       const decode = jwt.verify(
         authorizationToken,
         utils.JWTSecret,
         (err, decoded) => {
           if (err) {
             return decoded;
           }
           // if (err.name === "TokenExpiredError"){
             
           // }
           return decoded;
         }
       );
 
       console.log("DECODE", decode);
       const effectivenessCheck = () => {
         if (decode === undefined) {
           return false;
         } else if (decode.tokenType !== "session") {
           return false;
         } else if (decode.user_id !== event.requestContext.variables.id) {
           return false;
         }
         return true;
       };
       return effectivenessCheck();
     } else {
       console.log("authorizationTokenCheck", "elseで通ってくる");
       return false;
     }
   };
 
   const response = {
     isAuthorized: authorizationTokenCheck(),
     resolverContext: {
       userid: "user-id",
       info: "contextual information A",
       more_info: "contextual information B",
     },
     deniedFields: tokenCheck(),
     ttlOverride: 0,
   };
   console.log(`response >`, JSON.stringify(response, null, 2));
   return response;
 };
 