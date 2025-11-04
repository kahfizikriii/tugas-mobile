import React, { useState, useRef } from 'react';
import { 
  FlatList, 
  Text, 
  View, 
  StyleSheet, 
  Alert, 
  RefreshControl, // ✅ KOMPONEN REFRESHCONTROL SUDAH DI-IMPORT DI SINI
  SafeAreaView, 
  StatusBar 
} from 'react-native';

// Palet Warna Elegan
const COLORS = {
    background: '#F9F9F9', 
    card: '#FFFFFF',      
    textPrimary: '#2C3E50', 
    textSecondary: '#7F8C8D', 
    accent: '#3498DB', 
    shadow: 'rgba(0, 0, 0, 0.08)',
};

const DATA = Array.from({ length: 100 }, (_, i) => ({ 
    id: i.toString(), 
    title: `Item List ${i + 1}`,
    subtitle: `Deskripsi singkat untuk item nomor ${i + 1}.`
}));

const FlatListExample = () => {
    const [refreshing, setRefreshing] = useState(false);
    
    const viewabilityConfig = { itemVisiblePercentThreshold: 70 };
    
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) { 
             console.log(`Item terlihat: ${viewableItems[0].item.title}`);
        }
    }).current;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            Alert.alert('Refresh Selesai', 'Data daftar telah dimuat ulang.');
        }, 1500);
    };

    const getItemLayout = (data, index) => ({ length: 80, offset: 80 * index, index });

    const renderItem = ({ item }) => (
        <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh} 
                        tintColor={COLORS.accent} 
                    />
                }
                
                getItemLayout={getItemLayout}
                initialNumToRender={12}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged}
                
                ListHeaderComponent={<Text style={styles.header}>Daftar Item</Text>}
                ListFooterComponent={<Text style={styles.footer}>Akhir Daftar | {DATA.length} Item</Text>}
                
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    listContent: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    header: { 
        fontSize: 24, 
        fontWeight: '700', 
        color: COLORS.textPrimary,
        paddingVertical: 20,
        marginBottom: 10,
    },
    itemCard: { 
        backgroundColor: COLORS.card,
        padding: 18,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: COLORS.accent,
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    itemSubtitle: {
        fontSize: 13,
        color: COLORS.textSecondary,
    },
    footer: { 
        padding: 20, 
        textAlign: 'center', 
        color: COLORS.textSecondary,
        fontSize: 14,
        marginTop: 10,
    },
});

export default FlatListExample;