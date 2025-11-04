import React, { useState } from 'react';
import { View, Text, ImageBackground, Switch, StatusBar, StyleSheet } from 'react-native';

// Palet Warna Elegan
const COLORS = {
  light: {
    background: '#F0F0F0',
    text: '#333333',
    switchTrack: '#BDC3C7',
    switchThumb: '#FFFFFF',
    // Overlay Putih Transparan yang lebih kuat untuk menyamarkan gambar latar
    overlay: 'rgba(255, 255, 255, 0.85)', 
    accent: '#3498DB', 
  },
  dark: {
    background: '#2C3E50',
    text: '#ECF0F1',
    switchTrack: '#34495E',
    switchThumb: '#ECF0F1',
    // Overlay Hitam Transparan yang lebih kuat
    overlay: 'rgba(0, 0, 0, 0.75)', 
    accent: '#3498DB', 
  },
};

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Pilih set warna berdasarkan state darkMode
  const currentColors = darkMode ? COLORS.dark : COLORS.light;
  const statusBarContent = darkMode ? 'light-content' : 'dark-content';
  
  // Gunakan URL gambar high-resolution yang lebih menarik
  const imageUrl = 'https://images.unsplash.com/photo-1542831371-29b0f74f9d13?auto=format&fit=crop&w=1400&q=80';

  return (
    <>
      <StatusBar 
        barStyle={statusBarContent} 
        backgroundColor={currentColors.background} 
        animated={true} // Animasi transisi warna StatusBar
      />
      
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.background}
        // Opacity gambar latar belakang dibuat rendah agar overlay bekerja efektif
        imageStyle={{ opacity: 0.25 }} 
      >
        {/* Overlay menyesuaikan dengan Dark/Light Mode */}
        <View style={[styles.overlay, { backgroundColor: currentColors.overlay }]}>
          
          <Text style={[styles.title, { color: currentColors.text }]}>
            👋 Welcome
          </Text>
          
          <Text style={[styles.subtitle, { color: currentColors.text }]}>
            let the beauty of what you love be what you do.
          </Text>

          <View style={styles.separator} />

          {/* Switch Dark Mode dengan Gaya Terpersonalisasi */}
          <View style={styles.switchContainer}>
            <Text style={[styles.switchText, { color: currentColors.text }]}>
              Mode Gelap
            </Text>
            <Switch 
              value={darkMode} 
              onValueChange={setDarkMode} 
              // Kontrol warna switch
              trackColor={{ false: currentColors.switchTrack, true: currentColors.accent }}
              thumbColor={currentColors.switchThumb}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    resizeMode: 'cover',
    height: 350, 
    width: '100%',
  },
  overlay: { 
    flex: 1, 
    padding: 30,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: { 
    fontSize: 36, 
    fontWeight: '800', 
    textAlign: 'center',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  separator: {
    width: 60,
    height: 3,
    backgroundColor: COLORS.light.accent, 
    borderRadius: 1.5,
    marginVertical: 15,
  },
  switchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    // Bayangan halus pada container switch
    shadowColor: COLORS.dark.background,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '600',
  },
});

export default HeroSection;