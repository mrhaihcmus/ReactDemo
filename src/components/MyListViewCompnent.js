import React, {Component} from 'react'
import{
   View,
   Image,
   ListView,
   ScrollView,
   Text,
   TouchableHighlight,
   StyleSheet
} from 'react-native'
import {
    LazyloadScrollView,
    LazyloadView,
    LazyloadImage
} from 'react-native-lazyload';

import Header from './ListView/Header';
import Footer from './ListView/Footer';
var NetworkImageExample = React.createClass({
  getInitialState: function() {
    return {
      error: false,
      loading: false,
      progress: 0
    };
  },
  render: function() {
    var loader = this.state.loading ?
      <View style={styles.progress}>
        <Text>{this.state.progress}%</Text>
        <ActivityIndicator style={{marginLeft:5}} />
      </View> : null;
    return this.state.error ?
      <Text>{this.state.error}</Text> :
      <Image
        source={this.props.source}
        style={[styles.base, {overflow: 'visible'}]}
        onLoadStart={(e) => this.setState({loading: true})}
        onError={(e) => this.setState({error: e.nativeEvent.error, loading: false})}
        onProgress={(e) => this.setState({progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)})}
        onLoad={() => this.setState({loading: false, error: false})}>
        {loader}
      </Image>;
  }
});

export default MyListViewCompnent = (props) => {

   return (
      <View>
         <ListView
            style = {styles.listContainer}
            dataSource = {props.dataSource}
            renderRow = {
               (rowData, sectionID, rowID) => (
                  
                        <TouchableHighlight onPress = {props.buttonPressed}
                                underlayColor='#aaddff'
                              >
                            <View style = {rowID%2 === 0 ?  styles.item : styles.itemBlack}>
                                <View style = {styles.listItem}>
                                <Text>{rowID}</Text>
                                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style = {styles.iconListItem}></Image>
                                <Text style = {styles.itemText}>{rowData.title}</Text>
                                <Image source = {require('../../img/ic_right_arrow.png')} style = {styles.iconRight}></Image>

                                </View>
                                <View style = {styles.separate}>
                                </View>
                          </View>
                      </TouchableHighlight>                    
               )
            }
            renderHeader={() => <Header />}
            renderFooter={()=>
                <Footer onPress = {props.pressedLoadmore}/>
              
            }
         />
      </View>
   )
}

const styles = StyleSheet.create ({
   listContainer: {
     // position: 'absolute',
     //  paddingTop: 22,
     //  bottom:0,
     //  left:0,
     //  right:0,
      backgroundColor:'#008080'
   },
   item:{
         marginTop: 10,
         flexDirection: 'column'
   },
  itemBlack:{
     marginTop: 10,
         flexDirection: 'column',
      backgroundColor:'#cb9c54'
   },
   listItem: {
         //flex:1,
         flexDirection: 'row',
         //justifyContent: 'center'
         alignItems: 'center',
         marginBottom:10
   },
   itemText:{
      flex:1,
      marginLeft:10
   },
   iconListItem:{
      marginLeft:10,
      width:50,
      height:50
   },
   iconRight:{
         width:20,
         height:20,
         justifyContent: 'flex-end',
         marginRight:10

   },
   separate:{
         height:1,
         flex:1,
         backgroundColor:'black'
   }

})