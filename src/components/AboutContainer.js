import React, { Component } from 'react'
import {
   View,
   Text,
   Navigator,
   StyleSheet
} from 'react-native'
import NavigationBar from 'react-native-navbar';


export default class AboutContainer extends Component {

   render() {
    return (
       <View style = {styles.background}>
        <Text>xxx</Text>
        </View> 
     
    )
  }

}
const styles = StyleSheet.create({
   background:{
      flex:1,
      backgroundColor:'red'
   }

})