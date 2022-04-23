import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderDetails = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        // width: width / 1,
        height: height / 1,
        paddingTop: 10,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View alignItems={'center'}>
          <Box alignItems="center" w={width / 1.1} mt={2}>
            <View>
              <View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontFamily: 'JosefinSans-Regular',
                      marginBottom: 5,
                    }}>
                    Payment Pending
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontFamily: 'JosefinSans-Regular',
                      }}>
                      Due By : 1:32 AM on April 3, 2022
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 10}}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontFamily: 'JosefinSans-Regular',
                      marginBottom: 5,
                    }}>
                    Muzammil Raja
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontFamily: 'JosefinSans-Regular',
                      marginBottom: 5,
                    }}>
                    03172108235
                  </Text>
                  <Text
                    style={{
                      color: '#7A7A7A',
                      fontSize: 14,
                      fontFamily: 'JosefinSans-Regular',
                      marginBottom: 5,
                      textAlign: 'justify',
                      textTransform: 'capitalize',
                    }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Atque nesciunt laboriosam ullam sint laborum itaque nam
                    autem, minima repellendus.
                  </Text>
                </View>
              </View>

              <View>
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon1 name="package-variant" size={26} color="black" />
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                          fontFamily: 'JosefinSans-Regular',
                          marginBottom: 5,
                        }}>
                        Pacakage
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        fontFamily: 'JosefinSans-Regular',
                        marginBottom: 5,
                      }}>
                      Payment Pending
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{width: width / 1}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image
                      style={{
                        width: width / 2.5,
                        height: 150,
                        marginLeft: -20,
                      }}
                      source={{
                        uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
                      }}
                    />
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
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        fontFamily: 'JosefinSans-Regular',
                      }}>
                      Product Description
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
                          color: 'black',
                          fontSize: 18,
                          fontFamily: 'JosefinSans-Regular',
                        }}>
                        Rs 89,900
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          fontFamily: 'JosefinSans-Regular',
                        }}>
                        Qty:1
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontFamily: 'JosefinSans-Regular',
                      marginBottom: 5,
                    }}>
                    Payment Pending
                  </Text>
                </View>
              </View>
            </View>
          </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
