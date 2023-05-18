import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../../utils/BrandStyle";

const Row = ({ data: { Icon, currency, metal, buy, sell } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowIcon}>{Icon && Icon}</View>
        <Text style={[styles.rowText, { textAlign: "left" }]}>
          {currency || metal}
        </Text>
      </View>
      <Text style={[{ flex: 1 }, styles.rowText]}>{buy}</Text>
      <Text style={[{ flex: 1 }, styles.rowText]}>{sell}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
    flex: 2,
  },
  rowIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BrandColors.mint,
  },
  rowText: {
    color: BrandColors.white,
    fontSize: 15,
    lineHeight: 18,
    textAlign: "right",
  },
});
