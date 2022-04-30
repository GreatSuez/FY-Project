import * as React from 'react'
import { Text, View } from './Themed';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const TextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={400}
      />
    );
  }

export default function NewClubs() {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    
  )
}