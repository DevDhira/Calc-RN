import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import Main from './src/Main'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { CalcContextProvider } from './src/context/calContext'

export default function App() {

  const theme = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  })

  return (
    <NativeBaseProvider theme={theme} >
      <CalcContextProvider>
        <SafeAreaView style={{ flex: 1 }} >
          <Main />
        </SafeAreaView>
      </CalcContextProvider>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})