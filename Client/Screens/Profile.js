import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon6 from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={{backgroundColor: 'white', width: width / 1, flex: 1}}>
      <View>
        <View
          style={{
            width: width / 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: width / 1.4,
              // backgroundColor: 'green',
            }}>
            <View>
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
                }}>
                Muzammil Raja
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontFamily: 'JosefinSans-Regular',
                }}>
                mail@gmail.com
              </Text>
            </View>
          </View>

          <View>
            <Icon1 name="edit" size={35} color="#00cd8f" />
          </View>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontFamily: 'JosefinSans-Regular',
              }}>
              Dashboard
            </Text>
          </View>

          <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', marginTop:20  }}>
            <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between' , width : width /1.4  }}>
              <View style={{backgroundColor:'#ffd237', padding:20, borderRadius:50}}>
                <Icon6 name="timer-sand-complete" size={35} color="#fff"/>
              </View>

              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    fontFamily: 'JosefinSans-Regular',
                  }}>
                  Total Orders
                </Text>
              </View>
              <View></View>
            </View>

            <View>
            <Icon3 name="arrow-forward-ios" size={35} color="#00cd8f" />
            </View>
          </View>

          <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', marginTop:20  }}>
            <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between' , width : width /1.4  }}>
              <View style={{backgroundColor:'#00cd8f', padding:20, borderRadius:50}}>
                <Icon4 name="box" size={35} color="#fff"/>
              </View>

              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    fontFamily: 'JosefinSans-Regular',
                  }}>
                  Approve Orders
                </Text>
              </View>
              <View></View>
            </View>

            <View>
            <Icon3 name="arrow-forward-ios" size={35} color="#00cd8f" />
            </View>
          </View>
          
          <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', marginTop:20  }}>
            <View style={{ display:'flex',flexDirection:'row', alignItems:'center' ,justifyContent:'space-between' , width : width /1.4  }}>
              <View style={{backgroundColor:'#F70E0E', padding:15, borderRadius:50}}>
                <Icon5 name="shipping-fast" size={35} color="#fff"/>
              </View>

              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    fontFamily: 'JosefinSans-Regular',
                  }}>
                  Pending Orders
                </Text>
              </View>
              <View></View>
            </View>

            <View>
            <Icon3 name="arrow-forward-ios" size={35} color="#00cd8f" />
            </View>
          </View>

        </View>

        <View style={{marginTop: 20, paddingHorizontal: 20}}> 
        <TouchableOpacity 
            style={{
              backgroundColor: '#00cd8f',
              width: width / 1.1,
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 20,
            }}
            >
              <Text style={{fontSize: 25,fontFamily: 'JosefinSans-Regular',color: 'white',}}>Logout</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
