import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  FONT_COLOR,
  BORDER_COLOR,
  TEXTBOX_BACKGROUND,
  PLACEHOLDER_COLOR,
} from "../../theme";

const FormikField = ({ label, formikProps, formikKey, ...rest }) => {
  //Text input style
  const input_container = {
    width: 280,
    borderWidth: 1,
    alignItems: "flex-end",
    borderRadius: 10,
    backgroundColor: TEXTBOX_BACKGROUND,
    borderColor: BORDER_COLOR,
  };
  //if error border should be red
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    input_container.borderColor = "red";
  }
  //RETURN
  return (
    <View style={styles.container_text}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>
      {/* Formik Text input */}
      <View style={input_container}>
        <TextInput
          style={styles.input}
          onChangeText={formikProps.handleChange(formikKey)}
          placeholderTextColor={PLACEHOLDER_COLOR}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
      </View>

      {/* Formik Error */}
      {formikProps.touched[formikKey] && formikProps.errors[formikKey] ? (
        <Text style={{ marginTop: 5, fontSize: 10, color: "red" }}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      ) : null}
    </View>
  );
};

export default FormikField;

const styles = StyleSheet.create({
  container_text: {
    width: 280,
    marginTop: 20,
  },
  input: {
    width: 260,
    height: 50,
    color: FONT_COLOR,
    fontSize: 14,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: FONT_COLOR,
    marginBottom: 10,
  },
});
