import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Platform, StyleSheet, Alert } from 'react-native';

const AdvancedTouches = () => {
  const handleLongPress = () => Alert.alert('Long Press!', 'Anda menahan tombol selama 1 detik.');
  
  // 1. Ripple Background: Menggunakan warna yang lebih menonjol (Vibrant Teal)
  const background = TouchableNativeFeedback.Ripple('#00A389', true); 

  return (
    <View style={styles.container}>
      
      {/* 1. TouchableWithoutFeedback */}
      <TouchableWithoutFeedback
        onPress={() => Alert.alert('Pressed!', 'Tidak ada perubahan visual, tapi event terpicu.')}
        onLongPress={handleLongPress}
        delayLongPress={800} // Sedikit lebih cepat dari 1000ms
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} // Area sentuh lebih besar
      >
        <View style={styles.noFeedback}>
          <Text style={styles.noFeedbackText}>Tombol Tanpa Feedback (Tekan Lama)</Text>
        </View>
      </TouchableWithoutFeedback>
      
      {/* 2. TouchableNativeFeedback (Hanya di Android) */}
      {Platform.OS === 'android' && (
        <TouchableNativeFeedback
          background={background}
          onPress={() => Alert.alert('Native Ripple!', 'Efek riak Android yang keren!')}
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
        >
          {/* View terpisah agar efek ripple tidak terbatas pada padding dan border */}
          <View style={styles.nativeBtnWrapper}>
             <Text style={styles.text}>Ripple Android Kustom</Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

// ---
// Gaya (Styles) yang Ditingkatkan
// ---

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30, 
    gap: 30, // Jarak antar tombol lebih besar
    backgroundColor: '#F7F7F7', // Latar belakang abu-abu terang
  },
  
  // 1. Style untuk TouchableWithoutFeedback (Flat Design)
  noFeedback: { 
    backgroundColor: '#CCCCCC', // Abu-abu netral
    paddingVertical: 18, 
    paddingHorizontal: 30, 
    borderRadius: 6, 
    minWidth: '85%',
    alignItems: 'center',
  },
  noFeedbackText: { 
    color: '#333333', // Teks hitam gelap
    fontSize: 16,
    fontWeight: '500',
  },

  // 2. Style untuk TouchableNativeFeedback (Kontras Tinggi)
  nativeBtnWrapper: { 
    backgroundColor: '#00BAA5', // Teal yang cerah
    paddingVertical: 18, 
    paddingHorizontal: 30, 
    borderRadius: 50, // Bentuk "Pill" (sangat melingkar)
    minWidth: '85%',
    alignItems: 'center',
    // Memberi sedikit elevasi/shadow untuk tampilan modern
    ...Platform.select({
      android: { elevation: 4 },
      ios: {} // Tidak perlu di iOS
    })
  },
  text: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '700', // Teks tebal agar menonjol
  },
});

export default AdvancedTouches;