import React from "react";
import {
    View,
    Text
} from "react-native";
import { textStyle, viewStyle } from "./Style";
import Entypo from 'react-native-vector-icons/Entypo'

const Header = (props) => {

   

    return (
        <View
            style={viewStyle}
        >
        <Entypo name="chevron-small-left" size={40} />
            <Text
                style={textStyle}
            >
                {props.headerText}
            </Text>
            <Entypo name="dots-three-horizontal" size={30} />
        </View>
    )
}



export default Header;