import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
        <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
