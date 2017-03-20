import React, { Component } from 'react'
import {
   	ListView,
   	View,
   	Button,
   	StyleSheet,
   	Navigator,
    NativeModules

} from 'react-native'

import ScrollViewContainer from './ScrollViewContainer'
import TableViewController from './TableViewController'


export default class ScrollViewExample extends Component {
	 constructor(props) {
      super(props);
      this.state = {
      		listItems: [
				{'name':'item1','id':1},
				{'name':'item1','id':2},
				{'name':'item1','id':3},
				{'name':'item1','id':4},
				{'name':'item1','id':5},
				{'name':'item1','id':6},
				{'name':'item1','id':7},
				{'name':'item1','id':8},
				{'name':'item1','id':9},		
				{'name':'item1','id':10},	
				{'name':'item1','id':11}
			]
      }
	}
	openFuckingThis = () =>{
		console.log('fucking that')
		alert('Hai Dep Trai')
	}

    buttonPressed = () => {
      console.log(' pressed...');
      this.props.navigator.push({
         name: 'About',
         title: 'About jkdjfkdjfkjdk',
         openMenu: this.openFuckingThis,
         rightText: 'Show'
      });

   	}
   	addEventPressed = () =>{
		var CalendarManager = NativeModules.CalendarManager;
		CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');

   	}
   	showNativeComponent = () =>{
   		this.props.navigator.push({
         name: 'NativeComponent',
         title: 'Native Component',
         //openMenu: this.openFuckingThis,
         //rightText: 'Show'
      });

   	}
	render(){
		return(
			<View style = {styles.main}>
				<ScrollViewContainer listItems = {this.state.listItems} style = {styles.list}/>
				<View style = {styles.bottom}>
					<Button onPress = {this.buttonPressed} title = "Button 1" style = {styles.buttonViewMore}/>
					<Button onPress = {this.showNativeComponent} title = "Button 2" style = {styles.buttonViewMore}/>
					<Button onPress = {this.addEventPressed} title = "Native Module" style = {styles.buttonViewMore}/>
				</View>
			</View>

		)
	}

}
const styles = StyleSheet.create({
	main:{
   		flexDirection: 'column',
   		backgroundColor:'white'
	},
	list:{
		marginBottom:50,
		height:400,
		flex:1
	},
	bottom:{
		width:320,
		height:50,
		backgroundColor:'yellow',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',


	},
	buttonViewMore:{
		flex:1,
		backgroundColor: 'red'
	}

})