import { StyleSheet, Text, View,  TextInput,
    TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);
  return (
    <View style={styles.counter}>
    <View style={styles.inner_view}>
      <View>
        <TouchableOpacity onPress={() => setCount(count - 1)} activeOpacity={0.9}>
          <Text  style={[
                    styles.text,
                    styles.counttext,
                  ]}> - </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[
                    styles.text,
                    styles.counter,
                  ]}>
     
          {count}
          {/* 1 */}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => setCount(count + 1)} activeOpacity={0.9}>
          <Text  style={[
                    styles.text,
                    styles.counttext,
                  ]}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}
const CounterTwo = () => {
  const [countTwo, setCountTwo] = useState(1);
    return (
      <View style={styles.counter2}>
        <View style={styles.inner_view2}>
          <View>
            <TouchableOpacity onPress={() => setCountTwo(countTwo - 1)} activeOpacity={0.9}>
              <Text  style={[
                        styles.text2,
                        styles.counttext2,
                      ]}> - </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[
                        styles.text2,
                        styles.counter2,
                      ]}>
         
              {countTwo}
              {/* 1 */}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setCountTwo(countTwo + 1)} activeOpacity={0.9}>
              <Text  style={[
                        styles.text2,
                        styles.counttext2,
                      ]}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

export {Counter,CounterTwo};

const styles = StyleSheet.create({
    inner_view: {
        display: "flex",
        flexDirection: "row",
        // marginTop:20,
        marginBottom:10,
      },
      text: {
        fontSize: 18,
        color:'black'
     
      },
      counttext:{
        backgroundColor:'#FBEFE7',
        borderRadius:5,
      },
      counter:{
        marginLeft:10,
        marginRight:10,
        color:'black'
      },
      inner_view2: {
        display: "flex",
        flexDirection: 'column',
        // marginTop:20,
        marginBottom:10,
      },
      text2: {
        fontSize: 20,
        color:'white'
        
      },
      counttext2:{
        backgroundColor:'#00cd85',
        borderRadius:50,
        textAlign:'center',
        color:'white',
        padding:0,
      },
      counter2:{
        marginLeft:10,
        marginRight:10,
        color:'black'
      },
})