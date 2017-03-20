import React, {Component} from 'react'
import {View,Text,StyleSheet,ScrollView,Dimensions} from 'react-native'
const window = Dimensions.get('window');

export default  ScrollViewContainer = (props) =>{
const createItem = (item) => (
      <Text
         key={item.id}
         style={styles.item}>
         {item.name}{window.height}
      </Text>
   )
	return (
		 <View style={styles.container}>
         <ScrollView>
            {props.listItems.map(createItem)}
         </ScrollView>
      </View>
	)
}
const styles = StyleSheet.create ({
   container: {
      marginTop: 50,
      height: window.height - 100,
      backgroundColor: 'silver'
   },
   item: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
   }
})