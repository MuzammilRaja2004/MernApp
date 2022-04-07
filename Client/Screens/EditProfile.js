import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Avatar, Input} from 'react-native-elements';

const EditProfile = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          width: width / 1,
          height: height / 1,
          paddingTop: 10,
          // alignItems: 'center',
        }}>
        <View>
          <View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Avatar
                size={100}
                padding={10}
                rounded
                source={require('../Src/Images/Profile/Avatar.png')}
                backgroundColor="#f2f2f2"
              />
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'JosefinSans-Regular',
                  textAlign: 'center',
                }}>
                Muzammil Raja
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontFamily: 'JosefinSans-Regular',
                  textAlign: 'center',
                }}>
                mail@gmail.com
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'JosefinSans-Regular',
                  paddingLeft: 13,
                }}>
                Email Address
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: width / 1,
                // backgroundColor: 'green',
                justifyContent: 'space-between',
              }}>
              <View style={{width: width / 1.3}}>
                <Input placeholder="Email Address" maxLength={25} />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#00cd8f',
                    width: width / 5,
                    paddingVertical: 7,
                    borderRadius: 25,
                    alignItems: 'center',
                    // marginTop: 20,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'JosefinSans-Regular',
                  paddingLeft: 13,
                }}>
                Username
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: width / 1,
                // backgroundColor: 'green',
                justifyContent: 'space-between',
              }}>
              <View style={{width: width / 1.3}}>
                <Input placeholder="Username" maxLength={25} />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#00cd8f',
                    width: width / 5,
                    paddingVertical: 7,
                    borderRadius: 25,
                    alignItems: 'center',
                    // marginTop: 20,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'JosefinSans-Regular',
                  paddingLeft: 13,
                }}>
                Password
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: width / 1,
                // backgroundColor: 'green',
                justifyContent: 'space-between',
              }}>
              <View style={{width: width / 1.3}}>
                <Input
                  placeholder="Password"
                  maxLength={25}
                  keyboardType={'visible-password'}
                  textContentType={'password'}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#00cd8f',
                    width: width / 5,
                    paddingVertical: 7,
                    borderRadius: 25,
                    alignItems: 'center',
                    // marginTop: 20,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,width:width/3 ,paddingLeft:13}}>
          <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'JosefinSans-Regular',
                }}>
                Joined
              </Text>
          <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'JosefinSans-Regular',
                }}>
                {new Date().toLocaleDateString()}
              </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
