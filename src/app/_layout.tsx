import '../global.css';
import { NAV_THEME } from '../lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <ThemeProvider value={NAV_THEME[scheme]}>
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: NAV_THEME[scheme].colors.background }}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
          <PortalHost />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
