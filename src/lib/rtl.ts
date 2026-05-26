import * as SecureStore from 'expo-secure-store';
import { DevSettings, I18nManager, Platform } from 'react-native';

const RTL_SYNC_KEY = 'rtl-sync-signature';

/** Languages that use right-to-left layout. */
export function isRtlLanguage(language: string): boolean {
  const code = language.split('-')[0]?.toLowerCase() ?? '';
  return code === 'he' || code === 'ar' || code === 'fa' || code === 'ur';
}

function rtlSignature(language: string): string {
  return `${language}:${isRtlLanguage(language)}`;
}

/** Reload so `forceRTL` takes effect. Call only from `applyRtlForLanguage`. */
async function reloadAppForRtl(): Promise<void> {
  if (Platform.OS === 'web') {
    return;
  }

  try {
    const Updates = await import('expo-updates');
    await Updates.reloadAsync();
  } catch {
    if (__DEV__ && DevSettings.reload) {
      DevSettings.reload();
    }
  }
}

/**
 * Single entry point for RTL — call from `_layout` on boot and when language changes.
 * Never call from `global.css` or random components.
 */
export async function applyRtlForLanguage(language: string): Promise<void> {
  if (Platform.OS === 'web') {
    return;
  }

  const shouldBeRtl = isRtlLanguage(language);
  const signature = rtlSignature(language);

  I18nManager.allowRTL(true);

  if (I18nManager.isRTL === shouldBeRtl) {
    await SecureStore.setItemAsync(RTL_SYNC_KEY, signature);
    return;
  }

  const lastAttempt = await SecureStore.getItemAsync(RTL_SYNC_KEY);
  if (lastAttempt === signature) {
    // Already reloaded once for this language; skip to avoid loops (common in Expo Go).
    return;
  }

  I18nManager.forceRTL(shouldBeRtl);
  await SecureStore.setItemAsync(RTL_SYNC_KEY, signature);
  await reloadAppForRtl();
}
