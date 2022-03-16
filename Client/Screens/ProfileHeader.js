import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileHeader = () => {
  return (
    <View>
        <View style={styles.inner_view}>
        <View style={styles.sort_icon}>
        <MaterialCommunityIcons
            name="sort-variant"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.title}>
            <Text style={{fontSize:18,fontFamily:'JosefinSans-Regular'}}>Profile</Text>
        </View>
        <View style={styles.logout}>
            <Text style={{fontSize:18}}>Logout</Text>
        </View>
        </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    inner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    
})