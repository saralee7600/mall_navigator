import i18n from '../lib/i18n';
import '../global.css';
import { applyRtlForLanguage } from '../lib/rtl';
import { NAV_THEME } from '../lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Align native layout with i18n before first paint (reloads once if needed).
if (Platform.OS !== 'web') {
  void applyRtlForLanguage(i18n.language);
}

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const onLanguageChanged = (language: string) => {
      void applyRtlForLanguage(language);
    };

    i18n.on('languageChanged', onLanguageChanged);
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

  return (
    <ThemeProvider value={NAV_THEME[scheme]} >
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
