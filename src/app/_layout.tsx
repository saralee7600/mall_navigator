import i18n from '../lib/i18n';
import '../global.css';
import { NAV_THEME } from '../lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function syncRtlWithLanguage(language: string) {
  const isHebrew = language === 'he' || language.startsWith('he');
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(isHebrew);
}

syncRtlWithLanguage(i18n.language);

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    syncRtlWithLanguage(i18n.language);

    const onLanguageChanged = (language: string) => {
      syncRtlWithLanguage(language);
    };

    i18n.on('languageChanged', onLanguageChanged);
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

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
