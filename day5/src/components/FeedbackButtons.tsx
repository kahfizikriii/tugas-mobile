import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Alert } from 'react-native';

const FixedFeedbackButtons = () => {
  const handlePress = () => Alert.alert('Tombol Ditekan!', 'Error sudah teratasi!');

  return (
    <View style={styles.container}>
      
      {/* 1. TouchableOpacity - Menggabungkan styles.baseButton dan styles.opacityBtn */}
      <TouchableOpacity
        // Menggunakan Array untuk menggabungkan style dari StyleSheet.create
        style={[styles.baseButton, styles.opacityBtn]} 
        activeOpacity={0.6} 
        onPress={handlePress}
        disabled={false}
      >
        <Text style={styles.text}>Opacity Ceria</Text>
      </TouchableOpacity>
      
      {/* 2. TouchableHighlight - Menggabungkan styles.baseButton dan styles.highlightBtn */}
      <TouchableHighlight
        // Menggunakan Array untuk menggabungkan style dari StyleSheet.create
        style={[styles.baseButton, styles.highlightBtn]}
        activeOpacity={0.8}
        underlayColor="#00A389" 
        onPress={handlePress}
      >
        <Text style={styles.text}>Highlight Tegas</Text>
      </TouchableHighlight>
    </View>
  );
};

// ---
// Gaya (Styles) yang Sudah Diperbaiki
// ---

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30,
    gap: 25, 
    backgroundColor: '#FFFFFF', 
  },

  // 1. Gaya Dasar Tombol (baseButton)
  baseButton: {
    paddingVertical: 16, 
    paddingHorizontal: 40,
    borderRadius: 8, 
    minWidth: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 2. Gaya Khusus TouchableOpacity (Hanya Warna)
  opacityBtn: { 
    backgroundColor: '#E3337C', // Cerise Pink
  },

  // 3. Gaya Khusus TouchableHighlight (Hanya Warna)
  highlightBtn: { 
    backgroundColor: '#00BAA5', // Teal
  },

  // 4. Gaya Teks
  text: { 
    color: 'white', 
    fontSize: 18,
    fontWeight: '700', 
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});

export default FixedFeedbackButtons;