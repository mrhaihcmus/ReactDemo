import React , {Component} from 'react'
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Text,
	ActivityIndicator
} from 'react-native'
export default class NetworkExample extends Component{
 	constructor(props) {
      super(props);
      console.log('xxxxxxx')
        this.state = {
         data: [],
         animating:true,
         hasData:false
      }
  	}
   	render() {
    return (
       <View style = {styles.background}>
       		<TouchableHighlight 
       			style = {styles.button}
       			onPress = {this.getfuckingList}
       			>
       			<View>
        		<Text style = {styles.tapme} >Fetch</Text>
        		</View>
        	</TouchableHighlight>

        	<View style = {styles.responeView}>
        		<Text style = {styles.responeText}>{this.state.hasData ? this.state.data.title : "No Data"}
	        	</Text>
        		<ActivityIndicator
        		animating = {this.state.animating}
        		 style={[styles.centering, {height: 80}]}
        			size = "large"
        		/>
	        	
        	</View>
        </View> 
     
    )
  }
  /**/
  getfuckingList = () =>{
  	console.log('got it')
  	   fetch('https://facebook.github.io/react-native/movies.json', {
        	method: 'GET',

      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson,
            animating:false,
            hasData:true
         })
      })
      .catch((error) => {
         console.error(error);
      });
  }
}
const styles = StyleSheet.create({
   background:{
      backgroundColor:'#33ddee',
      flex:1,
      flexDirection:'column',
      // justifyContent:'center',
      alignItems:'center'
   },
   tapme:{
   	    justifyContent:'center',
   	    alignItems:'center',

   		fontSize:15
   },
   button:{
   		marginTop:100,
   		borderWidth:1,
   	   	width:200,
   		height:50,
   },
   responeView:{
   	    justifyContent:'center',
   		backgroundColor:'white',
   		width:300,
   		flex:1,
   		borderWidth:1
   },
   responeText:{
   		position: 'absolute',
   		right: 0,
    	top: 0,
    	bottom: 0,
   }
})

