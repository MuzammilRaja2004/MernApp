import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Box,
} from 'native-base';
import React from 'react';
import {Counter} from './Counter';
import Icon4 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Product from './Product';
import Checkout from './Checkout';
import {} from 'react-native-safe-area-context';
// import { Button} from 'react-native-elements';
import {Dimensions} from 'react-native';

const ProductView = ({navigation}) => {
//   const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={{height: height / 1, flex: 1 ,textAlign: 'center',alignItems:'center'}}>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#0be881', height: height / 1}}>
        <View style={styles.main_card_view}>

          <View style={[styles.icons_view, {width: width / 1}]}>
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.goBack()}>
              <Icon4 name="arrowleft" size={26} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.product_image}>
            <Image
              source={require('../Src/Images/Card_Images/SmartPhones.png')}
              style={[styles.image,{width: width / 1.1, height: height / 2.5}]}
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.main_text_view}>
            <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}>
              Product Brand
            </Text>
            <Text style={{fontSize: 18, color: 'white'}}>Product Model</Text>
            <View style={styles.detail}>
              <Text style={{fontSize: 18, color: 'white'}}>
                Product Details
              </Text>
            </View>
          </View>

          <View  style={{marginRight:10}}>
            <Text style={{fontSize: 18, color: 'white', marginBottom: 10}}>
              Product Price
            </Text>
              <Counter />
          </View>
        </View>

        <View style={styles.order_button}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("AddToCart")}
            style={{
              backgroundColor: 'white',
              width: width / 1.2,
              paddingVertical: 10,
              borderRadius: 25,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#0be881', fontSize: 20 }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

      <View alignItems={'center'}>
            <Box alignItems="center" w={width / 1}>
            <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#0be881', height: height / 1.1}}>
        <View style={styles.main_card_view}>

          <View style={[styles.icons_view, {width: width / 1}]}>
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.goBack()}>
              <Icon4 name="arrowleft" size={26} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.product_image}>
            <Image
              source={require('../Src/Images/Card_Images/SmartPhones.png')}
              style={[styles.image,{width: width / 1.1, height: height / 2.5}]}
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.main_text_view}>
            <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}>
              Product Brand
            </Text>
            <Text style={{fontSize: 18, color: 'white'}}>Product Model</Text>
            <View style={styles.detail}>
              <Text style={{fontSize: 18, color: 'white'}}>
                Product Details
              </Text>
            </View>
          </View>

          <View  style={{marginRight:10}}>
            <Text style={{fontSize: 18, color: 'white', marginBottom: 10}}>
              Product Price
            </Text>
              <Counter />
          </View>
        </View>

        <View style={styles.order_button}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("AddToCart")}
            style={{
              backgroundColor: 'white',
              width: width / 1.2,
              paddingVertical: 10,
              borderRadius: 25,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#0be881', fontSize: 20 }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
            </Box>
          </View>

    </SafeAreaView>
  );
};

export default ProductView;

const styles = StyleSheet.create({
  // Image Styleing
  main_card_view: {
    height: '60%',
    paddingTop: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  icons_view: {
    marginLeft: 10,
  },
  image: {
    resizeMode: 'contain',
    // height: '85%',
    // width: 400,
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  // Text Styling
  main_text_view: {
    marginTop: 10,
    marginLeft: 10,
  },

  // Button View Styling
  order_button: {
    display: 'flex',
    alignItems: 'center',
  },
});
