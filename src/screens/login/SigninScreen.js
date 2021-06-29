import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { WIDTH, BODY_HEIGHT, FONT_COLOR } from "../../theme";
import SpctLogo from "../../components/login/signin/SpctLogo";
import Form from "../../components/login/signin/Form";

const SigninScreen = ({ navigation }) => {
  //return
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../../assets/loginBackground.png")}
      >
        <View style={styles.body}>
          {/* Spct Logo */}
          <SpctLogo />
          {/* Border Horizon */}
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#040262",
              width: 280,
              marginBottom: 10,
              marginTop: 30,
              opacity: 0.3,
            }}
          />
          {/* Textinput Number */}
          <Form navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SigninScreen;
//styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: WIDTH,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: BODY_HEIGHT,
    width: WIDTH,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
