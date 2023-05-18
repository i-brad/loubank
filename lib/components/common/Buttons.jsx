import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";

export const BackButton = ({ style, onPress }) => {
  return (
    <View style={[style, styles.backButtonContainer]}>
      <View style={styles.button}>
        <Pressable
          android_ripple={{
            color: BrandColors.gray,
          }}
          style={styles.button}
          onPress={onPress}
        >
          <AntDesign name="left" size={20} color={BrandColors.white} />
        </Pressable>
      </View>
    </View>
  );
};

export const SearchButton = ({ onPress }) => {
  return (
    <View style={styles.button}>
      <Pressable
        style={styles.button}
        android_ripple={{
          color: BrandColors.gray,
        }}
        onPress={onPress}
      >
        <Feather name="search" size={20} color={BrandColors.white} />
      </Pressable>
    </View>
  );
};

export const AddButton = ({ onPress }) => {
  return (
    <View style={styles.button}>
      <Pressable
        android_ripple={{
          color: BrandColors.gray,
        }}
        style={styles.button}
        onPress={onPress}
      >
        <Ionicons name="add-sharp" size={20} color={BrandColors.white} />
      </Pressable>
    </View>
  );
};

export const CloseButton = ({ onPress }) => {
  return (
    <View style={[styles.button, { backgroundColor: "transparent" }]}>
      <Pressable
        android_ripple={{
          color: BrandColors.gray,
        }}
        style={[styles.button, { backgroundColor: "transparent" }]}
        onPress={onPress}
      >
        <Ionicons name="close" size={20} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    // paddingLeft: 20,
  },
  button: {
    height: 32,
    width: 32,
    borderRadius: 64 / 2,
    backgroundColor: BrandColors.buttonBlack,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
