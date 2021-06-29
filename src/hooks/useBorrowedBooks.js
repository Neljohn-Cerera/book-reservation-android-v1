import { useQuery } from "@apollo/client";
import { BORROWED_BOOKS } from "../grapql/borrowers";

export const useBorrowedBooks = (user) => {
  const { loading, data } = useQuery(BORROWED_BOOKS, {
    variables: {
      page: 1,
      limit: 10,
      status: "borrowed",
      user,
    },
  });
  return { loading, data };
};
