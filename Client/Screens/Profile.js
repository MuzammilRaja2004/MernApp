import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

const Profile = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{backgroundColor: '#00cd8f', width: width / 1, flex: 1}}>
      <View>
        <View
          style={[
            styles.head,
            {
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
              paddingVertical: 10,
              width: width / 1,
              marginTop: 15,
            },
          ]}>
          <View>
            {/* <Icon1 name="user-circle" size={30} color="#00cd8f" /> */}
            <Avatar
              size={64}
              rounded
              source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
            />
          </View>
          <View>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: 'JosefinSans-Regular',
                  fontSize: 20,
                  marginLeft: 10,
                },
              ]}>
              Username
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            width: width / 1,
            marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Icon2 name="settings-sharp" size={30} color="#00cd8f" />
          </View>
          <View>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: 'JosefinSans-Regular',
                  fontSize: 22,
                  marginLeft: 10,
                },
              ]}>
              Setting
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 10,
              width: width / 1,
              marginTop: 15,
            }}>
            <View>
              <Icon3
                name="account-supervisor-circle"
                size={30}
                color="#00cd8f"
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'JosefinSans-Regular',
                  fontSize: 22,
                  marginLeft: 10,
                }}>
                Account Settings
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 10,
              width: width / 1,
              marginTop: 15,
            }}>
            <View>
              <Icon4 name="security" size={30} color="#00cd8f" />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'JosefinSans-Regular',
                  fontSize: 22,
                  marginLeft: 10,
                }}>
                Privacy & Security
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
