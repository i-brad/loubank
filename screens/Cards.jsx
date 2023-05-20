import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import VisaCard from "../lib/components/Card/VisaCard";
import BaseLayout from "../lib/layouts/BaseLayout";
import { cards } from "../lib/models/cards";
import { BrandColors } from "../lib/utils/BrandStyle";

const Cards = () => {
  return (
    <BaseLayout style={styles.container}>
      <View style={{ paddingLeft: 30 }}>
        <FlatList
          data={cards}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VisaCard
              colors={item.colors}
              text={item.text}
              amount={item.amount}
              card_no={item.card_no}
              card_style={index === cards.length - 1 ? { marginRight: 25 } : {}}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </BaseLayout>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
