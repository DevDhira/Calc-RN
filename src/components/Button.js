import { StyleSheet } from 'react-native'
import React from 'react'
import { Pressable, Box, Text , Button} from 'native-base'

const NumberButton = ({number,c_color,bgColor,onButtonPress}) => {

  return (
   
    <Button 
    onPress={onButtonPress}
    bgColor={bgColor? bgColor :'muted.800'  } 
    borderRadius={100} 
    width={'1/5'} 
    marginTop={3} 
    marginX={2} 
    padding={3} 
    >
        <Text fontSize={'4xl'} color={c_color ? c_color :'white'} >{number}</Text>
    </Button>
 
  )
}

export default NumberButton

const styles = StyleSheet.create({})