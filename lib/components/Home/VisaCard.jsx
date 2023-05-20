import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import VisaLogo from "../../../assets/icons/visa.svg";

const VisaCard = ({ colors, text, amount, card_no }) => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.card} colors={colors}>
        <VisaLogo />
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.cardText}>{text}</Text>
          <Text style={styles.cardAmount}>{amount}</Text>
        </View>
        <Text style={styles.cardText}>{card_no}</Text>
      </LinearGradient>
    </View>
  );
};

export default VisaCard;

const styles = StyleSheet.create({
  container: {
    // overflow: "hidden",
  },
  card: {
    borderRadius: 30,
    width: 148,
    height: 170,
    marginRight: 16,
    padding: 15,
  },
  cardText: {
    fontSize: 11,
    lineHeight: 12,
    fontWeight: 500,
  },
  cardAmount: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "bold",
  },
});
