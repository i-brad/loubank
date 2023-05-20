import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Currencies_metals from "../lib/components/Home/Currencies_metals";
import CurrentLoan from "../lib/components/Home/CurrentLoan";
import FinanceCard from "../lib/components/Home/FinanceCard";
import Header from "../lib/components/Home/Header";
import VisaCard from "../lib/components/Home/VisaCard";
import { cards } from "../lib/models/cards";
import { financeData } from "../lib/models/finance";
import { BrandColors } from "../lib/utils/BrandStyle";
import BaseLayout from "../lib/layouts/BaseLayout";

const Home = ({ navigation }) => {
  return (
    <BaseLayout>
      <Header navigation={navigation} />
      <View style={{ paddingLeft: 20 }}>
        <FlatList
          data={cards}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <VisaCard
              colors={item.colors}
              text={item.text}
              amount={item.amount}
              card_no={item.card_no}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/**Finance */}
      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <Text style={styles.financeText}>Finance</Text>
        <FlatList
          data={financeData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <FinanceCard text={item.text} color={item.color} icon={item.icon} />
          )}
          keyExtractor={(item) => item.text}
        />
      </View>

      {/**others */}
      <LinearGradient
        colors={["#252525", "#2C2C2C"]}
        style={styles.othersContainer}
      >
        <CurrentLoan />
        <Currencies_metals />
      </LinearGradient>
    </BaseLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  financeText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "500",
    color: BrandColors.white,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  othersContainer: {
    // height: 630,
    minHeight: "auto",
    marginTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    paddingTop: 30,
  },
});
