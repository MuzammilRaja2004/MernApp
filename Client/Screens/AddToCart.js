import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CounterTwo} from './Counter';

const AddToCart = () => {
  return (
    <View style={styles.main_view}>
      <View style={styles.tocart_view}>
        <View style={styles.cartimage_view}>
          <Image
            source={{
              uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
            }}
            style={{height: 100, width: 150, resizeMode: 'contain'}}
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
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  tocart_view: {
    backgroundColor: "white",
    height: 110,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    alignItems: "center",
  },
  cartimage_view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cart_head: {
    fontSize: 18,
    // marginLeft:-20
  },
  cart_text: {
    fontSize: 20,
  },
  order_btn: {
    backgroundColor:'#00cd85',
    color:'#ffffff',
    textAlign: "center",
    padding: 5,
    width: 100,
    borderRadius: 4,
    textAlign: "center",
  },
});
