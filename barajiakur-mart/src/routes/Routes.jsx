import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';
import Products from '../screens/Productes/Products';
import SignUp from '../screens/auth/Signup';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if (route.name === 'Signup') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={SignUp} />
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
}


export default MyTabs;