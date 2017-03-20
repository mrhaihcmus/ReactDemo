import React, {Component} from 'react'
import {
	View,
	Text,
	TouchableHightlight,
	StyleSheet,
	TouchableOpacity
}from 'react-native'

export default NetworkButton  = (props) => {
	return (
		<View style = {styles.main}>
			<TouchableOpacity 
				style = {styles.button}
				onPress = {props.onPress}
			>
				<Text>
						Network
				</Text>
			</TouchableOpacity>
		</View>

	)
}
const styles = StyleSheet.create({
	main:{
		height:50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:30
	},
	button:{
		borderWidth:1,
		width:200,
		height:50,
		alignItems:'center',
		justifyContent: 'center',

	}

})