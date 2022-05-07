import {Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Searchbar from './Searchbar';
import {Box} from 'native-base';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';

const Product = ({navigation}) => {

  const {width, height} = Dimensions.get('window');
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        // width: width / 1,
        textAlign: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.mainview}>
        <ScrollView>
          <Searchbar />

          <View alignItems={'center'}>
            <Box alignItems="center" w={width / 1.1} mt={4}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductView')}
                activeOpacity={0.9}>
                <View style={[styles.innerProducts, {width: width / 1.1}]}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 200,
                        height: 150,
                        resizeMode: 'contain',
                        marginLeft: -20,
                      }}
                      source={{
                        uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#1d1b27',
                          marginTop: '48%',
                        }}>
                        Model
                      </Text>
                      <Text style={{fontSize: 15, color: 'black'}}>
                        Product Detail
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: 17, color: '#1d1b27'}}>200$</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Box>
          </View>
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
    // width: width / 1.1,
    backgroundColor: '#fff',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginRight: 10,
    // marginLeft: 10,
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
