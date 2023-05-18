import React from "react";
import { StyleSheet, View } from "react-native";
import { MetalsData } from "../../../models/currencies_metals";
import { BrandColors } from "../../../utils/BrandStyle";
import TableHeader from "./TableHeader";
import Row from "./Row";

const Metals = () => {
  return (
    <View style={styles.container}>
      <TableHeader heading={["Metal", "Buy", "Sell"]} />
      {/**Rows */}
      {MetalsData.map((metal) => (
        <Row key={metal.id} data={metal} />
      ))}
    </View>
  );
};

export default Metals;

const styles = StyleSheet.create({
  container: {
    height: 116,
    borderRadius: 26,
    backgroundColor: BrandColors.black,
    padding: 20,
  },
});
