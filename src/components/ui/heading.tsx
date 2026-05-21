import { Text } from '@/src/components/ui/text';
import { cn } from '@/src/lib/utils';
import type { ComponentProps } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingProps = ComponentProps<typeof Text> & {
  level?: HeadingLevel;
};

function Heading({ level = 'h1', className, ...props }: HeadingProps) {
  return <Text variant={level} className={cn(className)} {...props} />;
}

export { Heading };
