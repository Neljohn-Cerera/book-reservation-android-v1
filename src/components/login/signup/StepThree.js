import React from "react";
import Head from "./Head";
import { WIDTH } from "../../../theme";
import { ScrollView } from "react-native";
import PersonalInformations from "./stepthree/form/Personalinformations";

const StepThree = ({ navigation }) => {
  return (
    <ScrollView
      style={{ width: WIDTH }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Head title="Personal Informations" />
      <PersonalInformations navigation={navigation} />
    </ScrollView>
  );
};

export default StepThree;
