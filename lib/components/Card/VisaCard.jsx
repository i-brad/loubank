import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chip from "../../../assets/icons/chip.svg";
import VisaLogo from "../../../assets/icons/visa.svg";
import { BrandColors } from "../../utils/BrandStyle";

const VisaCard = ({ colors, text, amount, card_no, card_style }) => {
  return (
    <View style={styles.container}>
      <LinearGradient style={[styles.card, card_style]} colors={colors}>
        <View style={styles.cardHeader}>
          <VisaLogo width={70} height={30} />
          <Text style={styles.cardAmount}>{amount}</Text>
        </View>

        <View style={styles.cardDetails}>
          <View>
            <Chip />
            <Text style={styles.cardText}>{card_no}</Text>
          </View>
          <View>
            <Text style={styles.otherText}>valid thru</Text>
            <Text style={[styles.cardText, { textAlign: "right" }]}>12/22</Text>
          </View>
        </View>
        <Text
          style={[
            styles.otherText,
            {
              textAlign: "left",
              marginTop: 20,
              paddingHorizontal: 10,
            },
          ]}
        >
          Braimah Destiny
        </Text>
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
    width: 335,
    height: 184,
    marginRight: 30,
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "bold",
    color: BrandColors.textBlack,
  },
  cardAmount: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
  },
  otherText: {
    opacity: 0.4,
    color: BrandColors.textBlack,
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 10,
    lineHeight: 14,
  },
});
