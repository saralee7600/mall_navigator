import React from 'react';
import { View, type TextInputProps } from 'react-native';
import { Input } from '@/src/components/ui/input';
import { cn } from '@/src/lib/utils';
import type { LucideProps } from 'lucide-react-native';

interface InputGroupProps extends TextInputProps {
  startIcon?: React.ReactElement<LucideProps>;
  endIcon?: React.ReactElement<LucideProps>;
  containerClassName?: string;
}

export function InputGroup({
  startIcon,
  endIcon,
  containerClassName,
  className,
  ...props
}: InputGroupProps) {
  
  // פונקציית עזר קבועה - האייקון תמיד באותו גודל וצבע אפור עדין
  const renderIcon = (icon: React.ReactElement<LucideProps> | undefined) => {
    if (!icon) return null;
    
    return React.cloneElement<LucideProps>(icon, {
      size: icon.props.size ?? 20,
      color: icon.props.color ?? '#94a3b8', 
      strokeWidth: icon.props.strokeWidth ?? 2.25,
    });
  };

  return (
    <View
      // 🌟 כאן קורה הכל: מסגרת קבועה, אחידה ועדינה מאוד (border-border/60) שלא משתנה לעולם!
      className={cn(
        'flex-row items-center w-full h-10 rounded-2xl border border-border/80 bg-background px-4 gap-3 shadow-md shadow-black/5 dark:shadow-black/25',
        containerClassName
      )}
    >
      {/* אייקון התחלה */}
      {startIcon && (
        <View className="justify-center items-center">
          {renderIcon(startIcon)}
        </View>
      )}

      {/* האינפוט המקורי של Shadcn */}
      <Input
        className={cn(
          'flex-1 h-full bg-transparent border-0 p-0 m-0 text-base text-foreground native:text-lg',
          'focus:ring-0 focus:border-0 focus-visible:ring-0', 
          className
        )}
        cursorColor="#3b82f6" // הסמן המהבהב
        selectionColor="#3b82f6"
        {...props}
      />

      {/* אייקון סוף */}
      {endIcon && (
        <View className="justify-center items-center">
          {renderIcon(endIcon)}
        </View>
      )}
    </View>
  );
}