import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  Input,
  Icon,
  Box,
  Stack,
  Button,
  useDisclose,
  Divider,
  Flex,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {bgcolors, textcolors} from '../theme';

const SignUp = ({navigation}) => {
  // Create States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const signUp = () => {
    console.log(email);
    console.log(password);
    console.log(username);
  };
  const {width, height} = Dimensions.get('window');
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <View>
      <StatusBar backgroundColor="#EFF3F6" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.main_view}>
          <View style={[styles.inner_view, {height: height / 1}]}>
            <View>
              <Text style={styles.text_head_one}>Create New Account</Text>
              {/* <Text style={styles.text_pera_one}>Create New Account</Text> */}
            </View>

            <Box alignItems="center">
              <Stack w={width / 1.1} mt={10}>
                <Input
                  p={3}
                  my={2}
                  mb={10}
                  borderColor={textcolors.greycolor}
                  borderRadius={5}
                  placeholder="Username"
                  fontSize={18}
                  onChangeText={text => setUsername(text)}
                />
                <Input
                  p={3}
                  my={2}
                  mb={10}
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
                  w={'100%'}
                  mb={2}
                  style={styles.SignUp_button}
                  onPress={() => signUp()}>
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
            {/* onPress={() => signUp()}> */}

            {/* <Box  w={width / 1.1} mt={4}>
              <View style={styles.link_view}>
                <Text style={styles.text_link}>Already Have An Account?</Text>
                <TouchableOpacity>
                  <Text style={styles.real_link}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </Box> */}

            <Box alignItems="center">
              <Flex
                direction="row"
                h="58"
                p="4"
                alignItems="center"
                justifyContent={'space-between'}>
                <Text style={styles.text_link}>Already Have An Account?</Text>

                <Divider
                  bg={'muted.200'}
                  thickness="3"
                  mx="4"
                  orientation="horizontal"
                  w={'40%'}
                />

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.real_link}>Sign In</Text>
                </TouchableOpacity>
              </Flex>
            </Box>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  // Main View Styling
  main_view: {
    backgroundColor: '#EFF3F6',
    display: 'flex',
    flex: 1,
  },
  inner_view: {
    marginTop: 70,
    backgroundColor: '#ffffff',
    display: 'flex',
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  // Inner Main View
  inputs_view: {
    marginTop: 40,
  },
  text_head_one: {
    fontSize: 28,
  },
  text_pera_one: {
    fontSize: 17,
    marginTop: 5,
  },

  // First View Styling
  first_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  input_one: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    color: '#000',
  },

  // Secound View Styling
  secound_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  secound_input: {
    marginTop: 40,
  },
  // third View Styling
  third_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  third_input: {
    marginTop: 40,
  },

  // Button Styling
  SignUp_button: {
    alignItems: 'center',
    backgroundColor: '#00cd8f',
    padding: 10,
    marginTop: 30,
  },

  // Link Styling
  link_view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // fontSize:20
  },
  button_text: {
    fontSize: 17,
    color: '#ffffff',
  },
});
