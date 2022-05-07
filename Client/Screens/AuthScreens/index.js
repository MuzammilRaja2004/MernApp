import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../Home';
import BottomNavigation from '../Client/Navigation/BottomNavigation'


const AuthScreens = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            // options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AuthScreens

const styles = StyleSheet.create({})