import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

import { Container } from '../components/Container';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';

export default function Modal() {
  return (
    <>
      <Container>
        <View className="flex-1 items-center justify-center gap-2">
          <Heading level="h2">Modal</Heading>
          <Text variant="muted">Mall Navigator</Text>
        </View>
      </Container>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
