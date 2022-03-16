import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    <View >
      <ProfileHeader />
      <View style={styles.profile_view}>
        
        <View style={styles.basic_info}>
        <View style={styles.image_view}>
          <Text>Image</Text>
        </View>

        <View style={styles.userOffical}>
          <Text>Username</Text>
          <Text>Email</Text>
        </View>
        </View>

        <View style={styles.order_view}>
          <View style={styles.order_head}>
            <Text>My Orders</Text>
          </View>
          <View style={styles.order_detail}>
            <View style={styles.pay}>
              <Icon1 name="payments" size={30} color="black" />
              <Text>To Pay</Text>
            </View>

            <View style={styles.ship}>
              <Icon2 name="box" size={30} color="black" />
              <Text>To Ship</Text>
            </View>

            <View style={styles.receive}>
              <Icon3 name="shipping-fast" size={30} color="black" />
              <Text style={styles.font}>To Receive</Text>
            </View>
          </View>
        </View>

        <View style={styles.account_info}>
          <View>
            <Text>Account Information</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_view: {
    backgroundColor:'white',
    display:'flex',
    height:'100%',
  },
  basic_info:{
    display:'flex',
    flexDirection:'row',
  },
  order_detail:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    textAlign:'center',
    alignItems:'center',
  },
  receive:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  ship:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  pay:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  font:{
    fontFamily:'GloriaHallelujah-Regular',
  },

});
