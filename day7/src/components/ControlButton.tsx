import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ControlButtonProps {
  title: string;
  onPress: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});

export default ControlButton;
