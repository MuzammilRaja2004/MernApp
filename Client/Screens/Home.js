import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Searchbar from './Searchbar';
import {HomeDataCates, CardData} from './HomeData';

const Home = () => {
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
      <StatusBar backgroundColor={'#00cd8f'} />
      <View>
        <ScrollView showsVerticalScrollIndicator={true}>
          {/* Get Search bar From Screens Folder In SearchBar.js */}
          <Searchbar />

          {/* Create Categorise Section */}
          <View style={{marginTop: 30, flexDirection: 'row'}}>
            <View>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#00cd8f'}}>
                Categorise
              </Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                {HomeDataCates.map((item, index) => {
                  return (
                    <View key={index}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <TouchableOpacity>
                          <View>
                            <Image
                              source={item.image}
                              // style={{
                              //   height: 50,
                              //   width: 50,
                              //   // marginRight: 10,
                              //   // marginLeft: 10,
                              //   // marginBottom: 10,
                              // }}
                              style={[
                                styles.icon_images,
                                styles[`icon_images${index}`],
                              ]}
                            />
                            <Text
                              style={[
                                styles.icon_text,
                                styles[`icon_text${index}`],
                              ]}>
                              {item.text}
                            </Text>
                          </View>

                          {/* <View >
                      </View> */}
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          {/* High Rated Products */}
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              width: width / 1.1,
              textAlign: 'center',
            }}>
            <View>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#00cd8f'}}>
                High Rate Products
              </Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 10,
                    justifyContent: 'space-between',
                  }}>
                  {CardData.map((items, index) => {
                    return (
                      <View
                        key={index}
                        style={[styles.helloo, styles[`hello${index}`]]}>
                        <View>
                          <Image
                            source={items.image}
                            // w={width / 1.5}
                            style={{
                              width: width / 1.1,
                              height: 250,
                              resizeMode: 'contain',
                            }}
                          />

                          <View>
                            <Text
                              style={{
                                color: 'white',
                                fontSize: 30,
                                textTransform: 'capitalize',
                                marginLeft: 20,
                                marginBottom: 10,
                              }}>
                              {items.text}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  helloo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // marginRight: 10,
    marginLeft: 3,
    marginRight: 10,
    marginBottom: 10,
    elevation: 5,
  },
  images: {
    backgroundColor: '#00b761',
  },
  icon_images: {
    height: 50,
    width: 50,
    marginBottom: 10,
    display: 'flex',
    // justifyContent : 'center',
  },
  icon_images1: {
    marginLeft: 35,
  },
  icon_text: {
    // marginLeft: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  icon_text1: {
    marginLeft: 20,
  },

  icon_images2: {
    marginLeft: 35,
  },
  icon_text2: {
    marginLeft: 20,
  },
  icon_images3: {
    marginLeft: 35,
  },
  icon_text3: {
    marginLeft: 25,
  },
});
