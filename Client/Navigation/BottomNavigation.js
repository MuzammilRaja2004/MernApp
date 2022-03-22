import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Product from '../Screens/Product';
import AddToCart from '../Screens/AddToCart';
import Profile from '../Screens/Profile';
import ProductView from '../Screens/ProductView';
import AddOrdersDetails from '../Screens/AddOrdersDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

const viewOrderStack = createNativeStackNavigator();
const ViewOrders = () => {
  return (
    <viewOrderStack.Navigator>
      <viewOrderStack.Screen name="Product" component={Product}
        options={{
          headerShown: false,
        }} />
      <viewOrderStack.Screen name="AddOrdersDetails" component={AddOrdersDetails} 
      options={{
          headerShown: false,
        }} 
      />
    </viewOrderStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();
const Settings = () => {
  return (
    <SettingsStack.Navigator initialRouteName="ViewOrders">
      <SettingsStack.Screen
        name="ViewOrders"
        component={ViewOrders}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="ProductView"
        component={ProductView}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          } else if (route.name === 'Product') {
            iconName = focused ? 'grid' : 'grid-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          } else if (route.name === 'AddToCart') {
            iconName = focused ? 'basket' : 'basket-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person-circle-sharp'
              : 'person-circle-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00cd8f',
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Product"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="AddToCart"
        component={AddToCart}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Add To Cart',
          headerTitleStyle: {
            fontFamily: 'JosefinSans-Regular',
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'JosefinSans-Regular',
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
