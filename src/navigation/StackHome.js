import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, SearchBook, BookDetails, BookCart } from "../screens";
import {
  SearchBookHeader,
  HomeHeader,
  BookCartHeader,
  BookDetailsHeader,
} from "./headers";

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          header: () => {
            return <HomeHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="SearchBook"
        component={SearchBook}
        options={({ navigation }) => ({
          header: () => {
            return <SearchBookHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={({ navigation }) => ({
          header: () => {
            return <BookDetailsHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="BookCart"
        component={BookCart}
        options={({ navigation }) => ({
          header: () => {
            return <BookCartHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default StackHome;
