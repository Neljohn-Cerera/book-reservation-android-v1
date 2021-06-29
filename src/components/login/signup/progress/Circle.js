import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CIRCLE_BACKGROUND, BORDER_COLOR, FONT_COLOR } from "../../../../theme";

const Circle = ({ text, active }) => {
  return (
    <View
      style={[
        styles.circle,
        {
          backgroundColor: active ? CIRCLE_BACKGROUND : "#ffffff",
          borderColor: !active && BORDER_COLOR,
          borderWidth: active ? 0 : 0.5,
        },
      ]}
    >
      <Text style={[styles.text, { color: active ? "#ffffff" : FONT_COLOR }]}>
        {text}
      </Text>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    borderRadius: 40,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    borderWidth: 0.5,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
