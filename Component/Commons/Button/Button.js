import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { color } from 'react-native-reanimated';

const Button = ({ pressed, children,textColor,backgroundColor }) => {

    const {
        buttonStyle,
        textStyle
    } = styles;

    return (
        <TouchableOpacity
            onPress={pressed}
            style={[buttonStyle,{backgroundColor:backgroundColor}]}
        >
            <Text
                style={[textStyle,{color:textColor}]}
            >
                {
                    children
                }
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        
        marginBottom: 10,
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600'
    }
}

export default Button;