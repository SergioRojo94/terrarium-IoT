import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/Navigation';

type Props = StackScreenProps<RootStackParamList, 'Camera'>;

export default function CameraPage({ navigation }: Readonly<Props>) {
  return (
    <View>
      <Text>Camera View</Text>
      <Button title='Back to Menu' onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}
