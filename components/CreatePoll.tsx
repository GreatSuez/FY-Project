import { Text, View } from '../components/Themed';
import { StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import Colors from '../constants/Colors';
import * as React from 'react';
import Constants from 'expo-constants';

const CreateInput = () => {
  const [user, setUser] = React.useState({
    name: '',
    gender: '',
    email: '',
    status: '',
  });
  const [loading, setLoading] = React.useState(false);

  const onChangeName = (value:any) => {
    setUser({ ...user, name: value });
  };

  const onChangeGender = (value:any) => {
    setUser({ ...user, gender: value });
  };

  const onChangeEmail = (value:any) => {
    setUser({ ...user, email: value });
  };

  const onChangeStatus = (value:any) => {
    setUser({ ...user, status: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://gorest.co.in/public-api/users', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        name: user.name,
        gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Gender'}
        onChangeText={(value) => onChangeGender(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'Menyimpan...' : 'Simpabbbn'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const CreatePoll = ({onPress,title}:{onPress:any,title: string,}) => {
  return (
    <View >
      <CreateInput />
      <TouchableOpacity onPress={onPress} style={{backgroundColor:'red', height:50, borderRadius:10,margin: 10}}>
          <Text style={{textAlign:'center'}} lightColor={Colors.light.tint}>
              {title}
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateInput;



const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
    backgroundColor:'red'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});