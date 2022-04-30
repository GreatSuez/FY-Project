import { Text, View } from '../../components/Themed';
import * as React from 'react';
import {NativeBaseProvider,Center,FlatList,Box} from 'native-base'

const positions = [
    {
        id:'1',
        pos:'President'
    },
    {
        id:'2',
        pos:'Vice President'
    },
    {
        id:'3',
        pos:'General Secretary'
    },
    {
        id:'4',
        pos:'Assistant Secretary'
    },
    {
        id:'5',
        pos:'Public Relations Officer'
    },
    {
        id:'6',
        pos:'Assistant Public Relations Officer'
    },
    {
        id:'7',
        pos:'Social Director'
    },
    {
        id:'8',
        pos:'Assistant Social Director'
    },
    {
        id:'9',
        pos:'Welfare Director'
    },
    {
        id:'10',
        pos:' Assistant Welfare (Food Services)'
    },
    {
        id:'11',
        pos:'Assistant Welfare (Health Services)'
    },
    {
        id:'12',
        pos:'Assistant Welfare (Utility Services)'
    },
    {
        id:'13',
        pos:'Academic Affairs Representative'
    },
    {
        id:'14',
        pos:'Sport Director'
    },
    {
        id:'15',
        pos:'Assistant Sport Director'
    }
]


const SrcPositionsScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true)
  }, []);
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box><Text>NORMINATION POSITIONS</Text></Box>
        <View style={{padding:10}}>
            {isLoading ? <Text>Loading...</Text> : (
                <FlatList 
                    data={positions}
                    keyExtractor={({id}) => id.toString()}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.pos}</Text>
                        </View>
                    )}
                />
            )}
        </View>
      </Center>
    </NativeBaseProvider>
  )
}

export default SrcPositionsScreen;