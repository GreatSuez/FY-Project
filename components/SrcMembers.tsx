import { View, Text,Image, TouchableOpacity, Modal,StyleSheet,Button } from 'react-native'
import * as React from 'react';

const RenderItem = ({fullname,img,dept,abt,position}:{position:any,abt:string,fullname:string,dept:string,img:any}) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
           setModalVisible(!modalVisible);
         }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image source={img} />
            </View>
            <Text>{fullname}</Text>
            <Text>{position}</Text>
            <Text>{dept}</Text>
            <Text>{abt}</Text>
            <Button title='Close' onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    );
  }


const SrcMembers = ({img,fullname,position,dept,abt}:{img:string,fullname:string,position:string,dept:string,abt:string}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View>
        <RenderItem img={img} fullname={fullname} position={position} dept={dept} abt={abt} />
        <View style={{display:'flex', flexDirection:'row', marginVertical:6, backgroundColor:'pink', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{
                width:70,
                height:70,
                backgroundColor:'blue',
                borderRadius:10
            }}>
                <Image source={img} />
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{display:'flex', flexDirection:'column',marginLeft:20}}> 
                    <Text style={{fontWeight:'bold',fontSize:20}}>{fullname}</Text>
                    <Text style={{fontSize:17,fontWeight:'800'}}>Position: {position}</Text>
                </View>
                <TouchableOpacity style={{padding:10,backgroundColor:'red',borderRadius:10}} onPress={() => setModalVisible(true)}>
                    <Text style={{fontWeight:'bold'}}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SrcMembers;

const styles = StyleSheet.create({
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
  });