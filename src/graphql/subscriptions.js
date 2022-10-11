/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateUserCompany = /* GraphQL */ `
  subscription OnCreateUserCompany {
    onCreateUserCompany {
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
export const onUpdateUserCompany = /* GraphQL */ `
  subscription OnUpdateUserCompany {
    onUpdateUserCompany {
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
export const onDeleteUserCompany = /* GraphQL */ `
  subscription OnDeleteUserCompany {
    onDeleteUserCompany {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
