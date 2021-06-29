import { gql } from "@apollo/client";

export const BORROW_BOOK = gql`
  mutation Borrowbook($input: [Borrow_Input!]) {
    borrowBook(borrow_input: $input) {
      message
      isSuccessfull
    }
  }
`;

export const BORROWED_BOOKS = gql`
  query BorrowedBooks($page: Int!, $limit: Int!, $status: String!, $user: ID!) {
    borrowedBooks(page: $page, limit: $limit, status: $status, user: $user) {
      borrowers {
        _id
        borrowedDate
        returnDate
        qrCode
        bookTitle
        bookId
        status
      }
    }
  }
`;
