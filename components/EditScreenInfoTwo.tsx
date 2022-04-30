import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Modal,TextInput,Image,Platform } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import AlertContext from './AlertContext';

const NewTextInput = (props:any) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={400}
      style={{padding: 10,width:'100%'}}
      multiline
      placeholderTextColor='grey'
      scrollEnabled
      borderBottomWidth={2}
      color='white'
      fontSize={17}
      fontWeight='bold'

    />
  );
}

export default function EditScreenInfoTwo({ path }: { path: string }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [titleValue, onChangeText] = React.useState('');
  const [descriptionValue, onChangeText1] = React.useState('');
  const [image, setImage] = React.useState(null);

  const ShowAlert = () =>{
    setModalVisible(!modalVisible)
    return(
      <AlertContext stat='Form submitted!' content='Awaiting approval. Once approved, It will be featured.' />
    )
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
 
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          <AlertContext stat='Form submitted!' content='Awaiting approval. Once approved, It will be featured.' />
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add new Associations or Club</Text>
            <NewTextInput 
              onChangeText={(text:any) => onChangeText(text)}
              placeholder="Club or Association Title"
              value={titleValue}
            />
             <NewTextInput 
              inlineImageLeft='search_icon'
              onChangeText={(text:any) => onChangeText1(text)}
              placeholder="Club or Association Description"
              value={descriptionValue}
            />
            <TouchableOpacity onPress={pickImage} style={styles.button}>
              <Text style={styles.buttonText}>Choose a display picture</Text>
            </TouchableOpacity>
            <View style={styles.pickedImgView}>
              {image && <Image source={{ uri: image }} style={styles.pickedImg} />}
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={ShowAlert}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{}}>
            <MonoText style={{fontWeight:'bold', fontSize:19}}>New +</MonoText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  getStartedContainer: {
    display: 'flex',

  },
  homeScreenFilename: {
    marginVertical: 0,
    justifyContent:'space-between'

  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 2,
    backgroundColor:'transparent'
  },
  modalView: {
    margin: 10,
    backgroundColor: "#2f95dc",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 8,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:'bold',
    fontSize:20
  },
  pickedImg:{
    width: 130,
    height: 130,
    borderRadius:10,
    margin:10,
    resizeMode: "contain"
  },
  pickedImgView:{
    backgroundColor:'transparent'
  }
});
