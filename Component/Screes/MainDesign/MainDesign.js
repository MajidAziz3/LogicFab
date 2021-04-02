import React from 'react'
import {View,Text,Image,Dimensions,FlatList} from 'react-native'
import { bg_color, blue_color } from '../../Assets/Colors/Colors'
import Button from '../../Commons/Button/Button'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../Commons/Header/Header'
import {UserDetail} from '../../Commons/UserDetails/UserDetails'
import {TabUser} from '../../Commons/Tab/Tab'
import { CircleImage } from '../../Commons/CircleImage/CircleImage'
const { width, height } = Dimensions.get('window')
const height_circle=width/6
const circle_width=width/6
const redius=circle_width/2

const data=[{
    name:'abdullah',
    pic:require('../../Assets/Images/bg.png'),
    type:1
},{
    name:'khawar',
    pic:require('../../Assets/Images/cow.png'),
    type:1
},{
    name:'saleh',
    pic:require('../../Assets/Images/watch.jpg'),
    type:1
},{
    name:'abdullah',
    pic:require('../../Assets/Images/bg.png'),
    type:1
},{
    name:'khawar',
    pic:require('../../Assets/Images/cow.png'),
    type:1
},{
    name:'saleh',
    pic:require('../../Assets/Images/watch.jpg'),
    type:1
},{
    name:'abdullah',
    pic:require('../../Assets/Images/bg.png'),
    type:1
},{
    name:'khawar',
    pic:require('../../Assets/Images/cow.png'),
    type:1
},{
    name:'saleh',
    pic:require('../../Assets/Images/watch.jpg'),
    type:1
}]
 const MainScreen=()=>{
    return(
        <View style={{flex:1,backgroundColor:bg_color}}>
        <Header headerText="apple" />
        <UserDetail/>
        <View style={{marginHorizontal:15}}>
        <Text style={{fontWeight:'bold'}}>apple</Text>
        <Text>Everyone has a story to tell.</Text>
        <Text>Tag <Text style={{color:blue_color}}>#Shotoniphone</Text> to take part.</Text> 
        <Text style={{color:blue_color}}>One Apple Park Way,Cupertino,California</Text>
        <Text >Followed by <Text style={{fontWeight:'bold'}}>saad_javed,umer_chaudhry17</Text>{'\n'} and <Text style={{fontWeight:'bold'}}>18 0thers</Text> </Text>
        </View>
        <View style={{marginHorizontal:15,height:40, flexDirection:'row'}}>
        <Button textColor="white" backgroundColor={blue_color}>Follow</Button>
        <Button>Message</Button>
        <View style={{width:40}}>
        <Button>
            <Entypo name="chevron-down" size={20}/>
        </Button>
        </View>
        </View>
        {console.log("i am data",data)}
        <View style={{height:height/6.7}}>
        <FlatList
            data={data}
            keyExtractor={(index)=>index}
            horizontal
            renderItem={(item)=>{
                return(
                    <View style={{height:height/6,marginTop:5,marginLeft:15}}>
                    <View>
        <View style={{height:height_circle,width:circle_width,borderRadius:redius,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray'}}>
            <Image source={item.item.pic} style={{height:width/7,width:width/7,borderRadius:redius,}}/>
        </View>
        </View>
        <Text style={{alignSelf:'center'}}>{item.item.name}</Text>

        </View>
                )
            }}
        />
        </View>
        <TabUser/>
        </View>
    )
}

export default MainScreen;