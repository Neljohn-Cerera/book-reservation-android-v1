import React from "react";
import ButtonGroup from "./ButtonGroup";
import { Formik } from "formik";
import { View } from "react-native";
import { FormikField } from "../../../../shared";
import { useDispatch } from "react-redux";
import { step_two_others_validation } from "../../schema_validation";
import {
  set_schoolInfo,
  set_schoolRole,
  setStep,
} from "../../../../../redux/slice/signupSlice";
//COMPONENT
const Others = ({ role, navigation }) => {
  //redux calls
  const dispatch = useDispatch();
  //return
  return (
    <Formik
      initialValues={{ employeeid: "", description: "" }}
      validationSchema={step_two_others_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(
            set_schoolInfo({
              studentid: "",
              course: "",
              courseyear: "",
              teacherid: "",
              jobstate: "",
              department: "",
              employeeid: values.employeeid,
              description: values.description,
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
            label="Employee ID"
            formikProps={formik}
            formikKey="employeeid"
            placeholder="Enter your id number..."
            keyboardType="default"
            maxLength={11}
            autoFocus
          />
          <FormikField
            label="Description"
            formikProps={formik}
            formikKey="description"
            placeholder="Enter description..."
            keyboardType="default"
            maxLength={20}
          />
          {/* Buttons */}
          <ButtonGroup formik={formik} navigation={navigation} />
        </View>
      )}
    </Formik>
  );
};

export default Others;
