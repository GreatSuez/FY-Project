import { StyleSheet,ScrollView,RefreshControl } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import Elections from '../components/Elections';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const wait = (timeout:any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function TabOneScreen({ navigation }: RootTabScreenProps<'SRC'>) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.container}>
        <EditScreenInfo path="Student Information 🔔" />
        <Text style={styles.title}></Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Student Representative Council</Text>
        <Elections title='SRC ELECTION' onPress={() => navigation.navigate('SrcPosition')} />
        <Elections title='View SRC MEMBERS' onPress={() => navigation.navigate('SrcMembers')} />
        <Elections title='Create Polls' onPress={() => navigation.navigate('CreatePolls')}/>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent:'center',
    marginHorizontal: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
