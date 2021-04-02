import {
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    TabHeading,
    ScrollableTab,
    Badge,
  } from 'native-base';
  import React, {useEffect, useState} from 'react';
  import {View, TouchableOpacity,FlatList,Dimensions, Text, Image,ScrollView} from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  import Entypo from 'react-native-vector-icons/Entypo'
import { tabContainer, tabUnderLine } from './Style';
  const { width, height } = Dimensions.get('window')
  const data=[{
    name:'abdullah',
    pic:require('../../Assets/Images/bg.png'),
    type:3
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
    type:12
},{
    name:'khawar',
    pic:require('../../Assets/Images/cow.png'),
    type:1
},{
    name:'saleh',
    pic:require('../../Assets/Images/watch.jpg'),
    type:2
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
  export const TabUser = (props) => {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={tabUnderLine}
          scrollWithoutAnimation
          tabContainerStyle={tabContainer}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
              <MaterialCommunityIcons name="grid" size={40}/>
               
              </TabHeading>
            }
            textStyle={{color: '#fff'}}
            activeTextStyle={{
              fontWeight: 'bold',
            }}>
<FlatList
            data={data}
            keyExtractor={(index)=>index}
           numColumns={2}
            renderItem={(item)=>{
                return(
                    <View style={{height:height/5,}}>
                    <View style={{right:5,top:10,position:'absolute',zIndex:1,}}>
                    {
                        item.item.type==1?
                        <Entypo name="image" size={20} color="#fff"/>
                        :
                        <Entypo name="video" size={20} color="#fff"/>
                    }
                    </View>
        <View style={{height:width/2,width:width/2,}}>
            <Image source={item.item.pic} style={{height:height/5,width:width/2,borderWidth:1,borderColor:'#fff'}}/>
        </View>
        </View>
                )
            }}
        />
            </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>
                  <MaterialCommunityIcons name="video-box" size={40}/>
                </View>
              </TabHeading>
            }
            textStyle={{color: '#fff'}}
            activeTextStyle={{
              fontWeight: 'bold',
              color: '#d21',
            }}>
            <View style={{height: '75%'}}>
              <ScrollView
                key={1}
                style={{backgroundColor: 'white', paddingBottom: 10}}>
                <View >
                  {/* <GenerateDraftTiles /> */}
  <Text>test</Text>
                  {/* <GenerateProductTiles /> */}
                </View>
              </ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>
                  <MaterialCommunityIcons name="tooltip-image" size={40}/>
                </View>
              </TabHeading>
            }
            textStyle={{color: '#fff'}}
            activeTextStyle={{
              fontWeight: 'bold',
              color: '#d21',
            }}>
            <View style={{height: '75%'}}>
              <ScrollView
                key={1}
                style={{backgroundColor: 'white', paddingBottom: 10}}>
                <View >
                  {/* <GenerateDraftTiles /> */}
  <Text>test</Text>
                  {/* <GenerateProductTiles /> */}
                </View>
              </ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>
                  <Entypo name="user" size={40}/>
                </View>
              </TabHeading>
            }
            textStyle={{color: '#fff'}}
            activeTextStyle={{
              fontWeight: 'bold',
              color: '#d21',
            }}>
            <View style={{height: '75%'}}>
              <ScrollView
                key={1}
                style={{backgroundColor: 'white', paddingBottom: 10}}>
                <View >
                  {/* <GenerateDraftTiles /> */}
  <Text>test</Text>
                  {/* <GenerateProductTiles /> */}
                </View>
              </ScrollView>
            </View>
          </Tab>
         </Tabs>
      </Container>
    );
  };
  