import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Container } from '../../components/Container';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';

export default function TabTwo() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <Container>
        <View className="flex-1 items-center justify-center gap-2">
          <Heading level="h2">Tab Two</Heading>
          <Text variant="muted">Mall Navigator</Text>
        </View>
      </Container>
    </>
  );
}
