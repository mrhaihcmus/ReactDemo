import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

export default ScrollViewButton = (props) => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity
            style = {styles.button}
            onPress = {props.gotoScrollViewExample}>
            <Text>
               ScrollView Example
            </Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      marginTop: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   button: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'black'
   }
})