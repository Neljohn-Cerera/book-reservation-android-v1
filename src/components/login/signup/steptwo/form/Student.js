import React from "react";
import ButtonGroup from "./ButtonGroup";
import { Formik } from "formik";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { step_two_student_validation } from "../../schema_validation";
import { FormikField, FormikDropdown } from "../../../../shared";
import {
  set_schoolInfo,
  set_schoolRole,
  setStep,
} from "../../../../../redux/slice/signupSlice";
//Component
const Student = ({ role, navigation }) => {
  //redux calls
  const dispatch = useDispatch();
  //return
  return (
    <Formik
      initialValues={{ studentid: "", course: "", courseyear: "" }}
      validationSchema={step_two_student_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(
            set_schoolInfo({
              studentid: values.studentid,
              course: values.course,
              courseyear: values.courseyear,
              teacherid: "",
              jobstate: "",
              department: "",
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
            label="Student ID"
            formikProps={formik}
            formikKey="studentid"
            placeholder="Enter your id number..."
            keyboardType="default"
            maxLength={11}
          />
          <FormikDropdown
            label="Course"
            formikProps={formik}
            formikKey="course"
          >
            <Picker.Item label="- Choose Course -" value="" />
            <Picker.Item label="BSIT" value="BSIT" />
            <Picker.Item label="HRDM" value="HRDM" />
            <Picker.Item label="BSED" value="BSED" />
            <Picker.Item label="BSED" value="BSED" />
          </FormikDropdown>

          <FormikDropdown
            label="Course Year"
            formikProps={formik}
            formikKey="courseyear"
          >
            <Picker.Item label="- Choose Year -" value="" />
            <Picker.Item label="1st Year" value="1st Year" />
            <Picker.Item label="2nd Year" value="2nd Year" />
            <Picker.Item label="3rd Year" value="3rd Year" />
            <Picker.Item label="4th Year" value="4th Year" />
          </FormikDropdown>
          {/* Buttons */}
          <ButtonGroup formik={formik} navigation={navigation} />
        </View>
      )}
    </Formik>
  );
};

export default Student;
