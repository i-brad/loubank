import { StyleSheet, Text, View } from "react-native";
import { BrandColors } from "../../../utils/BrandStyle";

const TableHeader = ({ heading }) => {
  return (
    <View style={styles.tableHeader}>
      {heading.map((text, index) => (
        <Text
          style={
            index === 0
              ? [styles.tableHeaderText, styles.tableHeaderTextFirst]
              : styles.tableHeaderText
          }
          key={text}
        >
          {text}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tableHeaderText: {
    color: BrandColors.gray,
    fontSize: 12,
    lineHeight: 16,
    textAlign: "right",
    flex: 1,
  },
  tableHeaderTextFirst: {
    textAlign: "left",
    flex: 2,
  },
});

export default TableHeader;
