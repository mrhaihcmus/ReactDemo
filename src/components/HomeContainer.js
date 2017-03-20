import React, { Component } from 'react'
import {
   View
} from 'react-native'
import HomeButton from './HomeButton'
import TableButton from './TableButton'
import ScrollViewButton from './ScrollViewButton'
import NetworkButton from './NetworkButton'
export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <View>
            <TableButton goToTableView = {this.goToTableView}/>
            <ScrollViewButton gotoScrollViewExample = {this.gotoScrollViewExample}/>
            <NetworkButton onPress = {this.gotoNetworkExample}/>
         </View>
      )
   }
   openMenu = () =>{
      alert("Menu button pressed!")
   }
   goToAbout = () => {
      this.props.navigator.push({
         name: 'About',
         title: 'About',
         openMenu: this.openMenu
      });
   }

    goToTableView = () => {
      this.props.navigator.push({
         name: 'TableViewController',
         title: 'TableView Controller',
     //    openMenu: this.openMenu
      });
   }
   //
   gotoScrollViewExample = () =>{
      this.props.navigator.push({
         name:"ScrollViewExample",
         title:"ScrollView Exmaple"
      })
   }
   //
   gotoNetworkExample = () => {
      this.props.navigator.push({
         name:'NetworkExample',
         title:'Network Exmaple'
      })
   }
}