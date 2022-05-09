import React, {useEffect, useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Searchbar from './Searchbar';
import {Box} from 'native-base';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import {fetchGet} from '../fetch';

const Product = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    getProducts();
  }, [getProducts]); // only re-run the effect if count changes  (like componentDidUpdate)

  const getProducts = async () => {
    console.log('Get Product Working');
    const data = await fetchGet('products/getproducts');
    console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaa');
    setproductData(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.mainview}>
        <ScrollView>
          <Searchbar />

          {productData.map((item, index) => {
            console.log(item.productmodel, 'productData');
            // console.log(item._id)
            return (
              <View alignItems={'center'} key={index}>
                <Box alignItems="center" w={width / 1.1} mt={4}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductView',{ id: item._id })}
                    activeOpacity={0.9}>
                    <View style={[styles.innerProducts, {width: width / 1.1}]}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image
                          style={{
                            width: 200,
                            height: 150,
                            resizeMode: 'contain',
                            marginLeft: -40,
                          }}
                          source={{
                            uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
                          }}
                        />
                        <View style={{marginTop: '20%', marginLeft: -30,}}> 
                          <Text
                            style={{
                              fontSize: 20,
                              color: '#1d1b27',
                              // marginTop: '80%',
                              
                            }}>
                            {item.productmodel}
                          </Text>
                          <Text style={{fontSize: 15, color: 'black',}}>
                            {item.productbrand}
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Text style={{fontSize: 17, color: '#1d1b27'}}>
                          {item.productprice}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Box>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerProducts: {
    backgroundColor: '#fff',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    elevation: 5,
  },
  innerProducts3: {
    marginBottom: '30%',
  },
});
