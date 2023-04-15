import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import CountdownTimer from './src/CountdownTimer';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <Header />
        <CountdownTimer />
        {/* <Footer /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
