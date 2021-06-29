import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  FONT_COLOR,
  BORDER_COLOR,
  TEXTBOX_BACKGROUND,
  PLACEHOLDER_COLOR,
} from "../../../theme";

const FormikField = ({ formikProps, formikKey, ...rest }) => {
  //RETURN
  return (
    <>
      {/* Formik Text input */}
      <TextInput
        style={[
          styles.input,
          formikProps.touched[formikKey] &&
            formikProps.errors[formikKey] && { borderColor: "red" },
        ]}
        onChangeText={formikProps.handleChange(formikKey)}
        placeholderTextColor={PLACEHOLDER_COLOR}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </>
  );
};

export default FormikField;

const styles = StyleSheet.create({
  input: {
    width: 60,
    height: 60,
    color: FONT_COLOR,
    fontSize: 14,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: TEXTBOX_BACKGROUND,
    borderColor: BORDER_COLOR,
    textAlign: "center",
  },
});
