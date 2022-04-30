import * as React from 'react'
import {Alert, NativeBaseProvider, Icon,Text,Box,VStack, Center} from 'native-base'

const AlertContext = ({ stat,content }: { stat: string,content: string }) => {
  return (
    <NativeBaseProvider>
        <Center>
            <Alert width="100%" status="success">
                <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <Alert.Icon size="md" />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
                }}>
                    {stat}
                </Text>

                <Box _text={{
                textAlign: "center"
                }} _dark={{
                _text: {
                    color: "coolGray.600"
                }
                }}>
                    {content}
                </Box>
                </VStack>
            </Alert>
        </Center>
    </NativeBaseProvider>
  )
}

export default AlertContext