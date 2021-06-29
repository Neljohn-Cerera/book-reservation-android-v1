import React from "react";
import { View } from "react-native";
import Head from "./Head";
import Form from "./stepone/Form";

const StepOne = ({ navigation }) => {
  return (
    <View>
      {/* head */}
      <Head title="Account Informations" />
      {/* Form */}
      <Form navigation={navigation} />
    </View>
  );
};

export default StepOne;
