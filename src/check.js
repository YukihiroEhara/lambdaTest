const gql = require("graphql-tag");
const query = gql(`
        query loginTest {
            loginTest(email_address: "userD@gmail.com", password_hash: "11112222"){
                refreshToken
                sessionToken
                confirmedError
                email
                emailError
                groupId
                name
                passwordError
                status
                userId
            }
        }
    `);
console.log(query);
