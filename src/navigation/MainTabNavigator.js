import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import RandomNumberScreen from '../screens/RandomNumberScreen';
import AllArticlsScreen from '../screens/AllArticlsScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'Home':
            return require('../assets/img/Wheel.png');
        case 'SettingsScreen':
            return require('../assets/img/Settings.png');
        case 'FavoritesScreen':
            return require('../assets/img/Favorites.png');
        case 'RandomNumberScreen':
            return require('../assets/img/Number.png');
        case 'AllArticlsScreen':
            return require('../assets/img/Article.png');
        default:
            return require('../assets/img/Wheel.png');
    }
};

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#1F2021', shadowColor: '#1F2021' },
                headerTitleStyle: {
                    color: 'white',
                    fontFamily:'Quantico-BoldItalic',
                    fontSize: 40,
                },
                // headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#503639',
                    borderRadius: 30,
                    paddingTop: 15,
                    height: 70,
                    paddingBottom: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 10,
                },
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={getTabIcon(route.name)}
                        style={{ }}
                    />
                ),
            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="RandomNumberScreen"
                component={RandomNumberScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="AllArticlsScreen"
                component={AllArticlsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />


            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
