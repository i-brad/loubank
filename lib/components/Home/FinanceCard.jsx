import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";

const FinanceCard = ({ text, color, icon: Icon }) => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.card} colors={["#252525", "#2C2C2C"]}>
        <View style={[{ backgroundColor: color }, styles.iconContainer]}>
          {Icon !== "" && Icon}
        </View>
        <Text style={styles.cardText}>{text}</Text>
      </LinearGradient>
    </View>
  );
};

export default FinanceCard;

const styles = StyleSheet.create({
  container: {
    // overflow: "hidden",
  },
  card: {
    borderRadius: 30,
    width: 100,
    height: 100,
    marginRight: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 11,
    lineHeight: 12,
    fontWeight: "500",
    color: BrandColors.white,
  },
});
