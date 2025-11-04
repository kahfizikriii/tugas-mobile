import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Modal, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';

// Palet Warna Elegan (Dark & Light Mode Vibe)
const COLORS = {
  background: '#2C3E50', // Dark Charcoal/Navy
  card: '#FFFFFF',      // Putih bersih
  textLight: '#ECF0F1', // Teks terang untuk background gelap
  textDark: '#34495E',  // Teks gelap untuk card/input
  accentPrimary: '#3498DB', // Blue yang canggih
  accentSecondary: '#2ECC71', // Green untuk sukses
  inputBorder: '#BDC3C7', // Abu-abu muda
  shadow: 'rgba(0, 0, 0, 0.2)',
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      // Logika simulasi login
      setModalVisible(true);
      // Reset form setelah sukses (opsional)
      // setEmail('');
      // setPassword('');
    } else {
      Alert.alert('Gagal Login', 'Email dan Password harus diisi.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Selamat Datang</Text>

        {/* Input Email */}
        <TextInput
          style={styles.input}
          placeholder="Alamat Email"
          placeholderTextColor={COLORS.inputBorder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Input Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.inputBorder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          maxLength={20}
        />

        {/* Switch Remember Me */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Ingat Saya</Text>
          <Switch 
            value={isRemember} 
            onValueChange={setIsRemember} 
            trackColor={{ true: COLORS.accentPrimary, false: COLORS.inputBorder }}
            thumbColor={COLORS.card}
          />
        </View>

        {/* Tombol Login Kustom */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        
        {/* Link Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
        </TouchableOpacity>

      </View>

      {/* Modal Berhasil */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>✅ Berhasil!</Text>
            <Text style={styles.modalMessage}>Anda berhasil login ke sistem.</Text>
            <TouchableOpacity 
              style={[styles.loginButton, styles.modalButton]} 
              onPress={() => setModalVisible(false)}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: { 
    flex: 1, 
    backgroundColor: COLORS.background, // Background gelap
    justifyContent: 'center', 
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: COLORS.card,
    borderRadius: 15,
    padding: 30,
    // Bayangan Card Elegan
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: { 
    height: 55,
    backgroundColor: '#F7F7F7', // Latar belakang input sedikit abu-abu
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
    borderBottomWidth: 2, // Border bawah sebagai aksen
    borderBottomColor: COLORS.accentPrimary,
    color: COLORS.textDark,
  },
  switchContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 30,
  },
  switchText: {
    fontSize: 16,
    color: COLORS.textDark,
  },
  loginButton: {
    backgroundColor: COLORS.accentPrimary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.card,
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: COLORS.accentPrimary,
    fontSize: 14,
  },
  // --- Gaya Modal ---
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.6)', // Overlay lebih gelap
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContent: { 
    backgroundColor: COLORS.card, 
    padding: 30, 
    borderRadius: 15, 
    width: '85%',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.accentSecondary, // Warna hijau untuk sukses
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: COLORS.textDark,
    marginBottom: 25,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: COLORS.accentSecondary, // Tombol modal warna hijau
    width: '100%',
  },
});

export default LoginForm;