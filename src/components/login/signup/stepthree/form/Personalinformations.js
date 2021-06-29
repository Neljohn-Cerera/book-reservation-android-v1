import React from "react";
import ButtonGroup from "../../steptwo/form/ButtonGroup";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { step_three_personalInformations_validation } from "../../schema_validation";
import { FormikField, FormikDropdown } from "../../../../shared";
import {
  set_personalInfo,
  account_info,
  school_info,
  school_role,
  personal_info,
} from "../../../../../redux/slice/signupSlice";

const PersonalInformations = ({ navigation }) => {
  const accountinfo = useSelector(account_info);
  const schoolInfo = useSelector(school_info);
  const schoolRole = useSelector(school_role);
  const personalinfo = useSelector(personal_info);
  console.log("signup", [accountinfo, schoolInfo, schoolRole, personalinfo]);
  //redux calls
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ fullname: "", gender: "", age: "", address: "" }}
      validationSchema={step_three_personalInformations_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(set_personalInfo(values));
          navigation.push("OtpScreen");
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <View>
          <FormikField
            label="Full Name"
            formikProps={formik}
            formikKey="fullname"
            placeholder="Enter your fullname..."
            keyboardType="default"
            maxLength={50}
            autoFocus
          />
          <FormikDropdown
            label="Gender"
            formikProps={formik}
            formikKey="gender"
          >
            <Picker.Item label="- Choose Gender -" value="" />
            <Picker.Item label="Male" value="M" />
            <Picker.Item label="Female" value="F" />
          </FormikDropdown>
          <FormikField
            label="Age"
            formikProps={formik}
            formikKey="age"
            placeholder="Enter your age..."
            keyboardType="numeric"
            maxLength={2}
          />
          <FormikField
            label="Address"
            formikProps={formik}
            formikKey="address"
            placeholder="Enter your Address..."
            keyboardType="default"
            maxLength={200}
          />
          {/* Buttons */}
          <ButtonGroup formik={formik} navigation={navigation} submit={true} />
        </View>
      )}
    </Formik>
  );
};

export default PersonalInformations;
