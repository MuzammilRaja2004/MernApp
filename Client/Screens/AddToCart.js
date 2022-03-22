import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {CounterTwo} from './Counter';
// import { Button, ButtonGroup, withTheme, } from 'react-native-elements';
import {Dimensions} from 'react-native';

const AddToCart = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        width: width / 1,
        textAlign: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.main_view}>
        <View style={[styles.tocart_view,{width: width / 1.1,}]}>
          <View style={styles.cartimage_view}>
            <Image
              source={{
                uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
              }}
              style={{
                height: 150,
                width: 200,
                resizeMode: 'contain',
                marginLeft: -20,
              }}
            />
            <View style={styles.carttext_view}>
              <Text style={styles.cart_head}>Model</Text>
              <Text style={styles.cart_text}>Price</Text>
              <TouchableOpacity style={styles.order_btn}>
                <Text style={{color: 'white', fontSize: 16}}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cartcounter_view}>
            {/* <Text>Counter</Text> */}
            <CounterTwo />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tocart_view: {
    backgroundColor: '#fff',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    elevation: 5,
  },
  cartimage_view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart_head: {
    fontSize: 18,
    // marginLeft:-20
  },
  cart_text: {
    fontSize: 20,
  },
  order_btn: {
    backgroundColor: '#00cd85',
    color: '#ffffff',
    textAlign: 'center',
    padding: 5,
    width: 100,
    borderRadius: 4,
    textAlign: 'center',
  },
});
