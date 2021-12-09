import React from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import { LogBox } from 'react-native'
// import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={5}
      flex={1}
    >
      <VStack space={5} alignItems={'center'}>
        <Box p={10} bg={useColorModeValue('red.50', 'yellow.500')}>
          <Text> Hello </Text>
        </Box>
        <ThemeToggle/>
      </VStack>
    </Center>
  )
}

export default MainScreen
