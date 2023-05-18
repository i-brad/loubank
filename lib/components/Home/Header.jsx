import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";
import { SearchButton } from "../common/Buttons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.balanceTexts, styles.balanceParagraph]}>
          Your balance
        </Text>
        <Text style={[styles.balanceTexts, styles.balanceAmount]}>$ 7,896</Text>
      </View>

      <SearchButton onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 24,
    flexDirection: "row",
  },
  balanceTexts: {
    color: BrandColors.white,
  },
  balanceParagraph: {
    fontSize: 15,
    lineHeight: 18,
  },
  balanceAmount: {
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "bold",
  },
});
