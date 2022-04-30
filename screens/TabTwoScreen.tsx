import * as React from 'react';
import { StyleSheet, FlatList, ScrollView,RefreshControl } from 'react-native';

import EditScreenInfoTwo from '../components/EditScreenInfoTwo';
import { Text, View } from '../components/Themed';

import FeaturedScreen from '../components/FeaturedScreen';
import {  } from 'native-base';

const data = [
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },

  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"Robots Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
  {
    commId:"",
    commTitle:"MassComm Club",
    commDesc:"",
    commImg:"",
    commMemCount:8,

  },
];

const wait = (timeout:any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function TabTwoScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"red"}}>
        <Text style={styles.title}>Student Associations/Clubs</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfoTwo path="Featured Clubs/Associations" />
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {data.map((item,e) => (
          <View key={e}>
              <FeaturedScreen memCount={item.commMemCount} onPress={{}} clubName={item.commTitle} clubImg={item.commImg} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
