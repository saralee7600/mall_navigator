/**
 * Standard monochrome icons: Expo vector sets + Lucide.
 * Multi-color SVG assets via react-native-ico (see note below).
 *
 * Note: `react-native-colorful-icons` is not published on npm; use ColorfulIcon
 * from react-native-ico for pre-built multi-color SVG icon sets.
 */
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as LucideIcons from 'lucide-react-native';
import type { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const ColorfulIcon = require('react-native-ico').default as ComponentType<{
  name: string;
  width?: number;
  height?: number;
  color?: string;
}>;

export { ColorfulIcon, FontAwesome, Ionicons, LucideIcons, MaterialIcons };

export type StandardIconFamily = 'ionicons' | 'fontawesome' | 'material' | 'lucide';
