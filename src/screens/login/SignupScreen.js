import React, { useState } from "react";
import StepProgress from "../../components/login/signup/progress/StepProgress";
import { WIDTH } from "../../theme";
import { useSelector } from "react-redux";
import { step } from "../../redux/slice/signupSlice";
import { StyleSheet, View } from "react-native";
import { StepOne, StepTwo, StepThree } from "../../components/login/signup";

const SignupScreen = ({ navigation }) => {
  const stepp = useSelector(step);
  console.log("stepp", stepp);

  return (
    <View style={styles.container}>
      <View style={{ display: stepp === 1 ? "flex" : "none" }}>
        <StepProgress step={stepp} />
        <StepOne navigation={navigation} />
      </View>
      <View style={{ display: stepp === 2 ? "flex" : "none" }}>
        <StepProgress step={stepp} />
        <StepTwo navigation={navigation} />
      </View>
      <View style={{ display: stepp === 3 ? "flex" : "none" }}>
        <StepProgress step={stepp} />
        <StepThree navigation={navigation} />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: WIDTH,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
