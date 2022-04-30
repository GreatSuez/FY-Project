import { View, Text,Modal } from 'react-native'
import * as React from 'react';
import AlertContext from '../AlertContext';

const DetailsModal = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
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

      </Modal>
    </View>
  )
}

export default DetailsModal