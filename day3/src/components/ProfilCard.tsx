import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';

// ✨ Palet Warna "Minimalis Mewah"
const COLORS = {
  background: '#F0F0F0', // Abu-abu sangat muda
  card: '#FFFFFF',      // Putih bersih
  textPrimary: '#2C3E50', // Biru gelap keabu-abuan (Navy/Charcoal)
  textSecondary: '#7F8C8D', // Abu-abu lembut
  accent: '#B8860B',    // Soft/Muted Gold (Emas Halus)
  shadow: 'rgba(0, 0, 0, 0.12)', // Bayangan sedikit lebih kuat
};

const ProfilCard = () => {
  // 1. Inisialisasi nilai animasi
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // Untuk efek scale-up
  const avatarBlur = useRef(new Animated.Value(1)).current; // Untuk Blur saat load (simulasi)

  // 2. Definisi animasi saat komponen dimuat
  useEffect(() => {
    // Animasi muncul Card
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1000, 
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, { // Menggunakan spring untuk kesan lebih hidup
        toValue: 1, 
        friction: 5, // Kontrol "bounciness"
        tension: 40, // Kontrol kecepatan
        useNativeDriver: true,
      }),
    ]).start();

    // Simulasi Animasi Blur Avatar Hilang Setelah 500ms
    Animated.timing(avatarBlur, {
      toValue: 0, 
      duration: 1500, 
      delay: 500, // Mulai sedikit terlambat
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

  }, [fadeAnim, scaleAnim, avatarBlur]);

  // Interpolasi untuk menyesuaikan "blur" ke opacity 
  // (React Native tidak memiliki properti blur yang dapat dianimasikan secara langsung dengan Animated API,
  // jadi kita simulasikan dengan elemen overlay atau opacity yang hilang)
  const blurOverlayOpacity = avatarBlur.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <View style={styles.centerContainer}> 
        <Animated.View 
          style={[
            styles.container,
            styles.cardShadow,
            {
              opacity: fadeAnim, 
              transform: [{ scale: scaleAnim }], // Animasi Scale
            }
          ]}
        >
          <View style={styles.avatarWrapper}>
            <Image 
              source={{ uri: 'https://img.freepik.com/premium-vector/web-developer-design_24911-42711.jpg' }} 
              style={styles.avatar} 
            />
            {/* Overlay untuk efek blur yang hilang */}
            <Animated.View style={[styles.blurOverlay, { opacity: blurOverlayOpacity }]} />
          </View>

          <Text style={styles.nama}> Kahfi Zikri</Text>
          <View style={styles.separator} /> 
          <Text style={styles.bio} numberOfLines={2}>Calon Bos Muda</Text>
        </Animated.View>
      </View>
      <View style={styles.fullScreenBackground} /> 
    </>
  );
};

const styles = StyleSheet.create({
  fullScreenBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.background,
    zIndex: -1,
  },
  // Container Utama agar Card berada di tengah layar
  centerContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: { 
    width: '90%',
    maxWidth: 350,
    backgroundColor: COLORS.card,
    borderRadius: 20, // Lebih bulat
    padding: 35, // Padding lebih besar
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardShadow: {
    // Bayangan Luar - lebih dramatis
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 15, 
    // Neumorphism/Inner Shadow Halus (Optional: untuk kesan kedalaman)
    borderColor: '#e0e0e0', // Sedikit border tipis
    borderWidth: StyleSheet.hairlineWidth,
  },
  avatarWrapper: {
    marginBottom: 20,
    position: 'relative',
  },
  avatar: { 
    width: 140, // Lebih besar
    height: 140, 
    borderRadius: 70, 
    borderWidth: 4, 
    borderColor: COLORS.accent, // Aksen Emas Halus
    backgroundColor: '#eee', // Placeholder saat gambar belum load
  },
  // Simulasi Efek Loading/Blur yang hilang
  blurOverlay: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Overlay putih semi-transparan
    // Anda bisa menggunakan properti 'filter: blur()' pada platform Web, 
    // tetapi di RN, opacity/overlay adalah cara paling umum untuk simulasi.
  },
  nama: { 
    fontSize: 28, 
    fontWeight: '800', // Sangat tebal
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  separator: {
    width: 50,
    height: 3,
    backgroundColor: COLORS.accent, // Emas Halus
    borderRadius: 1.5,
    marginVertical: 12,
  },
  bio: { 
    fontSize: 15, 
    textAlign: 'center',
    color: COLORS.textSecondary,
    lineHeight: 22,
    paddingHorizontal: 15,
    fontStyle: 'italic', // Tambahkan italic untuk bio
    fontWeight: '500', // Sedikit lebih tebal dari default
  },
});

export default ProfilCard;