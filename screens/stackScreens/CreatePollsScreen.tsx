import {StyleSheet,StatusBar } from 'react-native'
import { Text, View } from '../../components/Themed';
import CreateInput from '../../components/CreatePoll';

import React from 'react'

const CreatePollsScreen = () => {
  return (
    <View style={styles.container}>
      <CreateInput  />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'transparent'
  }
});

export default CreatePollsScreen;