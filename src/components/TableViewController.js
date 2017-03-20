import React, { Component } from 'react'
import {
   ListView,
   View,
   TextInput,
   StyleSheet,
   Button,
   ActivityIndicator
} from 'react-native'
import MyListViewCompnent from './MyListViewCompnent'
var productArray = []
export default class TableViewController extends Component {
 constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: ds.cloneWithRows(productArray),
         count:0,
         text:"Text",
         isLoading:true,
         action:0
      };
   }
   buttonPressed = () => {
      console.log('TouchableHighlight pressed...' + this.state.count);
      this.setState({
         count:this.state.count + 1,

      })
   }
   goSomeWhere = () => {
      this.props.navigator.push({
         name: 'About',
         title: 'About',
         openMenu: this.openMenu


      });
   }
   //
   addData = () =>{
      var newItem = {'title':this.state.text,'years':'5555c'}
      productArray.push(newItem)
            this.setState({
               dataSource: this.state.dataSource.cloneWithRows(productArray),
               isLoading:false
            });
   }
   filterTableView = (text) =>{
      console.log(text)
      this.fetchData(function(json){
            console.log(json)
            productArray = [json.movies[1],json.movies[2]]
            this.setState({
               dataSource: this.state.dataSource.cloneWithRows(productArray),
               isLoading:false
            });
      }.bind(this))
     
   }
   componentDidMount(){
      console.log('componentDidMount')
      if (this.state.action == 0){
         this.fetchData(function(json){
            console.log(json)
            productArray = json.movies
            this.setState({
               dataSource: this.state.dataSource.cloneWithRows(productArray),
               isLoading:false
            });
         }.bind(this))
      }

   }
   pressedLoadmore = () =>{
      if (this.state.action == 0){
         this.fetchData(function(json){
            console.log(json)
            productArray.push(json.movies)
            this.setState({
               dataSource: this.state.dataSource.cloneWithRows(productArray),
               isLoading:false
            });
         }.bind(this))
      }
   }
   fetchData = (callback) =>{
      fetch('https://facebook.github.io/react-native/movies.json', {
         method: 'GET',

      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log('listMovies')
         console.log(responseJson);
         // this.setState({
         //    data: responseJson,
         //    animating:true
         // })
         callback(responseJson)
      })
      .catch((error) => {
         console.error(error);
      });

      
   }
   render() {
      var listview = (this.state.isLoading)?<View><ActivityIndicator
         animating = {this.state.isLoading}
         size = "large"
      ></ActivityIndicator></View>:<MyListViewCompnent
       style = {styles.listview} 
       dataSource = {this.state.dataSource} 
       buttonPressed = {this.goSomeWhere}
       pressedLoadmore = {this.pressedLoadmore}
       />

      return (
         <View style = {styles.container}>
            <View style = {styles.form}>
               <TextInput  style = {styles.formInput}
                  onChangeText = {(text) => this.filterTableView({text})}
                  value = {this.state.text}
               />
               <Button style = {styles.formButton} title = "Add" onPress = {this.addData}/>
            </View>
            {listview}
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container:{
      //flex:1,
      backgroundColor:'red',
      flexDirection:'column',
      marginTop:64
   },
   listview:{
      marginTop:5,
      flex:1,
      backgroundColor:'yellow'
   },
   form:{
      flexDirection:'row',
      height:40,
      width:320,
      backgroundColor:'grey'
   },
   formInput:{
      height:40,
      borderWidth:1,
      borderColor:'red',
      flex:1
   },
   formButton:{
      width:60,
      height:40
   }


})