import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  FONT_COLOR,
  BORDER_COLOR,
  TEXTBOX_BACKGROUND,
  PLACEHOLDER_COLOR,
} from "../../theme";

const Textinput = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  charLength,
  keyboardType,
  error,
  ...rest
}) => {
  return (
    <View style={styles.container_text}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          error ? { borderColor: "red" } : { borderColor: BORDER_COLOR },
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        maxLength={charLength}
        keyboardType={keyboardType}
        placeholderTextColor={PLACEHOLDER_COLOR}
        {...rest}
      />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  container_text: {
    width: 280,
    height: 76,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: FONT_COLOR,
    marginBottom: 10,
  },
  input: {
    backgroundColor: TEXTBOX_BACKGROUND,
    fontSize: 14,
    color: FONT_COLOR,
    fontWeight: "bold",
    paddingLeft: 20,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
});
