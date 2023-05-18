import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";
import Currencies from "./CM/Currencies";
import Metals from "./CM/Metals";

const Header = ({ visible, onPress }) => {
  return (
    <View>
      <View style={styles.dropdownContainer}>
        <Pressable
          android_ripple={{ color: BrandColors.gray }}
          onPress={onPress}
        >
          <AntDesign
            name={visible ? "up" : "down"}
            size={20}
            color={BrandColors.gray}
          />
        </Pressable>
        <Text style={styles.headerText}>Currencies and metals</Text>
      </View>
    </View>
  );
};

const Currencies_metals = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const visibilityHandler = () => {
    setContentVisible(!contentVisible);
  };
  return (
    <View style={styles.container}>
      <Header visible={contentVisible} onPress={visibilityHandler} />
      {contentVisible && (
        <>
          <Currencies />
          <Metals />
        </>
      )}
    </View>
  );
};

export default Currencies_metals;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  headerText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "500",
    color: BrandColors.white,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  dropdownContainer: {
    columnGap: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
