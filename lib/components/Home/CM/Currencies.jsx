import React from "react";
import { StyleSheet, View } from "react-native";
import { CurrenciesData } from "../../../models/currencies_metals";
import { BrandColors } from "../../../utils/BrandStyle";
import Row from "./Row";
import TableHeader from "./TableHeader";

const Currencies = () => {
  return (
    <View style={styles.container}>
      <TableHeader heading={["Currency", "Buy", "Sell"]} />
      {/**Rows */}
      {CurrenciesData.map((currency) => (
        <Row key={currency.id} data={currency} />
      ))}
    </View>
  );
};

export default Currencies;

const styles = StyleSheet.create({
  container: {
    height: 116,
    borderRadius: 26,
    backgroundColor: BrandColors.black,
    marginBottom: 20,
    padding: 20,
  },
});
