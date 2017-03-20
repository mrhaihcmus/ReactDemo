import React, {
    Component,


} from 'react'

import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions
} from 'react-native'
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const MyPresentationalComponent = (props) => {
    onPressLearnMore = () => {

    }
    return (
        <View style={{backgroundColor:'white',width:width,height:height}}>
            <Text style={styles.myText} onPress = {props.deleteText}>
                {props.myText}
            </Text>
            <Button
                style ={styles.learnMoreButton}
                onPress={this.onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default MyPresentationalComponent
const styles = StyleSheet.create({

    myText:{
        marginTop:50,
        color: 'yellow',
        fontSize: 30,
        backgroundColor: 'red'

    },
    learnMoreButton:{
        flex: 1,
        marginBottom:10,
        backgroundColor: 'blue',

    }
})