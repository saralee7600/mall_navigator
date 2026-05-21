import { View } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View className="flex flex-1 p-5  bg-gray-100">{children}</View>;
};

