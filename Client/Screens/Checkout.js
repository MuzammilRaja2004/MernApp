import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';
import {Dimensions} from 'react-native';

const Checkout = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: width / 1,
        // textAlign: 'center',
        // alignItems: 'center',
      }}>
      {/* Header */}
      <View style={{marginTop: 10}}>
        <View
          style={[
            styles.icons_view,
            {
              backgroundColor: 'white',
              width: width / 1,
              display: 'flex',
              flexDirection: 'row',
            },
          ]}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.goBack()}>
            <Icon1 name="arrowleft" size={26} color="black" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontFamily: 'JosefinSans',
                marginLeft: 20,
              }}>
              Checkout
            </Text>
          </View>
        </View>
      </View>

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
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
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
            delectus odio ad, laboriosam in libero ex atque debitis, nisi minima
            accusantium aspernatur dolor cumque pariatur saepe a sequi. Iusto
            maiores ea quae obcaecati nisi. Commodi.
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
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
              <Text style={{color: '#00cd8f', fontSize: 17}}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Delivery Option */}
      <View style={{marginTop: 20, width: width / 1, paddingHorizontal: 20}}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'JosefinSans-Regular',
            }}>
            Delivery
          </Text>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'JosefinSans-Regular',
              }}>
              Shipping Fee
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'JosefinSans-Regular',
              }}>
              Rs 200
            </Text>
          </View>
        </View>


        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'JosefinSans-Regular',
              }}>
              Total
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'JosefinSans-Regular',
                 color: '#00cd8f',
                 fontWeight: 'bold',
              }}>
              Rs 90,100
            </Text>
            </View>
            <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate("PaymentMethod")}
            style={{
              backgroundColor: '#00cd8f',
              width: width / 3.3,
              paddingVertical: 10,
              borderRadius: 25,
              alignItems: 'center',
              marginTop: 20,
            }}
            >
              <Text style={{fontSize: 18 ,color: 'white',}}>BUY NOW</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  icons_view: {
    marginLeft: 10,
  },
});
