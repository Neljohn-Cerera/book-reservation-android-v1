import React, { useState } from "react";
import { Formik } from "formik";
import { useLogin } from "../../../hooks/useLogin";
import { FONT_COLOR } from "../../../theme";
import { login_validation } from "./schema_validation";
import { FormikField, Button_ } from "../../shared";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Form = ({ navigation }) => {
  const [state, setState] = useState({
    mobileNumber: "",
    password: "",
  });
  //custom hook
  const { loading, data } = useLogin({ state, navigation });

  return (
    <Formik
      initialValues={{ number: "", password: "" }}
      validationSchema={login_validation}
      onSubmit={(values) => {
        setState({
          mobileNumber: values.number,
          password: values.password,
        });
      }}
    >
      {(formik) => (
        <View>
          <FormikField
            label="Phone Number"
            formikProps={formik}
            formikKey="number"
            placeholder="Enter Number..."
            keyboardType="numeric"
            maxLength={11}
          />
          <FormikField
            label="Password"
            formikProps={formik}
            formikKey="password"
            placeholder="Enter password..."
            keyboardType="default"
            maxLength={20}
            secureTextEntry={false}
          />
          {/* Button Container */}
          <View style={styles.buttonGroup}>
            {/* Login Button */}
            <Button_
              label="Login"
              icon="account-arrow-right-outline"
              bgColor="#2699FB"
              submitting={loading}
              onPress={formik.handleSubmit}
            />
            {/* Signup Button */}
            <Button_
              label="Signup"
              icon="account-plus-outline"
              bgColor="#ACA7A7"
              onPress={() => navigation.push("Signup")}
            />
          </View>
          {/* Privacy */}
          <TouchableOpacity>
            <Text style={styles.privacy}>Privacy and Terms</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Form;

//styles
const styles = StyleSheet.create({
  buttonGroup: {
    width: 280,
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  privacy: {
    color: FONT_COLOR,
    fontSize: 12,
    marginTop: 25,
    alignSelf: "center",
  },
});
