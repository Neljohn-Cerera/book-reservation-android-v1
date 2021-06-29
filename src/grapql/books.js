import { gql } from "@apollo/client";

export const BOOKS = gql`
  query Books(
    $page: Int!
    $limit: Int!
    $search: String!
    $isAvailable: Boolean!
  ) {
    books(
      page: $page
      limit: $limit
      search: $search
      isAvailable: $isAvailable
    ) {
      paginator {
        collectionCount
        perPage
        pageCount
        currentPage
        slNo
        hasPrevPage
        hasNextPage
        prev
        next
      }
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
        status {
          bookType
          isAvailable
        }
        createdAt
        updatedAt
      }
    }
  }
`;
