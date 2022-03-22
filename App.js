import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
// import Product from './Client/Screens/Product'
import BottomNavigation from './Client/Navigation/BottomNavigation'
import { NavigationContainer } from '@react-navigation/native';
function App(){
return(
  <BottomNavigation/>
)
}


const styles = StyleSheet.create({})
const Root = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Root;