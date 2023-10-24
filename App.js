import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Home from './views/Home'
import Routes from './routes/routes'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Routes />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001154',
    paddingTop: Platform.OS === 'android' ? 40 : 0
    },
})
