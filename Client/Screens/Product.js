import {Image, ScrollView, TouchableOpacity} from 'react-native';
// import React from 'react';
import Searchbar from './Searchbar';

// const Product = () => {
//   return (
//     <View>
//       <View>
//         <ScrollView>
//           <Searchbar />

//           <View>
//             <TouchableOpacity activeOpacity={0.95}>
//               <View style={styles.productsContainer}>
//                 <View
//                   style={
//                     styles.innerProducts // styles[`innerProducts${index}`],
//                   }>
//                   <View>
//                     <Image
//                       style={{
//                         width: 200,
//                         height: 150,
//                         resizeMode: 'contain',
//                       }}
//                       source={{
//                         uri: 'http://test.abc.com/appdummyurl/images/mobile.png',
//                       }}
//                     />
//                   </View>
//                   <View>
//                     <Text
//                       style={{
//                         fontSize: 20,
//                         color: '#1d1b27',
//                         marginTop: 15,
//                       }}>
//                       Model
//                     </Text>
//                     <Text style={{fontSize: 17, color: '#1d1b27'}}>Brand</Text>

//                     <View
//                       style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 17,
//                           color: '#1d1b27',
//                           marginRight: 10,
//                         }}>
//                         Price
//                       </Text>

//                       <TouchableOpacity
//                         style={{
//                           backgroundColor: '#00cd85',
//                           padding: 6,
//                           borderRadius: 3,
//                         }}>
//                         {/* <Text style={{fontSize: 15, color: '#ffffff'}}>
//                           Remove Cart
//                         </Text>
//                         ) : (<Text>Add To Cart</Text>) */}
//                         <Text style={{fontSize: 15, color: '#ffffff'}}>
//                           Add To Cart
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//             );
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default Product;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View>
      <ScrollView>
        <Searchbar />
        <View >
          <View style={styles.innerProducts}>
            <View>
              <Image
                style={{
                  width: 200,
                  height: 150,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://laptopmart.pk/wp-content/uploads/2022/02/HP-Laptop-15-dy2089ms.jpg',
                }}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#1d1b27',
                  marginTop: 15,
                }}>
                Model
              </Text>
              <Text style={{fontSize: 17, color: '#1d1b27'}}>Brand</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#1d1b27',
                    marginRight: 10,
                  }}>
                  Price
                </Text>

              </View>

            </View>
            <View>
            <TouchableOpacity
                  style={{
                    backgroundColor: '#00cd85',
                    padding: 6,
                    borderRadius: 3,
                  }}>
                  {/* <Text style={{fontSize: 15, color: '#ffffff'}}>
                          Remove Cart
                        </Text>
                        ) : (<Text>Add To Cart</Text>) */}
                  <Text style={{fontSize: 15, color: '#ffffff'}}>
                    Add To Cart
                  </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
    innerProducts: {
        backgroundColor: "#ffffff",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
      },
      innerProducts3: {
        marginBottom: "30%",
      },
});
