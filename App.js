import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Settings from './pages/Settings';
import DeckScreen from './pages/DeckScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, animation: 'none' }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="DeckScreen" component={DeckScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}