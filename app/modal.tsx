import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <Container>
        <ScreenContent path="app/modal.tsx" title="Modal"></ScreenContent>
      </Container>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
