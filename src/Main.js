import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import About from './screens/About'

const Stack = createNativeStackNavigator()

export default function Main() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name='Home' 
            component={Home} 
            options={{
                headerShown:false
            }}

            />
            <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})