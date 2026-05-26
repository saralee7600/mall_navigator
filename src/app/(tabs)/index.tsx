import { InputGroup } from '@/src/components/InputGroup';
import { Heading } from '@/src/components/ui/heading';
import { Input } from '@/src/components/ui/input';
import { Text } from '@/src/components/ui/text';
import { cn } from '@/src/lib/utils';
import {
  Coffee,
  Map,
  Pill,
  Search,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RecentSearch = {
  id: string;
  name: string;
  icon: LucideIcon;
  iconColor: string;
  tintClass: string;
};

const RECENT_SEARCHES: RecentSearch[] = [
  {
    id: 'zara',
    name: 'זארה',
    icon: ShoppingBag,
    iconColor: '#7c3aed',
    tintClass: 'bg-violet-100 dark:bg-violet-950/60',
  },
  {
    id: 'aroma',
    name: 'ארומה',
    icon: Coffee,
    iconColor: '#b45309',
    tintClass: 'bg-amber-100 dark:bg-amber-950/60',
  },
  {
    id: 'super-pharm',
    name: 'סופר-פארם',
    icon: Pill,
    iconColor: '#059669',
    tintClass: 'bg-emerald-100 dark:bg-emerald-950/60',
  },
];

function RecentSearchBadge({ item }: { item: RecentSearch }) {
  const Icon = item.icon;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.name}
      className="flex-row items-center gap-2.5 rounded-full border border-border/80 bg-card px-4 py-2.5 shadow-sm shadow-black/10 active:opacity-90 dark:shadow-black/30">
      <View className={cn('rounded-full p-2', item.tintClass)}>
        <Icon size={16} color={item.iconColor} strokeWidth={2.25} />
      </View>
      <Text className="text-sm font-medium text-foreground">{item.name}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background">
      {/* Map placeholder — full screen */}
      <View className="absolute inset-0 items-center justify-center bg-zinc-100 dark:bg-zinc-900/80">
        <View className="items-center gap-3 opacity-40">
          <Map size={56} color="#94a3b8" strokeWidth={1.25} />
          <Text className="text-base font-medium text-muted-foreground">Map View</Text>
        </View>
      </View>

      {/* Bottom sheet dashboard */}
      <View
        className="absolute bottom-0 start-0 end-0"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}>
        <View className="mx-3 overflow-hidden rounded-t-[28px] border border-border/60 bg-card shadow-2xl shadow-black/15 dark:shadow-black/40">
          <View className="items-center pt-3 pb-1">
            <View className="h-1 w-10 rounded-full bg-muted-foreground/25" />
          </View>

          <View className="gap-5 px-5 pb-5 pt-2">
            {/* Welcome */}
            <View className="gap-1">
              <Heading level="h3" className="text-start text-foreground">
                איפה נבקר היום?
              </Heading>
              <Text variant="muted" className="text-start">
                גלה חנויות, מסעדות ושירותים בקניון
              </Text>
            </View>

            {/* Search */}
            <InputGroup
              placeholder="חפש חנות, מותג, או שירות..."
              startIcon={<Search />}
              returnKeyType="search"
            />

            {/* Recent searches */}
            <View className="gap-3">
              <Text variant="small" className="text-start text-muted-foreground">
                חיפושים אחרונים
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex-row gap-3 pe-1">
                {RECENT_SEARCHES.map((item) => (
                  <RecentSearchBadge key={item.id} item={item} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
