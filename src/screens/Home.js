import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Box, Divider, IconButton, Input, Text } from 'native-base'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/Feather'
import { useContext, useEffect, useState } from 'react'

import { CalContext } from '../context/calContext'


export default function Home() {

  const {expression,result,fSize, setFSize, rSize, setRSize,
    handleButtonPress,handleSelectionChange,clearExpression
  } = useContext(CalContext)

 

  useEffect(() => {
    if(expression.length > 15){
      setFSize(40)
    }
    else{
      setFSize(50)
    }
  }, [expression])

  useEffect(() => {
    if(result.length > 11){
      setRSize('4xl')
    }
    else{
      setRSize('7xl')
    }
  }, [expression])


  


  return (

    <View style={{ flex: 1, backgroundColor: 'black' }} >
      <Box flex={0.3}  >
        <TextInput
          showSoftInputOnFocus={false}
          style={{
            fontSize: fSize ,
            textAlign: 'right',
            color: 'white',
          }}
          value={expression}
          onSelectionChange={handleSelectionChange}
         
        />
        <Text
          fontSize={rSize}
          textAlign={'right'}
        > 
        {result}
        </Text>
      </Box>
      <Box flex={0.07} marginX={2} paddingY={3} paddingRight={'50px'} justifyContent={'center'} alignItems={'flex-end'} >
        <TouchableOpacity onPress={() => { clearExpression() }} >
          <Icon name='delete' size={30} color={'white'} />
        </TouchableOpacity>
      </Box>
      <Box justifyContent={'center'} alignItems={'center'}>
        <Divider w={'sm'} />
      </Box>
      <Box marginY={2} marginX={2} flex={0.6} >
        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
          <Button number={'C'} c_color={'red.400'} onButtonPress={() => { (handleButtonPress('C')) }} />
          <Button number={'( )'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('()')) }} />
          <Button number={'%'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('%')) }} />
          <Button number={'÷'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('÷')) }} />
        </Box>
        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
          <Button number={7} onButtonPress={() => { (handleButtonPress('7')) }} />
          <Button number={8} onButtonPress={() => { (handleButtonPress('8')) }} />
          <Button number={9} onButtonPress={() => { (handleButtonPress('9')) }} />
          <Button number={'×'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('×')) }} />
        </Box>
        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
          <Button number={4} onButtonPress={() => { (handleButtonPress('4')) }} />
          <Button number={5} onButtonPress={() => { (handleButtonPress('5')) }} />
          <Button number={6} onButtonPress={() => { (handleButtonPress('6')) }} />
          <Button number={'−'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('−')) }} />
        </Box>
        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
          <Button number={1} onButtonPress={() => { (handleButtonPress('1')) }} />
          <Button number={2} onButtonPress={() => { (handleButtonPress('2')) }} />
          <Button number={3} onButtonPress={() => { (handleButtonPress('3')) }} />
          <Button number={'+'} c_color={'green.600'} onButtonPress={() => { (handleButtonPress('+')) }} />
        </Box>
        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
          <Button number={'±'} onButtonPress={() => { (handleButtonPress('±')) }} />
          <Button number={0} onButtonPress={() => { (handleButtonPress('0')) }} />
          <Button number={'.'} onButtonPress={() => { (handleButtonPress('.')) }} />
          <Button number={'='} bgColor={'green.600'} onButtonPress={() => { (handleButtonPress('=')) }} />
        </Box>
      </Box>
    </View>

  )
}

const styles = StyleSheet.create({})