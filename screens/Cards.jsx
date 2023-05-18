import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../lib/utils/BrandStyle";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  text: {
    color: BrandColors.white,
  },
});
