export const testFunc = /* GraphQL */ `
  query TestFunc($id: ID!, $name: String) {
    testFunc(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const loginTest = /* GraphQL */ `
  query LoginTest($email_address: String!, $password_hash: String!) {
    loginTest(email_address: $email_address, password_hash: $password_hash) {
      email
      groupId
      name
      refreshToken
      sessionToken
      status
      userId
      confirmedError
      emailError
      passwordError
    }
  }
`;
export const refreshTest = /* GraphQL */ `
  query RefreshTest($refreshToken: String!) {
    refreshTest(refreshToken: $refreshToken) {
      status
      sessionToken
      email
      userId
      groupId
      name
      refreshExpError
    }
  }
`;
export const passwordResetTest = /* GraphQL */ `
  query PasswordResetTest($resetPassword: String!) {
    passwordResetTest(resetPassword: $resetPassword) {
      successMessage
      errorMessage
    }
  }
`;
export const exampleFunc = /* GraphQL */ `
  query ExampleFunc($id: ID!) {
    exampleFunc(id: $id) {
      text
    }
  }
`;
