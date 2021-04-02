import React from 'react'
import {View,Text,Dimensions} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { textStyle } from '../Header/Style'
import { ViewContainer } from './Style'
const textBold={fontSize:20,fontWeight:'bold',alignSelf:'center'}
export const UserDetail=()=>{
    return(
        <View style={ViewContainer}>
         <Entypo name="app-store" size={60} />
         <View style={{marginLeft:12}}>
             <Text style={textBold}>
                 776
             </Text>
             <Text style={textStyle}>
                 Posts
             </Text>
         </View>
         <View>
             <Text style={textBold}>
                 25.2 M
             </Text>
             <Text style={textStyle}>
                 Followers
             </Text>
         </View>
         <View>
             <Text style={textBold}>
                 6
             </Text>
             <Text style={textStyle}>
                 Followings
             </Text>
         </View>
        </View>
    )
}