import React from 'react';
import { View, Text, Button, Pressable, StyleSheet, Alert, Platform } from 'react-native';

const PastelButtons = () => {
  const handlePress = () => Alert.alert('Tombol Ditekan!', 'Anda telah memilih gaya warna pastel!');

  return (
    <View style={styles.container}>
      
      {/* 1. Tombol Bawaan (Button) - Menggunakan warna biru muda */}
      <View style={styles.buttonWrapper}>
        <Button 
          title="Tombol Bawaan Pastel" 
          onPress={handlePress} 
          color="#A8DADC" // Biru muda yang lembut
        />
      </View>
      

      {/* 2. Tombol Pressable Kustom - Gaya Pastel Merah Muda */}
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.pressable, 
          { 
            backgroundColor: pressed ? '#F7A7B7' : '#FFC7D3', // Merah muda pastel
            transform: [{ scale: pressed ? 0.98 : 1 }] 
          }
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.text}>Pressable Kustom Pastel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30, 
    gap: 30, 
    backgroundColor: '#FAF9F6', // Latar belakang hampir putih/krem
  },
  
  buttonWrapper: {
    borderRadius: 8, 
    overflow: 'hidden', 
    width: '80%', 
  },

  pressable: { 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 12, 
    minWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: { 
    color: '#333333', // Warna teks gelap untuk kontras
    fontSize: 18, 
    fontWeight: '700', // Lebih tebal
  },
})

export default PastelButtons;