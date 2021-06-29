import React, { useState } from "react";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { View, StyleSheet, Alert } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  set_darkMode_true,
  set_darkMode_false,
  isDarkMode,
} from "../redux/slice/themeSlice";
import { set_isLoggedin_false } from "../redux/slice/loginSlice";
import * as SecureStore from "expo-secure-store";

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const isDarkMode_ = useSelector(isDarkMode);
  const { background, colors } = useTheme();

  const handleDarkmode = () => {
    if (isDarkMode_) {
      setTimeout(() => {
        dispatch(set_darkMode_false());
      }, 400);
    } else {
      setTimeout(() => {
        dispatch(set_darkMode_true());
      }, 400);
    }
  };

  const handleSignout = () => {
    Alert.alert(
      "Logout",
      "Do you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setTimeout(async () => {
              await SecureStore.deleteItemAsync("token");
              dispatch(set_isLoggedin_false());
            }, 500);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: background.drawerBackground }}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.drawerContent]}>
          <View style={styles.userInfoSection}>
            {/* Top */}
            <View
              style={{ flexDirection: "row", marginTop: 15, marginBottom: 15 }}
            >
              <Avatar.Image
                source={require("../../assets/spctLogo.jpeg")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title
                  style={[
                    styles.title,
                    { marginTop: 0, color: colors.drawerTitleColor },
                  ]}
                >
                  Book Reservation
                </Title>
                <Caption
                  style={[styles.caption, { color: colors.drawerTitleColor }]}
                >
                  Version 1.0
                </Caption>
              </View>
            </View>
          </View>
          {/* Navaigation */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="home"
                  color={colors.drawerIconColor}
                  size={size}
                  type="material-community"
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate("HomePage");
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="account-circle"
                  type="material-community"
                  color={colors.drawerIconColor}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Account"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="bookshelf"
                  type="material-community"
                  color={colors.drawerIconColor}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Books"
              onPress={() => {
                props.navigation.navigate("BooksPage");
              }}
            />

            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="text-box-multiple"
                  type="material-community"
                  color={colors.drawerIconColor}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Return Books"
              onPress={() => {
                props.navigation.navigate("ReturnBooksPage");
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="text-box-search"
                  type="material-community"
                  color={colors.drawerIconColor}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Students Records"
              onPress={() => {
                // props.navigation.navigate("History");
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="cog"
                  type="material-community"
                  color={colors.drawerIconColor}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.drawerTextColor }}
              label="Settings"
              onPress={() => {
                // props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Text
              style={{
                color: colors.drawerTitleColor,
                marginLeft: 15,
                fontSize: 12,
              }}
            >
              Preferences
            </Text>
            <TouchableRipple onPress={handleDarkmode}>
              <View style={styles.preference}>
                <Text style={{ color: colors.drawerTextColor }}>
                  Dark Theme
                </Text>
                <View pointerEvents="none">
                  <Switch value={isDarkMode_} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* Bottom */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon
              name="logout"
              type="material-community"
              color={colors.drawerIconColor}
              size={size}
            />
          )}
          labelStyle={{ color: colors.drawerTextColor }}
          label="LogOut"
          onPress={() => {
            handleSignout();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
