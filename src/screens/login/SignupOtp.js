import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FONT_COLOR, BUTTON_PRIMARY } from "../../theme";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button_ } from "../../components/shared";
import { set_loggedin_true } from "../../redux/slice/loginSlice";
import OtpInput from "../../components/login/signin/OtpInput";
import { otp_validation } from "../../components/login/signin/schema_validation";

const SigninOtp = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ one: "", two: "", three: "", four: "" }}
      validationSchema={otp_validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(set_loggedin_true());
          setSubmitting(false);
        }, 2000);
      }}
    >
      {(formik) => (
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={require("../../../assets/loginBackground.png")}
          >
            <View
              style={{
                width: 280,
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>SMS Code Verification</Text>
              <Text style={styles.subTitle}>
                PLEASE enter the code that has been sent to your Number.
              </Text>
              <View style={styles.input_container}>
                <OtpInput
                  formikProps={formik}
                  formikKey="one"
                  keyboardType="numeric"
                  maxLength={1}
                  autoFocus={true}
                />
                <OtpInput
                  formikProps={formik}
                  formikKey="two"
                  keyboardType="numeric"
                  maxLength={1}
                />
                <OtpInput
                  formikProps={formik}
                  formikKey="three"
                  keyboardType="numeric"
                  maxLength={1}
                />
                <OtpInput
                  formikProps={formik}
                  formikKey="four"
                  keyboardType="numeric"
                  maxLength={1}
                />
              </View>
              <Button_
                label="Verify SMS Code"
                icon="check-bold"
                bgColor={!formik.isValid ? "gray" : BUTTON_PRIMARY}
                submitting={formik.isSubmitting}
                smsCode={true}
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
              />
            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
};

export default SigninOtp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: FONT_COLOR,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  subTitle: {
    color: FONT_COLOR,
    fontSize: 12,
    marginBottom: 15,
  },
  input_container: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
