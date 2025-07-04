import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = ({ navigation }) => {
    const favorites = useSelector(state => state.favorites.articles); // получаем объекты статей

    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>FAVORITES</Text>

                {favorites.length > 0 ? (
                    favorites.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate('ArticleDetailScreen', { article: item })}
                        >
                            <View style={styles.categoryTag}>
                                <Text style={styles.categoryText}>{item.category}</Text>
                            </View>
                            <Image source={item.image} style={styles.image} resizeMode="contain" />
                            <Text style={styles.cardText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.emptyText}>You have no saved articles.</Text>
                )}

                <View style={{ marginBottom: 100 }} />
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 80,
        alignItems: 'center',
        paddingBottom: 40,
    },
    title: {
        fontSize: 32,
        color: '#FFA500',
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: 'AlegreyaSC-Regular',
    },
    card: {
        width: '90%',
        backgroundColor: '#090920',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gold',
        padding: 15,
        marginBottom: 20,
        alignSelf: 'center',
    },
    categoryTag: {
        backgroundColor: '#FF8CF6',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 10,
    },
    categoryText: {
        color: '#000',
        fontWeight: '600',
    },
    image: {
        width: '100%',
        height: 120,
        marginVertical: 10,
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 20,
    },
});

export default FavoritesScreen;
