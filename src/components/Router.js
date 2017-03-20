import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'

import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'
import TableViewController from './TableViewController'
import ScrollViewExample from './ScrollViewExample'
import NativeComponent from './NativeComponent'
import NetworkExample from './NetworkExample'
export default class Router extends Component {
   constructor(){
      super()
   }
   render() {
      return (
         <Navigator

            initialRoute = {{ name: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }
            
         />
      );
   }

   renderScene(route, navigator) {
      if(route.name == 'Home') {
         return (
            <HomeContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'About') {
         return (
            <AboutContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if (route.name == 'TableViewController') {
         return(
            <TableViewController
               navigator = {navigator}
               {...route.passProps}  
            />
         )
      }
      //ScrollViewExample
      if(route.name == 'ScrollViewExample'){
         return(
            <ScrollViewExample
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
      //Native Component
      if (route.name == 'NativeComponent') {
         return(
            <NativeComponent
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
      //
      if (route.name == 'NetworkExample') {
         return(
            <NetworkExample
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
   }
}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(index > 0) {
         return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableOpacity>
         )
      }
      else { return null }
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
         <TouchableOpacity
            onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }>
               { route.rightText || 'Menu' }
            </Text>
         </TouchableOpacity>
      )
   },
   Title(route, navigator, index, navState) {
      return (
         <Text style = { styles.title }>
            {route.title}
         </Text>
      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
})