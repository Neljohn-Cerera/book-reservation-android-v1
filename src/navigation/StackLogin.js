import React from "react";
import { SignupScreen, SigninScreen, OtpScreen } from "../screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginHeader from "../components/shared/LoginHeader";

const LoginStack = createStackNavigator();

const StackLogin = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Signin" headerMode="screen">
        <LoginStack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            header: () => {
              return <LoginHeader title="Login" show={false} />;
            },
          }}
        />
        <LoginStack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={({ navigation }) => ({
            header: () => {
              return (
                <LoginHeader title="OTP" navigation={navigation} show={true} />
              );
            },
          })}
        />
        <LoginStack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            header: () => {
              return (
                <LoginHeader
                  title="Signup"
                  navigation={navigation}
                  show={true}
                />
              );
            },
          })}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default StackLogin;
