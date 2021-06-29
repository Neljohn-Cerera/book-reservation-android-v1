import { useQuery } from "@apollo/client";
import { LOGIN } from "../grapql/users";
import { Alert } from "react-native";

export const useLogin = ({ state, navigation }) => {
  const { loading, error, data } = useQuery(LOGIN, {
    variables: {
      mobileNumber: state.mobileNumber,
      password: state.password,
    },
    onCompleted: async (data) => {
      if (state.mobileNumber === "" && state.password === "") {
        return null;
      } else {
        if (data.userLogin.token === null) {
          Alert.alert("Try Again", data.userLogin.message, [
            {
              text: "Ok",
              style: "default",
            },
          ]);
        } else if (data.userLogin.token) {
          Alert.alert("Login Successfull", "Welcome", [
            {
              text: "Ok",
              style: "default",
            },
          ]);
          navigation.push("OtpScreen", {
            token: data.userLogin.token,
            set_user_id_: data.userLogin.user,
          });
        }
      }
    },
  });
  if (error) {
    console.log("error", error);
  }

  return { loading, data };
};
