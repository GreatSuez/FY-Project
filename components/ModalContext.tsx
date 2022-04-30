import * as WebBrowser from 'expo-web-browser';
import { Modal } from 'react-native';

import { Text, View } from './Themed';
import * as React from 'react';


const ModalContext = (props,{children}:{children:any}) => {
  return (
    <View>
      <Modal
        {...props}
        animationType="fade"
      >
        {children}
      </Modal>
    </View>
  )
}

export default ModalContext;