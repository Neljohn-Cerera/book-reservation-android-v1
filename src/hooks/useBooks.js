import { useQuery } from "@apollo/client";
import { BOOKS } from "../grapql/books";

export const useBooks = (search) => {
  const { loading, data } = useQuery(BOOKS, {
    variables: {
      page: 1,
      limit: 10,
      search,
      isAvailable: true,
    },
  });
  return { loading, data };
};
