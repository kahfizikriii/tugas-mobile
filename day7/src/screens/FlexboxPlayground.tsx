import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ControlButton from "../components/ControlButton"; // ← nyambung di sini!

const FlexboxPlayground: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<"row" | "column" | "row-reverse">("row");
  const [justifyContent, setJustifyContent] = useState<"flex-start" | "center" | "space-between">("flex-start");
  const [alignItems, setAlignItems] = useState<"flex-start" | "center" | "stretch">("flex-start");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎯 Flexbox Playground</Text>

      {/* Kotak Flex */}
      <View style={[styles.flexContainer, { flexDirection, justifyContent, alignItems }]}>
        <View style={[styles.box, { backgroundColor: "red" }]} />
        <View style={[styles.box, { backgroundColor: "blue" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>

      {/* Panel Kontrol */}
      <View style={styles.controlsContainer}>
        <Text style={styles.subtitle}>Flex Direction</Text>
        <View style={styles.buttonGroup}>
          <ControlButton title="Row" onPress={() => setFlexDirection("row")} />
          <ControlButton title="Column" onPress={() => setFlexDirection("column")} />
          <ControlButton title="Row Reverse" onPress={() => setFlexDirection("row-reverse")} />
        </View>

        <Text style={styles.subtitle}>Justify Content</Text>
        <View style={styles.buttonGroup}>
          <ControlButton title="Start" onPress={() => setJustifyContent("flex-start")} />
          <ControlButton title="Center" onPress={() => setJustifyContent("center")} />
          <ControlButton title="Space-Between" onPress={() => setJustifyContent("space-between")} />
        </View>

        <Text style={styles.subtitle}>Align Items</Text>
        <View style={styles.buttonGroup}>
          <ControlButton title="Start" onPress={() => setAlignItems("flex-start")} />
          <ControlButton title="Center" onPress={() => setAlignItems("center")} />
          <ControlButton title="Stretch" onPress={() => setAlignItems("stretch")} />
        </View>

        {/* Tambahan indikator */}
        <Text style={styles.statusText}>
          flexDirection: {flexDirection} | justifyContent: {justifyContent} | alignItems: {alignItems}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
  flexContainer: { flex: 1, backgroundColor: "#eee", borderRadius: 10, padding: 10 },
  box: { width: 80, height: 80, borderRadius: 8 },
  controlsContainer: { marginTop: 16 },
  subtitle: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  buttonGroup: { flexDirection: "row", flexWrap: "wrap", marginVertical: 6 },
  statusText: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: "italic",
    color: "#444",
    textAlign: "center",
  },
});

export default FlexboxPlayground;
