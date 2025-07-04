import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const chaoticMessages = [
    { value: -390, message: "Well... that’s definitely not on the menu." },
    { value: -12.24, message: "Who let this number in?" },
    { value: 0.88, message: "Mathematics just blinked." },
    { value: 888, message: "This feels illegal in five dimensions." },
    { value: -15, message: "You broke the wheel, congrats!" },
    { value: 0.0985, message: "Not even your calculator saw that coming." },
    { value: -2.3898, message: "Are you sure this number exists?" },
    { value: 707, message: "Error 707: Logic not found." },
    { value: 26, message: "Quantum dice have spoken." },
    { value: -1.1789, message: "You just summoned numerical nonsense." },
    { value: 0, message: "GLITCH IN THE MATRIX" },
    { value: 999, message: "WHAT IS THIS FOR?" }
];

export default function RandomNumberScreen() {
    const [number, setNumber] = useState(null);
    const [message, setMessage] = useState('');

    const spin = () => {
        const randomIndex = Math.floor(Math.random() * chaoticMessages.length);
        const result = chaoticMessages[randomIndex];
        setNumber(result.value);
        setMessage(result.message);
    };

    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>CHAOTIC{"\n"}NUMBERS{"\n"}Find the pattern</Text>

                {number !== null && (
                    <>
                        <Text style={styles.number}>{number}</Text>
                        <Text style={styles.message}>{message}</Text>
                    </>
                )}

                <TouchableOpacity style={styles.button} onPress={spin}>
                    <Text style={styles.buttonText}>{number === null ? 'Spin' : 'Spin again'}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'AlegreyaSC-Regular',
        color: 'orange',
        textAlign: 'center',
        marginBottom: 40,
    },
    number: {
        fontSize: 50,
        color: 'lime',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'AlegreyaSC-Regular'
    },
    message: {
        fontSize: 18,
        color: 'violet',
        textAlign: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'gold',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
