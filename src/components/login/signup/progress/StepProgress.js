import React from "react";
import { StyleSheet, View } from "react-native";
import Circle from "./Circle";
import { BORDER_COLOR, CIRCLE_BACKGROUND } from "../../../../theme";

const StepProgress = ({ step }) => {
  return (
    <View style={styles.container}>
      {step === 1 ? (
        <>
          <Circle text="1" active={true} />
          <View style={styles.line} />
          <Circle text="2" active={false} />
          <View style={[styles.line, { left: 151 }]} />
          <Circle text="3" active={false} />
        </>
      ) : step === 2 ? (
        <>
          <Circle text="1" active={true} />
          <View style={[styles.line, { borderColor: CIRCLE_BACKGROUND }]} />
          <Circle text="2" active={true} />
          <View style={[styles.line, { left: 151 }]} />
          <Circle text="3" active={false} />
        </>
      ) : step === 3 ? (
        <>
          <Circle text="1" active={true} />
          <View style={[styles.line, { borderColor: CIRCLE_BACKGROUND }]} />
          <Circle text="2" active={true} />
          <View
            style={[styles.line, { left: 151, borderColor: CIRCLE_BACKGROUND }]}
          />
          <Circle text="3" active={true} />
        </>
      ) : null}
    </View>
  );
};

export default StepProgress;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
    height: 30,
    // borderWidth: 3,
    // borderColor: "red",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 30,
    marginBottom: 30,
  },
  line: {
    position: "absolute",
    left: 21,
    width: 110,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR,
    marginTop: 15,
  },
});
