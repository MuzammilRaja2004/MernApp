import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';

const PaymentMethod = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: width / 1,
        height: height / 1,
        // paddingHorizontal: 0,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <View style={{width: width / 1}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Icon2 name="dollar-bill" size={50} color="#00cd8f" />
              </View>

              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'JosefinSans-Regular',
                  }}>
                  Product Model
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width / 1.7,
                  }}>
                  <Text
                    style={{
                      // color: 'black',
                      fontSize: 13,
                      fontFamily: 'JosefinSans-Regular',
                    }}>
                    Cash On Delivery
                  </Text>
                </View>
              </View>

              <View>
                <Icon3 name="arrow-forward-ios" size={35} color="#00cd8f" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          height: height / 0.72,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'JosefinSans-Regular',
          }}>
          Total Amount
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'JosefinSans-Regular',
          }}>
          Rs. 89000
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
