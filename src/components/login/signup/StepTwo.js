import React, { useState } from "react";
import Head from "./Head";
import SchoolRoleDropdown from "./steptwo/SchoolRoleDropdown";
import { WIDTH } from "../../../theme";
import { Others, Student, Teacher } from "../signup/steptwo/form";
import { StyleSheet, ScrollView, View } from "react-native";

const StepTwo = ({ navigation }) => {
  const [schoolRole, setRole] = useState("Student");
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      {/* HEAD */}
      <Head title="School Informations" />
      {/* School Role Dropdown */}
      <SchoolRoleDropdown
        role={schoolRole}
        setRole={setRole}
        label="School Role"
      />
      {/* Form Inputs */}
      {/* Show Students Form */}
      <View style={{ display: schoolRole === "Student" ? "flex" : "none" }}>
        <Student role={schoolRole} navigation={navigation} />
      </View>
      {/* Show Teachers Form */}
      <View style={{ display: schoolRole === "Teacher" ? "flex" : "none" }}>
        <Teacher role={schoolRole} navigation={navigation} />
      </View>
      {/* Show Others Form */}
      <View style={{ display: schoolRole === "Others" ? "flex" : "none" }}>
        <Others role={schoolRole} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
});
