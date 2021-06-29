import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT_COLOR, BUTTON_PRIMARY } from "../../../theme";

const Head = ({ title }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

export default Head;

const styles = StyleSheet.create({
  title: {
    color: FONT_COLOR,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
