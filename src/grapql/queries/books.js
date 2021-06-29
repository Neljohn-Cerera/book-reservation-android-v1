import { gql } from "@apollo/client";

export const BOOKS = gql`
  query Books {
    books {
      _id
      bookId
      bookTitle
      accountNumber
      isbnNumber
      authors
      category {
        categoryName
        section
        deweyDecimal
      }
      publisher {
        publisherName
        placeOfPublication
        copyrightYear
      }
      bookType
      status {
        isAvailable
        bookCount
        borroweredCount
        availableCount
      }
    }
  }
`;

export const SEARCH_BOOK = gql`
  query SearchBook($search: String!) {
    searchBook(bookTitleInput: $search) {
      bookId
      bookTitle
      accountNumber
      isbnNumber
      authors
      category {
        categoryName
        section
        deweyDecimal
      }
      publisher {
        publisherName
        placeOfPublication
        copyrightYear
      }
      bookType
      status {
        isAvailable
        bookCount
        borroweredCount
        availableCount
      }
    }
  }
`;
