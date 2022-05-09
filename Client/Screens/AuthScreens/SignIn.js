import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {
  Input,
  Icon,
  Box,
  Flex,
  Divider,
  Button,
  useDisclose,
  Stack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {bgcolors, textcolors} from '../theme';
import {fetchFun} from '../../fetch';
const SignIn = ({navigation}) => {
  // Create States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');
  const {isOpen, onOpen, onClose} = useDisclose();

  
    const signIn = async () => {
      console.log('button wroking');
      const data = await fetchFun('auth/login', {
        email,
        password,
      });
      console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaa');
  
      if (data.error) {
        console.log(data.error, 'errorrrrrrrr');
      } else {
        navigation.navigate('BottomNavigation');
      }
    };
  return (
    <View>
      <StatusBar backgroundColor="#EFF3F6" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.main_view}>
          <View style={[styles.inner_view, {height: height / 1}]}>
            <View>
              <Text style={styles.text_head_one}>Sign In</Text>
              <Text style={styles.text_pera_one}>Existing Account</Text>
            </View>

            <Box alignItems="center">
              <Stack w={width / 1.1} mt={10}>
                <Input
                  p={3}
                  my={2}
                  borderColor={textcolors.greycolor}
                  borderRadius={5}
                  placeholder="Email Address"
                  fontSize={18}
                  onChangeText={text => setEmail(text)}
                />
                <Input
                  p={3}
                  my={2}
                  borderColor={textcolors.greycolor}
                  borderRadius={5}
                  placeholder="Strong Password"
                  fontSize={18}
                  onChangeText={text => setPassword(text)}
                  InputRightElement={
                    <Icon
                      as={<MaterialIcons name="visibility-off" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                />
              </Stack>
            </Box>

            <View alignItems={'center'}>
              <Box alignItems="center" w={width / 1.1} mt={4}>
                <Button
                  // onPress={onOpen}
                  onPress={() => signIn()}
                  w={'100%'}
                  mb={2}
                  style={styles.SignIn_button}>
                  <Text
                    fontSize={20}
                    p={2}
                    textAlign="center"
                    // color={'#ffffff'}
                    style={styles.button_text}>
                    Sign In
                  </Text>
                </Button>
              </Box>
            </View>

            {/* <View style={styles.link_view}>
                <Text style={styles.text_link}>Create A New Account?</Text>
                <TouchableOpacity>
                  <Text style={styles.real_link}>Sign Up</Text>
                </TouchableOpacity>
              </View> */}

            <Box alignItems="center">
              <Flex
                direction="row"
                h="58"
                p="4"
                alignItems="center"
                justifyContent={'center'}>
                <Divider
                  bg={'muted.200'}
                  thickness="3"
                  mx="4"
                  orientation="horizontal"
                  w={'40%'}
                />
                <Text fontSize={20} color={'muted.400'}>
                  Or
                </Text>
                <Divider
                  bg={'muted.200'}
                  thickness="3"
                  mx="4"
                  orientation="horizontal"
                  w={'40%'}
                />
              </Flex>
            </Box>
            <View alignItems={'center'}>
              <Box alignItems="center" w={width / 1.1} mt={4}>
                <Button
                  onPress={onOpen}
                  w={'100%'}
                  mb={2}
                  style={styles.SignIn1_button}>
                  <Text
                    fontSize={20}
                    p={2}
                    textAlign="center"
                    // color={'#ffffff'}
                    style={styles.button_text}
                    onPress={() => navigation.navigate('SignUp')}>
                    Create New Account
                  </Text>
                </Button>
              </Box>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  // Main View Styling
  main_view: {
    backgroundColor: '#EFF3F6',
    // backgroundColor: "#00cd8f",
    display: 'flex',
    flex: 1,
  },
  inner_view: {
    marginTop: 70,
    backgroundColor: '#ffffff',
    display: 'flex',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  // Inner Main View

  text_head_one: {
    fontSize: 28,
    color: '#1d1b27',
  },
  text_pera_one: {
    fontSize: 17,
    marginTop: 5,
    color: '#1d1b27',
  },

  // Button Styling
  SignIn_button: {
    alignItems: 'center',
    backgroundColor: '#00cd8f',
    padding: 10,
    marginTop: 30,
  },
  SignIn1_button: {
    alignItems: 'center',
    backgroundColor: '#00cd8f',
    padding: 10,
  },

  button_text: {
    fontSize: 17,
    color: '#ffffff',
  },
});
