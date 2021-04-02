import {Dimensions} from 'react-native'


const {  height } = Dimensions.get('window')
export const ViewContainer = {
  height: height / 6.4,
  marginHorizontal: 15,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
};
