import React, { useState, useEffect } from "react";
import StackLogin from "./navigation/StackLogin";
import { useSelector, useDispatch } from "react-redux";
import { isDarkMode } from "./redux/slice/themeSlice";
import Drawer from "./navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { BlueTheme, darkTheme } from "./theme";
import * as SecureStore from "expo-secure-store";
import { set_isLoggedin_true, isLoggedin } from "./redux/slice/loginSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const isDarkMode_ = useSelector(isDarkMode);
  const isLoggedin_ = useSelector(isLoggedin);

  useEffect(() => {
    async function fetchToken() {
      let result = await SecureStore.getItemAsync("token");
      if (result) {
        setToken(result);
        dispatch(set_isLoggedin_true());
      } else {
        setToken(null);
      }
    }
    fetchToken();
  }, [isLoggedin_]);

  return (
    <>
      {token ? (
        <NavigationContainer theme={isDarkMode_ ? darkTheme : BlueTheme}>
          <Drawer />
        </NavigationContainer>
      ) : (
        <StackLogin />
      )}
    </>
  );
};

export default Main;
