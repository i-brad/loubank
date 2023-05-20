import React, { useCallback, useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { BrandColors } from "../utils/BrandStyle";

const BaseLayout = ({ children, style }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, style]}
        refreshControl={
          <RefreshControl
            colors={[BrandColors.dark]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
});
