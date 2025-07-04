import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native';
import { clearHistory } from '../redux/slices/favoritesSlice';
import { useDispatch } from 'react-redux';

const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const confirmClearHistory = () => {
        Alert.alert(
            'Clear History',
            'Are you sure you want to clear your history?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes, Clear',
                    onPress: () => dispatch(clearHistory()),
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.title}>SETTINGS</Text>

            <TouchableOpacity style={styles.card} onPress={confirmClearHistory}>
                <Text style={styles.label}>History</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    Linking.openURL('https://www.termsfeed.com/live/3c6af3f0-3967-4507-9dcb-4ac9c755ad5f');
                }}
            >
                <Text style={styles.label}>Privacy & Security</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeveloperInfoScreen')}>
                <Text style={styles.label}>Developer Info</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    title: {
        fontSize: 32,
        color: '#FFA500',
        fontWeight: 'bold',
        fontFamily: 'AlegreyaSC-Regular',
        marginBottom: 30,
    },
    card: {
        width: '85%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    arrow: {
        color: '#fff',
        fontSize: 24,
    },
});

export default SettingsScreen;
