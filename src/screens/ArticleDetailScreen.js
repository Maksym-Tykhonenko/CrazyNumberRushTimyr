import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {toggleFavorite} from '../redux/slices/favoritesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const ArticleDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const article = route.params?.article;
    const articleId = article?.id;

    const isFavorite = useSelector(state =>
        state.favorites.articles.some(item => item.id === articleId)
    );

    const handleFavorite = () => {
        dispatch(toggleFavorite(article));
    };

    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>ARTICLES</Text>

                <View style={styles.card}>
                    <Image
                        source={article.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.categoryTag}>
                    <Text style={styles.categoryText}>Life Path Number</Text>
                </View>

                <Text style={styles.heading}>LIFE PATH NUMBER: THE POWER OF 1</Text>

                <Text style={styles.sectionTitle}>Meaning:</Text>
                <Text style={styles.body}>
                    Number 1 is the essence of individuality and new beginnings. In numerology, it symbolizes a trailblazer — someone who leads, acts independently, and forges their own path. People influenced by this number are often ambitious, assertive, and self-motivated. It’s associated with leadership, confidence, and the courage to take risks. However, the energy of 1 can also bring challenges: stubbornness, isolation, and the pressure of being “first.” As a Life Path number, it calls for bold decisions and pioneering actions. It’s a reminder that everything starts with you — your ideas, your willpower, your initiative.
                </Text>

                <Text style={styles.sectionTitle}>Wheel Tip:</Text>
                <Text style={styles.body}>
                    If 1 appears, it’s a prompt to act decisively. Start something new, claim leadership, or take a step that only you can take. The moment is yours — own it.
                </Text>

                <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
                    <Text style={styles.favoriteText}>
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Go Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        paddingTop: 60,
        paddingBottom: 100,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: '#FFA500',
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Quantico-BoldItalic',
    },
    card: {
        backgroundColor: '#000',
        borderRadius: 20,
        borderColor: 'gold',
        borderWidth: 1,
        padding: 20,
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    categoryTag: {
        backgroundColor: '#FF8CF6',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
    },
    categoryText: {
        fontWeight: '600',
        color: '#000',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2FFF00',
        fontFamily: 'AlegreyaSC-Regular',
        marginBottom: 15,
        textAlign: 'center',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    body: {
        fontSize: 24,
        color: 'white',
        textAlign: 'left',
        fontFamily: 'AlegreyaSC-Regular',
        marginBottom: 10,
    },
    favoriteButton: {
        backgroundColor: '#FFB800',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 20,
    },
    favoriteText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    backButton: {
        backgroundColor: '#00B8FF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 10,
    },
    backText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
});

export default ArticleDetailScreen;
