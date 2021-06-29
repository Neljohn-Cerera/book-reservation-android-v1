import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Icon } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const BookCartHeader = ({ navigation }) => {
  const { background, colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background.headerBackground },
      ]}
    >
      <Icon
        containerStyle={{
          position: "absolute",
          left: 0,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        name="arrow-left"
        type="material-community"
        color={colors.headerIconColor}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default BookCartHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    width: "100%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
});
