import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack } from 'expo-router';
import type { ComponentProps } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Container } from '@/components/Container';

const MALL_NAME = 'קניון המרכז';

type IconName = ComponentProps<typeof FontAwesome>['name'];

type QuickAction = {
  title: string;
  subtitle: string;
  icon: IconName;
  href?: `/${string}`;
};

const QUICK_ACTIONS: QuickAction[] = [
  {
    title: 'מפת הקניון',
    subtitle: 'מצא חנות או שירות',
    icon: 'map',
    href: '/two',
  },
  {
    title: 'חניה חכמה',
    subtitle: 'מקומות פנויים וניווט',
    icon: 'car',
    href: '/modal',
  },
  {
    title: 'חנויות',
    subtitle: 'קטגוריות ומותגים',
    icon: 'shopping-bag',
    href: '/three',
  },
  {
    title: 'מבצעים',
    subtitle: 'הטבות השבוע',
    icon: 'tag',
    href: '/four',
  },
];

function QuickActionCard({ action }: { action: QuickAction }) {
  const card = (
    <Pressable className="active:opacity-80 flex-row items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <View className="h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
        <FontAwesome name={action.icon} size={20} color="#4f46e5" />
      </View>
      <View className="min-w-0 flex-1">
        <Text className="text-base font-semibold text-neutral-900">{action.title}</Text>
        <Text className="mt-0.5 text-sm text-neutral-500">{action.subtitle}</Text>
      </View>
      <FontAwesome name="chevron-right" size={14} color="#a3a3a3" />
    </Pressable>
  );

  if (action.href) {
    return (
      <Link href={action.href} asChild>
        {card}
      </Link>
    );
  }

  return card;
}

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'בית' }} />
      <Container>
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 28, flexGrow: 1 }}>
          <View className="mb-6 rounded-2xl bg-indigo-600 p-6 shadow-md">
            <Text className="text-sm font-medium text-indigo-100">ברוכים הבאים</Text>
            <Text className="mt-1 text-2xl font-bold text-white">{MALL_NAME}</Text>
            <Text className="mt-3 text-sm leading-5 text-indigo-100">
              ניווט, חניה ומידע — במקום אחד. בחרו פעולה מהירה למטה או חפשו יעד.
            </Text>
          </View>

          <Pressable className="active:opacity-90 mb-6 flex-row items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm">
            <FontAwesome name="search" size={18} color="#737373" />
            <Text className="text-base text-neutral-400">חיפוש חנות, קטגוריה או שירות…</Text>
          </Pressable>

          <Text className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            פעולות מהירות
          </Text>
          <View className="gap-3">
            {QUICK_ACTIONS.map((action) => (
              <QuickActionCard key={action.title} action={action} />
            ))}
          </View>

          <View className="mt-8 rounded-xl border border-dashed border-neutral-300 bg-white/60 p-4">
            <Text className="text-center text-xs leading-5 text-neutral-500">
              בקרוב: ניווט פנים-קניון בזמן אמת, התראות על חניה, ושמירת חנות מועדפת.
            </Text>
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
