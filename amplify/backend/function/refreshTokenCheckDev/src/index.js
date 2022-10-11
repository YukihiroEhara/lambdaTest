/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const utils = require("utils");
 const jwt = require("jsonwebtoken");
 
 exports.handler = async (event) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
   const jwtSecret = utils.JWTSecret;
   const decode = await jwt.verify(event.arguments.refreshToken, jwtSecret, (err, decoded) => {
     if (err) {
       return decoded;
     }
     return decoded;
   });
 
   const refresh = () => {
     if (decode === undefined) return { refreshExpError: "expired" };
 
     const jwtUserData = {
       email: decode.email,
       user_id: decode.user_id,
       group_id: decode.group_id,
       name: decode.name,
     };
 
     console.log("USERDATA", jwtUserData);
     console.log("DECODE", decode);
 
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
 
     const responseBody = {
       status: "success",
       sessionToken: sessionToken,
       email: decode.email,
       userId: decode.user_id,
       groupId: decode.group_id,
       name: decode.name,
     };
 
     return responseBody;
   };
 
   const responseBody = refresh();
   console.log("RESPONSE", responseBody);
   return responseBody;
 };
 