import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchBook, BookDetails } from "../screens";

const Stack = createStackNavigator();

const StackBook = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="SearchBook" component={SearchBook} />
    </Stack.Navigator>
  );
};

export default StackBook;
