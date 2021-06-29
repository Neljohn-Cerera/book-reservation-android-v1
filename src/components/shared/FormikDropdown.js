import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FONT_COLOR, TEXTBOX_BACKGROUND } from "../../theme";

const FormikDropdown = ({ label, formikProps, formikKey, children }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.dropdown,
            formikProps.errors[formikKey]
              ? { borderColor: "red", borderWidth: 1 }
              : null,
          ]}
        >
          <Picker
            style={{
              color: FONT_COLOR,
            }}
            selectedValue={formikProps.values[formikKey]}
            onValueChange={(itemValue) =>
              formikProps.setFieldValue([formikKey], itemValue)
            }
          >
            {/* Props for picker Item */}
            {children}
          </Picker>
        </View>
      </View>
      {formikProps.errors[formikKey] ? (
        <Text style={{ marginTop: 5, fontSize: 10, color: "red" }}>
          {formikProps.errors[formikKey]}
        </Text>
      ) : null}
    </>
  );
};

export default FormikDropdown;

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginTop: 20,
  },
  dropdown: {
    backgroundColor: TEXTBOX_BACKGROUND,
  },
  label: {
    fontSize: 14,
    color: FONT_COLOR,
    marginBottom: 10,
  },
});
