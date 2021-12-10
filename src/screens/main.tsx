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
import TaskItem from '../components/task-item'

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
      <TaskItem isDone={checked} onToogleCheckbox={handlePressCheckbox}/>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text> Hello </Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

export default MainScreen
