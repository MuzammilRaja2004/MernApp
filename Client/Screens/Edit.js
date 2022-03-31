import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';

const Edit = () => {
  const {width, height} = Dimensions.get('window');
  const editField = () => { 
    Alert.alert('Edit Field');
   }
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: width / 1,
      }}>
      <View>
        {/* Address */}
        <View style={{width: width / 1, paddingHorizontal: 20, marginTop: 15}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'JosefinSans-Regular',
                }}>
                Name
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => editField()}>
                <Text style={{color: '#00cd8f', fontSize: 17}}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'JosefinSans-Regular',
                }}>
                Address
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => editField()}>
                <Text style={{color: '#00cd8f', fontSize: 17}}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 22, paddingVertical: 10}}>
            <Text
              style={{
                color: 'black',
                textTransform: 'uppercase',
                textAlign: 'justify',
              }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              delectus odio ad, laboriosam in libero ex atque debitis, nisi
              minima accusantium aspernatur dolor cumque pariatur saepe a sequi.
              Iusto maiores ea quae obcaecati nisi. Commodi.
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon2 name="phone-alt" size={20} color="#00cd8f" />
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'JosefinSans-Regular',
                  marginLeft: 20,
                }}>
                03172108235
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{color: '#00cd8f', fontSize: 17}}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon3 name="mail" size={22} color="#00cd8f" />
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'JosefinSans-Regular',
                  marginLeft: 20,
                }}>
                mail@gmail.com
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{color: '#00cd8f', fontSize: 17}}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({});
