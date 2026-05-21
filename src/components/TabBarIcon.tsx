import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export type TabBarIconName = React.ComponentProps<typeof Ionicons>['name'];

export const TabBarIcon = (props: {
  name: TabBarIconName;
  color: string;
}) => {
  return <Ionicons size={28} style={styles.tabBarIcon} {...props} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
