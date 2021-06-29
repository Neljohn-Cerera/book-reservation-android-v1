import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($mobileNumber: String!, $password: String!) {
    userLogin(mobileNumber: $mobileNumber, password: $password) {
      token
      message
      user
    }
  }
`;
