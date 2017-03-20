import React, {Component} from 'react'
import {View,
	Text,
	requireNativeComponent
} from 'react-native'

class NativeComponent extends Component{
	constructor(){
		super()
	}
	render(){
		   <View></View>


	}

}
// NativeComponent.propTypes = {
//   /**
//    * When this property is set to `true` and a valid camera is associated
//    * with the map, the camera’s pitch angle is used to tilt the plane
//    * of the map. When this property is set to `false`, the camera’s pitch
//    * angle is ignored and the map is always displayed as if the user
//    * is looking straight down onto it.
//    */
//   pitchEnabled: React.PropTypes.bool,

//   *
//    * The region to be displayed by the map.
//    *
//    * The region is defined by the center coordinates and the span of
//    * coordinates to display.
   
//   region: React.PropTypes.shape({
//     /**
//      * Coordinates for the center of the map.
//      */
//     latitude: React.PropTypes.number.isRequired,
//     longitude: React.PropTypes.number.isRequired,

//     /**
//      * Distance between the minimum and the maximum latitude/longitude
//      * to be displayed.
//      */
//     latitudeDelta: React.PropTypes.number.isRequired,
//     longitudeDelta: React.PropTypes.number.isRequired,
//   }),
// };

// var RCTMap = requireNativeComponent('RCTMap', NativeComponent);

// module.exports = NativeComponent;