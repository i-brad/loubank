import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../utils/BrandStyle";
import { AddButton, CloseButton } from "../common/Buttons";
import AddLoanModal from "./AddLoanModal";

const Header = ({ visible, onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.dropdownContainer}>
          <Pressable
            android_ripple={{ color: BrandColors.gray }}
            onPress={onPress}
          >
            <AntDesign
              name={visible ? "up" : "down"}
              size={20}
              color={BrandColors.gray}
            />
          </Pressable>
          <Text style={styles.headerText}>Current loans</Text>
        </View>
        <AddButton onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AddLoanModal />
      </Modal>
    </>
  );
};

const LoanCard = () => {
  return (
    <View style={styles.loanCard}>
      <View
        style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}
      >
        <View
          style={[{ backgroundColor: BrandColors.mint }, styles.iconContainer]}
        >
          <FontAwesome5 name="money-check" size={20} color="black" />
        </View>
        <View>
          <Text style={styles.mainText}>Account № 3874825</Text>
          <Text style={styles.subText}>Expires 12/22/2023</Text>
        </View>
      </View>
      <View>
        <Text style={styles.mainText}>$ 780.92</Text>
        <Text style={styles.subText}>Rate 3.5%</Text>
      </View>
    </View>
  );
};

const CurrentLoan = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const visibilityHandler = () => {
    setContentVisible(!contentVisible);
  };

  const [showStartInvestingModal, setShowStartInvestingModal] = useState(true);
  const closeStartInvestingModalHandler = () => {
    setShowStartInvestingModal(false);
  };

  return (
    <View>
      <Header visible={contentVisible} onPress={visibilityHandler} />
      {contentVisible && (
        <>
          <LoanCard />
          <LinearGradient
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[BrandColors.mint, "#EAEAEA"]}
            style={[
              { display: showStartInvestingModal ? "flex" : "none" },
              styles.startInvestingCard,
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                alignItems: "center",
                padding: 16,
              }}
            >
              <View
                style={[{ backgroundColor: "#242727" }, styles.iconContainer]}
              >
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={20}
                  color="yellow"
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.mainText,
                    { fontWeight: "bold", color: "#000" },
                  ]}
                >
                  Start investing now!
                </Text>
                <Text style={[styles.subText, { opacity: 1, color: "#000" }]}>
                  Protected savings and investment plans
                </Text>
              </View>
            </View>
            <CloseButton onPress={closeStartInvestingModalHandler} />
          </LinearGradient>
        </>
      )}
    </View>
  );
};

export default CurrentLoan;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "500",
    color: BrandColors.white,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  dropdownContainer: {
    columnGap: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  loanCard: {
    borderRadius: 26,
    height: 76,
    backgroundColor: "#212121",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    color: BrandColors.white,
    fontSize: 15,
    lineHeight: 18,
  },
  subText: {
    color: BrandColors.gray,
    fontSize: 12,
    lineHeight: 16,
    opacity: 0.7,
  },
  startInvestingCard: {
    borderRadius: 26,
    height: 76,
    marginTop: 20,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
    padding: 4,
  },
});
