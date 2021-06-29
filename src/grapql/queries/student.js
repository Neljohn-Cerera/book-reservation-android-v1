import { gql } from "@apollo/client";

export const STUDENTS_LOGIN = gql`
  query Students_Login($mobileNumber: String!, $password: String!) {
    students_login(mobileNumber: $mobileNumber, password: $password) {
      student {
        _id
        role
        mobileNumber
        email
        studentId
        course
        courseYear
        fullName
        gender
        age
        address
        isActive
        createdAt
        updatedAt
      }
      token
      message
      isSuccess
    }
  }
`;
