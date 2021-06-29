import React from "react";
import { Button_ } from "../../../../shared";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FONT_COLOR, BUTTON_PRIMARY } from "../../../../../theme";
import { step, setStep } from "../../../../../redux/slice/signupSlice";

const ButtonGroup = ({ formik, submit, navigation }) => {
  //redux calls
  const stepp = useSelector(step);
  const dispatch = useDispatch();

  return (
    <View>
      {/* Button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 45,
        }}
      >
        <Button_
          label="Back"
          icon="arrow-left"
          bgColor={BUTTON_PRIMARY}
          onPress={() => {
            if (stepp === 2) {
              dispatch(setStep(1));
            }
            if (stepp == 3) {
              dispatch(setStep(2));
            }
          }}
        />
        <Button_
          label={submit ? "Submit" : "Next"}
          icon={submit ? "check-bold" : "arrow-right"}
          bgColor={!formik.isValid ? "gray" : BUTTON_PRIMARY}
          submitting={formik.isSubmitting}
          onPress={formik.handleSubmit}
          disabled={formik.isValid ? false : true}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push("Signin");
        }}
      >
        <Text
          style={{
            color: FONT_COLOR,
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 45,
            textAlign: "center",
          }}
        >
          Already have an account ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGroup;
