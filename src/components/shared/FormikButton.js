import React from "react";
import Button_ from "./Button_";
import { BUTTON_PRIMARY } from "../../theme";

const FormikButton = ({ label, icon, formikProps }) => {
  return (
    <Button_
      label={label}
      icon={icon}
      bgColor={!formikProps.isValid ? "gray" : BUTTON_PRIMARY}
      submitting={formikProps.isSubmitting}
      onPress={formikProps.handleSubmit}
      disabled={!formikProps.isValid}
    />
  );
};

export default FormikButton;
