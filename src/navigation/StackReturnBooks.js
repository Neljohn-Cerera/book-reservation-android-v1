import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ReturnBooks } from "../screens";
import { ReturnBooksHeader } from "./headers";

const Stack = createStackNavigator();

const StackReturnBooks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReturnBooks"
        component={ReturnBooks}
        options={({ navigation }) => ({
          header: () => {
            return <ReturnBooksHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default StackReturnBooks;
