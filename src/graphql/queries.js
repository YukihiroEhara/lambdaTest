/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      errorMessage
      successMessage
    }
  }
`;
export const searchUserCompanies = /* GraphQL */ `
  query SearchUserCompanies(
    $filter: SearchableUserCompanyFilterInput
    $sort: [SearchableUserCompanySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserCompanyAggregationInput]
  ) {
    searchUserCompanies(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        company {
          id
          name
          manager
          pic
          start_measure_date
          site
          service_type
          status
          memo
          createdAt
          updatedAt
          groupCompaniesId
        }
        user {
          id
          name
          verification_code
          email_address
          password_hash
          confirmed
          system_role
          createdAt
          updatedAt
          groupUsersId
        }
        createdAt
        company_role
        updatedAt
        userCompaniesId
        companyUsersId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      verification_code
      email_address
      password_hash
      confirmed
      companies {
        items {
          id
          createdAt
          company_role
          updatedAt
          userCompaniesId
          companyUsersId
        }
        nextToken
      }
      group {
        id
        name
        sub_domain
        original_domain
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      system_role
      createdAt
      updatedAt
      groupUsersId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        verification_code
        email_address
        password_hash
        confirmed
        companies {
          nextToken
        }
        group {
          id
          name
          sub_domain
          original_domain
          createdAt
          updatedAt
        }
        system_role
        createdAt
        updatedAt
        groupUsersId
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      manager
      pic
      start_measure_date
      site
      service_type
      status
      memo
      group {
        id
        name
        sub_domain
        original_domain
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          createdAt
          company_role
          updatedAt
          userCompaniesId
          companyUsersId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupCompaniesId
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $id: ID
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        manager
        pic
        start_measure_date
        site
        service_type
        status
        memo
        group {
          id
          name
          sub_domain
          original_domain
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        groupCompaniesId
      }
      nextToken
    }
  }
`;
export const getUserCompany = /* GraphQL */ `
  query GetUserCompany($id: ID!) {
    getUserCompany(id: $id) {
      id
      company {
        id
        name
        manager
        pic
        start_measure_date
        site
        service_type
        status
        memo
        group {
          id
          name
          sub_domain
          original_domain
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        groupCompaniesId
      }
      user {
        id
        name
        verification_code
        email_address
        password_hash
        confirmed
        companies {
          nextToken
        }
        group {
          id
          name
          sub_domain
          original_domain
          createdAt
          updatedAt
        }
        system_role
        createdAt
        updatedAt
        groupUsersId
      }
      createdAt
      company_role
      updatedAt
      userCompaniesId
      companyUsersId
    }
  }
`;
export const listUserCompanies = /* GraphQL */ `
  query ListUserCompanies(
    $id: ID
    $filter: ModelUserCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserCompanies(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        company {
          id
          name
          manager
          pic
          start_measure_date
          site
          service_type
          status
          memo
          createdAt
          updatedAt
          groupCompaniesId
        }
        user {
          id
          name
          verification_code
          email_address
          password_hash
          confirmed
          system_role
          createdAt
          updatedAt
          groupUsersId
        }
        createdAt
        company_role
        updatedAt
        userCompaniesId
        companyUsersId
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      sub_domain
      original_domain
      users {
        items {
          id
          name
          verification_code
          email_address
          password_hash
          confirmed
          system_role
          createdAt
          updatedAt
          groupUsersId
        }
        nextToken
      }
      companies {
        items {
          id
          name
          manager
          pic
          start_measure_date
          site
          service_type
          status
          memo
          createdAt
          updatedAt
          groupCompaniesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $id: ID
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroups(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        sub_domain
        original_domain
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByEmailAddress = /* GraphQL */ `
  query GetUserByEmailAddress(
    $email_address: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmailAddress(
      email_address: $email_address
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        verification_code
        email_address
        password_hash
        confirmed
        companies {
          nextToken
        }
        group {
          id
          name
          sub_domain
          original_domain
          createdAt
          updatedAt
        }
        system_role
        createdAt
        updatedAt
        groupUsersId
      }
      nextToken
    }
  }
`;
