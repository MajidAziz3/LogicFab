import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MainScreen from '../Screes/MainDesign/MainDesign';

// (...)
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
  function VideosScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vedios!</Text>
      </View>
    );
  }
  function ShoppingScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Shopping!</Text>
      </View>
    );
  }
  function UserScreen() {
    return (
      <MainScreen/>
    );
  }
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }
            else if (route.name === 'Vedios') {
              iconName = focused ? 'videocam' : 'videocam';
            }else if (route.name === 'Vedios') {
              iconName = focused ? 'videocam' : 'videocam';
            }
            else if (route.name === 'Shop') {
              iconName = focused ? 'shopping-bag' : 'shopping-bag';
              return <Entypo name={iconName} size={size} color={color} />;
            }
            else if (route.name === 'User') {
              iconName = focused ? 'user' : 'user';
              return <Entypo name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Vedios" component={VideosScreen} />
        <Tab.Screen name="Shop" component={ShoppingScreen} />
        <Tab.Screen name="User" component={UserScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}