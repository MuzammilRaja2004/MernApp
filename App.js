import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
// import SignUp from './Client/Screens/SignUp'
// import SignIn from './Client/Screens/SignIn'
import StartingDisplay from './Client/Screens/AuthScreens/StartingDisplay'
import SignUp from './Client/Screens/AuthScreens/SignUp'
import SignIn from './Client/Screens/AuthScreens/SignIn'
import BottomNavigation from './Client/Navigation/BottomNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(){
  const Stack = createNativeStackNavigator();
return(
 <NativeBaseProvider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartingDisplay">
          <Stack.Screen
            name="StartingDisplay"
            component={StartingDisplay}
            options={{ headerShown: false }}
          />
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
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <BottomNavigation /> */}
</NativeBaseProvider>
)
}


// const styles = StyleSheet.create({})
// const Root = () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   );
// };

// export default Root;
export default App;