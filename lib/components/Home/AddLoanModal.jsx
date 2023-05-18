import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";

const AddLoanModal = () => {
  return (
    <View style={styles.modalBlur}>
      <BlurView
        tint="dark"
        intensity={100}
        style={styles.blurContainer}
      ></BlurView>
    </View>
  );
};

export default AddLoanModal;

const styles = StyleSheet.create({
  modalBlur: {
    flex: 1,
    backgroundColor: BrandColors.dark,
    opacity: 0.6,
  },
  blurContainer: {
    flex: 1,
  },
});
