import React from "react";
import { StyleSheet, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";

const AddLoanModal = () => {
  return <View style={styles.modalBlur}></View>;
};

export default AddLoanModal;

const styles = StyleSheet.create({
  modalBlur: {
    flex: 1,
    backgroundColor: BrandColors.dark,
    opacity: 0.7,
    backfaceVisibility: "hidden",
  },
});
