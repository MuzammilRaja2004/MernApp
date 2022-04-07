import React from 'react';
import {View, Text, Button, Image, Box} from 'native-base';
import {Dimensions} from 'react-native';
import {bgcolors, textcolors} from '../theme';

const StartingDisplay = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent={'center'}
      bg={bgcolors.whitecolor}>
      <View>
        <Image
          source={{
            uri: 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg',
          }}
          width={400}
          height={200}
          resizeMode="contain"
          alt="img"
        />
      </View>
      <View w={width / 1.4}>
        <Text fontSize={30} fontWeight="bold" textAlign="center">
          Start by creating an account.
        </Text>
      </View>
      <View>
        <Text fontSize={22} fontWeight="light" textAlign="center">
          Make Things Easy
        </Text>
      </View>
      <View mt={20}>
        <Box alignItems="center" width={width / 1.3}>
          <Button
          onPress={() => navigation.navigate("SignUp")}
            w={'100%'}
            mb={2}
            bg={bgcolors.colorcyanlight}>
            <Text
              fontSize={20}
              p={2}
              textAlign="center"
              color={textcolors.whitecolor}>
              Create an Account
            </Text>
          </Button>
        </Box>
        <Box alignItems="center" w={width / 1.3}>
          <Button
          onPress={() => navigation.navigate("SignIn")}
            w={'100%'}
            mt={2}
            bg={bgcolors.colorlightblue}
            variant={'solid'}
            >
            <Text
              fontSize={20}
              p={2}
              color={textcolors.cyancolor}
              textAlign="center">
              Sign in
            </Text>
          </Button>
        </Box>
      </View>
    </View>
  );
};

export default StartingDisplay;
