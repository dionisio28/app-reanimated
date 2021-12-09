import React, { useCallback, useState } from 'react'
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
import { LogBox, Pressable } from 'react-native'
import AnimatedCheckbox from '../components/animated-checkbox/animated-checkbox'

const MainScreen: React.FC = () => {
  const [checked, setChecked] = useState(false)

  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev);
  }, [])


  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={5}
      flex={1}
    >
      <VStack space={5} alignItems={'center'}>
      <Pressable onPress={handlePressCheckbox} style={{  width: 64,
    height: 64}}>
        <AnimatedCheckbox
          checked={checked}
          highlightColor="#4444ff"
          checkmarkColor="#ffffff"
          boxOutlineColor="#4444ff"
        />
      </Pressable>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text> Hello </Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

export default MainScreen
