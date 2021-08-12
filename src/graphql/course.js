import gql from "graphql-tag";

export const allCourses = gql`
query {
    allCourses {
      errors {
        field
        message
      }
      courses {
        name,
        par1
      }
    }
  }
`;