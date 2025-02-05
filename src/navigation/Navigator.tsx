import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import CameraPage from '../pages/CameraPage';
import { RootStackParamList } from '../types/Navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
