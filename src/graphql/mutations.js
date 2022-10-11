/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createUserCompany = /* GraphQL */ `
  mutation CreateUserCompany(
    $input: CreateUserCompanyInput!
    $condition: ModelUserCompanyConditionInput
  ) {
    createUserCompany(input: $input, condition: $condition) {
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
export const updateUserCompany = /* GraphQL */ `
  mutation UpdateUserCompany(
    $input: UpdateUserCompanyInput!
    $condition: ModelUserCompanyConditionInput
  ) {
    updateUserCompany(input: $input, condition: $condition) {
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
export const deleteUserCompany = /* GraphQL */ `
  mutation DeleteUserCompany(
    $input: DeleteUserCompanyInput!
    $condition: ModelUserCompanyConditionInput
  ) {
    deleteUserCompany(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
