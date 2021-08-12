import gql from "graphql-tag";

export const meQuery = gql`
query {
    me {
      id
    }
  }
`;

export const registerQuery = `
mutation ($username: String!, $password: String!){
    register(username: $username, password: $password) {
      user {
        id
        username
      }
      errors {
        field
        message
      }
    }
  }
`;

export const loginQuery = gql`
mutation ($username: String!, $password: String!){
    login(username: $username, password: $password) {
      user {
        id
        username
      }
      errors {
        field
        message
      }
    }
  }
`;