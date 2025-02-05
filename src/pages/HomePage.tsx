import { View, Text, Button } from 'react-native';

import { HomeScreenNavigationProp } from '../types/Navigation'; // Asegúrate de la ruta correcta

type Props = {
  navigation?: HomeScreenNavigationProp;
};

export default function HomePage({ navigation }: Readonly<Props>) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to IoTTerrarium</Text>
      <Button title="Dragon Camera" onPress={() => navigation?.navigate('Camera')} />
    </View>
  );
}
