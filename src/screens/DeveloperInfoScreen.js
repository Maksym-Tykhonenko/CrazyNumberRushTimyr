import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

const DeveloperInfoScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>DEVELOPER INFO</Text>
                <Text style={styles.bodyText}>
                    Crazy Number Rush was created by a team of those who love combining play,
                    intuition, and a dash of chaos. With backgrounds in game design, animation,
                    and numerology, the app is set out to build an experience that’s as unpredictable
                    as it is fun. Every wheel spin, strange number, and spark of neon is carefully
                    crafted to make you smile and maybe even think a little deeper about the numbers
                    that show up in your life.{"\n\n"}
                    We believe randomness has meaning,{"\n"}
                    and luck deserves style.{"\n"}
                    Welcome to the chaos.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: 80,
        paddingBottom: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 20,
        fontFamily: 'Quantico-BoldItalic',
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 24,
        textAlign: 'left',
    },
    button: {
        marginTop: 40,
        backgroundColor: '#00CFFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default DeveloperInfoScreen;
