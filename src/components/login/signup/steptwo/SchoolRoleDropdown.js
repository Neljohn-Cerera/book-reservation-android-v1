import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FONT_COLOR, TEXTBOX_BACKGROUND } from "../../../../theme";

const SchoolRoleDropdown = ({ role, setRole, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dropdown}>
        <Picker
          style={{ color: FONT_COLOR }}
          selectedValue={role}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        >
          <Picker.Item label="Student" value="Student" />
          <Picker.Item label="Teacher" value="Teacher" />
          <Picker.Item label="Others" value="Others" />
        </Picker>
      </View>
    </View>
  );
};

export default SchoolRoleDropdown;

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
