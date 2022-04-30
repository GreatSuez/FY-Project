import { Text, View } from '../../components/Themed';
import * as React from 'react';
import {ScrollView,StyleSheet,Image} from 'react-native'
import {TouchableOpacity, Button, Modal} from 'react-native';
import SrcMembers from '../../components/SrcMembers';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Second Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Third Item",
    dept: "",
    position: "",
    img:""
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "First Item",
    dept: "Mass Communication",
    position: "Vice President",
    img:""
  }
];

export default function SrcMembersScreen () {
  const [dataa, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
    // const [modalVisible, setModalVisible] = React.useState(false);

  // const ShowAlert = () =>{
  //   setModalVisible(!modalVisible)
  // };


  // const getUsers = () => {
  //   fetch('https://random-data-api.com/api/users/random_user/?size=10')
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setIsLoading(false));
  // }

  // const fetchData = async () => {
  //   const resp = await fetch("https://random-data-api.com/api/users/random_user/?size=20");
  //   const dataa = await resp.json();
  //   setData(dataa);
  //   setLoading(false);
  // };
  // console.log(dataa);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   getUsers();
  // }, []);


  // React.useEffect(() => {
  //   fetchData();
  // }, []);


  // const RenderItem = ({key,item}:{key:any,item:any}) => {
  //   return (
  //     <Modal
  //        animationType="fade"
  //        transparent={true}
  //        visible={modalVisible}
  //        onRequestClose={() => {
  //          setModalVisible(!modalVisible);
  //        }}
  //        key={key}
  //     >
  //       <View style={styles.centeredView}>
  //         <View style={styles.modalView}>
  //           <View>
  //             <Image source={item.img} />
  //           </View>
  //           <Text>{item}</Text>
  //           <Button title='Close' onPress={() => setModalVisible(!modalVisible)} />
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // }

  return(
    <View>
      <ScrollView
        style={{ padding: 10, marginVertical:20}}
        >
          {isLoading ? <Text >Loading...</Text> :
          (
            data.map((item,e)=>(
              <View key={e}>
                {/* <RenderItem item={item.fullName} key={e.valueOf()}  /> */}
                <SrcMembers fullname={item.fullName} img={item.img} position={item.position}/>
              </View>
            ))
          )}
      </ScrollView>
    </View>
  )
};

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
