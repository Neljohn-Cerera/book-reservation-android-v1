import React from "react";
import StackHome from "./StackHome";
import StackBook from "./StackBook";
import StackReturnBooks from "./StackReturnBooks";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

const Drawer_ = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawer_.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer_.Screen name="HomePage" component={StackHome} />
      <Drawer_.Screen name="BooksPage" component={StackBook} />
      <Drawer_.Screen name="ReturnBooksPage" component={StackReturnBooks} />
    </Drawer_.Navigator>
  );
};

export default Drawer;
