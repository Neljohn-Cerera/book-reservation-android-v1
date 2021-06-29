import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button_, FormikField } from "../../../shared";
import { FONT_COLOR, BUTTON_PRIMARY } from "../../../../theme";
import { step_one_validation } from "../schema_validation";
import {
  set_accountInfo,
  setStep,
  account_info,
} from "../../../../redux/slice/signupSlice";

const Form = ({ navigation }) => {
  const dispatch = useDispatch();
  const account = useSelector(account_info);
  return (
    <Formik
      initialValues={{ number: "", email: "", password: "" }}
      validationSchema={step_one_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(set_accountInfo(values));
          dispatch(setStep(2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formikProps) => (
        <View>
          <FormikField
            label="Phone Number"
            formikProps={formikProps}
            formikKey="number"
            placeholder="Enter Number..."
            keyboardType="numeric"
            maxLength={11}
          />
          <FormikField
            label="Email"
            formikProps={formikProps}
            formikKey="email"
            placeholder="Enter Email..."
            keyboardType="default"
          />
          <FormikField
            label="Password"
            formikProps={formikProps}
            formikKey="password"
            placeholder="Enter Password..."
            keyboardType="default"
            secureTextEntry={true}
          />
          {/* Button Group */}
          <View style={styles.buttonGroup}>
            <Button_
              label="Back"
              icon="arrow-left"
              bgColor={BUTTON_PRIMARY}
              onPress={() => navigation.goBack()}
            />
            <Button_
              label="Next"
              icon="arrow-right"
              bgColor={!formikProps.isValid ? "gray" : BUTTON_PRIMARY}
              submitting={formikProps.isSubmitting}
              onPress={formikProps.handleSubmit}
              disabled={!formikProps.isValid}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Signin");
            }}
          >
            <Text style={styles.account}>Already have an account ?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  buttonGroup: {
    width: 280,
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  account: {
    color: FONT_COLOR,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});
