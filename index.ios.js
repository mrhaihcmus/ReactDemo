/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './src/components/Router'

class abcd extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('abcd', () => abcd);
