import * as React from 'react';

import { Text, View } from './Themed';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function FeaturedScreen({clubImg,clubName,onPress,memCount}:{clubName:string, clubImg:any, onPress:any,memCount:any}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} >
        <View style={styles.container}>
          <View style={styles.clubImg}>
            <Image source={clubImg} />
          </View>
          <View>
            <Text style={styles.clubName}>
                {clubName}
            </Text>
            <View style={{marginHorizontal:20}} >
              <Text>members: {memCount}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        borderRadius:7,
        margin:10,
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    clubImg:{
        width:70,
        height:70,
        backgroundColor:'blue',
        borderRadius:10
    },
    clubName:{
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize:20

    }
});