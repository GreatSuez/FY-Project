import { Text, View } from '../components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import * as React from 'react';


export default function Elections({title, onPress}:{title:string, onPress:any}) {
  return (
    <View >
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'red', height:100, borderRadius:10,margin: 10}}>
            <Text style={{textAlign:'center'}} lightColor={Colors.light.tint}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
  )
}