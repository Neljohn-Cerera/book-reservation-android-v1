import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const HomeHeader = ({ navigation }) => {
  const { background, colors } = useTheme();
  const handleDrawer = () => {
    navigation.openDrawer();
  };
  const handleSearch = () => {
    navigation.navigate("SearchBook");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background.headerBackground },
      ]}
    >
      <TouchableOpacity style={styles.menu} onPress={handleDrawer}>
        <Icon
          containerStyle={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          name="menu"
          type="material-community"
          color={colors.headerIconColor}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.search} onPress={handleSearch}>
        <Icon
          containerStyle={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          name="magnify"
          type="material-community"
          color={colors.headerIconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: 0,
    width: 50,
    height: 50,
  },
  search: {
    position: "absolute",
    right: 0,
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
});
