import { useQuery } from "@apollo/client";
import { BOOKS } from "../grapql/books";
import { useDispatch } from "react-redux";
import { set_searchBookResult } from "../redux/slice/bookSlice";

export const useSearchBook = (search) => {
  const dispatch = useDispatch();
  const { loading } = useQuery(BOOKS, {
    variables: {
      page: 1,
      limit: 20,
      search,
      isAvailable: true,
    },
    onCompleted: async (data) => {
      dispatch(set_searchBookResult(data?.books.books));
    },
  });

  return loading;
};
