import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSearchBook } from "../../hooks/useSearchBook";
import { useTheme } from "@react-navigation/native";

const SearchBookHeader = ({ navigation }) => {
  const [search, setSearch] = React.useState(null);
  const loading = useSearchBook(search);
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
          setSearch("_");
          navigation.goBack();
        }}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.headerIconColor }]}
        onChangeText={setSearch}
        value={search}
        placeholder="Searct Through Title of the Book"
        keyboardType="default"
      />
    </View>
  );
};

export default SearchBookHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "red",
  },
  input: {
    borderRadius: 5,
    padding: 8,
    width: "80%",
    marginLeft: 30,
  },
});
