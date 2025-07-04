import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

const favorites = [
    {
        id: '1',
        category: 'Life Path Number',
        title: 'Life Path Number: The Power of 1',
        image: require('../assets/img/200395ac18da94601dae8977ed037bc62fc6eec2.png'),
        meaning: 'Number 1 is the essence of individuality and new beginnings. It symbolizes leadership, self-motivation, and independence. People with this number often act boldly and blaze their own trails. However, they may also struggle with impatience or isolation.',
        tip: 'Embrace your leadership instincts. Start something new or take a courageous step. You don’t need permission — the moment is yours.',
    },
    {
        id: '2',
        category: 'Repeating Numbers in Life',
        title: 'Repeating Numbers in Life: The Mystery of 11',
        image: require('../assets/img/7988475e26a96a25f5680860efd42060553697c0.png'),
        meaning: 'The number 11 is a master number in numerology, representing intuition, insight, and spiritual awareness. It often appears during moments of inner awakening or transformation.',
        tip: 'When 11 shows up repeatedly, pay attention to your inner voice. Journal, meditate, or explore the deeper meaning behind recent events.',
    },
    {
        id: '3',
        category: 'Number Energy',
        title: 'The Energy of the Number 5',
        image: require('../assets/img/cb45513097bd6258cc6a0810ffea961ecbd661c2.png'),
        meaning: 'Number 5 embodies freedom, adventure, and dynamic change. It encourages exploration, learning through experience, and breaking free from limitations.',
        tip: 'Take a leap. Try something new, book a trip, or break a routine. Let the winds of change energize your journey.',
    },
    {
        id: '4',
        category: 'Life Path Number',
        title: 'Life Path Number: The Legacy of 22',
        image: require('../assets/img/028696498864cdbbd8d459a04d60521b6b152839.png'),
        meaning: '22 is known as the Master Builder. It combines spiritual insight with practical application. People with this path are here to make a lasting impact through structure, vision, and leadership.',
        tip: 'Think big — but build steadily. Don’t rush the process. You’re here to create something that matters.',
    },
    {
        id: '5',
        category: 'Repeating Numbers in Life',
        title: 'The Echo of 3s: Repeating Numbers and Creative Flow',
        image: require('../assets/img/e71539937666de8b664effdb61b8f556c14b1818.png'),
        meaning: 'Seeing 3s often is a sign that creativity and joy want to flow through you. It’s a number of expression, communication, and light-hearted optimism.',
        tip: 'Write, sing, dance, or speak — whatever your creative outlet, lean into it now. Joy is calling you to participate.',
    },
];


const AllArticlsScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/img/d1a02461595ed307915fcff3d58ea73fd2b5a291.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>ARTICLES</Text>
                {favorites.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('ArticleDetailScreen', {article: item})}
                    >
                        <View style={styles.categoryTag}>
                            <Text style={styles.categoryText}>{item.category}</Text>
                        </View>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.cardText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
                <View style={{marginBottom: 100}}/>
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
        fontSize: 42,
        color: '#FFA500',
        fontWeight: 'bold',
        fontFamily: 'AlegreyaSC-Regular',
        marginBottom: 30,
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
});

export default AllArticlsScreen;
