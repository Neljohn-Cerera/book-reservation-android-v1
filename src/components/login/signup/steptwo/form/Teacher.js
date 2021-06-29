import React from "react";
import ButtonGroup from "./ButtonGroup";
import { Formik } from "formik";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { step_two_teacher_validation } from "../../schema_validation";
import { FormikField, FormikDropdown } from "../../../../shared";
import {
  set_schoolInfo,
  set_schoolRole,
  setStep,
} from "../../../../../redux/slice/signupSlice";
//COMPONENT
const Teacher = ({ role, navigation }) => {
  //redux calls
  const dispatch = useDispatch();
  //return
  return (
    <Formik
      initialValues={{ teacherid: "", jobstate: "", department: "" }}
      validationSchema={step_two_teacher_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(
            set_schoolInfo({
              studentid: "",
              course: "",
              courseyear: "",
              teacherid: values.teacherid,
              jobstate: values.jobstate,
              department: values.department,
              employeeid: "",
              description: "",
            })
          );
          dispatch(set_schoolRole(role));
          dispatch(setStep(3));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <View>
          <FormikField
            label="Teacher ID"
            formikProps={formik}
            formikKey="teacherid"
            placeholder="Enter your id number..."
            keyboardType="default"
            maxLength={11}
            autoFocus
          />

          <FormikDropdown
            label="Job State"
            formikProps={formik}
            formikKey="jobstate"
          >
            <Picker.Item label="- Choose Job State -" value="" />

            <Picker.Item label="Full Time" value="Full Time" />
            <Picker.Item label="Part Timer" value="Part Timer" />
          </FormikDropdown>

          <FormikDropdown
            label="Department"
            formikProps={formik}
            formikKey="department"
          >
            <Picker.Item label="- Choose Department -" value="" />
            <Picker.Item label="High School" value="High School" />
            <Picker.Item
              label="Senior High School"
              value="Senior High School"
            />
            <Picker.Item label="College" value="College" />
          </FormikDropdown>
          {/* Buttons */}
          <ButtonGroup formik={formik} navigation={navigation} />
        </View>
      )}
    </Formik>
  );
};

export default Teacher;
