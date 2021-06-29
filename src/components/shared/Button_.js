import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Button } from "react-native-paper";

const Button_ = ({ label, icon, bgColor, submitting, smsCode, ...rest }) => {
  return (
    <>
      {submitting ? (
        <View
          style={[
            styles.button,
            smsCode
              ? { backgroundColor: bgColor, width: 200 }
              : { backgroundColor: bgColor },
          ]}
        >
          <ActivityIndicator color="#ffffff" size="small" />
        </View>
      ) : (
        <Button
          icon={icon}
          mode="contained"
          style={[
            styles.button,
            smsCode
              ? { backgroundColor: bgColor, width: 200 }
              : { backgroundColor: bgColor },
          ]}
          labelStyle={styles.label}
          {...rest}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default Button_;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
