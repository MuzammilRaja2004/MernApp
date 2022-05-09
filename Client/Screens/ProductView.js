import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import Icon4 from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import Product from './Product';
// import Checkout from './Checkout';
// import {} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import {fetchGet} from '../fetch';
import {useParams} from 'react-router-dom';

const ProductView = ({navigation, route}) => {
  const [productDataView, setproductDataView] = useState({});
  const {width, height} = Dimensions.get('window');
  const {id} = route.params;
  console.log(id, 'Params Id');

  useEffect(() => {
    getProductsData();
  }, [getProductsData]); // only re-run the effect if count changes  (like componentDidUpdate)

  const getProductsData = async () => {
    console.log('Get Product Data Working');
    const data = await fetchGet('products/getproducts/' + id);
    console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaa');
    setproductDataView(data);
    console.log(data, 'After Set Data');
  };

  return (
    <SafeAreaView
      style={{
        height: height / 1,
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
      }}>
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
                    style={[
                      styles.image,
                      {width: width / 1.1, height: height / 2.5},
                    ]}
                  />
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View style={styles.main_text_view}>
                  <Text
                    style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}>
                    {productDataView.productbrand}
                  </Text>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {productDataView.productmodel}
                  </Text>
  
                </View>

                <View style={{marginRight: 10}}>
                  <Text
                    style={{fontSize: 18, color: 'white', marginBottom: 10}}>
                    {productDataView.productprice}
                  </Text>
                  <Counter />
                </View>
              </View>
              <View style={styles.detail}>
                    <Text style={{fontSize: 18, color: 'white'}}>
                      {productDataView.productdescription}
                    </Text>
                  </View>

              <View style={styles.order_button}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('AddToCart')}
                  style={{
                    backgroundColor: 'white',
                    width: width / 1.2,
                    paddingVertical: 10,
                    borderRadius: 25,
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Text style={{color: '#0be881', fontSize: 20}}>
                    Add To Cart
                  </Text>
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
    marginLeft: 10,
  },

  // Button View Styling
  order_button: {
    display: 'flex',
    alignItems: 'center',
  },
  detail: {
    // marginTop: 10,
    marginLeft: 10,
    // marginBottom: 10,
    width: 300,
  },
});
