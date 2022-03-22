import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

const AddOrdersDetails = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1, width: width / 1,textAlign: 'center',alignItems:'center'}}>
      <View>
        <View style={[styles.icons_view, {backgroundColor:'white',width: width / 1}]}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.goBack()}>
            <Icon1 name="arrowleft" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddOrdersDetails;

const styles = StyleSheet.create({
  icons_view: {
    marginLeft: 10,
  },
});
