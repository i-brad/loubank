import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "../../../assets/icons/avatar.svg";
import Logo from "../../../assets/logo.svg";
import { BrandColors } from "../../utils/BrandStyle";

export const ProfileAvatar = () => {
  return (
    <View style={styles.avatarContainer}>
      {/* <View style={styles.avatar}></View> */}
      <Avatar />
    </View>
  );
};

const Header = () => {
  return <Logo width={72} height={21} />;
};

export default Header;

const styles = StyleSheet.create({
  avatarContainer: {
    paddingLeft: 20,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 64 / 2,
    backgroundColor: BrandColors.accent,
  },
});
